import { UserService } from '@/GraphQL/datasources';
import { UsersModel } from '../model';
import prisma from '@/lib/prisma';
const userService = new UserService(prisma);

const userResolvers = {
  Query: {
    get_All_Users: async () => {
      return await userService.get_All_Users();
    },
    get_User_By_Id: async (parent: any, { id }: { id: number }) => {
      return await userService.get_User_By_Id(id);
    },
    // Ajoutez d'autres résolveurs de requête selon vos besoins
  },
  Mutation: {
    create_User: async (
      parent: any,
      args: {
        email: string;
      }
    ) => {
      return await userService.create_User(args.email);
    },
    update_User: async (
      parent: any,
      args: {
        id: number;
        email: string;
      }
    ) => {
      return await userService.update_User(args.id, args.email);
    },
    delete_User: async (parent: any, { id }: { id: number }) => {
      return await userService.delete_User(id);
    },
    // Ajoutez d'autres résolveurs de mutation selon vos besoins
  },
  User: {
    // Vous pouvez ajouter des résolveurs spécifiques pour les champs de User si nécessaire
  },
};

export default userResolvers;
