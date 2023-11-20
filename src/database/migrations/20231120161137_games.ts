import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('games', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description');
      table.decimal('price', 10, 2).notNullable();
      table.string('platform').notNullable();
      table.string('genre');
      table.integer('rating');
      table.timestamps(true, true);
    });
  }
  
  export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('games');
  }