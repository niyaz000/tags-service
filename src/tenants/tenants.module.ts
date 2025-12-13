import { Module } from '@nestjs/common';
import { TenantsService } from './service/tenants.service';
import { TenantsController } from './tenants.controller';

@Module({
  controllers: [TenantsController],
  providers: [TenantsService],
})
export class TenantsModule {}
