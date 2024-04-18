import { UsersService } from '@/GraphQL/datasources';
import { UpdateUserInput,CreateUserInput } from '@/GraphQL/generated/types';

const userService = new UsersService();

export const userResolver = {
  Query: {
    getAllUsers: () => userService.getAllUsers(),
    getUserById: (_: any, { id }: { id: number }) => userService.getUsersById(id),
  },
  Mutation: {
    createUser: (_: any, { data }: { data: CreateUserInput }) => userService.createUsers(data),
    updateUser: (_: any, { id, data }: { id: number, data: UpdateUserInput }) => userService.updateUsers(id, data),
    deleteUser: (_: any, { id }: { id: number }) => userService.deleteUsers(id),
  },
};
