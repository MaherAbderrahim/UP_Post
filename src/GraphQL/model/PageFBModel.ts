import { UsersFBModel, PageIGModel, PostsFBModel, ProjectModel } from ".";

export type PageFBModel = {
  id: number;
  name: string;
  id_FB: string;
  page_TOKEN: string;
  created_at: Date;
  updated_at: Date;

  // Foreign keys
  page_IG?: PageIGModel | null;

  user_id: number;
  user_FB?: UsersFBModel | null;

  project_id: number;
  project?: ProjectModel | null;
};