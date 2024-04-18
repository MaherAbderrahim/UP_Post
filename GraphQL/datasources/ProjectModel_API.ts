import { PrismaClient } from '@prisma/client';
import { CreateProjectInput, UpdateProjectInput, Project } from '../generated/types';

const prisma = new PrismaClient();

export class ProjectService {
  async getAllProjects() {
    return prisma.project.findMany();
  }

  async getProjectById(id: number) {
    return prisma.project.findUnique({
      where: { id },
    });
  }

  async createProject(data: CreateProjectInput) {
    return prisma.project.create({ data });
  }

  async updateProject(id: number, data: UpdateProjectInput) {
    return prisma.project.update({
      where: { id },
      data,
    });
  }

  async deleteProject(id: number) {
    return prisma.project.delete({
      where: { id },
    });
  }
}
