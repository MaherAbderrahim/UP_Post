export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  FB_id?: Maybe<Scalars['Int']['output']>;
  IG_id?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  nb_likes?: Maybe<Scalars['Int']['output']>;
  post_FB?: Maybe<PostFb>;
  post_IG?: Maybe<PostIg>;
  updated_at: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type CreateCommentInput = {
  message: Scalars['String']['input'];
  nb_likes: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};

export type CreatePageFbInput = {
  id_FB: Scalars['String']['input'];
  name: Scalars['String']['input'];
  page_TOKEN: Scalars['String']['input'];
  user_id: Scalars['Int']['input'];
};

export type CreatePageIgInput = {
  id_IG: Scalars['String']['input'];
  name: Scalars['String']['input'];
  project_id: Scalars['Int']['input'];
  user_TOKEN: Scalars['String']['input'];
};

export type CreatePostFbInput = {
  Annee_post: Scalars['Int']['input'];
  Can_reply_privately: Scalars['Boolean']['input'];
  Colere: Scalars['Int']['input'];
  Descriptions: Scalars['String']['input'];
  Followers: Scalars['Int']['input'];
  Found_Hash: Scalars['String']['input'];
  Hashtags: Scalars['String']['input'];
  Heure_post: Scalars['DateTime']['input'];
  Instagram_eligibility: Scalars['String']['input'];
  Jadores: Scalars['Int']['input'];
  Jaimes: Scalars['Int']['input'];
  Jour_de_la_semaine: Scalars['String']['input'];
  Longueur_caracteres_text: Scalars['Int']['input'];
  Mois: Scalars['String']['input'];
  Name_page: Scalars['String']['input'];
  Nombre_Hashtags: Scalars['Int']['input'];
  Nombre_de_commentaire: Scalars['Int']['input'];
  Partages: Scalars['Int']['input'];
  Popularity: Scalars['Int']['input'];
  Rires: Scalars['Int']['input'];
  Season: Scalars['String']['input'];
  Sentiment_post: Scalars['String']['input'];
  Solidaires: Scalars['Int']['input'];
  Timeline_visibility: Scalars['String']['input'];
  Tristes: Scalars['Int']['input'];
  Url_post: Scalars['String']['input'];
  Wouah: Scalars['Int']['input'];
  comments: Array<Comment>;
  is_sponsored: Scalars['Boolean']['input'];
  langue_post: Scalars['String']['input'];
  page_id: Scalars['Int']['input'];
  prediction_label: Scalars['Int']['input'];
  prediction_score: Scalars['Float']['input'];
  sentiment_comments_NEG: Scalars['Int']['input'];
  sentiment_comments_POS: Scalars['Int']['input'];
};

export type CreatePostIgInput = {
  Date_post: Scalars['DateTime']['input'];
  Day: Scalars['Int']['input'];
  Day_of_Week: Scalars['String']['input'];
  Followers: Scalars['Int']['input'];
  Found_Hash: Scalars['Int']['input'];
  Hashtags: Scalars['String']['input'];
  Likes: Scalars['Int']['input'];
  Month: Scalars['String']['input'];
  Post_text: Scalars['String']['input'];
  Sentiment_POSTT: Scalars['String']['input'];
  Time_post: Scalars['DateTime']['input'];
  Total_NB_commentaires: Scalars['Int']['input'];
  Usernames: Scalars['String']['input'];
  Year: Scalars['Int']['input'];
  comments: Array<Comment>;
  hashtag_count: Scalars['Int']['input'];
  langue_post: Scalars['String']['input'];
  len_post: Scalars['Int']['input'];
  nature: Scalars['Int']['input'];
  negative: Scalars['Int']['input'];
  Page_name: Scalars['String']['input'];
  page_id: Scalars['Int']['input'];
  positive: Scalars['Int']['input'];
  prediction_label: Scalars['Int']['input'];
  prediction_score: Scalars['Float']['input'];
  sentiment_comment: Scalars['String']['input'];
};

export type CreateProjectInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  user_id: Scalars['Int']['input'];
};

