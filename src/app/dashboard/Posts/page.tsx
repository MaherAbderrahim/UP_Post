'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import { ApolloClient, InMemoryCache, ApolloProvider, gql,useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

/*faire une requete pour recuperer touts les post d'une page*/

/*faire une requete pour recuperer tous les poste*/

const Posts =gql`
query Query {
  get_All_Posts_IG {
    Likes
    img_URL
    prediction_label
    Post_text
    sentiment_comments_NEG
    sentiment_comments_POS
    Total_NB_commentaires
  }
}
`
function GetAllPosts(){
  const { loading, error, data } = useQuery(Posts);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.get_All_Posts_IG.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

function PostCard({ post }: { post: any }) {
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
            <Link href="/dashboard/Upgrade">
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