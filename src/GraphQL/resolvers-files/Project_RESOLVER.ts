import { ProjectService } from '@/GraphQL/datasources';
import prisma from '@/lib/prisma';
const projectService = new ProjectService(prisma);

const projectResolvers = {
  Query: {
    get_All_Projects: async () => {
      return await projectService.get_All_Projects();
    },
    get_Project_By_Id: async (parent: any, { id }: { id: number }) => {
      return await projectService.get_Project_By_Id(id);
    },
    get_All_User_Project:async(parent: any, { user_id }: { user_id: number }) => {
      return await projectService.get_All_User_Project(user_id);
    },  
  },
  Mutation: {
    create_Project: async (
      parent: any,
      args: {
        name: string;
        description: string;
        user_id: number;
      }
    ) => {
      return await projectService.create_Project(args.name, args.description, args.user_id);
    },
    update_Project: async (
      parent: any,
      args: {
        id: number;
        name: string;
        description: string;
        user_id: number;
      }
    ) => {
      return await projectService.update_Project(args.id, args.name, args.description, args.user_id);
    },
    delete_Project: async (parent: any, { id }: { id: number }) => {
      return await projectService.delete_Project(id);
    },
    // Ajoutez d'autres résolveurs de mutation selon vos besoins
  },

};

export default projectResolvers;
