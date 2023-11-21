// import UserDTO from "../dto/UserDTO";
// import User from "../dto/User";

export default interface IUserRepository {
    create(userProps: any): Promise<any>;
    // create(userProps: UserDTO): Promise<User>;
}