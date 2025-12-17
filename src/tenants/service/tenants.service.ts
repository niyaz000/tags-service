import { Injectable, Logger } from '@nestjs/common';
import { TenantRepository } from '../repository/tenant.repository';
import {
  TenantCreateRequest,
  TenantUpdateRequest,
} from '../request/tenant.request';
import { Tenant } from '../entities/tenant.entity';
import { TenantCreateResponse } from '../response/tenant.response';
import { DuplicateEntityException } from 'src/exception/duplicate.entity.exception';
import { EntityType } from 'src/common/enum/entity.types';

@Injectable()
export class TenantsService {
  private readonly logger = new Logger(TenantsService.name, {
    timestamp: true,
  });

  constructor(private readonly tenantRepository: TenantRepository) {}

  async create(request: TenantCreateRequest): Promise<TenantCreateResponse> {
    this.logger.log(`Creating tenant with name: ${request.name}`);
    if (await this.tenantRepository.existsByName(request.name.toLowerCase())) {
      throw new DuplicateEntityException(
        EntityType.TENANT,
        'name',
        request.name.toLowerCase(),
      );
    }
    const entity = await this.tenantRepository.save(Tenant.toEntity(request));
    return Tenant.toDto(entity);
  }

  findAll() {
    return `This action returns all tenants`;
  }

  async findOne(id: string): Promise<TenantCreateResponse> {
    const entity = await this.tenantRepository.findActiveById(id);
    return Tenant.toDto(entity);
  }

  update(id: string, request: TenantUpdateRequest) {
    return `This action updates a #${id} tenant`;
  }

  async softDelete(id: string): Promise<void> {
    await this.tenantRepository.softDeleteById(id);
  }

  async restore(id: string): Promise<TenantCreateResponse> {
    const entity = await this.tenantRepository.restoreById(id);
    return Tenant.toDto(entity);
  }
}
