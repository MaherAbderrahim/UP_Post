import prisma from "@/../prisma/db";
import type { NextApiRequest, NextApiResponse } from "next";

import {ProjectService,UserService,UsersFBService,PageFBService,PageIGService,CommentsFBService,CommentsIGService,PostsFBService,PostsIGService,SponsorService} from "@/GraphQL/datasources"

export type DataSourceContext = {
    dataSource: {
        users_API: UserService,
        projects_API: ProjectService,
        userFB_API: UsersFBService
        pageFB_API: PageFBService
        pageIG_API: PageIGService
        postFB_API: PostsFBService
        postIG_API: PostsIGService
        comments_FB_API: CommentsFBService
        comments_IG_API: CommentsIGService
        sponsor_API: SponsorService
    }
}
export const createContext = ({
    req,
    res,
  }: {
    req: NextApiRequest;
    res: NextApiResponse<NextApiRequest>;
    
  }): DataSourceContext => {
    return{
        dataSource:{
            comments_FB_API: new CommentsFBService(prisma),
            comments_IG_API: new CommentsIGService(prisma),
            users_API: new UserService(prisma),
            projects_API: new ProjectService(prisma),
            userFB_API: new UsersFBService(prisma),
            pageFB_API: new PageFBService(prisma),
            postIG_API: new PostsIGService(prisma),
            pageIG_API: new PageIGService(prisma),
            postFB_API: new PostsFBService(prisma),
            sponsor_API: new SponsorService(prisma)
        }
    }
}