import {UsersFBModel,PageIGModel,PostsFBModel} from "."

export type PageFBModel = {
    id: number;
    userId: number;
    name: string;
    idFB: string;
    pageTOKEN: string;
    createdAt: Date;
    updatedAt: Date;
    usersFB?: UsersFBModel;
    pageIG?: PageIGModel;
    postFB: PostsFBModel[];
  };