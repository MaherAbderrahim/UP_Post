'use client'
import { useState, useEffect } from 'react';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';

type Post = {
  title: string;
  description: string;
  imageUrl: string;
  likes: number;
  comments: number;
  createdAt: string;
  success: boolean;
}

const post: Post = {
  title: 'Post 1',
  description: 'Description du post 1',
  imageUrl: 'https://via.placeholder.com/500',
  likes: 10,
  comments: 5,
  createdAt: '2024-04-21',
  success: true,
}

const post_up: Post = {
  title: 'Post 1 ameliore',
  description: 'Description ameliore du post 1',
  imageUrl: 'https://via.placeholder.com/500',
  likes: 15,
  comments: 7,
  createdAt: '2024-04-20',
  success: false,
}

function PostCard({ post }: { post: Post }) {

  return (
    <div className='flex flex-col border rounded-lg p-4 mb-4 border-gray-300 '>
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-auto rounded-lg mb-4"
      />
      <div className="flex flex-col">
        <div className="mb-2">
          <h2 className="font-bold text-lg">{post.title}</h2>
        </div>
        <div className="mb-2 flex items-center justify-between">
        </div>
        <div>
          <p className="text-gray-600 mb-2">{post.description}</p>
          <p className="text-gray-600">{`Date: ${post.createdAt}`}</p>
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
    <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
  {/* Primary column */}
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
</main>
  )
}
