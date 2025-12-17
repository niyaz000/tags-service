import { BaseTagEntity } from 'src/common/entities/base.tag.entity';
import { Entity, Column } from 'typeorm';
import { TenantCreateRequest } from '../request/tenant.request';
import { TenantCreateResponse } from '../response/tenant.response';

@Entity()
export class Tenant extends BaseTagEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  public static toEntity(request: TenantCreateRequest): Tenant {
    const tenant = new Tenant();
    tenant.name = request.name;
    tenant.description = request.description;
    tenant.request_id = crypto.randomUUID();
    return tenant;
  }

  public static toDto(entity: Tenant): TenantCreateResponse {
    return {
      id: entity.public_id,
      name: entity.name,
      description: entity.description,
    };
  }
}
