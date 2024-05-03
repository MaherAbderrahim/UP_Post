import { CommentsFBService } from '@/GraphQL/datasources';
import { CommentsFBModel } from '../model';
import prisma from '@/lib/prisma';


const commentsFBService = new CommentsFBService(prisma);

const commentsFBResolvers = {
  Query: {
    get_Comment_FB_By_Id: async (parent: any, { id }: { id: number }) => {
      return await commentsFBService.get_Comment_FB_By_Id(id);
    },
    get_All_Comments_FB:async()=> {
      return await commentsFBService.get_All_Comments_FB();
    },
    get_Comments_By_Post_FB_Id: async (parent: any, { id }: { id: number }) => {
      return await commentsFBService.get_Comments_By_Post_FB_Id(id);
    },
    get_All_User_Comments_On_Post_FB: async (
      parent: any,
      { user_name, postid }: { user_name: string; postid: number }
    )=> {
      return await commentsFBService.get_All_User_Comments_On_Post_FB(user_name, postid);
    },
    get_All_User_Comments_On_Page_FB: async (
      parent: any,
      { user_name, pageid }: { user_name: string; pageid: number }
    ) => {
      return await commentsFBService.get_All_User_Comments_On_Page_FB(user_name, pageid);
    },
    // Ajoutez d'autres résolveurs de requête selon vos besoins
  },
  Mutation: {
    create_Comment_FB: async (
      parent: any,
      { username, message, nb_likes, postFB_id }: { username: string; message: string; nb_likes: number; postFB_id: number }
    ) => {
      return await commentsFBService.create_Comment_FB(username, message, nb_likes, postFB_id);
    },
    update_Comment_FB: async (
      parent: any,
      { id, username, message, nb_likes }: { id: number; username: string; message: string; nb_likes: number }
    ) => {
      return await commentsFBService.update_Comment_FB(id, username, message, nb_likes);
    },
    delete_Comment_FB: async (parent: any, { id }: { id: number }) => {
      return await commentsFBService.delete_Comment_FB(id);
    },
    // Ajoutez d'autres résolveurs de mutation selon vos besoins
  },

};

export default commentsFBResolvers;
