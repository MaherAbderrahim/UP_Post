import type { PrismaClient } from "@prisma/client";
import type { SponsorModel } from "../model";

export class SponsorService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get_All_Sponsors(): Promise<SponsorModel[]> {
    return await this.prisma.sponsor.findMany();
  }



  async get_Sponsor_By_Id(id: number): Promise<SponsorModel | null> {
    return await this.prisma.sponsor.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create_Sponsor(name: string, followers: number): Promise<SponsorModel> {
    return await this.prisma.sponsor.create({
      data: {
        name: name,
        followers: followers,
      },
    });
  }

  async update_Sponsor(id: number, name: string, followers: number): Promise<SponsorModel> {
    return await this.prisma.sponsor.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        followers: followers,
      },
    });
  }

  async delete_Sponsor(id: number): Promise<SponsorModel> {
    return await this.prisma.sponsor.delete({
      where: {
        id: id,
      },
    });
  }
}