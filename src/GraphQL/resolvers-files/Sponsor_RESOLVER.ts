import { SponsorService } from '../datasources';
import { CreateSponsorInput, UpdateSponsorInput } from '../generated/types';

const sponsorService = new SponsorService();

export const sponsorResolver = {
  Query: {
    getAllSponsors: () => sponsorService.getAllSponsors(),
    getSponsorById: (_: any, { id }: { id: number }) => sponsorService.getSponsorById(id),
  },
  Mutation: {
    createSponsor: (_: any, { data }: { data: CreateSponsorInput }) => sponsorService.createSponsor(data),
    updateSponsor: (_: any, { id, data }: { id: number, data: UpdateSponsorInput }) => sponsorService.updateSponsor(id, data),
    deleteSponsor: (_: any, { id }: { id: number }) => sponsorService.deleteSponsor(id),
  },
};
