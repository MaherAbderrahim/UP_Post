import { ProjectModel, PageFBModel,PostsIGModel } from ".";
export type PageIGModel = {
    id: number;
    projectId: number;
    pageFBId?: number | null;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    idIG: string;
    userTOKEN: string;
    pageFB?: PageFBModel;
    project?: ProjectModel;
    postIG: PostsIGModel[];
  };