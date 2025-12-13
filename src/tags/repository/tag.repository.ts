import { Injectable } from '@nestjs/common';
import { DataSource, Repository, IsNull } from 'typeorm';
import { Tag } from '../entities/tag.entity';

@Injectable()
export class TagRepository extends Repository<Tag> {
  constructor(private readonly dataSource: DataSource) {
    super(Tag, dataSource.createEntityManager());
  }

  async findActiveById(id: number): Promise<Tag> {
    return this.findOneOrFail({
      where: {
        id,
        deleted_at: IsNull(),
      },
    });
  }

  async updateTag(tag: Tag): Promise<Tag> {
    return await this.save(tag);
  }

  async softDeleteById(id: number): Promise<void> {
    const tag = await this.findActiveById(id);
    if (!tag) return;

    await this.softRemove(tag);
  }

  async restoreById(id: number): Promise<Tag> {
    await this.restore(id);
    return await this.findActiveById(id);
  }
}
