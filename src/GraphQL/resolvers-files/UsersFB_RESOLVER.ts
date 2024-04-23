import { UserFBService } from '../datasources';
import { CreateUserFbInput, UpdateUserFbInput } from '../generated/types';

const userFBService = new UserFBService();

export const userFBResolver = {
  Query: {
    getAllUsersFB: () => userFBService.getAllUsersFB(),
    getUserFBById: (_: any, { id }: { id: number }) => userFBService.getUserFBById(id),
  },
  Mutation: {
    createUserFB: (_: any, { data }: { data: CreateUserFbInput }) => userFBService.createUserFB(data),
    updateUserFB: (_: any, { id, data }: { id: number, data: UpdateUserFbInput }) => userFBService.updateUserFB(id, data),
    deleteUserFB: (_: any, { id }: { id: number }) => userFBService.deleteUserFB(id),
  },
};
