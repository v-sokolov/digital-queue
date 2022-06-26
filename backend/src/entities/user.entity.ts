import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { MetadataModel } from './metadata.entity';

@Entity()
export class UserModel extends MetadataModel<UserModel, 'userId'> {
  @PrimaryKey()
  userId!: number;

  @Property()
  email!: string;

  @Property()
  password!: string;

  @Property()
  firstName!: string;

  @Property()
  lastName!: string;
}
