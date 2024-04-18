import {
    userResolver,
    postsFBResolver,
    commentsResolver,
    projectResolver,
    sponsorResolver,
    pageIGResolver,
    pageFBResolver,
    postsIGResolver,
    userFBResolver
} from "@/GraphQL/resolvers-files"

export const resolvers = [
    userResolver,
    postsFBResolver,
    commentsResolver,
    projectResolver,
    sponsorResolver,
    pageIGResolver,
    pageFBResolver,
    postsIGResolver,
    userFBResolver
]

export default resolvers;