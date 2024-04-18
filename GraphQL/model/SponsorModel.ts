import {PostsFBModel} from "."
export type SponsorModel = {
    id: number;
    name: string;
    followers: number;
    createdAt: Date;
    updatedAt: Date;
    postsFB?: PostsFBModel[];
  };