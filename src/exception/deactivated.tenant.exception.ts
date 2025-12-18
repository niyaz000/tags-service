import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityType } from 'src/common/enum/entity.types';

export class DeactivatedTenantException extends HttpException {
  constructor(
    entityType: EntityType,
    entityIdentifier: string,
    entityValue: string,
  ) {
    super(
      `Entity of type ${entityType} with identifier ${entityIdentifier} and value ${entityValue} is deactivated.`,
      HttpStatus.BAD_REQUEST,
    );
  }
}