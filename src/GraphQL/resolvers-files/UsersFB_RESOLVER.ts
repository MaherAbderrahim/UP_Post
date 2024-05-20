import { UsersFBService } from '@/GraphQL/datasources';
import { UsersFBModel } from '../model';
import prisma from '@/lib/prisma';
const usersFBService = new UsersFBService(prisma);

const usersFBResolvers = {
  Query: {
    get_All_Users_FB: async () => {
      return await usersFBService.get_All_Users_FB();
    },
    get_Users_FB_By_Id: async (parent: any, { id }: { id: number }) => {
      return await usersFBService.get_Users_FB_By_Id(id);
    },
    get_User_FB_By_FB_Id: async (parent: any, { fb_id }: { fb_id: string }) => {
      return await usersFBService.get_User_FB_By_FB_Id(fb_id);
    },
  },
  Mutation: {
    create_Users_FB: async (
      parent: any,
      args: {
        name: string;
        id_FB: string;
        user_TOKEN: string;
      }
    ) => {
      return await usersFBService.create_Users_FB(args.name, args.id_FB, args.user_TOKEN);
    },
    update_Users_FB: async (
      parent: any,
      args: {
        id: number;
        name: string;
        id_FB: string;
        user_TOKEN: string;
      }
    ) => {
      return await usersFBService.update_Users_FB(args.id, args.name, args.id_FB, args.user_TOKEN);
    },
    delete_Users_FB: async (parent: any, { id }: { id: number }) => {
      return await usersFBService.delete_Users_FB(id);
    },
    // Ajoutez d'autres résolveurs de mutation selon vos besoins
  },

};

export default usersFBResolvers;
