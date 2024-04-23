'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaThumbsUp, FaComment } from 'react-icons/fa';

export type Post = {
  title: string;
  description: string;
  imageUrl: string;
  likes: number;
  comments: number;
  createdAt: string;
  success: boolean;
}

function PostCard({ post, isSelected, onClick }: { post: Post, isSelected: boolean, onClick: () => void }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <div
      className={`flex flex-col border rounded-lg p-4 mb-4 cursor-pointer ${
        isSelected ? 'border-blue-500' : 'border-gray-300'
      } ${post.success ? 'bg-green-100' : 'bg-red-100'}`}
      onClick={handleClick}
    >
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
          <div className="flex items-center">
            <span className="mr-2 flex items-center">
              <FaThumbsUp className="text-blue-500 mr-1" />
              {post.likes}
            </span>
            <span className="mr-2 flex items-center">
              <FaComment className="text-blue-500 mr-1" />
              {post.comments}
            </span>
          </div>
          {isSelected && (
            <div>
              <Link href="/dashboard/Upgrade">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                  Upgrade
                </button>
              </Link>
            </div>
          )}
        </div>
        {isSelected && (
          <div>
            <p className="text-gray-600 mb-2">{post.description}</p>
            <p className="text-gray-600">{`Date: ${post.createdAt}`}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function InstagramPosts({ posts }: { posts: Post[] }) {
  const [selectedPostIndex, setSelectedPostIndex] = useState<number | null>(null);

  const handlePostClick = (index: number) => {
    setSelectedPostIndex(index === selectedPostIndex ? null : index);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index}>
            <PostCard
              post={post}
              isSelected={index === selectedPostIndex}
              onClick={() => handlePostClick(index)}
            />
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}

export default function App() {
  const posts: Post[] = [
    {
      success:true,
      title: 'Post 1',
      description: 'Description du post 1',
      imageUrl: 'https://via.placeholder.com/500',
      likes: 10,
      comments: 5,
      createdAt: '2024-04-21',
    },
    {
      title: 'Post 2',
      description: 'Description du post 2',
      imageUrl: 'https://via.placeholder.com/500',
      likes: 15,
      comments: 7,
      createdAt: '2024-04-20',
      success:false,
    },
    {
      title: 'Post 3',
      description: 'Description du post 3',
      imageUrl: 'https://via.placeholder.com/500',
      likes: 20,
      comments: 8,
      createdAt: '2024-04-19',
      success:true,
    },
    {
      title: 'Post 1',
      description: 'Description du post 1',
      imageUrl: 'https://via.placeholder.com/500',
      likes: 10,
      comments: 5,
      createdAt: '2024-04-21',
      success:true,
    },
    {
      title: 'Post 2',
      description: 'Description du post 2',
      imageUrl: 'https://via.placeholder.com/500',
      likes: 15,
      comments: 7,
      createdAt: '2024-04-20',
      success:false,
    },
    {
      title: 'Post 3',
      description: 'Description du post 3',
      imageUrl: 'https://via.placeholder.com/500',
      likes: 20,
      comments: 8,
      createdAt: '2024-04-19',
      success:false,
    },
    // Ajoutez d'autres publications ici si nécessaire
  ];

  return <InstagramPosts posts={posts} />;
}
