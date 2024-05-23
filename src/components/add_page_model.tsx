import React,{ Fragment, useRef,useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useUser } from "@clerk/nextjs";
import { FaFacebookF as FacebookIcon, FaInstagram as InstagramIcon } from 'react-icons/fa';
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

const GET_USER=gql`
query Get_User_FB_By_FB_Id($idFb: String!) {
  get_User_FB_By_FB_Id(id_FB: $idFb) {
    id
    name
  }
}
`

const CREATE_PAGE_FB = gql`
mutation Create_Page_FB($name: String!, $idFb: String!, $pageToken: String!, $userId: Int!, $projectId: Int!, $imgUrl: String!) {
  create_Page_FB(name: $name, id_FB: $idFb, page_TOKEN: $pageToken, user_id: $userId, project_id: $projectId, img_URL: $imgUrl) {
    id_FB
    img_URL
  }
}
`
;

const GET_PAGE_FB =gql`
query Get_Page_FB_By_FB_Id($idFb: String!) {
  get_Page_FB_By_FB_Id(id_FB: $idFb) {
    id
  }
}
`

const GET_PAGE_IG=gql`
query Get_Page_IG_By_IG_Id($idIg: String!) {
  get_Page_IG_By_IG_Id(id_IG: $idIg) {
    id
  }
}
`
const CREATE_PAGE_IG=gql`
mutation Create_Page_IG($name: String!, $idIg: String!, $userToken: String!, $projectId: Int!, $pageFbId: Int!, $imgUrl: String!) {
  create_Page_IG(name: $name, id_IG: $idIg, user_TOKEN: $userToken, project_id: $projectId, page_FB_id: $pageFbId, img_URL: $imgUrl) {
    id
    name
  }
}
`

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
const getPageFBInfo = async (token: string) => {
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

const getPageIGInfo = async (page_FB_id: string, user_long_lived_access_token: string) => {
  const apiUrlPageIG = `http://127.0.0.1:8000/get_info_page_IG/?page_FB_id=${page_FB_id}&user_long_lived_access_token=${user_long_lived_access_token}`;
  try {
    const response = await fetch(apiUrlPageIG);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // Extraction du corps en JSON
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
}

const getPageFBPosts = async (pageid: string, page_token: string) => {
  const apiUrlPagePosts = `http://127.0.0.1:8000/get_data_FB/?pageid=${pageid}&page_token=${page_token}`;
  try {
    const response = await fetch(apiUrlPagePosts);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de l'appel de l'API des posts de la page", error);
  }
};

const getPageIGPosts = async (IG_id: string, page_FB_token: string,page_FB_id:string) => {
  const apiUrlPagePosts = `http://127.0.0.1:8000/get_data_IG/?IG_id=${IG_id}&page_FB_token=${page_FB_token}&page_FB_id=${page_FB_id}`;
  try {
    const response = await fetch(apiUrlPagePosts);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de l'appel de l'API des posts de la page", error);
  }
};

interface AddPageModelProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number;
}

const create_User_FB = async (name:any,id:number,user_TOKEN:any) => {
  const { data } = await client.mutate({
    mutation: CREATE_USER_FB,
    variables: { name: name, idFb: id, userToken: user_TOKEN },
  });
  console.log("creation_user: ", data.create_Users_FB);
  return data.create_Users_FB.id
}

const create_Page_FB = async(name: any,FBid: any,access_token: any,userid: any,project_id: number,imgurl: any)=> {
  const { data } = await client.mutate({
    mutation: CREATE_PAGE_FB,
    variables: { 
      name: name, 
      idFb: FBid, 
      pageToken: access_token, 
      userId: userid, 
      projectId: project_id, 
      imgUrl: imgurl },
  });
  console.log("creation_page_FB: ", data.create_Page_FB);
  return data.create_Page_FB.id
}

const create_Page_IG = async(name: any,IGid: any,userToken: any,projectId: any,page_FB_id: any,imgUrl: any)=> {
  const { data } = await client.mutate({
    mutation: CREATE_PAGE_IG,
    variables: { 
      name: name,
      idIg: IGid,
      userToken: userToken,
      projectId:projectId, 
      pageFbId: page_FB_id,
      imgUrl: imgUrl
    },
  });
  console.log("creation_page_FB: ", data.create_Page_FB);
  return data.create_Page_FB.id
}


export default function AddPageModel({ isOpen, onClose, projectId}: AddPageModelProps) {
  const cancelButtonRef = useRef(null);
  const [user_id,setuser_id]=useState(null);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);


  const code="AQD76rwg26y4S-iyZGM8GcrM_ui2QMRN-hReBjG-oWjjZlfYbA9f8PdF_Dzvt47Fwg80bXaCB9gHU9eHEM12RuP2qJeOHH9DAS35u09CAnO7ua6ELCVUKh9m4f1mmsE9_11MwNJLbTGIy1bEQxHrVyrVYtCcznnff2ZryOGg1SHpwU3zb5aP7JgRr18GcgH8e0lAUnCt9bXJlLP-NKbt3QC6M8uXWQ02wZJk2hmdb38CjCHqV-OqAnA9RDZcsYds6idpyqxHM6aIJ0NjSzSA5shw-ghfxD7mjtQpT8bfuY75Et_85Zg2lI9MhjHMk8H6OROyLV0NnOd9Pbf-0vvDyIzr5QuKo86H7W4RKepKi622KauNXteSswYzVmtrjKmqpn8#_=_"
  
  
  // Mettez à jour votre fonction handleClickFacebook pour inclure l'appel à getPageFBPosts
  const handleClickFacebook = async () => {
    setLoading2(true);
    
    //const userToken = await getUserToken(code);
    const userToken = "EAAD143672KABO3KvBbEgkBmCXXR93L0kxm6EINxV4ZBFLWMQZCkSuqi4ILOx3kITiEMkhj1FanJTwZATxYPdZA9RKRvaGZBZAYXH7e70tYlAyNmNBZCxkv3A8fgMlnZABvo2COuS6YHmxhw2ysZAhDCiLJtxJxxi66JEIeaLZBMipe5HuKvKUM4lORorNxBZCOZBt5eY";
    
    // Obtenez le nom et l'ID de l'utilisateur
    const userNameId = await getUserNameId(userToken);
    console.log("userNameId : ",userNameId.id);

    
    const existinguser= await client.query(
      {
        query:GET_USER,
        variables:{
          idFb:userNameId.id
        }
      }
    )
    console.log("existinguser = ",existinguser)
    // Créez un nouvel utilisateur FB avec le nom et l'ID obtenus s'il nexiste pas dans la base 
    if(existinguser.data.get_User_FB_By_FB_Id===null){
      const pageInfo = await getPageFBInfo(userToken);
      console.log("pageInfo : ",pageInfo);
      const allPagePosts = [];
      if (pageInfo) { // Vérifiez si pageInfo est défini
        for (const page of pageInfo) {
          const pagePosts = await getPageFBPosts(page.id, page.access_token);
          allPagePosts.push(pagePosts);
          const existingpage= await client.query(
            {
              query:GET_PAGE_FB,
              variables:{
                idFb:page.id
              }
            }
          )
          console.log("Posts: ",allPagePosts);
          if(existingpage.data.get_Page_FB_By_FB_Id===null){
            const pageid=create_Page_FB(page.name,page.id,page.access_token,parseInt(await create_User_FB(userNameId.name, userNameId.id, userToken)),1,pagePosts.picture.data.url)
          }
          setLoading2(false);
        };
      }
    }
    else{
      const pageInfo = await getPageFBInfo(userToken);
      console.log("pageInfo : ",pageInfo);
      const allPagePosts = [];
      if (pageInfo) { // Vérifiez si pageInfo est défini
        for (const page of pageInfo) {
          const pagePosts = await getPageFBPosts(page.id, page.access_token);
          allPagePosts.push(pagePosts);
          const existingpage= await client.query(
            {
              query:GET_PAGE_FB,
              variables:{
                idFb:page.id
              }
            }
          )
          console.log("Posts: ",allPagePosts);
          
          if(existingpage.data.get_Page_FB_By_FB_Id===null){
            const pageid=create_Page_FB(page.name,page.id,page.access_token,existinguser.data.get_User_FB_By_FB_Id.id,1,pagePosts.picture.data.url)
            console.log(pageid)
          }
          setLoading2(false);
        };
      }
    }
  }        
    

  
  const handleClickInstagram = async (projectId: number) => {
    setLoading3(true);
    const userToken = "EAAD143672KABO7K01bh9eyZBVL9sJ725OBfQTa7IyzsAUpoKlExknvMuLidKu5KOUrG8tQJT4TXXaVrz47tTr6f2Pt5FzMtQOppscMGQ2gq7p1ylef7KTueGuOokjrKYRmuzA7IIjOZBq8MbvHyZCNX1aq9aeitTSXuUCce65bW3i4S4pVXJ33fVF8vEWaP";
    console.log(projectId)
    // Obtenez le nom et l'ID de l'utilisateur
    const userNameId = await getUserNameId(userToken);
    console.log("userNameId : ",userNameId.id);

    const existinguser= await client.query(
      {
        query:GET_USER,
        variables:{
          idFb:userNameId.id
        }
      }
    )
    // Créez un nouvel utilisateur FB avec le nom et l'ID obtenus s'il nexiste pas dans la base 
    if(existinguser.data===null){

      const { data } = await client.mutate({
        mutation: CREATE_USER_FB,
        variables: { name: userNameId.name, idFb: userNameId.id, userToken: userToken },
      });
      console.log("creation_user: ", data.create_Users_FB);
      setuser_id(data.create_Users_FB.id)
    }


    const pageFBInfo = await getPageFBInfo(userToken);
    console.log("pageFBInfo : ",pageFBInfo);
    // Vérifiez que pageFBInfo est un tableau 
    if (pageFBInfo) {
      // Créez une page FB avec le nom et l'ID obtenus s'il nexiste pas dans la base
      const pagePostsFB = await getPageFBPosts(pageFBInfo[0].id, pageFBInfo[0].access_token);
      const existingpageFB= await client.query(
        {
          query:GET_PAGE_FB,
          variables:{
            idFb:pageFBInfo[0].id
          }
        }
      )
      if(existingpageFB.data.get_Page_FB_By_FB_Id===null){
        const { data } = await client.mutate({
          mutation: CREATE_PAGE_FB,
          variables: { 
            name: pageFBInfo[0].name, 
            idFb: pageFBInfo[0].id, 
            pageToken: pageFBInfo[0].access_token, 
            userId: user_id, 
            projectId: 1, 
            imgUrl: pagePostsFB.picture.data.url },
        });
        console.log("creation_page_FB: ", data.create_Page_FB);
      }
      // Obtenez les informations de la page Instagram 
      const IGinfo = await getPageIGInfo(pageFBInfo[0].id,userToken );
      console.log("IGinfo = ",IGinfo)
      const posts = await getPageIGPosts( IGinfo.id,pageFBInfo[0].access_token,pageFBInfo[0].id)
      console.log("Posts Instagram :", posts);
      //verifier si la page existe
      const existingpage= await client.query(
        {
          query:GET_PAGE_IG,
          variables:{
            idIg:IGinfo.id
          }
        }
      )
      const existingpageFB1= await client.query(
        {
          query:GET_PAGE_FB,
          variables:{
            idFb:pageFBInfo[0].id
          }
        }
      )
      if(existingpage.data.get_Page_IG_By_IG_Id===null){
        const { data } = await client.mutate({
          mutation: CREATE_PAGE_IG,
          variables: { 
            name: IGinfo.name,
            idIg: IGinfo.id,
            userToken: userToken,
            projectId: 1, 
            pageFbId: existingpageFB1.data.get_Page_FB_By_FB_Id.id,
            imgUrl: posts[1].profile_pic
          },
        });
        console.log("page", IGinfo.name," ig with ");
      }
    }
    setLoading3(false);
  };

  const handleRedirect = () => {
    setLoading(true);
    const redirectUrl = "https://www.facebook.com/v2.10/dialog/oauth?client_id=270357432621216&redirect_uri=https://vachetaureau.netlify.app/&scope=business_management,ads_management,instagram_manage_comments,instagram_manage_insights,instagram_content_publish,page_events,pages_show_list,pages_read_engagement,pages_read_user_content,instagram_basic";
    window.open(redirectUrl, '_blank');
    setLoading(false);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={onClose}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            ​
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-3 sm:gap-3 sm:grid-flow-row-dense">
              <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={handleRedirect} 
                  disabled={loading}
                >
                  {loading ? 'Chargement...' : 'Obtenir le code'}
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                  onClick={handleClickFacebook} 
                  disabled={loading2}
                >
                  <FacebookIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                  {loading2 ? 'Chargement...' : 'Facebook'}
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:text-sm"
                  onClick={() => handleClickInstagram(projectId)} 
                  disabled={loading3}
                >
                  <InstagramIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                  {loading3 ? 'Chargement...' : 'Instagram'}
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={onClose}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
