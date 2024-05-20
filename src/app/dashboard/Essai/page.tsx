"use client"
import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql,useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const CREATE_USER_FB = gql`
  mutation Mutation($name: String!, $idFb: String!, $userToken: String!) {
    create_Users_FB(name: $name, id_FB: $idFb, user_TOKEN: $userToken) {
      name
      id_FB
      id
    }
  }
`;

const CREATE_PAGE_FB = gql`
mutation Create_Page_FB($name: String!, $idFb: String!, $pageToken: String!, $userId: Int!, $projectId: Int!, $imgUrl: String!) {
  create_Page_FB(name: $name, id_FB: $idFb, page_TOKEN: $pageToken, user_id: $userId, project_id: $projectId, img_URL: $imgUrl) {
    id_FB
    img_URL
  }
}
`;

// Première fonction pour obtenir le token utilisateur
const getUserToken = async (code: string) => {
  const apiUrlUser = `http://127.0.0.1:8000/get_user_long_lived_access_token/?code=${code}`;
  try {
    const response = await fetch(apiUrlUser);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Erreur lors de l'appel de l'API de User", error);
  }
};

const getUserNameId = async (token: string) => {
  const apiUrlUserNameId = `http://127.0.0.1:8000/get_user_name_id/?user_long_lived_access_token=${token}`;
  try {
    const response = await fetch(apiUrlUserNameId);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Erreur lors de l'appel de l'API de User Name ID", error);
  }
};

// Deuxième fonction pour obtenir les informations de la page
const getPageInfo = async (token: string) => {
  const apiUrlPage= `http://127.0.0.1:8000/get_page_FB_access_token/?user_long_lived_access_token=${token}`;
  try {
    const response = await fetch(apiUrlPage);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data } = await response.json(); // Accédez au tableau data
    console.log(data);
    // Vérifiez si data est un tableau
    if (Array.isArray(data)) {
      return data.map(page => ({id: page.id, name: page.name, access_token: page.access_token}));
    } else {
      console.error("Erreur : la réponse de l'API n'est pas un tableau");
    }
  } catch (error) {
    console.error("Erreur lors de l'appel de l'API des page", error);
  }
};

const getPagePosts = async (pageid: string, page_token: string) => {
  const apiUrlPagePosts = `http://127.0.0.1:8000/get_data_FB/?pageid=${pageid}&page_token=${page_token}`;
  try {
    const response = await fetch(apiUrlPagePosts);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Erreur lors de l'appel de l'API des posts de la page", error);
  }
};


const MaPage = () => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const code="AQAOxOmklUClx40KW47Ildd2DmxIsydSTF--9uk5ICZDbRr7UyamtYL8u-CtbWya0eSeZ7-sszDMKmlTMUYVzbG8m4qvssXkGp_HlTZlwiqpOwiyE4qleoie_lM9gwyvaXZuJLGh9onigWUHeUxwicxG-il95cB-Nli5DDa3PLhF_vlE1m68iSPq6_cx82jA0T8S26R42SSYHkkcVhL36dU2GwfrUQZLGKER4_zwvyDIl2mBrWYwx6C5sTrH8rX_cWd3zmeAx2PwCngP4nWp0rkVH6dQTTHqlt28HXf9t4PepxudH5Vs9eZBALPfT3tMUSsiw7HF74cG6oIYZdoT6fSk1jHjo1qtttlPoev6kaR2gHZhxe-5EIg7YIuDAxs8yZc#_=_"
  // Mettez à jour votre fonction handleClickFacebook pour inclure l'appel à getPagePosts
  const handleClickFacebook = async () => {
    setLoading(true);
    
    const userToken = await getUserToken(code);
    
    // Obtenez le nom et l'ID de l'utilisateur
    const userNameId = await getUserNameId(userToken);
    console.log("userNameId : ",userNameId);

    // Créez un nouvel utilisateur FB avec le nom et l'ID obtenus
    
    const { data } = await client.mutate({
      mutation: CREATE_USER_FB,
      variables: { name: userNameId.name, idFb: userNameId.id, userToken: userToken },
    });
    console.log("creation_user: ", data.create_Users_FB);
    const userid=data.create_Users_FB.id
    

    const pageInfo = await getPageInfo(userToken);
    console.log("pageInfo : ",pageInfo);

    // Pour chaque page, obtenez les posts et stockez-les dans une constante
    const allPagePosts = [];
    if (pageInfo) { // Vérifiez si pageInfo est défini
      for (const page of pageInfo) {
        const pagePosts = await getPagePosts(page.id, page.access_token);
        allPagePosts.push(pagePosts);
        const page_img_url=pagePosts.b
         // Créez une nouvelle page FB
        const { data:datapage } = await client.mutate({
          mutation: CREATE_PAGE_FB,
          variables: { name: page.name, idFb: page.id, pageToken: page.access_token, userId: userid, projectId: 1, imgUrl: pagePosts.picture.data.url },
        });
        console.log("creation datapage  : ",datapage);
      }
    }
    console.log("Posts: ",allPagePosts);
    setLoading(false);
  };

  const handleClickInstagram = () => {
    // Votre code pour Instagram ici
  };

  const handleRedirect = () => {
    const redirectUrl = "https://www.facebook.com/v2.10/dialog/oauth?client_id=270357432621216&redirect_uri=https://vachetaureau.netlify.app/&scope=business_management,ads_management,instagram_manage_comments,instagram_manage_insights,instagram_content_publish,page_events,pages_show_list,pages_read_engagement,pages_read_user_content,instagram_basic";
    window.open(redirectUrl, '_blank');
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ position: 'absolute', top: 0 }}>Ajouter une page</h1>
      <button onClick={handleRedirect} disabled={loading} style={{ backgroundColor: 'gray', color: 'white', marginTop: '50%' }}>
        {loading ? 'Chargement...' : 'Obtenir le code'}
      </button>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
        <button onClick={handleClickFacebook} disabled={loading2} style={{ backgroundColor: 'blue', color: 'white', marginRight: '10px' }}>
          {loading2 ? 'Chargement...' : 'Facebook'}
        </button>
        <button onClick={handleClickInstagram} disabled={loading2} style={{ backgroundColor: 'red', color: 'white' }}>
          {loading2 ? 'Chargement...' : 'Instagram'}
        </button>
      </div>
    </div>
  );
};

export default MaPage;
