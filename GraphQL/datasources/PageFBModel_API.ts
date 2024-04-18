import { PrismaClient } from '@prisma/client';
import { PageFb, CreatePageFbInput, UpdatePageFbInput } from '../generated/types';

const prisma = new PrismaClient();

export class PageFBService {
  async getAllPagesFB() {
    return prisma.page_FB.findMany();
  }

  async getPageFBById(id: number) {
    return prisma.page_FB.findUnique({
      where: { id },
    });
  }

  async createPageFB(data: CreatePageFbInput){
    return prisma.page_FB.create({ data });
  }

  async updatePageFB(id: number, data: UpdatePageFbInput) {
    return prisma.page_FB.update({
      where: { id },
      data,
    });
  }

  async deletePageFB(id: number) {
    return prisma.page_FB.delete({
      where: { id },
    });
  }
}
