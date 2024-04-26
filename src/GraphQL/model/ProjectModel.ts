import {PageFBModel,PageIGModel,UsersModel} from "."

export type ProjectModel = {
    id: number;
    name: string;
    description: string;
    created_at : Date;
    updated_at : Date;

    // Foreign keys
    user_id: number;
    Users?: UsersModel;
  };