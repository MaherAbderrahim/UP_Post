import type { PrismaClient } from "@prisma/client";
import type { PostsIGModel } from "../model";

export class PostsIGService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getAllPostsIG(): Promise<PostsIGModel[]> {
    return await this.prisma.posts_IG.findMany();
  }

  async getPostIGById(id: number): Promise<PostsIGModel | null> {
    return await this.prisma.posts_IG.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createPostIG(
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
    sentiment_comment: any,
    positive: number,
    negative: number,
    nature: number,
    prediction_label: number,
    prediction_score: number,
    page_id: number
  ): Promise<PostsIGModel> {
    return await this.prisma.posts_IG.create({
      data: {
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
        sentiment_comment: sentiment_comment,
        positive: positive,
        negative: negative,
        nature: nature,
        prediction_label: prediction_label,
        prediction_score: prediction_score,
        page_IG: {
          connect: {
            id: page_id,
          },
        },
      },
    });
  }

  async updatePostIG(
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
    sentiment_comment: any,
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
        sentiment_comment: sentiment_comment,
        positive: positive,
        negative: negative,
        nature: nature,
        prediction_label: prediction_label,
        prediction_score: prediction_score,
        page_IG: {
          connect: {
            id: page_id,
          },
        },
      },
    });
  }

  async deletePostIG(id: number): Promise<PostsIGModel> {
    return await this.prisma.posts_IG.delete({
      where: {
        id: id,
      },
    });
  }
}