import { ProjectModel, PageFBModel,PostsIGModel } from ".";
export type PageIGModel = {
    id: number;
    id_IG: string;
    name: string;
    user_TOKEN: string;
    img_URL: string;
    created_at : Date;
    updated_at : Date;
    
    // Foreign keys

    page_FB_id: number;
    page_FB?: PageFBModel;

    project_id: number;
    project?: ProjectModel;
  };