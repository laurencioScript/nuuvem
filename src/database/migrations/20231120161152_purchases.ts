import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('purchases', (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
      table.integer('game_id').unsigned().notNullable().references('id').inTable('games');
      table.date('purchase_date').notNullable();
      table.decimal('total_amount', 10, 2).notNullable();
      table.string('status').notNullable(); // Pode ser 'pending', 'completed', 'cancelled', etc.
      table.timestamps(true, true);
    });
  }
  
  export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('purchases');
  }
