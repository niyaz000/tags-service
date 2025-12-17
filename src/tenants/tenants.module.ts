import { Module } from '@nestjs/common';
import { TenantsService } from './service/tenants.service';
import { TenantsController } from './api/tenants.controller';
import { TenantRepository } from './repository/tenant.repository';

@Module({
  controllers: [TenantsController],
  providers: [TenantsService, TenantRepository],
})
export class TenantsModule {}
