'use client'
import { CheckCircleIcon } from '@heroicons/react/solid';
import { useState } from 'react';
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
        <div>
          <p className="text-gray-600 mb-2">{post.description}</p>
          <p className="text-gray-600">{`Date: ${post.createdAt}`}</p>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
    });
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setSubmitted(true);
  };

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="flex-1 flex overflow-hidden">
      {/* Left column - Form */}
      <section className="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-first p-4 mt-40">
        <h2 className="text-2xl font-semibold mb-4">Créer un nouveau poste</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Thème"
            rows={4}
            className="border rounded-lg px-4 py-2"
          />
          {!loading && !submitted &&(
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Créer le poste
            </button>
          )}
          {loading &&  (
            <ArrowCircleRightIcon className="animate-spin h-5 w-5 text-blue-500" />
          )}
          {submitted && (
            <div className="p-4 shadow-md rounded flex items-start space-x-2">
            <CheckCircleIcon className="h-5 w-5 text-green-500" />
            <div>
              <h3>POST CREATED ....</h3>
            </div>
          </div>
          
          )}
        </form>
      </section>

      {/* Right column - Post */}
      {submitted &&  (
        <aside className="flex-1 flex flex-col justify-center items-center p-4">
          <PostCard post={post} />
        </aside>
      )}    
        
    </main>
  )
}
