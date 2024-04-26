import type { PrismaClient } from "@prisma/client";
import type { ProjectModel } from "../model";

export class ProjectService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getAllProjects(): Promise<ProjectModel[]> {
    return await this.prisma.project.findMany();
  }

  async getProjectById(id: number): Promise<ProjectModel | null> {
    return await this.prisma.project.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createProject(name: string, description: string, user_id: number): Promise<ProjectModel> {
    return await this.prisma.project.create({
      data: {
        name: name,
        description: description,
        Users: {
          connect: {
            id: user_id,
          },
        },
      },
    });
  }

  async updateProject(id: number, name: string, description: string, user_id: number): Promise<ProjectModel> {
    return await this.prisma.project.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        description: description,
        Users: {
          connect: {
            id: user_id,
          },
        },
      },
    });
  }

  async deleteProject(id: number): Promise<ProjectModel> {
    return await this.prisma.project.delete({
      where: {
        id: id,
      },
    });
  }
}