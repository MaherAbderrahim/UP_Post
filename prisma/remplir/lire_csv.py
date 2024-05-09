import csv

# Ouvrir le fichier CSV
with open('D:\\chcm\\UP_Post\\prisma\\remplir\\posts_predict.csv','r',encoding='utf-8') as fichier:
    lecteur_csv = csv.reader(fichier)
    
    # Lire les lignes une à une
    # Lire 10 ligne
    for i in range(7):
        ligne = next(lecteur_csv)
        print(ligne)


exemple_post ={
    Name_page: "Page Pierre Durand",
    Followers: 1000,
    Heure_post: "2024-05-08T16:15:33Z",
    Descriptions: "C'est un beau jour pour partager des moments précieux",
    Partages: 100,
    Hashtags: "#bonjour #partage",
    Nombre_de_commentaire: 10,
    Jadores: 500,
    Jaimes: 300,
    Solidaires: 100,
    Rires: 50,
    Colere: 20,
    Tristes: 10,
    Wouah: 20,
    Url_post: "http://example.com/post/1",
    Popularity: 1000,
    Jour_de_la_semaine: "Mercredi",
    Annee_post: 2024,
    Mois: "Mai",
    langue_post: "Français",
    Season: "Printemps",
    Nombre_Hashtags: 2,
    Found_Hash: "#bonjour #partage",
    Sentiment_post: "Positif",
    Longueur_caracteres_text: 50,
    sentiment_comments_POS: 10,
    sentiment_comments_NEG: 0,
    Timeline_visibility: "Public",
    Instagram_eligibility: "Eligible",
    Can_reply_privately: true,
    is_sponsored: false,
    prediction_label: 1,
    prediction_score: 0.9,
    page_id: 2,
}