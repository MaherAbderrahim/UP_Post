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

export type Comments_Fb = {
  __typename?: 'Comments_FB';
  Posts_FB: Posts_Fb;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
  nb_likes?: Maybe<Scalars['Int']['output']>;
  updated_at: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type Comments_Ig = {
  __typename?: 'Comments_IG';
  Posts_IG: Posts_Ig;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
  nb_likes?: Maybe<Scalars['Int']['output']>;
  updated_at: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  create_Comment_FB: Comments_Fb;
  create_Comment_IG: Comments_Ig;
  create_Page_FB: Page_Fb;
  create_Page_IG: Page_Ig;
  create_Post_FB: Posts_Fb;
  create_Post_IG: Posts_Ig;
  create_Project: Project;
  create_Sponsor: Sponsor;
  create_User: Users;
  create_Users_FB: Users_Fb;
  delete_Comment_FB?: Maybe<Comments_Fb>;
  delete_Comment_IG?: Maybe<Comments_Ig>;
  delete_Page_FB: Page_Fb;
  delete_Page_IG?: Maybe<Page_Ig>;
  delete_Post_IG?: Maybe<Posts_Ig>;
  delete_Posts_FB: Posts_Fb;
  delete_Project: Project;
  delete_Sponsor?: Maybe<Sponsor>;
  delete_User: Users;
  delete_Users_FB: Users_Fb;
  update_Comment_FB?: Maybe<Comments_Fb>;
  update_Comment_IG?: Maybe<Comments_Ig>;
  update_Page_FB: Page_Fb;
  update_Page_IG: Page_Ig;
  update_Post_FB: Posts_Fb;
  update_Post_IG?: Maybe<Posts_Ig>;
  update_Project: Project;
  update_Sponsor?: Maybe<Sponsor>;
  update_User: Users;
  update_Users_FB: Users_Fb;
};


export type MutationCreate_Comment_FbArgs = {
  message?: InputMaybe<Scalars['String']['input']>;
  nb_likes?: InputMaybe<Scalars['Int']['input']>;
  postFB_id: Scalars['Int']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreate_Comment_IgArgs = {
  message?: InputMaybe<Scalars['String']['input']>;
  nb_likes?: InputMaybe<Scalars['Int']['input']>;
  postIG_id: Scalars['Int']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreate_Page_FbArgs = {
  id_FB: Scalars['String']['input'];
  name: Scalars['String']['input'];
  page_TOKEN: Scalars['String']['input'];
  project_id: Scalars['ID']['input'];
  user_id: Scalars['ID']['input'];
};


export type MutationCreate_Page_IgArgs = {
  id_IG: Scalars['String']['input'];
  name: Scalars['String']['input'];
  project_id: Scalars['ID']['input'];
  user_TOKEN: Scalars['String']['input'];
};


export type MutationCreate_Post_FbArgs = {
  Annee_post?: InputMaybe<Scalars['Int']['input']>;
  Can_reply_privately?: InputMaybe<Scalars['Boolean']['input']>;
  Colere?: InputMaybe<Scalars['Int']['input']>;
  Descriptions?: InputMaybe<Scalars['String']['input']>;
  Followers?: InputMaybe<Scalars['Int']['input']>;
  Found_Hash?: InputMaybe<Scalars['String']['input']>;
  Hashtags?: InputMaybe<Scalars['String']['input']>;
  Heure_post?: InputMaybe<Scalars['DateTime']['input']>;
  Instagram_eligibility?: InputMaybe<Scalars['String']['input']>;
  Jadores?: InputMaybe<Scalars['Int']['input']>;
  Jaimes?: InputMaybe<Scalars['Int']['input']>;
  Jour_de_la_semaine?: InputMaybe<Scalars['String']['input']>;
  Longueur_caracteres_text?: InputMaybe<Scalars['Int']['input']>;
  Mois?: InputMaybe<Scalars['String']['input']>;
  Name_page?: InputMaybe<Scalars['String']['input']>;
  Nombre_Hashtags?: InputMaybe<Scalars['Int']['input']>;
  Nombre_de_commentaire?: InputMaybe<Scalars['Int']['input']>;
  Partages?: InputMaybe<Scalars['Int']['input']>;
  Popularity?: InputMaybe<Scalars['Int']['input']>;
  Rires?: InputMaybe<Scalars['Int']['input']>;
  Season?: InputMaybe<Scalars['String']['input']>;
  Sentiment_post?: InputMaybe<Scalars['String']['input']>;
  Solidaires?: InputMaybe<Scalars['Int']['input']>;
  Timeline_visibility?: InputMaybe<Scalars['String']['input']>;
  Tristes?: InputMaybe<Scalars['Int']['input']>;
  Url_post?: InputMaybe<Scalars['String']['input']>;
  Wouah?: InputMaybe<Scalars['Int']['input']>;
  is_sponsored?: InputMaybe<Scalars['Boolean']['input']>;
  langue_post?: InputMaybe<Scalars['String']['input']>;
  page_id: Scalars['ID']['input'];
  prediction_label?: InputMaybe<Scalars['Int']['input']>;
  prediction_score?: InputMaybe<Scalars['Float']['input']>;
  sentiment_comments_NEG?: InputMaybe<Scalars['Int']['input']>;
  sentiment_comments_POS?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreate_Post_IgArgs = {
  Date_post?: InputMaybe<Scalars['DateTime']['input']>;
  Day?: InputMaybe<Scalars['Int']['input']>;
  Day_of_Week?: InputMaybe<Scalars['String']['input']>;
  Followers?: InputMaybe<Scalars['Int']['input']>;
  Found_Hash?: InputMaybe<Scalars['Int']['input']>;
  Hashtags?: InputMaybe<Scalars['String']['input']>;
  Likes?: InputMaybe<Scalars['Int']['input']>;
  Month?: InputMaybe<Scalars['String']['input']>;
  Page_name?: InputMaybe<Scalars['String']['input']>;
  Post_text?: InputMaybe<Scalars['String']['input']>;
  Sentiment_POSTT?: InputMaybe<Scalars['String']['input']>;
  Time_post?: InputMaybe<Scalars['DateTime']['input']>;
  Total_NB_commentaires?: InputMaybe<Scalars['Int']['input']>;
  Usernames?: InputMaybe<Scalars['String']['input']>;
  Year?: InputMaybe<Scalars['Int']['input']>;
  hashtag_count?: InputMaybe<Scalars['Int']['input']>;
  langue_post?: InputMaybe<Scalars['String']['input']>;
  len_post?: InputMaybe<Scalars['Int']['input']>;
  nature?: InputMaybe<Scalars['Int']['input']>;
  negative?: InputMaybe<Scalars['Int']['input']>;
  page_id: Scalars['Int']['input'];
  positive?: InputMaybe<Scalars['Int']['input']>;
  prediction_label?: InputMaybe<Scalars['Int']['input']>;
  prediction_score?: InputMaybe<Scalars['Float']['input']>;
  sentiment_comments_NEG?: InputMaybe<Scalars['Int']['input']>;
  sentiment_comments_POS?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreate_ProjectArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  user_id: Scalars['Int']['input'];
};


export type MutationCreate_SponsorArgs = {
  followers: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreate_UserArgs = {
  email: Scalars['String']['input'];
};


export type MutationCreate_Users_FbArgs = {
  id_FB: Scalars['String']['input'];
  name: Scalars['String']['input'];
  user_TOKEN: Scalars['String']['input'];
};


export type MutationDelete_Comment_FbArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDelete_Comment_IgArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDelete_Page_FbArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Page_IgArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Post_IgArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDelete_Posts_FbArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_ProjectArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_SponsorArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDelete_UserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDelete_Users_FbArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Comment_FbArgs = {
  id: Scalars['Int']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  nb_likes?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdate_Comment_IgArgs = {
  id: Scalars['Int']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  nb_likes?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdate_Page_FbArgs = {
  id: Scalars['ID']['input'];
  id_FB?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page_TOKEN?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdate_Page_IgArgs = {
  id: Scalars['ID']['input'];
  id_IG?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
  user_TOKEN?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdate_Post_FbArgs = {
  Annee_post?: InputMaybe<Scalars['Int']['input']>;
  Can_reply_privately?: InputMaybe<Scalars['Boolean']['input']>;
  Colere?: InputMaybe<Scalars['Int']['input']>;
  Descriptions?: InputMaybe<Scalars['String']['input']>;
  Followers?: InputMaybe<Scalars['Int']['input']>;
  Found_Hash?: InputMaybe<Scalars['String']['input']>;
  Hashtags?: InputMaybe<Scalars['String']['input']>;
  Heure_post?: InputMaybe<Scalars['DateTime']['input']>;
  Instagram_eligibility?: InputMaybe<Scalars['String']['input']>;
  Jadores?: InputMaybe<Scalars['Int']['input']>;
  Jaimes?: InputMaybe<Scalars['Int']['input']>;
  Jour_de_la_semaine?: InputMaybe<Scalars['String']['input']>;
  Longueur_caracteres_text?: InputMaybe<Scalars['Int']['input']>;
  Mois?: InputMaybe<Scalars['String']['input']>;
  Name_page?: InputMaybe<Scalars['String']['input']>;
  Nombre_Hashtags?: InputMaybe<Scalars['Int']['input']>;
  Nombre_de_commentaire?: InputMaybe<Scalars['Int']['input']>;
  Partages?: InputMaybe<Scalars['Int']['input']>;
  Popularity?: InputMaybe<Scalars['Int']['input']>;
  Rires?: InputMaybe<Scalars['Int']['input']>;
  Season?: InputMaybe<Scalars['String']['input']>;
  Sentiment_post?: InputMaybe<Scalars['String']['input']>;
  Solidaires?: InputMaybe<Scalars['Int']['input']>;
  Timeline_visibility?: InputMaybe<Scalars['String']['input']>;
  Tristes?: InputMaybe<Scalars['Int']['input']>;
  Url_post?: InputMaybe<Scalars['String']['input']>;
  Wouah?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  is_sponsored?: InputMaybe<Scalars['Boolean']['input']>;
  langue_post?: InputMaybe<Scalars['String']['input']>;
  page_id?: InputMaybe<Scalars['ID']['input']>;
  prediction_label?: InputMaybe<Scalars['Int']['input']>;
  prediction_score?: InputMaybe<Scalars['Float']['input']>;
  sentiment_comments_NEG?: InputMaybe<Scalars['Int']['input']>;
  sentiment_comments_POS?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdate_Post_IgArgs = {
  Date_post?: InputMaybe<Scalars['DateTime']['input']>;
  Day?: InputMaybe<Scalars['Int']['input']>;
  Day_of_Week?: InputMaybe<Scalars['String']['input']>;
  Followers?: InputMaybe<Scalars['Int']['input']>;
  Found_Hash?: InputMaybe<Scalars['Int']['input']>;
  Hashtags?: InputMaybe<Scalars['String']['input']>;
  Likes?: InputMaybe<Scalars['Int']['input']>;
  Month?: InputMaybe<Scalars['String']['input']>;
  Page_name?: InputMaybe<Scalars['String']['input']>;
  Post_text?: InputMaybe<Scalars['String']['input']>;
  Sentiment_POSTT?: InputMaybe<Scalars['String']['input']>;
  Time_post?: InputMaybe<Scalars['DateTime']['input']>;
  Total_NB_commentaires?: InputMaybe<Scalars['Int']['input']>;
  Usernames?: InputMaybe<Scalars['String']['input']>;
  Year?: InputMaybe<Scalars['Int']['input']>;
  hashtag_count?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  langue_post?: InputMaybe<Scalars['String']['input']>;
  len_post?: InputMaybe<Scalars['Int']['input']>;
  nature?: InputMaybe<Scalars['Int']['input']>;
  negative?: InputMaybe<Scalars['Int']['input']>;
  page_id?: InputMaybe<Scalars['Int']['input']>;
  positive?: InputMaybe<Scalars['Int']['input']>;
  prediction_label?: InputMaybe<Scalars['Int']['input']>;
  prediction_score?: InputMaybe<Scalars['Float']['input']>;
  sentiment_comments_NEG?: InputMaybe<Scalars['Int']['input']>;
  sentiment_comments_POS?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdate_ProjectArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdate_SponsorArgs = {
  followers?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdate_UserArgs = {
  email: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};


export type MutationUpdate_Users_FbArgs = {
  id: Scalars['ID']['input'];
  id_FB?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_TOKEN?: InputMaybe<Scalars['String']['input']>;
};

export type Page_Fb = {
  __typename?: 'Page_FB';
  Page_IG?: Maybe<Page_Ig>;
  Posts_FB: Array<Posts_Fb>;
  Project: Project;
  User_FB: Users_Fb;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  id_FB: Scalars['String']['output'];
  name: Scalars['String']['output'];
  page_TOKEN: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Page_Ig = {
  __typename?: 'Page_IG';
  Page_FB?: Maybe<Page_Fb>;
  Posts_IG: Array<Posts_Ig>;
  Project: Project;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  id_IG: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  user_TOKEN: Scalars['String']['output'];
};

export type Posts_Fb = {
  __typename?: 'Posts_FB';
  Annee_post?: Maybe<Scalars['Int']['output']>;
  Can_reply_privately?: Maybe<Scalars['Boolean']['output']>;
  Colere?: Maybe<Scalars['Int']['output']>;
  Comments_FB: Array<Comments_Fb>;
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
  Page_FB: Page_Fb;
  Partages?: Maybe<Scalars['Int']['output']>;
  Popularity?: Maybe<Scalars['Int']['output']>;
  Rires?: Maybe<Scalars['Int']['output']>;
  Season?: Maybe<Scalars['String']['output']>;
  Sentiment_post?: Maybe<Scalars['String']['output']>;
  Solidaires?: Maybe<Scalars['Int']['output']>;
  Sponsor: Array<Sponsor>;
  Timeline_visibility?: Maybe<Scalars['String']['output']>;
  Tristes?: Maybe<Scalars['Int']['output']>;
  Url_post?: Maybe<Scalars['String']['output']>;
  Wouah?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  is_sponsored?: Maybe<Scalars['Boolean']['output']>;
  langue_post?: Maybe<Scalars['String']['output']>;
  prediction_label?: Maybe<Scalars['Int']['output']>;
  prediction_score?: Maybe<Scalars['Float']['output']>;
  sentiment_comments_NEG?: Maybe<Scalars['Int']['output']>;
  sentiment_comments_POS?: Maybe<Scalars['Int']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type Posts_Ig = {
  __typename?: 'Posts_IG';
  Comments_IG: Array<Maybe<Comments_Ig>>;
  Date_post?: Maybe<Scalars['DateTime']['output']>;
  Day?: Maybe<Scalars['Int']['output']>;
  Day_of_Week?: Maybe<Scalars['String']['output']>;
  Followers?: Maybe<Scalars['Int']['output']>;
  Found_Hash?: Maybe<Scalars['Int']['output']>;
  Hashtags?: Maybe<Scalars['String']['output']>;
  Likes?: Maybe<Scalars['Int']['output']>;
  Month?: Maybe<Scalars['String']['output']>;
  Page_IG?: Maybe<Page_Ig>;
  Page_name?: Maybe<Scalars['String']['output']>;
  Post_text?: Maybe<Scalars['String']['output']>;
  Sentiment_POSTT?: Maybe<Scalars['String']['output']>;
  Time_post?: Maybe<Scalars['DateTime']['output']>;
  Total_NB_commentaires?: Maybe<Scalars['Int']['output']>;
  Usernames?: Maybe<Scalars['String']['output']>;
  Year?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['DateTime']['output'];
  hashtag_count?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  langue_post?: Maybe<Scalars['String']['output']>;
  len_post?: Maybe<Scalars['Int']['output']>;
  nature?: Maybe<Scalars['Int']['output']>;
  negative?: Maybe<Scalars['Int']['output']>;
  page_id?: Maybe<Scalars['Int']['output']>;
  positive?: Maybe<Scalars['Int']['output']>;
  prediction_label?: Maybe<Scalars['Int']['output']>;
  prediction_score?: Maybe<Scalars['Float']['output']>;
  sentiment_comments_NEG?: Maybe<Scalars['Int']['output']>;
  sentiment_comments_POS?: Maybe<Scalars['Int']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type Project = {
  __typename?: 'Project';
  Pages_FB?: Maybe<Array<Maybe<Page_Fb>>>;
  Pages_IG?: Maybe<Array<Maybe<Page_Ig>>>;
  Users: Users;
  created_at: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  get_All_Comments_FB?: Maybe<Array<Maybe<Comments_Fb>>>;
  get_All_Comments_IG?: Maybe<Array<Maybe<Comments_Ig>>>;
  get_All_Page_FB: Array<Page_Fb>;
  get_All_Page_FB_Posts?: Maybe<Array<Maybe<Posts_Fb>>>;
  get_All_Page_IG: Array<Page_Ig>;
  get_All_Page_IG_Posts?: Maybe<Array<Maybe<Posts_Ig>>>;
  get_All_Posts_FB: Array<Maybe<Posts_Fb>>;
  get_All_Posts_IG?: Maybe<Array<Maybe<Posts_Ig>>>;
  get_All_Project_Pages_FB?: Maybe<Array<Maybe<Page_Fb>>>;
  get_All_Project_Pages_IG?: Maybe<Array<Maybe<Page_Ig>>>;
  get_All_Projects?: Maybe<Array<Maybe<Project>>>;
  get_All_Sponsors?: Maybe<Array<Maybe<Sponsor>>>;
  get_All_User_Comments_On_Page_FB?: Maybe<Array<Maybe<Comments_Fb>>>;
  get_All_User_Comments_On_Page_IG?: Maybe<Array<Maybe<Comments_Ig>>>;
  get_All_User_Comments_On_Post_FB?: Maybe<Array<Maybe<Comments_Fb>>>;
  get_All_User_Comments_On_Post_IG?: Maybe<Array<Maybe<Comments_Ig>>>;
  get_All_User_Pages_FB?: Maybe<Array<Maybe<Page_Fb>>>;
  get_All_User_Project?: Maybe<Array<Maybe<Project>>>;
  get_All_Users: Array<Users>;
  get_All_Users_FB: Array<Users_Fb>;
  get_Comment_FB_By_ID?: Maybe<Comments_Fb>;
  get_Comment_IG_By_ID?: Maybe<Comments_Ig>;
  get_Comments_By_Post_FB_Id?: Maybe<Array<Maybe<Comments_Fb>>>;
  get_Comments_By_Post_IG_Id?: Maybe<Array<Maybe<Comments_Ig>>>;
  get_Page_FB_By_ID?: Maybe<Page_Fb>;
  get_Page_IG_By_ID?: Maybe<Page_Ig>;
  get_Post_FB_By_ID?: Maybe<Posts_Fb>;
  get_Post_IG_By_ID?: Maybe<Posts_Ig>;
  get_Project_By_Id?: Maybe<Project>;
  get_Sponsor_By_Id?: Maybe<Sponsor>;
  get_User_ById?: Maybe<Users>;
  get_Users_FB_By_Id?: Maybe<Users_Fb>;
};


export type QueryGet_Comment_Fb_By_IdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGet_Comment_Ig_By_IdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGet_Page_Fb_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGet_Page_Ig_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGet_Post_Fb_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGet_Post_Ig_By_IdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGet_Project_By_IdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGet_Sponsor_By_IdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGet_User_ByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGet_Users_Fb_By_IdArgs = {
  id: Scalars['ID']['input'];
};

export type Sponsor = {
  __typename?: 'Sponsor';
  Posts_FB: Array<Maybe<Posts_Fb>>;
  created_at: Scalars['DateTime']['output'];
  followers: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Users = {
  __typename?: 'Users';
  Projects: Array<Maybe<Project>>;
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Users_Fb = {
  __typename?: 'Users_FB';
  Page_FB: Array<Page_Fb>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  id_FB: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  user_TOKEN: Scalars['String']['output'];
};
