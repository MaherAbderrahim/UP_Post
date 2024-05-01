import { PostsIGService } from '@/GraphQL/datasources';
import { PostsIGModel } from '../model';
import prisma from '@/lib/prisma';
const postsIGService = new PostsIGService(prisma);

const postsIGResolvers = {
  Query: {
    get_All_Posts_IG: async () => {
      return await postsIGService.get_All_Posts_IG();
    },
    get_All_Page_IG_Posts: async (parent: any, { id }: { id: number }) => {
      return await postsIGService.get_All_Page_IG_Posts(id);
    },
    get_Post_IG_By_Id: async (parent: any, { id }: { id: number }) => {
      return await postsIGService.get_Post_IG_By_Id(id);
    },
    // Ajoutez d'autres résolveurs de requête selon vos besoins
  },
  Mutation: {
    create_Post_IG: async (
      Page_name: string,
        Followers: number,
        Post_text: string,
        Usernames: string,
        Likes: number,
        Total_NB_commentaires: number,
        len_post: number,
        langue_post: string,
        Hashtags: string,
        hashtag_count: number,
        Found_Hash: number,
        Day_of_Week: string,
        Time_post: Date,
        Day: number,
        Month: string,
        Year: number,
        Date_post: Date,
        Sentiment_POSTT: string,
        sentiment_comments_POS: number,
        sentiment_comments_NEG: number,
        positive: number,
        negative: number,
        nature: number,
        prediction_label: number,
        prediction_score: number,
        page_id: number,
    ) => {
      return await postsIGService.create_Post_IG(
        Page_name,
        Followers,
        Post_text,
        Usernames,
        Likes,
        Total_NB_commentaires,
        len_post,
        langue_post,
        Hashtags,
        hashtag_count,
        Found_Hash,
        Day_of_Week,
        Time_post,
        Day,
        Month,
        Year,
        Date_post,
        Sentiment_POSTT,
        sentiment_comments_POS,
        sentiment_comments_NEG,
        positive,
        negative,
        nature,
        prediction_label,
        prediction_score,
        page_id
      );
    },
    update_Post_IG: async (
        id: number,
        Page_name: string,
        Followers: number,
        Post_text: string,
        Usernames: string,
        Likes: number,
        Total_NB_commentaires: number,
        len_post: number,
        langue_post: string,
        Hashtags: string,
        hashtag_count: number,
        Found_Hash: number,
        Day_of_Week: string,
        Time_post: Date,
        Day: number,
        Month: string,
        Year: number,
        Date_post: Date,
        Sentiment_POSTT: string,
        sentiment_comments_POS: number,
        sentiment_comments_NEG: number,
        positive: number,
        negative: number,
        nature: number,
        prediction_label: number,
        prediction_score: number,
        page_id: number,
    ) => {
      return await postsIGService.update_Post_IG(
        id,
        Page_name,
        Followers,
        Post_text,
        Usernames,
        Likes,
        Total_NB_commentaires,
        len_post,
        langue_post,
        Hashtags,
        hashtag_count,
        Found_Hash,
        Day_of_Week,
        Time_post,
        Day,
        Month,
        Year,
        Date_post,
        Sentiment_POSTT,
        sentiment_comments_POS,
        sentiment_comments_NEG,
        positive,
        negative,
        nature,
        prediction_label,
        prediction_score,
        page_id
      );
    },
    delete_Post_IG: async (parent: any, { id }: { id: number }) => {
      return await postsIGService.delete_Post_IG(id);
    },
    // Ajoutez d'autres résolveurs de mutation selon vos besoins
  },
  PostsIG: {
    // Vous pouvez ajouter des résolveurs spécifiques pour les champs de PostsIG si nécessaire
    // Par exemple, si vous voulez résoudre le champ Page_IG, vous pouvez le faire ici
  },
};

export default postsIGResolvers;
