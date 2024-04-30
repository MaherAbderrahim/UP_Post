import type { PrismaClient } from "@prisma/client";
import type { CommentsFBModel } from "../model";


export class CommentsFBService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get_Comments_By_Post_FB_Id(id:number): Promise<CommentsFBModel[]> {
    return await this.prisma.comments_FB.findMany({
      where: {
        postFB_id: id,
      },
    });
  } 

  async get_All_User_Comments_On_Page_FB(user_name:string,pageid:number):Promise<CommentsFBModel[]> {
    return await this.prisma.comments_FB.findMany({
      where: {
        Posts_FB: {
          page_id: pageid,
        },
        username: user_name,
      },
    });
  }

  get_All_User_Comments_On_Post_FB(user_name:string,postid:number):Promise<CommentsFBModel[]> {
    return this.prisma.comments_FB.findMany({
      where: {
        postFB_id: postid,
        username: user_name,
      },
    });
  }



  async get_All_Comments_FB(): Promise<CommentsFBModel[]> {
    return await this.prisma.comments_FB.findMany();
  }

  async get_Comment_FB_By_Id(id: number): Promise<CommentsFBModel | null> {
    return await this.prisma.comments_FB.findUnique({
      where: {
        id: id,
      },
    });
  }
  
  async create_Comment_FB(username: string, message: string, nb_likes: number, postFB_id: number) : Promise<CommentsFBModel>  {
    return await this.prisma.comments_FB.create({
      data: {
        username: username,
        message: message,
        nb_likes: nb_likes,
        Posts_FB: {
          connect: {
            id: postFB_id,
          },
        },
      },
    });
  }



  async update_Comment_FB(id: number, username: string, message: string, nb_likes: number): Promise<CommentsFBModel> {
    return await this.prisma.comments_FB.update({
      where: {
        id: id,
      },
      data: {
        username: username,
        message: message,
        nb_likes: nb_likes,
      },
    });
  }

  async delete_Comment_FB(id: number): Promise<CommentsFBModel> {
    return await this.prisma.comments_FB.delete({
      where: {
        id: id,
      },
    });
  }
}