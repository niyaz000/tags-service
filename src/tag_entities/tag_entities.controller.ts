import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagEntitiesService } from './tag_entities.service';
import { CreateTagEntityDto } from './dto/create-tag_entity.dto';
import { UpdateTagEntityDto } from './dto/update-tag_entity.dto';

@Controller('tag-entities')
export class TagEntitiesController {
  constructor(private readonly tagEntitiesService: TagEntitiesService) {}

  @Post()
  create(@Body() createTagEntityDto: CreateTagEntityDto) {
    return this.tagEntitiesService.create(createTagEntityDto);
  }

  @Get()
  findAll() {
    return this.tagEntitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagEntitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTagEntityDto: UpdateTagEntityDto) {
    return this.tagEntitiesService.update(+id, updateTagEntityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagEntitiesService.remove(+id);
  }
}
