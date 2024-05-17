'use client'
import { useState, useEffect } from 'react';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import { ApolloClient, InMemoryCache, ApolloProvider, gql,useQuery } from '@apollo/client';
import Link from 'next/link';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

/*recuperer tout les projet*/
const post =gql`
query Query {
  get_All_Projects {
    id
    description
    name
  }
}
`

type Post = {
  description: string;
  hash: string;
  imageUrl: string;
}


const post_up: Post = {
  description: `🌟 Découvrez notre gamme de compléments alimentaires chez GymBuddy ! 🌟
  💪 Besoin d'un coup de pouce pour atteindre vos objectifs sportifs ? Nos compléments alimentaires sont là pour vous aider à maximiser vos performances et à optimiser votre récupération.
  ✅ Des protéines de haute qualité pour favoriser la croissance musculaire.
  ✅ Des acides aminés essentiels pour une récupération optimale.
  ✅ Des boosters d'énergie pour vous donner un coup de fouet avant l'entraînement.
  Rejoignez la communauté GymBuddy dès aujourd'hui et donnez à votre corps les nutriments dont il a besoin pour exceller ! 💪💥`,
  hash: '#GymBuddy #ComplémentsAlimentaires #PerformanceSportive #Fitness #Muscle #Récupération #Entraînement #Nutrition #BienÊtre #Santé #Objectifs #Athlète #Protéines #AcidesAminés #Énergie #FormePhysique',
  imageUrl: 'https://th.bing.com/th/id/OIG2.0Nwn4DqSy_koamoGayHw?w=1024&h=1024&rs=1&pid=ImgDetMain&fbclid=IwZXh0bgNhZW0CMTAAAR3RqS06hsUa99J2nN510ea1-5tNc4ojGsqQKsr-b7ek8eleFucaPsBxFbc_aem_AfsXOI_3BQOLUoatSdXgHBs-Tn5E5UrFBf70d54vocet2REVx9wkgFpLu4JHwJNa6IzSDnWxQRvRhN_63121uvw5',
}

function PostCard({ post }: { post: Post }) {

  return (
    <div className='flex flex-col border rounded-lg p-4 mb-4 border-gray-300 '>
      <img
        src={post.imageUrl}
        alt=""
        className="w-full h-auto rounded-lg mb-4"
      />
      <div className="flex flex-col">
        <div className="mb-2">
          <h2 className="font-bold text-lg">{post.description}</h2>
        </div>
        <div className="mb-2 flex items-center justify-between">
        </div>
        <div>
          <p className="text-gray-600 mb-2">{post.hash}</p>
        </div>
      </div>
    </div>
  );
}

export default function page() {
  const [isLoading, setIsLoading] = useState(false);
  const [isPostVisible, setIsPostVisible] = useState(false); // Add this line

  const handleClick = async () => {
    setIsLoading(true);
    // Simulate a delay (e.g., fetching data, performing calculations)
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsPostVisible(true); // Add this line
  };

  return (
    <main>
      <div className='pb-3 pt-10'>
          <h1 className="text-2xl font-semibold text-gray-900">Améliorer un Poste</h1>
      </div>
  {/* Primary column */}
  <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
  <section className="min-w-0 flex-1 flex flex-col overflow-y-auto lg:order-last lg:w-1/2 p-4">
    <div className="flex flex-col items-center justify-center h-full">
      {!isLoading &&!isPostVisible && (
        <button
          onClick={handleClick}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Upgrade 
        </button>
      )}
      {isLoading && (
        <ArrowCircleRightIcon className="animate-spin h-5 w-5 text-blue-500" />
      )}
      {isPostVisible && (
        <div className="flex flex-col items-center mt-5 p-5 ">
          <PostCard post={post_up} />
          <Link href="">
            <button
              className="w-full mt-4 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-900"
            >
              Post now...
            </button>
          </Link> 
      </div>
      )}
    </div>
  </section>

  {/* Secondary column (hidden on smaller screens) */}
  <aside className="lg:block lg:flex-shrink-0 lg:order-first lg:w-1/2 p-4">
    <div className="flex flex-col items-center mt-5 p-5 ">
      <PostCard post={post} />
      <Link href="/dashboard/Posts">
        <button
          className="w-full mt-4 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-900"
        >
          Back to Posts
        </button>
      </Link> 
    </div>
  </aside>
  </div>
</main>
  )
}
