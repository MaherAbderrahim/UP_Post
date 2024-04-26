import type { PrismaClient } from "@prisma/client";
import type { PageFBModel } from "../model";

export class PageFBService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getAllPageFB(): Promise<PageFBModel[]> {
    return await this.prisma.page_FB.findMany();
  }

  async getPageFBById(id: number): Promise<PageFBModel | null> {
    return await this.prisma.page_FB.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createPageFB(name: string, id_FB: string, page_TOKEN: string, user_id: number, project_id: number): Promise<PageFBModel> {
    return await this.prisma.page_FB.create({
      data: {
        name: name,
        id_FB: id_FB,
        page_TOKEN: page_TOKEN,
        user_FB: {
          connect: {
            id: user_id,
          },
        },
        project: {
          connect: {
            id: project_id,
          },
        },
      },
    });
  }

  async updatePageFB(id: number, name: string, id_FB: string, page_TOKEN: string, user_id: number, project_id: number): Promise<PageFBModel> {
    return await this.prisma.page_FB.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        id_FB: id_FB,
        page_TOKEN: page_TOKEN,
        user_FB: {
          connect: {
            id: user_id,
          },
        },
        project: {
          connect: {
            id: project_id,
          },
        },
      },
    });
  }

  async deletePageFB(id: number): Promise<PageFBModel> {
    return await this.prisma.page_FB.delete({
      where: {
        id: id,
      },
    });
  }
}