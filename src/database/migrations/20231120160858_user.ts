import { Knex } from "knex";

console.log('teste')
export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.timestamps(true, true);
    });
  }
  
  export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
  }