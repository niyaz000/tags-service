import { Injectable } from '@nestjs/common';
import { CreateTagEntityDto } from './dto/create-tag_entity.dto';
import { UpdateTagEntityDto } from './dto/update-tag_entity.dto';

@Injectable()
export class TagEntitiesService {
  create(createTagEntityDto: CreateTagEntityDto) {
    return 'This action adds a new tagEntity';
  }

  findAll() {
    return `This action returns all tagEntities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tagEntity`;
  }

  update(id: number, updateTagEntityDto: UpdateTagEntityDto) {
    return `This action updates a #${id} tagEntity`;
  }

  remove(id: number) {
    return `This action removes a #${id} tagEntity`;
  }
}
