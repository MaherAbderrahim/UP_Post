import { SponsorService } from '@/GraphQL/datasources';
import { SponsorModel } from '../model';
import prisma from '@/lib/prisma';
const sponsorService = new SponsorService(prisma);

const sponsorResolvers = {
  Query: {
    get_All_Sponsors: async () => {
      return await sponsorService.get_All_Sponsors();
    },
    get_Sponsor_By_Id: async (parent: any, { id }: { id: number }) => {
      return await sponsorService.get_Sponsor_By_Id(id);
    },
    // Ajoutez d'autres résolveurs de requête selon vos besoins
  },
  Mutation: {
    create_Sponsor: async (
      parent: any,
      args: {
        name: string;
        followers: number;
      }
    ) => {
      return await sponsorService.create_Sponsor(args.name, args.followers);
    },
    update_Sponsor: async (
      parent: any,
      args: {
        id: number;
        name: string;
        followers: number;
      }
    ) => {
      return await sponsorService.update_Sponsor(args.id, args.name, args.followers);
    },
    delete_Sponsor: async (parent: any, { id }: { id: number }) => {
      return await sponsorService.delete_Sponsor(id);
    },
    // Ajoutez d'autres résolveurs de mutation selon vos besoins
  },

};

export default sponsorResolvers;
