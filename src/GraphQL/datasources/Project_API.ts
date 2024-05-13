import type { PrismaClient } from "@prisma/client";
import type { ProjectModel } from "../model";

export class ProjectService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get_All_Projects(): Promise<ProjectModel[]> {
    return await this.prisma.project.findMany();
  }

  async get_Project_By_Id(id: number): Promise<ProjectModel | null> {
    return await this.prisma.project.findUnique({
      where: {
        id: id,
      },
    });
  }

  async get_All_User_Project(id:number):Promise<ProjectModel[]>{
    return await this.prisma.project.findMany({
      where: {
        Users:{
          id:id
        }
      },
    });
  }

  async get_All_User_Project_By_Email(email:string):Promise<ProjectModel[]>{
    return await this.prisma.project.findMany({
      where: {
        Users:{
          email:email
        }
      },
    });
  }
  async create_Project(name: string, description: string, user_id: number): Promise<ProjectModel> {
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

  async update_Project(id: number, name: string, description: string, user_id: number): Promise<ProjectModel> {
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

  async delete_Project(id: number): Promise<ProjectModel> {
    return await this.prisma.project.delete({
      where: {
        id: id,
      },
    });
  }
}