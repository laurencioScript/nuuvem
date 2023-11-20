import knex from 'knex';
import config from './../config/knexfile';

const knexInstance = knex({
    client: config.client,
    connection: config.connection
});

export default knexInstance;