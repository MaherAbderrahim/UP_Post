import {PageIGModel,CommentsIGModel} from "."
export type PostsIGModel = {
    id: number,
    Page_name: string,
    Followers: number,
    Post_text: string,
    Usernames: string,
    Likes: number,
    Total_NB_commentaires: number,
    len_post: number,
    langue_post: string,
    Hashtags: string,
    hashtag_count: number,
    Found_Hash: number,
    Day_of_Week: string,
    Time_post: Date,
    Day: number,
    Month: string,
    Year: number,
    Date_post: Date,
    Sentiment_POSTT: string,
    sentiment_comments_POS: number;
    sentiment_comments_NEG: number;
    positive: number,
    negative: number,
    nature: number,
    prediction_label: number,
    prediction_score: number,
    created_at : Date;
    updated_at : Date;

    // Foreign keys

    page_id: number;
    page_IG?: PageIGModel;
  };