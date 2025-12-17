import { Entity, Column } from 'typeorm';
import { BaseTagEntity } from '../../common/entities/base.tag.entity';

@Entity()
export class Tag extends BaseTagEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;
}
