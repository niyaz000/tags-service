import { PartialType } from '@nestjs/mapped-types';
import { CreateTagEntityDto } from './create-tag_entity.dto';

export class UpdateTagEntityDto extends PartialType(CreateTagEntityDto) {}
