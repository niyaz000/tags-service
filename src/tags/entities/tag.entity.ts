import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';

@Entity()
export class Tag extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;
}
