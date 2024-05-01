import type { PrismaClient } from "@prisma/client";
import type { UsersFBModel } from "../model";

export class UsersFBService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get_All_Users_FB(): Promise<UsersFBModel[]> {
    return await this.prisma.users_FB.findMany();
  }

  async get_Users_FB_By_Id(id: number): Promise<UsersFBModel | null> {
    return await this.prisma.users_FB.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create_Users_FB(name: string, id_FB: string, user_TOKEN: string): Promise<UsersFBModel> {
    return await this.prisma.users_FB.create({
      data: {
        name: name,
        id_FB: id_FB,
        user_TOKEN: user_TOKEN,
      },
    });
  }

  async update_Users_FB(id: number, name: string, id_FB: string, user_TOKEN: string): Promise<UsersFBModel> {
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

  async delete_Users_FB(id: number): Promise<UsersFBModel> {
    return await this.prisma.users_FB.delete({
      where: {
        id: id,
      },
    });
  }
}