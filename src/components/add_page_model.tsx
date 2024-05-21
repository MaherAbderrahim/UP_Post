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

const CREATE_PAGE_FB = gql`
mutation Create_Page_FB($name: String!, $idFb: String!, $pageToken: String!, $userId: Int!, $projectId: Int!, $imgUrl: String!) {
  create_Page_FB(name: $name, id_FB: $idFb, page_TOKEN: $pageToken, user_id: $userId, project_id: $projectId, img_URL: $imgUrl) {
    id_FB
    img_URL
  }
}
`
;

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

const getPageFBPosts = async (pageid: string, page_token: string) => {
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


interface AddPageModelProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number;
}

export default function AddPageModel({ isOpen, onClose, projectId}: AddPageModelProps) {
  const { user } = useUser();
  const cancelButtonRef = useRef(null)
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const code="AQDhVHJqO_eoCWC6bLeeXgQrTBzqDDM_qIIxqhll_r0XWm0Jg2PU_mmmy0sSt1KYh3VLuCKNgR48jKBqKhxgm1sOC8flWG0iLmp1PuHFAKIddDE3ElIRl0LRGFeJgvJwQJsWVweZZzQ-NUdmeykX6zH6JUt4KwYuawzrtPiU8wOUPyzzj18RhvVj6aakj6H9ZuRC3pa5kdjBgTrwpuTbHUCRxrUtn7J-BsbBeAHLuf2ef--NGk_DhSwZ9xHhxkZo1nDZmYm3-A8NGKzMQkIsVgcehY2ifghA0qQa72lWt0YiyCrWQngAIi7IVxCj5qwjxojuJt-pCgkfuyDqFluG1Y0ihU1bhpxyJBKRmBHr4zWeCbpf84FuYvvehzXIySbI5zk#_=_"
  // Mettez à jour votre fonction handleClickFacebook pour inclure l'appel à getPageFBPosts
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
    

    const pageInfo = await getPageFBInfo(userToken);
    console.log("pageInfo : ",pageInfo);

    // Pour chaque page, obtenez les posts et stockez-les dans une constante
    const allPagePosts = [];
    if (pageInfo) { // Vérifiez si pageInfo est défini
      for (const page of pageInfo) {
        const pagePosts = await getPageFBPosts(page.id, page.access_token);
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

  const handleClickInstagram = (projectId: number) => {
    // Votre code pour Instagram ici
    console.log("project id : ", projectId)
  };

  const handleRedirect = () => {
    const redirectUrl = "https://www.facebook.com/v2.10/dialog/oauth?client_id=270357432621216&redirect_uri=https://vachetaureau.netlify.app/&scope=business_management,ads_management,instagram_manage_comments,instagram_manage_insights,instagram_content_publish,page_events,pages_show_list,pages_read_engagement,pages_read_user_content,instagram_basic";
    window.open(redirectUrl, '_blank');
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
                  disabled={loading2}
                >
                  <InstagramIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                  {loading2 ? 'Chargement...' : 'Instagram'}
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
