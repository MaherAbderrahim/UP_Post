import type { PrismaClient } from "@prisma/client";
import type { PageIGModel } from "../model";

export class PageIGService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getAllPageIG(): Promise<PageIGModel[]> {
    return await this.prisma.page_IG.findMany();
  }

  async getPageIGById(id: number): Promise<PageIGModel | null> {
    return await this.prisma.page_IG.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createPageIG(name: string, id_IG: string, user_TOKEN: string, project_id: number): Promise<PageIGModel> {
    return await this.prisma.page_IG.create({
      data: {
        name: name,
        id_IG: id_IG,
        user_TOKEN: user_TOKEN,
        page_FB: {
          connect: {
            id: project_id,
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

  async updatePageIG(id: number, name: string, id_IG: string, user_TOKEN: string, project_id: number): Promise<PageIGModel> {
    return await this.prisma.page_IG.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        id_IG: id_IG,
        user_TOKEN: user_TOKEN,
        page_FB: {
          connect: {
            id: project_id,
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

  async deletePageIG(id: number): Promise<PageIGModel> {
    return await this.prisma.page_IG.delete({
      where: {
        id: id,
      },
    });
  }
}