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
    // Ajoutez d'autres résolveurs de requête selon vos besoins
  },
  Mutation: {
    create_Page_IG: async (
      parent: any,
      { name, id_IG, user_TOKEN, project_id }: { name: string; id_IG: string; user_TOKEN: string; project_id: number }
    ) => {
      return await pageIGService.create_Page_IG(name, id_IG, user_TOKEN, project_id);
    },
    update_Page_IG: async (
      parent: any,
      { id, name, id_IG, user_TOKEN, project_id }: { id: number; name: string; id_IG: string; user_TOKEN: string; project_id: number }
    ) => {
      return await pageIGService.update_Page_IG(id, name, id_IG, user_TOKEN, project_id);
    },
    delete_Page_IG: async (parent: any, { id }: { id: number }) => {
      return await pageIGService.delete_Page_IG(id);
    },
    // Ajoutez d'autres résolveurs de mutation selon vos besoins
  },
  Page_IG: {
    // Vous pouvez ajouter des résolveurs spécifiques pour les champs de Page_IG si nécessaire
    // Par exemple, si vous voulez résoudre le champ Page_FB ou Project, vous pouvez le faire ici
  },
};

export default pageIGResolvers;
