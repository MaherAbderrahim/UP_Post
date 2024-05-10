import type { PrismaClient } from "@prisma/client";
import type { PostsIGModel } from "../model";

export class PostsIGService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get_All_Posts_IG(): Promise<PostsIGModel[]> {
    return await this.prisma.posts_IG.findMany();
  }

  async get_Post_IG_By_Id(id: number): Promise<PostsIGModel | null> {
    return await this.prisma.posts_IG.findUnique({
      where: {
        id: id,
      },
    });
  }

  async get_All_Page_IG_Posts(id:number) : Promise<PostsIGModel[]>{
    return await this.prisma.posts_IG.findMany({
      where: {
        page_id:id,
      },
    });
  }

  async create_Post_IG(
    img_URL:string,
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
    page_id: number
  ): Promise<PostsIGModel> {
    return await this.prisma.posts_IG.create({
      data: {
        img_URL: img_URL,
        Page_name: Page_name,
        Followers: Followers,
        Post_text: Post_text,
        Usernames: Usernames,
        Likes: Likes,
        Total_NB_commentaires: Total_NB_commentaires,
        len_post: len_post,
        langue_post: langue_post,
        Hashtags: Hashtags,
        hashtag_count: hashtag_count,
        Found_Hash: Found_Hash,
        Day_of_Week: Day_of_Week,
        Time_post: Time_post,
        Day: Day,
        Month: Month,
        Year: Year,
        Date_post: Date_post,
        Sentiment_POSTT: Sentiment_POSTT,
        sentiment_comments_POS: sentiment_comments_POS,
        sentiment_comments_NEG: sentiment_comments_NEG,
        positive: positive,
        negative: negative,
        nature: nature,
        prediction_label: prediction_label,
        prediction_score: prediction_score,
        Page_IG: {
          connect: {
            id: page_id,
          },
        },
      },
    });
  }

  async update_Post_IG(
    id: number,
    img_URL:string,
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
    page_id: number
  ): Promise<PostsIGModel> {
    return await this.prisma.posts_IG.update({
      where: {
        id: id,
      },
      data: {
        img_URL:img_URL,
        Page_name: Page_name,
        Followers: Followers,
        Post_text: Post_text,
        Usernames: Usernames,
        Likes: Likes,
        Total_NB_commentaires: Total_NB_commentaires,
        len_post: len_post,
        langue_post: langue_post,
        Hashtags: Hashtags,
        hashtag_count: hashtag_count,
        Found_Hash: Found_Hash,
        Day_of_Week: Day_of_Week,
        Time_post: Time_post,
        Day: Day,
        Month: Month,
        Year: Year,
        Date_post: Date_post,
        Sentiment_POSTT: Sentiment_POSTT,
        sentiment_comments_POS: sentiment_comments_POS,
        sentiment_comments_NEG: sentiment_comments_NEG,
        positive: positive,
        negative: negative,
        nature: nature,
        prediction_label: prediction_label,
        prediction_score: prediction_score,
        Page_IG: {
          connect: {
            id: page_id,
          },
        },
      },
    });
  }

  async delete_Post_IG(id: number): Promise<PostsIGModel> {
    return await this.prisma.posts_IG.delete({
      where: {
        id: id,
      },
    });
  }
}