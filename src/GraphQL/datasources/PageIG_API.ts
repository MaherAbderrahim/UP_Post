import type { PrismaClient } from "@prisma/client";
import type { PageIGModel } from "../model";

export class PageIGService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get_All_Project_Pages_IG(id:number) :Promise<PageIGModel[]> {
    return await this.prisma.page_IG.findMany({
      where:{
        project_id:id
      }
    })
  }

  async get_All_Page_IG(): Promise<PageIGModel[]> {
    return await this.prisma.page_IG.findMany();
  }

  async get_Page_IG_By_Id(id: number): Promise<PageIGModel | null> {
    return await this.prisma.page_IG.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create_Page_IG(name: string, id_IG: string, user_TOKEN: string, project_id: number): Promise<PageIGModel> {
    return await this.prisma.page_IG.create({
      data: {
        name: name,
        id_IG: id_IG,
        user_TOKEN: user_TOKEN,
        Page_FB: {
          connect: {
            id: project_id,
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

  async update_Page_IG(id: number, name: string, id_IG: string, user_TOKEN: string, project_id: number): Promise<PageIGModel> {
    return await this.prisma.page_IG.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        id_IG: id_IG,
        user_TOKEN: user_TOKEN,
        Page_FB: {
          connect: {
            id: project_id,
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

  async delete_Page_IG(id: number): Promise<PageIGModel> {
    return await this.prisma.page_IG.delete({
      where: {
        id: id,
      },
    });
  }
}