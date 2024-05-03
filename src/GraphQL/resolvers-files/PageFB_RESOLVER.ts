import { PageFBService } from '@/GraphQL/datasources';
import { PageFBModel } from '../model';
import prisma from '@/lib/prisma';
const pageFBService = new PageFBService(prisma);

const pageFBResolvers = {
  Query: {
    get_All_Page_FB: async () => {
      return await pageFBService.get_All_Page_FB();
    },
    get_Page_FB_By_Id: async (parent: any, { id }: { id: number }) => {
      return await pageFBService.get_Page_FB_By_Id(id);
    },
    get_All_User_Pages_FB: async (parent: any, { id }: { id: number }) => {
      return await pageFBService.get_All_User_Pages_FB(id);
    },
    get_All_Project_Pages_FB: async (parent: any, { id }: { id: number }) => {
      return await pageFBService.get_All_Project_Pages_FB(id);
    },
    // Ajoutez d'autres résolveurs de requête selon vos besoins
  },
  Mutation: {
    create_Page_FB: async (
      parent: any,
      { name, id_FB, page_TOKEN, user_id, project_id }: { name: string; id_FB: string; page_TOKEN: string; user_id: number; project_id: number }
    ) => {
      return await pageFBService.create_Page_FB(name, id_FB, page_TOKEN, user_id, project_id);
    },
    update_Page_FB: async (
      parent: any,
      { id, name, id_FB, page_TOKEN, user_id, project_id }: { id: number; name: string; id_FB: string; page_TOKEN: string; user_id: number; project_id: number }
    ) => {
      return await pageFBService.update_Page_FB(id, name, id_FB, page_TOKEN, user_id, project_id);
    },
    delete_Page_FB: async (parent: any, { id }: { id: number }) => {
      return await pageFBService.delete_Page_FB(id);
    },
    // Ajoutez d'autres résolveurs de mutation selon vos besoins
  },

};

export default pageFBResolvers;
