import { Injectable } from '@nestjs/common';
import { DataSource, Repository, IsNull } from 'typeorm';
import { Tenant } from '../entities/tenant.entity';

@Injectable()
export class TenantRepository extends Repository<Tenant> {
  constructor(private readonly dataSource: DataSource) {
    super(Tenant, dataSource.createEntityManager());
  }

  async findActiveById(id: string): Promise<Tenant> {
    return this.findOneOrFail({
      where: {
        public_id: id,
        deleted_at: IsNull(),
      },
    });
  }

  async updateTenant(tenant: Tenant): Promise<Tenant> {
    return await this.save(tenant);
  }

  async softDeleteById(id: string): Promise<void> {
    const tenant = await this.findActiveById(id);
    if (!tenant) {
      return;
    }
    await this.softRemove(tenant);
  }

  async restoreById(id: string): Promise<Tenant> {
    await this.restore(id);
    return await this.findActiveById(id);
  }
}
