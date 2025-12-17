import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityType } from 'src/common/enum/entity.types';

export class DuplicateEntityException extends HttpException {
  constructor(
    entityType: EntityType,
    entityIdentifier: string,
    entityValue: string,
  ) {
    super(
      `Entity of type ${entityType} with identifier ${entityIdentifier} and value ${entityValue} already exists.`,
      HttpStatus.BAD_REQUEST,
    );
  }
}
