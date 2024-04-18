import { PrismaClient } from '@prisma/client';
import { CreatePageIgInput, UpdatePageIgInput ,PageIg} from '../generated/types';

const prisma = new PrismaClient();

export class PageIGService {
  async getAllPagesIG() {
    return prisma.page_IG.findMany();
  }

  async getPageIGById(id: number) {
    return prisma.page_IG.findUnique({
      where: { id },
    });
  }

  async createPageIG(data: CreatePageIgInput) {
    return prisma.page_IG.create({ data });
  }

  async updatePageIG(id: number, data: UpdatePageIgInput) {
    return prisma.page_IG.update({
      where: { id },
      data,
    });
  }

  async deletePageIG(id: number) {
    return prisma.page_IG.delete({
      where: { id },
    });
  }
  
}
