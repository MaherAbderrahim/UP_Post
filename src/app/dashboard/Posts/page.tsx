'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import { ApolloClient, InMemoryCache, ApolloProvider, gql,useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChevronRightIcon } from '@heroicons/react/outline';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

/*faire une requete pour recuperer touts les post d'une page*/
const post_IG = gql`
query Get_All_Page_IG_Posts_By_name($name: String!) {
  get_All_Page_IG_Posts_By_name(name: $name) {
    id
    img_URL
    Likes
    sentiment_comments_NEG
    sentiment_comments_POS
    Total_NB_commentaires
    Hashtags
    Post_text
    prediction_label
  }
}
`

const post_FB = gql`
query Get_All_Page_FB_Posts_By_name($name: String!) {
  get_All_Page_FB_Posts_By_name(name: $name) {
    id
    Colere
    Descriptions
    Jadores
    Jaimes
    Nombre_de_commentaire
    Partages
    Rires
    Solidaires
    img_URL
    Tristes
    Wouah
    prediction_label
    sentiment_comments_NEG
    sentiment_comments_POS
  }
}
`




/*faire une requete pour recuperer tous les poste*/

function GetAllPosts(){
  const [name, setName] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') { // Check if window is defined
      setName(new URLSearchParams(window.location.search).get('name'));
      setType(new URLSearchParams(window.location.search).get('type'));
    }
  }, [window?.location?.search]); // Listen for changes in the URL

  const { loading: loadingIG, error: errorIG, data: dataIG } = useQuery(post_IG, {
    variables: { name },
    skip: type !== 'Instagram', // Skip this query if type is not Instagram
  });

  const { loading: loadingFB, error: errorFB, data: dataFB } = useQuery(post_FB, {
    variables: { name },
    skip: type !== 'Facebook', // Skip this query if type is not Facebook
  });

  if (type === 'Instagram') {
    if(loadingIG) return("loading...")
    console.log(dataIG)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {dataIG.get_All_Page_IG_Posts_By_name.map((post: any) => (
        <PostCardIG key={post.id} post={post} />
      ))}
    </div>
    );
  }
 else if (type === 'Facebook') {
  if(loadingFB) return("loading...")
  console.log(dataFB)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {dataFB.get_All_Page_FB_Posts_By_name.map((post: any) => (
        <PostCardFB key={post.id} post={post} />
      ))}
    </div>
    );

  }
  else{
    return(
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <p className="text-xl">
          <a href="/dashboard/Projets" className="hover:underline">
              please select a page
          </a>
          
        </p>
      </div>
    </div>
    )
  }

  
}

function PostCardIG({ post }: { post: any }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`flex flex-col border rounded-lg p-4 mb-4 cursor-pointer border-gray-300 ${
        isSelected ? 'border-blue-500' : 'border-gray-300'
      } ${post.prediction_label === 1 ? 'bg-green-100' : 'bg-red-100'}`}
      style={{ maxHeight: isSelected ? 'unset' : '400px' }} // Si sélectionné, la hauteur n'est pas limitée
      onClick={handleClick}
    >
      <img
        src={post.img_URL}
        alt={post.Post_text}
        className="w-full h-auto rounded-lg mb-4"
        style={{ maxHeight: isSelected ? '100%' : '200px', width: 'auto' }} // Si sélectionné, l'image prend la hauteur totale de la carte
      />
      <div className="flex flex-col">
        <div className="mb-2">
          <h2 className="font-bold text-lg">{post.Post_text}</h2>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <span className="mr-2 flex items-center">
              <FaThumbsUp className="text-blue-500 mr-1" />
              {post.Likes}
            </span>
            <span className="mr-2 flex items-center">
              <FaComment className="text-blue-500 mr-1" />
              {post.Total_NB_commentaires}
            </span>
          </div>
          {isSelected && (
            <Link href={`/dashboard/Upgrade?id=${post.id}&type=Instagram&name=${new URLSearchParams(window.location.search).get('name')}`}>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Upgrade
              </button>
          </Link>
          )}
        </div>
        {isSelected && (
          <div>
            <p className="text-gray-600 mb-2">{`Positive Comments: ${post.sentiment_comments_POS}`}</p>
            <p className="text-gray-600">{`Negative Comments: ${post.sentiment_comments_NEG}`}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function PostCardFB({ post }: { post: any }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`flex flex-col border rounded-lg p-4 mb-4 cursor-pointer border-gray-300 ${
        isSelected ? 'border-blue-500' : 'border-gray-300'
      } ${post.prediction_label === 1 ? 'bg-green-100' : 'bg-red-100'}`}
      style={{ maxHeight: isSelected ? 'unset' : '400px' }} // Si sélectionné, la hauteur n'est pas limitée
      onClick={handleClick}
    >
      <img
        src={post.img_URL}
        alt={post.Post_text}
        className="w-full h-auto rounded-lg mb-4"
        style={{ maxHeight: isSelected ? '100%' : '200px', width: 'auto' }} // Si sélectionné, l'image prend la hauteur totale de la carte
      />
      <div className="flex flex-col">
        <div className="mb-2">
          <h2 className="font-bold text-lg">{post.Descriptions}</h2>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <span className="mr-2 flex items-center">
              <FaThumbsUp className="text-blue-500 mr-1" />
              {post.Jaimes}
            </span>
            <span className="mr-2 flex items-center">
              <FaComment className="text-blue-500 mr-1" />
              {post.Nombre_de_commentaire}
            </span>
          </div>
          {isSelected && (
            <Link href={`/dashboard/Upgrade?id=${post.id}&type=Facebook&name=${new URLSearchParams(window.location.search).get('name')}`}>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Upgrade
              </button>
          </Link>
          )}
        </div>
        {isSelected && (
          <div>
            <p className="text-gray-600 mb-2">{`Positive Comments: ${post.sentiment_comments_POS}`}</p>
            <p className="text-gray-600">{`Negative Comments: ${post.sentiment_comments_NEG}`}</p>
          </div>
        )}
      </div>
    </div>
  );
}





export default function App() {
  return (
  <main>
    <div className='pb-5 pt-3'>
      <h1 className="text-2xl font-semibold text-gray-900">Postes</h1>
    </div>
    <ApolloProvider client={client}>
      <GetAllPosts/>
    </ApolloProvider>
  </main>  );
}