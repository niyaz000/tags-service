import {
  PrimaryGeneratedColumn,
  Column,
  VersionColumn,
  DeleteDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  public_id: string;

  @Column({ type: 'timestamp with time zone', default: () => 'NOW()' })
  created_at: Date;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'NOW()',
    onUpdate: 'NOW()',
  })
  updated_at: Date;

  @Column({ type: 'timestamp with time zone', nullable: true })
  @DeleteDateColumn()
  deleted_at?: Date;

  @Column({ type: 'int', default: 0 })
  @VersionColumn()
  version: number;

  @Column({ type: 'varchar', nullable: true })
  created_by: string;

  @Column({ type: 'varchar', nullable: true })
  updated_by: string;

  @Column({ type: 'uuid', nullable: false })
  request_id: string;
}
