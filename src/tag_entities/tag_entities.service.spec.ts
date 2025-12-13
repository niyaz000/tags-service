import { Test, TestingModule } from '@nestjs/testing';
import { TagEntitiesService } from './tag_entities.service';

describe('TagEntitiesService', () => {
  let service: TagEntitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagEntitiesService],
    }).compile();

    service = module.get<TagEntitiesService>(TagEntitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
