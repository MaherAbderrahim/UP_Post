'use client'

import { useState } from 'react';

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
    });
  };

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
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Créer le poste
          </button>
        </form>
      </section>

      {/* Right column - Post */}
      <aside className="flex-1 flex flex-col justify-center items-center p-4">
        <PostCard post={post} />
      </aside>
    </main>
  )
}
