import { PrismaClient} from '@prisma/client';
import { CreatePostFbInput, PostFb,UpdatePostFbInput } from '../generated/types';

const prisma = new PrismaClient();

export class PostFBService {
  async getAllPostsFB() {
    return prisma.posts_FB.findMany();
  }

  async getPostFBById(id: number) {
    return prisma.posts_FB.findUnique({
      where: { id },
    });
  }

  async createPostFB(data: CreatePostFbInput){
    return prisma.posts_FB.create({ data });
  }

  async updatePostFB(id: number, data: UpdatePostFbInput) {
    return prisma.posts_FB.update({
      where: { id },
      data,
    });
  }

  async deletePostFB(id: number) {
    return prisma.posts_FB.delete({
      where: { id },
    });
  }
}
