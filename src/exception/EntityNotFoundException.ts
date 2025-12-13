export default class EntityNotFoundException extends Error {
  constructor(entity: string, id: string | number) {
    super(`${entity} with ID ${id} not found.`);
    this.name = 'EntityNotFoundException';
  }
}
