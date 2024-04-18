import { PageIGService } from '@/GraphQL/datasources';
import { CreatePageIgInput, UpdatePageIgInput } from '@/GraphQL/generated/types';

const pageIGService = new PageIGService();

export const pageIGResolver = {
  Query: {
    getAllPagesIG: () => pageIGService.getAllPagesIG(),
    getPageIGById: (_: any, { id }: { id: number }) => pageIGService.getPageIGById(id),
  },
  Mutation: {
    createPageIG: (_: any, { data }: { data: CreatePageIgInput }) => pageIGService.createPageIG(data),
    updatePageIG: (_: any, { id, data }: { id: number, data: UpdatePageIgInput }) => pageIGService.updatePageIG(id, data),
    deletePageIG: (_: any, { id }: { id: number }) => pageIGService.deletePageIG(id),
  },
};
