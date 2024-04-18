import { ProjectService } from '@/GraphQL/datasources';
import { CreateProjectInput, UpdateProjectInput } from '@/GraphQL/generated/types';

const projectService = new ProjectService();

export const projectResolver = {
  Query: {
    getAllProjects: () => projectService.getAllProjects(),
    getProjectById: (_: any, { id }: { id: number }) => projectService.getProjectById(id),
  },
  Mutation: {
    createProject: (_: any, { data }: { data: CreateProjectInput }) => projectService.createProject(data),
    updateProject: (_: any, { id, data }: { id: number, data: UpdateProjectInput }) => projectService.updateProject(id, data),
    deleteProject: (_: any, { id }: { id: number }) => projectService.deleteProject(id),
  },
};
