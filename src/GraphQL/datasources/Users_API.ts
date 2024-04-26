import type { PrismaClient } from "@prisma/client";
import type { UsersModel } from "../model";

export class UserService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getAllUsers(): Promise<UsersModel[]> {
    return await this.prisma.users.findMany();
  }

  async getUserById(id: number): Promise<UsersModel | null> {
    return await this.prisma.users.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createUser(email: string): Promise<UsersModel> {
    return await this.prisma.users.create({
      data: {
        email: email,
      },
    });
  }

  async updateUser(id: number, email: string): Promise<UsersModel> {
    return await this.prisma.users.update({
      where: {
        id: id,
      },
      data: {
        email: email,
      },
    });
  }

  async deleteUser(id: number): Promise<UsersModel> {
    return await this.prisma.users.delete({
      where: {
        id: id,
      },
    });
  }
}