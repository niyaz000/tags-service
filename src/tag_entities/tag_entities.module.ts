import { Module } from '@nestjs/common';
import { TagEntitiesService } from './tag_entities.service';
import { TagEntitiesController } from './tag_entities.controller';

@Module({
  controllers: [TagEntitiesController],
  providers: [TagEntitiesService],
})
export class TagEntitiesModule {}
