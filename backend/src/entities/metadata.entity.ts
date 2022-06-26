import { BaseEntity, Property } from '@mikro-orm/core';

export class MetadataModel<T, PK extends keyof T, P extends string = never> extends BaseEntity<T, PK, P> {
  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
