import type { PrismaClient } from "@prisma/client";
import type { SponsorModel } from "../model";

export class SponsorService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getAllSponsors(): Promise<SponsorModel[]> {
    return await this.prisma.sponsor.findMany();
  }

  async getSponsorById(id: number): Promise<SponsorModel | null> {
    return await this.prisma.sponsor.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createSponsor(name: string, followers: number): Promise<SponsorModel> {
    return await this.prisma.sponsor.create({
      data: {
        name: name,
        followers: followers,
      },
    });
  }

  async updateSponsor(id: number, name: string, followers: number): Promise<SponsorModel> {
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

  async deleteSponsor(id: number): Promise<SponsorModel> {
    return await this.prisma.sponsor.delete({
      where: {
        id: id,
      },
    });
  }
}