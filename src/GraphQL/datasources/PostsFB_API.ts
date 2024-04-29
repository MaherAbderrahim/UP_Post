import type { PrismaClient } from "@prisma/client";
import type { PostsFBModel } from "../model";

export class PostsFBService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get_All_Posts_FB(): Promise<PostsFBModel[]> {
    return await this.prisma.posts_FB.findMany();
  }

  async get_All_Page_Posts(id:number) : Promise<PostsFBModel[]>{
    return await this.prisma.posts_FB.findMany({
      where: {
        page_id:id,
      },
    });
  }

  async get_Post_FB_By_Id(id: number): Promise<PostsFBModel | null> {
    return await this.prisma.posts_FB.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create_Post_FB(
    Name_page: string,
    Followers: number,
    Heure_post: Date,
    Descriptions: string,
    Partages: number,
    Hashtags: string,
    Nombre_de_commentaire: number,
    Jadores: number,
    Jaimes: number,
    Solidaires: number,
    Rires: number,
    Colere: number,
    Tristes: number,
    Wouah: number,
    Url_post: string,
    Popularity: number,
    Jour_de_la_semaine: string,
    Annee_post: number,
    Mois: string,
    langue_post: string,
    Season: string,
    Nombre_Hashtags: number,
    Found_Hash: string,
    Sentiment_post: string,
    Longueur_caracteres_text: number,
    sentiment_comments_POS: number,
    sentiment_comments_NEG: number,
    Timeline_visibility: string,
    Instagram_eligibility: string,
    Can_reply_privately: boolean,
    is_sponsored: boolean,
    prediction_label: number,
    prediction_score: number,
    page_id: number
  ): Promise<PostsFBModel> {
    return await this.prisma.posts_FB.create({
      data: {
        Name_page: Name_page,
        Followers: Followers,
        Heure_post: Heure_post,
        Descriptions: Descriptions,
        Partages: Partages,
        Hashtags: Hashtags,
        Nombre_de_commentaire: Nombre_de_commentaire,
        Jadores: Jadores,
        Jaimes: Jaimes,
        Solidaires: Solidaires,
        Rires: Rires,
        Colere: Colere,
        Tristes: Tristes,
        Wouah: Wouah,
        Url_post: Url_post,
        Popularity: Popularity,
        Jour_de_la_semaine: Jour_de_la_semaine,
        Annee_post: Annee_post,
        Mois: Mois,
        langue_post: langue_post,
        Season: Season,
        Nombre_Hashtags: Nombre_Hashtags,
        Found_Hash: Found_Hash,
        Sentiment_post: Sentiment_post,
        Longueur_caracteres_text: Longueur_caracteres_text,
        sentiment_comments_POS: sentiment_comments_POS,
        sentiment_comments_NEG: sentiment_comments_NEG,
        Timeline_visibility: Timeline_visibility,
        Instagram_eligibility: Instagram_eligibility,
        Can_reply_privately: Can_reply_privately,
        is_sponsored: is_sponsored,
        prediction_label: prediction_label,
        prediction_score: prediction_score,
        page_FB: {
          connect: {
            id: page_id,
          },
        },
      },
    });
  }

  async update_Post_FB(
    id: number,
    Name_page: string,
    Followers: number,
    Heure_post: Date,
    Descriptions: string,
    Partages: number,
    Hashtags: string,
    Nombre_de_commentaire: number,
    Jadores: number,
    Jaimes: number,
    Solidaires: number,
    Rires: number,
    Colere: number,
    Tristes: number,
    Wouah: number,
    Url_post: string,
    Popularity: number,
    Jour_de_la_semaine: string,
    Annee_post: number,
    Mois: string,
    langue_post: string,
    Season: string,
    Nombre_Hashtags: number,
    Found_Hash: string,
    Sentiment_post: string,
    Longueur_caracteres_text: number,
    sentiment_comments_POS: number,
    sentiment_comments_NEG: number,
    Timeline_visibility: string,
    Instagram_eligibility: string,
    Can_reply_privately: boolean,
    is_sponsored: boolean,
    prediction_label: number,
    prediction_score: number,
    page_id: number
  ): Promise<PostsFBModel> {
    return await this.prisma.posts_FB.update({
      where: {
        id: id,
      },
      data: {
        Name_page: Name_page,
        Followers: Followers,
        Heure_post: Heure_post,
        Descriptions: Descriptions,
        Partages: Partages,
        Hashtags: Hashtags,
        Nombre_de_commentaire: Nombre_de_commentaire,
        Jadores: Jadores,
        Jaimes: Jaimes,
        Solidaires: Solidaires,
        Rires: Rires,
        Colere: Colere,
        Tristes: Tristes,
        Wouah: Wouah,
        Url_post: Url_post,
        Popularity: Popularity,
        Jour_de_la_semaine: Jour_de_la_semaine,
        Annee_post: Annee_post,
        Mois: Mois,
        langue_post: langue_post,
        Season: Season,
        Nombre_Hashtags: Nombre_Hashtags,
        Found_Hash: Found_Hash,
        Sentiment_post: Sentiment_post,
        Longueur_caracteres_text: Longueur_caracteres_text,
        sentiment_comments_POS: sentiment_comments_POS,
        sentiment_comments_NEG: sentiment_comments_NEG,
        Timeline_visibility: Timeline_visibility,
        Instagram_eligibility: Instagram_eligibility,
        Can_reply_privately: Can_reply_privately,
        is_sponsored: is_sponsored,
        prediction_label: prediction_label,
        prediction_score: prediction_score,
        page_FB: {
          connect: {
            id: page_id,
          },
        },
      },
    });
  }

  async delete_Post_FB(id: number): Promise<PostsFBModel> {
    return await this.prisma.posts_FB.delete({
      where: {
        id: id,
      },
    });
  }
}