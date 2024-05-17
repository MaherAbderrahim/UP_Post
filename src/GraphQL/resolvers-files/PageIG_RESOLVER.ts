import { PageIGService } from '@/GraphQL/datasources';
import { PageIGModel } from '../model';
import prisma from '@/lib/prisma';
const pageIGService = new PageIGService(prisma);

const pageIGResolvers = {
  Query: {
    get_All_Page_IG: async () => {
      return await pageIGService.get_All_Page_IG();
    },
    get_Page_IG_By_Id: async (parent: any, { id }: { id: number }) => {
      return await pageIGService.get_Page_IG_By_Id(id);
    },
    get_All_Project_Pages_IG: async (parent: any, { id }: { id: number }) => {
      return await pageIGService.get_All_Project_Pages_IG(id);
    },
    get_All_By_Name_Project_Pages_IG:async(parent:any,{name}:{name:string})=> {
      return await pageIGService.get_All_By_Name_Project_Pages_IG(name);
    },
  },
  Mutation: {
    create_Page_IG: async (
      parent: any,
      { name, id_IG, user_TOKEN, project_id, page_FB_id,img_URL }: { name: string; id_IG: string; user_TOKEN: string; project_id: number; page_FB_id: number,img_URL:string }
    ) => {
      return await pageIGService.create_Page_IG(name, id_IG, user_TOKEN, project_id, page_FB_id,img_URL);
    },
    update_Page_IG: async (
      parent: any,
      { id, name, id_IG, user_TOKEN, project_id, page_FB_id,img_URL }: { id: number; name: string; id_IG: string; user_TOKEN: string; project_id: number; page_FB_id: number,img_URL:string }
    ) => {
      return await pageIGService.update_Page_IG(id, name, id_IG, user_TOKEN, project_id, page_FB_id,img_URL);
    },
    delete_Page_IG: async (parent: any, { id }: { id: number }) => {
      return await pageIGService.delete_Page_IG(id);
    },
    // Ajoutez d'autres résolveurs de mutation selon vos besoins
  },

};

export default pageIGResolvers;
