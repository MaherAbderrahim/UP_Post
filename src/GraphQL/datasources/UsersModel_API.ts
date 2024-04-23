import { PrismaClient, Prisma } from '@prisma/client';
import { User, CreateUserInput, UpdateUserInput } from '../generated/types';

const prisma = new PrismaClient();

export class UsersService {
  async getAllUsers() {
    return prisma.users.findMany();
  }

  async getUsersById(id: number) {
    return prisma.users.findUnique({
      where: { id },
    });
  }

  async createUsers(data: CreateUserInput) {
    return prisma.users.create({ data });
  }

  async updateUsers(id: number, data: UpdateUserInput) {
    return prisma.users.update({
      where: { id },
      data,
    });
  }

  async deleteUsers(id: number) {
    return prisma.users.delete({
      where: { id },
    });
  }
}
