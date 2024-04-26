import type { PrismaClient } from "@prisma/client";
import type { UsersFBModel } from "../model";

export class UsersFBService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getAllUsersFB(): Promise<UsersFBModel[]> {
    return await this.prisma.users_FB.findMany();
  }

  async getUsersFBById(id: number): Promise<UsersFBModel | null> {
    return await this.prisma.users_FB.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createUsersFB(name: string, id_FB: string, user_TOKEN: string): Promise<UsersFBModel> {
    return await this.prisma.users_FB.create({
      data: {
        name: name,
        id_FB: id_FB,
        user_TOKEN: user_TOKEN,
      },
    });
  }

  async updateUsersFB(id: number, name: string, id_FB: string, user_TOKEN: string): Promise<UsersFBModel> {
    return await this.prisma.users_FB.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        id_FB: id_FB,
        user_TOKEN: user_TOKEN,
      },
    });
  }

  async deleteUsersFB(id: number): Promise<UsersFBModel> {
    return await this.prisma.users_FB.delete({
      where: {
        id: id,
      },
    });
  }
}