import { PageFBService } from '@/GraphQL/datasources';
import { CreatePageFbInput, UpdatePageFbInput } from '@/GraphQL/generated/types';

const pageFBService = new PageFBService();

export const pageFBResolver = {
  Query: {
    getAllPagesFB: () => pageFBService.getAllPagesFB(),
    getPageFBById: (_: any, { id }: { id: number }) => pageFBService.getPageFBById(id),
  },
  Mutation: {
    createPageFB: (_: any, { data }: { data: CreatePageFbInput }) => pageFBService.createPageFB(data),
    updatePageFB: (_: any, { id, data }: { id: number, data: UpdatePageFbInput }) => pageFBService.updatePageFB(id, data),
    deletePageFB: (_: any, { id }: { id: number }) => pageFBService.deletePageFB(id),
  },
};
