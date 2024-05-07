import { CommentsIGService } from '@/GraphQL/datasources';
import { CommentsIGModel } from '../model';
import prisma from '@/lib/prisma';
const commentsIGService = new CommentsIGService(prisma);

const commentsIGResolvers = {
  Query: {
    get_All_Comments_IG: async () => {
      return await commentsIGService.get_All_Comments_IG();
    },
    get_Comment_IG_By_Id: async (parent: any, { id }: { id: number }) => {
      return await commentsIGService.get_Comment_IG_By_Id(id);
    },
    get_Comments_By_Post_IG_Id: async (parent: any, { id }: { id: number }) => {
      return await commentsIGService.get_Comments_By_Post_IG_Id(id);
    },
    get_All_User_Comments_On_Post_IG: async (parent: any, { user_name, postid }: { user_name: string; postid: number }) => {
      return await commentsIGService.get_All_User_Comments_On_Post_IG(user_name, postid);
    },
    get_All_User_Comments_On_Page_IG: async (parent: any, { user_name, pageid }: { user_name: string; pageid: number }) => {
      return await commentsIGService.get_All_User_Comments_On_Page_IG(user_name, pageid);
    },
  },
  Mutation: {
    create_Comment_IG: async (
      parent: any,
      { username, message, nb_likes, postIG_id }: { username: string; message: string; nb_likes: number; postIG_id: number }
    ) => {
      return await commentsIGService.create_Comment_IG(username, message, nb_likes, postIG_id);
    },
    update_Comment_IG: async (
      parent: any,
      { id, username, message, nb_likes }: { id: number; username: string; message: string; nb_likes: number }
    ) => {
      return await commentsIGService.update_Comment_IG(id, username, message, nb_likes);
    },
    delete_Comment_IG: async (parent: any, { id }: { id: number }) => {
      return await commentsIGService.delete_Comment_IG(id);
    },
    // Ajoutez d'autres résolveurs de mutation selon vos besoins
  },

};

export default commentsIGResolvers;
