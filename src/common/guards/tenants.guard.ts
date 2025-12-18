
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { TenantClient } from 'src/tenants/client/tenant.client';
import { TENANT_ID } from '../constants/header.constants';
import { MissingRequiredHeaderException } from 'src/exception/missing.header.exception';
import { DeactivatedTenantException } from 'src/exception/deactivated.tenant.exception';
import { EntityType } from '../enum/entity.types';

@Injectable()
export class TenantGuard implements CanActivate {

    constructor(private readonly tenantClient:  TenantClient) {
    }

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        return await this.validateRequest(context);
    }

    async validateRequest(context: ExecutionContext,): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const tenantId = request.headers[TENANT_ID];
        context.switchToHttp()
        if (!tenantId) {
            throw new MissingRequiredHeaderException(TENANT_ID);
        }
        if (await this.tenantClient.isTenantActive(tenantId)) {
            throw new DeactivatedTenantException(EntityType.TENANT, 'tenantId', tenantId);
        }
        return true;
    }

}

