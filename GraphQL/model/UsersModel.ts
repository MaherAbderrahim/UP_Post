import {ProjectModel} from "."

export type UsersModel = {
    id: number;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    projects?: ProjectModel[];
  };