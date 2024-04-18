import { PrismaClient } from '@prisma/client';
import { Sponsor, CreateSponsorInput, UpdateSponsorInput } from '../generated/types';

const prisma = new PrismaClient();

export class SponsorService {
  async getAllSponsors() {
    return prisma.sponsor.findMany();
  }

  async getSponsorById(id: number) {
    return prisma.sponsor.findUnique({
      where: { id },
    });
  }

  async createSponsor(data: CreateSponsorInput) {
    return prisma.sponsor.create({ data });
  }

  async updateSponsor(id: number, data: UpdateSponsorInput) {
    return prisma.sponsor.update({
      where: { id },
      data,
    });
  }

  async deleteSponsor(id: number) {
    return prisma.sponsor.delete({
      where: { id },
    });
  }
}
