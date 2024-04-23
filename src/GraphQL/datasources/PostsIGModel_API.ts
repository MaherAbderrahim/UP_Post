import { PrismaClient} from '@prisma/client';
import { CreatePostIgInput, UpdatePostIgInput, PostIg } from '../generated/types';

const prisma = new PrismaClient();

export class PostIGService {
  async getAllPostsIG() {
    return prisma.posts_IG.findMany();
  }

  async getPostIGById(id: number) {
    return prisma.posts_IG.findUnique({
      where: { id },
    });
  }

  async createPostIG(data: CreatePostIgInput) {
    return prisma.posts_IG.create({ data });
  }

  async updatePostIG(id: number, data: UpdatePostIgInput) {
    return prisma.posts_IG.update({
      where: { id },
      data,
    });
  }

  async deletePostIG(id: number) {
    return prisma.posts_IG.delete({
      where: { id },
    });
  }
}
