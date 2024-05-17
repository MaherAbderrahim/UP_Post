import type { PrismaClient } from "@prisma/client";
import type { PageFBModel } from "../model";

export class PageFBService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get_All_Page_FB(): Promise<PageFBModel[]> {
    return await this.prisma.page_FB.findMany();
  }

  async get_Page_FB_By_Id(id: number): Promise<PageFBModel | null> {
    return await this.prisma.page_FB.findUnique({
      where: {
        id: id,
      },
    });
  }

  async get_All_User_Pages_FB(id:number): Promise<PageFBModel[]> {
    return await this.prisma.page_FB.findMany({
      where:{
        user_id:id,
      }
    })
  }

  async get_All_Project_Pages_FB(id:number) :Promise<PageFBModel[]> {
    return await this.prisma.page_FB.findMany({
      where:{
        project_id:id
      }
    })
  }
  
  async get_All_By_Name_Project_Pages_FB(name:string) :Promise<PageFBModel[]> {
    return await this.prisma.page_FB.findMany({
      where:{
        Project:{
          name:name
        }
      }
    })
  }

  async create_Page_FB(name: string, id_FB: string, page_TOKEN: string, user_id: number, project_id: number,img_URL:string): Promise<PageFBModel> {
    return await this.prisma.page_FB.create({
      data: {
        name: name,
        id_FB: id_FB,
        page_TOKEN: page_TOKEN,
        img_URL:img_URL,
        User_FB: {
          connect: {
            id: user_id,
          },
        },
        Project: {
          connect: {
            id: project_id,
          },
        },
      },
    });
  }

  async update_Page_FB(id: number, name: string, id_FB: string, page_TOKEN: string, user_id: number, project_id: number,img_URL:string): Promise<PageFBModel> {
    return await this.prisma.page_FB.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        id_FB: id_FB,
        page_TOKEN: page_TOKEN,
        User_FB: {
          connect: {
            id: user_id,
          },
        },
        Project: {
          connect: {
            id: project_id,
          },
        },
      },
    });
  }

  async delete_Page_FB(id: number): Promise<PageFBModel> {
    return await this.prisma.page_FB.delete({
      where: {
        id: id,
      },
    });
  }
}
