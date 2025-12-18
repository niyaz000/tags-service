import { Injectable, Logger } from "@nestjs/common";
import { TenantsService } from "../service/tenants.service";

@Injectable()
export class TenantClient {

    private readonly logger = new Logger(TenantClient.name, {
        timestamp: true,
    });
    
    constructor(
        private readonly tenantService: TenantsService,
    ) {}

    public async isTenantActive(tenantId: string): Promise<boolean> {
        return (await this.tenantService.getTenant(tenantId)).isActive();
    }

}