export type CreateSponsorInput = {
  followers: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type CreateUserFbInput = {
  id_FB: Scalars['String']['input'];
  name: Scalars['String']['input'];
  project_id: Scalars['Int']['input'];
  user_TOKEN: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  createPageFB: PageFb;
  createPageIG: PageIg;
  createPostFB: PostFb;
  createPostIG: PostIg;
  createProject: Project;
  createSponsor: Sponsor;
  createUser: User;
  createUserFB: UserFb;
  deleteComment: Comment;
  deletePageFB: PageFb;
  deletePageIG: PageIg;
  deletePostFB: PostFb;
  deletePostIG: PostIg;
  deleteProject: Project;
  deleteSponsor: Sponsor;
  deleteUser: User;
  deleteUserFB: UserFb;
  updateComment: Comment;
  updatePageFB: PageFb;
  updatePageIG: PageIg;
  updatePostFB: PostFb;
  updatePostIG: PostIg;
  updateProject: Project;
  updateSponsor: Sponsor;
  updateUser: User;
  updateUserFB: UserFb;
};


export type MutationCreateCommentArgs = {
  data: CreateCommentInput;
};


export type MutationCreatePageFbArgs = {
  data: CreatePageFbInput;
};


export type MutationCreatePageIgArgs = {
  data: CreatePageIgInput;
};


export type MutationCreatePostFbArgs = {
  data: CreatePostFbInput;
};


export type MutationCreatePostIgArgs = {
  data: CreatePostIgInput;
};


export type MutationCreateProjectArgs = {
  data: CreateProjectInput;
};


export type MutationCreateSponsorArgs = {
  data: CreateSponsorInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationCreateUserFbArgs = {
  data: CreateUserFbInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePageFbArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePageIgArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePostFbArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePostIgArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteSponsorArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserFbArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateCommentArgs = {
  data: UpdateCommentInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePageFbArgs = {
  data: UpdatePageFbInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePageIgArgs = {
  data: UpdatePageIgInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePostFbArgs = {
  data: UpdatePostFbInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePostIgArgs = {
  data: UpdatePostIgInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateProjectArgs = {
  data: UpdateProjectInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateSponsorArgs = {
  data: UpdateSponsorInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateUserFbArgs = {
  data: UpdateUserFbInput;
  id: Scalars['Int']['input'];
};

export type PageFb = {
  __typename?: 'PageFB';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  id_FB: Scalars['String']['output'];
  name: Scalars['String']['output'];
  page_IG?: Maybe<PageIg>;
  page_TOKEN: Scalars['String']['output'];
  posts_FB: Array<PostFb>;
  updated_at: Scalars['DateTime']['output'];
  user: UserFb;
  users_FB?: Maybe<UserFb>;
};

export type PageIg = {
  __typename?: 'PageIG';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  id_IG: Scalars['String']['output'];
  name: Scalars['String']['output'];
  page_fb?: Maybe<PageFb>;
  posts_IG: Array<PostIg>;
  project: Project;
  updated_at: Scalars['DateTime']['output'];
  user_TOKEN: Scalars['String']['output'];
};

export type PostFb = {
  __typename?: 'PostFB';
  Annee_post?: Maybe<Scalars['Int']['output']>;
  Can_reply_privately?: Maybe<Scalars['Boolean']['output']>;
  Colere?: Maybe<Scalars['Int']['output']>;
  Descriptions?: Maybe<Scalars['String']['output']>;
  Followers?: Maybe<Scalars['Int']['output']>;
  Found_Hash?: Maybe<Scalars['String']['output']>;
  Hashtags?: Maybe<Scalars['String']['output']>;
  Heure_post?: Maybe<Scalars['DateTime']['output']>;
  Instagram_eligibility?: Maybe<Scalars['String']['output']>;
  Jadores?: Maybe<Scalars['Int']['output']>;
  Jaimes?: Maybe<Scalars['Int']['output']>;
  Jour_de_la_semaine?: Maybe<Scalars['String']['output']>;
  Longueur_caracteres_text?: Maybe<Scalars['Int']['output']>;
  Mois?: Maybe<Scalars['String']['output']>;
  Name_page?: Maybe<Scalars['String']['output']>;
  Nombre_Hashtags?: Maybe<Scalars['Int']['output']>;
  Nombre_de_commentaire?: Maybe<Scalars['Int']['output']>;
  Partages?: Maybe<Scalars['Int']['output']>;
  Popularity?: Maybe<Scalars['Int']['output']>;
  Rires?: Maybe<Scalars['Int']['output']>;
  Season?: Maybe<Scalars['String']['output']>;
  Sentiment_post?: Maybe<Scalars['String']['output']>;
  Solidaires?: Maybe<Scalars['Int']['output']>;
  Timeline_visibility?: Maybe<Scalars['String']['output']>;
  Tristes?: Maybe<Scalars['Int']['output']>;
  Url_post?: Maybe<Scalars['String']['output']>;
  Wouah?: Maybe<Scalars['Int']['output']>;
  comments: Array<Comment>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  is_sponsored?: Maybe<Scalars['Boolean']['output']>;
  langue_post?: Maybe<Scalars['String']['output']>;
  page: PageFb;
  prediction_label?: Maybe<Scalars['Int']['output']>;
  prediction_score?: Maybe<Scalars['Float']['output']>;
  sentiment_comments_NEG?: Maybe<Scalars['Int']['output']>;
  sentiment_comments_POS?: Maybe<Scalars['Int']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type PostIg = {
  __typename?: 'PostIG';
  Date_post?: Maybe<Scalars['DateTime']['output']>;
  Day?: Maybe<Scalars['Int']['output']>;
  Day_of_Week?: Maybe<Scalars['String']['output']>;
  Followers?: Maybe<Scalars['Int']['output']>;
  Found_Hash?: Maybe<Scalars['Int']['output']>;
  Hashtags?: Maybe<Scalars['String']['output']>;
  Likes?: Maybe<Scalars['Int']['output']>;
  Month?: Maybe<Scalars['String']['output']>;
  Page_name?: Maybe<Scalars['String']['output']>;
  Post_text?: Maybe<Scalars['String']['output']>;
  Sentiment_POSTT?: Maybe<Scalars['String']['output']>;
  Time_post?: Maybe<Scalars['DateTime']['output']>;
  Total_NB_commentaires?: Maybe<Scalars['Int']['output']>;
  Usernames?: Maybe<Scalars['String']['output']>;
  Year?: Maybe<Scalars['Int']['output']>;
  comments: Array<Comment>;
  created_at: Scalars['DateTime']['output'];
  hashtag_count?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  langue_post?: Maybe<Scalars['String']['output']>;
  len_post?: Maybe<Scalars['Int']['output']>;
  nature?: Maybe<Scalars['Int']['output']>;
  negative?: Maybe<Scalars['Int']['output']>;
  page: PageIg;
  positive?: Maybe<Scalars['Int']['output']>;
  prediction_label?: Maybe<Scalars['Int']['output']>;
  prediction_score?: Maybe<Scalars['Float']['output']>;
  sentiment_comment?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type Project = {
  __typename?: 'Project';
  created_at: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  page_IG?: Maybe<PageIg>;
  updated_at: Scalars['DateTime']['output'];
  user: User;
  users_FB: Array<UserFb>;
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  comments: Array<Comment>;
  page_FB?: Maybe<PageFb>;
  page_IG?: Maybe<PageIg>;
  pages_FB: Array<PageFb>;
  pages_IG: Array<PageIg>;
  post_FB?: Maybe<PostFb>;
  post_IG?: Maybe<PostIg>;
  posts_FB: Array<PostFb>;
  posts_IG: Array<PostIg>;
  project?: Maybe<Project>;
  projects: Array<Project>;
  sponsor?: Maybe<Sponsor>;
  sponsors: Array<Sponsor>;
  user?: Maybe<User>;
  user_FB?: Maybe<UserFb>;
  users: Array<User>;
  users_FB: Array<UserFb>;
};


export type QueryCommentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPage_FbArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPage_IgArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPost_FbArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPost_IgArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProjectArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySponsorArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUser_FbArgs = {
  id: Scalars['Int']['input'];
};

export type Sponsor = {
  __typename?: 'Sponsor';
  created_at: Scalars['DateTime']['output'];
  followers?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  posts_FB: Array<PostFb>;
  updated_at: Scalars['DateTime']['output'];
};

export type UpdateCommentInput = {
  message: Scalars['String']['input'];
  nb_likes: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};

export type UpdatePageFbInput = {
  name: Scalars['String']['input'];
};

export type UpdatePageIgInput = {
  name: Scalars['String']['input'];
};

export type UpdatePostFbInput = {
  Annee_post: Scalars['Int']['input'];
  Can_reply_privately: Scalars['Boolean']['input'];
  Colere: Scalars['Int']['input'];
  Descriptions: Scalars['String']['input'];
  Found_Hash: Scalars['String']['input'];
  Hashtags: Scalars['String']['input'];
  Instagram_eligibility: Scalars['String']['input'];
  Jadores: Scalars['Int']['input'];
  Jaimes: Scalars['Int']['input'];
  Jour_de_la_semaine: Scalars['String']['input'];
  Longueur_caracteres_text: Scalars['Int']['input'];
  Mois: Scalars['String']['input'];
  Name_page: Scalars['String']['input'];
  Nombre_Hashtags: Scalars['Int']['input'];
  Nombre_de_commentaire: Scalars['Int']['input'];
  Partages: Scalars['Int']['input'];
  Popularity: Scalars['Int']['input'];
  Rires: Scalars['Int']['input'];
  Season: Scalars['String']['input'];
  Sentiment_post: Scalars['String']['input'];
  Solidaires: Scalars['Int']['input'];
  Timeline_visibility: Scalars['String']['input'];
  Tristes: Scalars['Int']['input'];
  Url_post: Scalars['String']['input'];
  Wouah: Scalars['Int']['input'];
  comments: Array<Comment>;
  is_sponsored: Scalars['Boolean']['input'];
  langue_post: Scalars['String']['input'];
  prediction_label: Scalars['Int']['input'];
  prediction_score: Scalars['Float']['input'];
  sentiment_comments_NEG: Scalars['Int']['input'];
  sentiment_comments_POS: Scalars['Int']['input'];
};

export type UpdatePostIgInput = {
  Date_post: Scalars['DateTime']['input'];
  Day: Scalars['Int']['input'];
  Day_of_Week: Scalars['String']['input'];
  Followers: Scalars['Int']['input'];
  Found_Hash: Scalars['Int']['input'];
  Hashtags: Scalars['String']['input'];
  Likes: Scalars['Int']['input'];
  Month: Scalars['String']['input'];
  Post_text: Scalars['String']['input'];
  Sentiment_POSTT: Scalars['String']['input'];
  Time_post: Scalars['DateTime']['input'];
  Total_NB_commentaires: Scalars['Int']['input'];
  Usernames: Scalars['String']['input'];
  Year: Scalars['Int']['input'];
  comments: Array<Comment>;
  hashtag_count: Scalars['Int']['input'];
  langue_post: Scalars['String']['input'];
  len_post: Scalars['Int']['input'];
  nature: Scalars['Int']['input'];
  negative: Scalars['Int']['input'];
  Page_name: Scalars['String']['input'];
  positive: Scalars['Int']['input'];
  prediction_label: Scalars['Int']['input'];
  prediction_score: Scalars['Float']['input'];
  sentiment_comment: Scalars['String']['input'];
};

export type UpdateProjectInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateSponsorInput = {
  followers: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type UpdateUserFbInput = {
  name: Scalars['String']['input'];
};

export type UpdateUserInput = {
  email: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  projects: Array<Project>;
  updated_at: Scalars['DateTime']['output'];
};

export type UserFb = {
  __typename?: 'UserFB';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  id_FB: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pages_FB: Array<PageFb>;
  project: Project;
  updated_at: Scalars['DateTime']['output'];
  user_TOKEN: Scalars['String']['output'];
};
