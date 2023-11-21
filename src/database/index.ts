import knex, { Knex } from 'knex';
import config from '../config/knexfile';

class Database {
    private connection: Knex = null as any;

    public async connect(){
        this.connection = knex({
            client: config.client,
            connection: config.connection
        });
    }

    public async close(){
        if (this.connection) {
            await this.connection.destroy();
            this.connection = null as any; 
        }
    }

    public getConnection(){
        return this.connection;
    }

    public truncate(){
        // implement in the future
    }
}

export default new Database();