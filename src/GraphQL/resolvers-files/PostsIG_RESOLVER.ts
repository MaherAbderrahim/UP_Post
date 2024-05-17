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
    get_All_Page_IG_Posts_By_name: async (parent: any, { name }: { name: string }) => {
      return await postsIGService.get_All_Page_IG_Posts_By_name(name);
    },
    get_Post_IG_By_Id: async (parent: any, { id }: { id: number }) => {
      return await postsIGService.get_Post_IG_By_Id(id);
    },
  },
  Mutation: {
    create_Post_IG: async (
      parent: any,
      args: {
        img_URL:string,
        Page_name: string;
        Followers: number;
        Post_text: string;
        Usernames: string;
        Likes: number;
        Total_NB_commentaires: number;
        len_post: number;
        langue_post: string;
        Hashtags: string;
        hashtag_count: number;
        Found_Hash: number;
        Day_of_Week: string;
        Time_post: Date;
        Day: number;
        Month: string;
        Year: number;
        Date_post: Date;
        Sentiment_POSTT: string;
        sentiment_comments_POS: number;
        sentiment_comments_NEG: number;
        positive: number;
        negative: number;
        nature: number;
        prediction_label: number;
        prediction_score: number;
        page_id: number;
      }
    ) => {
      return await postsIGService.create_Post_IG(
        args.img_URL,
        args.Page_name,
        args.Followers,
        args.Post_text,
        args.Usernames,
        args.Likes,
        args.Total_NB_commentaires,
        args.len_post,
        args.langue_post,
        args.Hashtags,
        args.hashtag_count,
        args.Found_Hash,
        args.Day_of_Week,
        args.Time_post,
        args.Day,
        args.Month,
        args.Year,
        args.Date_post,
        args.Sentiment_POSTT,
        args.sentiment_comments_POS,
        args.sentiment_comments_NEG,
        args.positive,
        args.negative,
        args.nature,
        args.prediction_label,
        args.prediction_score,
        args.page_id
      );
    },
    update_Post_IG: async (
      parent: any,
      args: {
        id: number;
        img_URL:string;
        Page_name: string;
        Followers: number;
        Post_text: string;
        Usernames: string;
        Likes: number;
        Total_NB_commentaires: number;
        len_post: number;
        langue_post: string;
        Hashtags: string;
        hashtag_count: number;
        Found_Hash: number;
        Day_of_Week: string;
        Time_post: Date;
        Day: number;
        Month: string;
        Year: number;
        Date_post: Date;
        Sentiment_POSTT: string;
        sentiment_comments_POS: number;
        sentiment_comments_NEG: number;
        positive: number;
        negative: number;
        nature: number;
        prediction_label: number;
        prediction_score: number;
        page_id: number;
      }
    ) => {
      return await postsIGService.update_Post_IG(
        args.id,
        args.img_URL,
        args.Page_name,
        args.Followers,
        args.Post_text,
        args.Usernames,
        args.Likes,
        args.Total_NB_commentaires,
        args.len_post,
        args.langue_post,
        args.Hashtags,
        args.hashtag_count,
        args.Found_Hash,
        args.Day_of_Week,
        args.Time_post,
        args.Day,
        args.Month,
        args.Year,
        args.Date_post,
        args.Sentiment_POSTT,
        args.sentiment_comments_POS,
        args.sentiment_comments_NEG,
        args.positive,
        args.negative,
        args.nature,
        args.prediction_label,
        args.prediction_score,
        args.page_id
      );
    },
    delete_Post_IG: async (parent: any, { id }: { id: number }) => {
      return await postsIGService.delete_Post_IG(id);
    },
  },
};

export default postsIGResolvers;
