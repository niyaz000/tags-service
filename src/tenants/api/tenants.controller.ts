import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TenantsService } from '../service/tenants.service';
import {
  TenantCreateRequest,
  TenantUpdateRequest,
} from '../request/tenant.request';

@Controller('tenants')
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {}

  @Post('')
  create(@Body() request: TenantCreateRequest) {
    return this.tenantsService.create(request);
  }

  @Get()
  findAll() {
    return this.tenantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tenantsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() request: TenantUpdateRequest) {
    return this.tenantsService.update(id, request);
  }

  @Delete(':id')
  softDelete(@Param('id') id: string) {
    return this.tenantsService.softDelete(id);
  }

  @Patch(':id/restore')
  restore(@Param('id') id: string) {
    return this.tenantsService.restore(id);
  }
}
