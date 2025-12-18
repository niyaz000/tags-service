import { EntityType } from "src/common/enum/entity.types";

export default class EntityNotFoundException extends Error {

    constructor(entityType: EntityType, identifier: string, id: string | number) {
        super(`${entityType} with identifier '${identifier}' and value ${id} not found.`);
        this.name = 'EntityNotFoundException';
    }

}
