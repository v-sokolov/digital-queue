import { Migration } from '@mikro-orm/migrations';

export class Migration20220626095139 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user_model" ("user_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "email" varchar(255) not null, "password" varchar(255) not null, "first_name" varchar(255) not null, "last_name" varchar(255) not null);'
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user_model" cascade;');
  }
}
