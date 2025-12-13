import { Test, TestingModule } from '@nestjs/testing';
import { TagEntitiesController } from './tag_entities.controller';
import { TagEntitiesService } from './tag_entities.service';

describe('TagEntitiesController', () => {
  let controller: TagEntitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TagEntitiesController],
      providers: [TagEntitiesService],
    }).compile();

    controller = module.get<TagEntitiesController>(TagEntitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
