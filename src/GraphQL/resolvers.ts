//importe tous les resolver puis les exporte
import {
    commentsFBResolvers,
    commentsIGResolvers,
    pageFBResolvers,
    pageIGResolvers,
    postsFBResolvers,
    postsIGResolvers,
    projectResolvers,
    sponsorResolvers,
    userResolvers,
    usersFBResolvers
} from "../GraphQL/resolvers-files"

export const resolvers = [
    commentsFBResolvers,
    commentsIGResolvers,
    pageFBResolvers,
    pageIGResolvers,
    postsFBResolvers,
    postsIGResolvers,
    projectResolvers,
    sponsorResolvers,
    userResolvers,
    usersFBResolvers
]

export default resolvers;