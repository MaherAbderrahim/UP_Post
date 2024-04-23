import { PrismaClient, Prisma } from '@prisma/client';
import { UserFb, CreateUserFbInput, UpdateUserFbInput } from '../generated/types';

const prisma = new PrismaClient();

export class UserFBService {
  async getAllUsersFB() {
    return prisma.users_FB.findMany();
  }

  async getUserFBById(id: number) {
    return prisma.users_FB.findUnique({
      where: { id },
    });
  }

  async createUserFB(data: CreateUserFbInput) {
    return prisma.users_FB.create({ data });
  }

  async updateUserFB(id: number, data: UpdateUserFbInput) {
    return prisma.users_FB.update({
      where: { id },
      data,
    });
  }

  async deleteUserFB(id: number) {
    return prisma.users_FB.delete({
      where: { id },
    });
  }
}
