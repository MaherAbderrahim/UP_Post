import {ProjectModel,PageFBModel} from "."
export type UsersFBModel = {
    id: number;
    projectId: number;
    name: string;
    idFB: string;
    userTOKEN: string;
    createdAt: Date;
    updatedAt: Date;
    project?: ProjectModel;
    pageFBs?: PageFBModel[];
  };