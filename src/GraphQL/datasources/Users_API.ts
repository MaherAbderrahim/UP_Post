import type { PrismaClient } from "@prisma/client";
import type { UsersModel } from "../model";

export class UserService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get_All_Users(): Promise<UsersModel[]> {
    return await this.prisma.users.findMany();
  }

  async get_User_By_Id(id: number): Promise<UsersModel | null> {
    return await this.prisma.users.findUnique({
      where: {
        id: id,
      },
    });
  }
  async get_User_By_Email(email:string): Promise<UsersModel | null> {
    return await this.prisma.users.findUnique({
      where: {
        email: email,
      },
    });
  }

  async create_User(email: string): Promise<UsersModel> {
    return await this.prisma.users.create({
      data: {
        email: email,
      },
    });
  }

  async update_User(id: number, email: string): Promise<UsersModel> {
    return await this.prisma.users.update({
      where: {
        id: id,
      },
      data: {
        email: email,
      },
    });
  }

  async delete_User(id: number): Promise<UsersModel> {
    return await this.prisma.users.delete({
      where: {
        id: id,
      },
    });
  }
    async delete_User_By_Email(email:string):Promise<UsersModel> {
      return await this.prisma.users.delete({
        where: {
          email: email,
        },
      });
  }
}
