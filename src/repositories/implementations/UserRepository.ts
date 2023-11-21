import { Knex } from "knex";
import IUserRepository from "../IUserRepository";
import db from "../../database"

export default class UserRepository implements IUserRepository{
    private connection: Knex;

    constructor(){
        this.connection =  db.getConnection()
    }

    create(userProps: any): Promise<any> {
        return this.connection('users').insert({ ...userProps }).returning('*')
    }
}