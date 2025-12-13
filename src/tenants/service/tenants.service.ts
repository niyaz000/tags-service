import { Injectable } from '@nestjs/common';
import { UpdateTenantDto } from '../dto/update-tenant.dto';
import { TenantRepository } from '../repository/tenant.repository';
import {
  TenantCreateRequest,
  TenantUpdateRequest,
} from '../request/tenant.request';
import { Tenant } from '../entities/tenant.entity';
import { TenantCreateResponse } from '../response/tenant.response';

@Injectable()
export class TenantsService {
  constructor(private readonly tenantRepository: TenantRepository) {}

  async create(request: TenantCreateRequest): Promise<TenantCreateResponse> {
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

  async delete(id: string): Promise<void> {
    await this.tenantRepository.softDeleteById(id);
  }

  async restore(id: string): Promise<TenantCreateResponse> {
    const entity = await this.tenantRepository.restoreById(id);
    return Tenant.toDto(entity);
  }
}
