'use client'
import { CheckCircleIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';

type Post = {
  description: string;
  hash: string;
  imageUrl: string;
}

const post: Post = {
  title: "Get ready to sweat! 🏋️‍♀️💪 Exciting news, fitness fam! 🎉 Our brand-new Gym Buddy sport sale is NOW OPEN! 🛍️🏋️‍♂️ Score the best deals on top-notch gear and accessories to take your fitness journey to the next level! 💥 Don't miss out! 🕒️ Visit us today and get ready to crush your fitness goals! 💪🏼",
  description: '#SweatMode #FitnessMotivation #WorkoutInspiration #SportsSale #GymEssentials #GymLife #FitnessJourney #GearUp #FitnessGoals #FitnessCommunity #FitnessDeals #SportSale',
  imageUrl: 'https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/440378669_122100126938303675_516270909942028182_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sQKPEXb4NfMQ7kNvgEUS2C7&_nc_ht=scontent.ftun9-1.fna&oh=00_AYDVVidQVvwMYcEXRI4epkUokiUcTi4Jz-PLUvn03G-N9A&oe=6654EF0B',
}

async function UpgradePost(post:Post){
  const url=""
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const postUP :Post={
      description: data.Descriptions,
      hash: data.Hashtags,
      imageUrl: data.img_URL
    }
    return postUP;
  } catch (error) {
    console.error("Erreur lors de l'appel de l'API des posts de la page", error);
  }
}

function PostCard({ post }: { post: Post }) {
  return (
    <div className='flex flex-col border rounded-lg p-4 mb-4 border-gray-300 '>
      <img
        src={post.imageUrl}
        className="w-full h-auto rounded-lg mb-4"
      />
      <div className="flex flex-col">
        <div className="mb-2">
          <h2 className="font-bold text-lg">{post.description}</h2>
        </div>
        <div>
          <p className="text-gray-600 mb-2">{post.hash}</p>
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
            <div className="loading-container mx-auto"><ArrowCircleRightIcon className="animate-spin h-5 w-5 text-blue-500" /></div>
          )}
          {submitted && (
            <>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Créer un nouveau poste   
            </button>
            <div className="p-4 shadow-md rounded flex items-start space-x-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
                <div>
                  <h3>POST CREATED ....</h3>
                </div>
            </div>
          </>
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
