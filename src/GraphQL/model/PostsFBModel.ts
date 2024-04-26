import {PageFBModel} from "."
export type PostsFBModel = {
    id: number;
    Name_page: string;
    Followers: number;
    Heure_post: Date;
    Descriptions: string;
    Partages: number;
    Hashtags: string;
    Nombre_de_commentaire: number;
    Jadores: number;
    Jaimes: number;
    Solidaires: number;
    Rires: number;
    Colere: number;
    Tristes: number;
    Wouah: number;
    Url_post: string;
    Popularity: number;
    Jour_de_la_semaine: string;
    Annee_post: number;
    Mois: string;
    langue_post: string;
    Season: string;
    Nombre_Hashtags: number;
    Found_Hash: string;
    Sentiment_post: string;
    Longueur_caracteres_text: number;
    sentiment_comments_POS: number;
    sentiment_comments_NEG: number;
    Timeline_visibility: string;
    Instagram_eligibility: string;
    Can_reply_privately: boolean;
    is_sponsored: boolean;
    prediction_label: number;
    prediction_score: number;
    created_at : Date;
    updated_at : Date;
    
    // Foreign keys

    page_id: number;
    page_FB?: PageFBModel;
  };