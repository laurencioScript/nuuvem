import db from '../database/db';

interface User {
  id: number;
  username: string;
  email: string;
}

class UserModel {
  static async getAllUsers(): Promise<User[]> {
    return db.select().from('users');
  }

  static async getUserById(id: string): Promise<User | undefined> {
    const [user] = await db.select().from('users').where('id', id);
    return user;
  }

  static async createUser(user: User): Promise<number> {
    const [createdUserId] = await db('users').insert(user).returning('id');
    return createdUserId;
  }

  // Adicione outros métodos conforme necessário
}

export default UserModel;