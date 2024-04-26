import prisma from "@/../prisma/db";
import type { NextApiRequest, NextApiResponse } from "next";

import {ProjectService,UsersService,UserFBService,PageFBService,PageIGService,CommentsService,PostFBService,PostIGService,SponsorService} from "@/GraphQL/datasources"

export type DataSourceContext = {
    dataSource: {
        users_API: UsersService,
        projects_API: ProjectService,
        userFB_API: UserFBService
        pageFB_API: PageFBService
        pageIG_API: PageIGService
        postFB_API: PostFBService
        postIG_API: PostIGService
        comments_API: CommentsService
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
            comments_API: new CommentsService(prisma),
            users_API: new UsersService(prisma),
            projects_API: new ProjectService(prisma),
            userFB_API: new UserFBService(prisma),
            pageFB_API: new PageFBService(prisma),
            postIG_API: new PostIGService(prisma),
            pageIG_API: new PageIGService(prisma),
            postFB_API: new PostFBService(prisma),
            sponsor_API: new SponsorService(prisma)
        }
    }
}