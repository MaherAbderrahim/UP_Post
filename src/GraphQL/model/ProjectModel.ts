import {UsersFBModel,PageIGModel,UsersModel} from "."

export type ProjectModel = {
    id: number;
    userId: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    pageIGs?: PageIGModel[];
    usersFBs?: UsersFBModel[];
    user?: UsersModel;
  };