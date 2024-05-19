"use client"
/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon, ChevronRightIcon, MailIcon } from '@heroicons/react/solid'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import AddProjectModel from '@/components/add_project_model';
import React,{ useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql,useQuery } from '@apollo/client';
import Link from 'next/link';
import {  useUser,  } from "@clerk/nextjs";


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

/*recuperer tout les projet*/
const Projects =gql`
query Query($email: String!) {
  get_All_User_Project_By_Email(email: $email) {
    name
    id
    description
  }
}
`
/*recuperer tout les page d'un projet*/

const PageFB=gql`
query Get_All_By_Name_Project_Pages_FB($name: String!) {
  get_All_By_Name_Project_Pages_FB(name: $name) {
    id
    img_URL
    name
  }
}
`
const PageIG=gql`
query Get_All_By_Name_Project_Pages_IG($name: String!) {
  get_All_By_Name_Project_Pages_IG(name: $name) {
    id
    img_URL
    name
  }
}
`

function GetAllPagesIG({name}:{name:string}){
  const { loading, error, data } = useQuery(PageIG, {
    variables: { name }
  });
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p></p>; 
  return data.get_All_By_Name_Project_Pages_IG.map((page: any) => (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            <li key={page.id}>
              <a href="#" className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src={page.img_URL} alt="" />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-indigo-600 truncate">{page.name}</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div className="hidden md:block">
                            <FaInstagram className="text-pink-500 mt-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link href={`/dashboard/Posts?name=${page.name}&type=Instagram`}>
                      <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </Link>
                </div>
              </a>
            </li>
          </ul>
        </div>
    ))
  }

function GetAllPagesFB({name}:{name:string}){
  const { loading, error, data } = useQuery(PageFB, {
    variables: { name }
  });
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p></p>;
  return data.get_All_By_Name_Project_Pages_FB.map((page: any) => (
  <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          <li key={page.id}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src={page.img_URL} alt="" />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="text-sm font-medium text-indigo-600 truncate">{page.name}</p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        
                      </p>
                    </div>
                    <div className="hidden md:block">
                    <div className="hidden md:block">
                            <FaFacebook className="text-blue-600 mt-3" />
                        </div>
                    </div>
                  </div>
                </div>
                <Link href={`/dashboard/Posts?name=${page.name}&type=Facebook`}>
                      <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </Link>
              </div>
            </a>
          </li>
        </ul>
      </div>
  ))
}



function GetAllProjects() {
  const {  user } = useUser();
  const { loading, error, data } = useQuery(Projects, {
    variables: { email: user?.primaryEmailAddress?.emailAddress },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p></p>;
  console.log(data)
  console.log(data.get_All_User_Project_By_Email)
  /*parcourir les page*/

  if (data && data.get_All_User_Project_By_Email) {
    return data.get_All_User_Project_By_Email.map((project: any) => (
    <div key={project.id} className='pt-4'>
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <div className="flex items-center">
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{project.name}</h3>
                <p className="text-sm text-gray-500">
                {project.description}
                </p>
              </div>
            </div>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Ajouter une nouvelle page
          </button>
        </div>
        </div>
      </div>
      <GetAllPagesFB name={project.name}/>
      <GetAllPagesIG name={project.name}/>
    </div>
  ));
} else {
  return <p>No projects found</p>;
}
}

export default function Example() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ApolloProvider client={client}>
      <main>
        <div className='flex justify-between pb-3 pt-5'>
          <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
          <div>
            <button  onClick={() => setIsModalOpen(true)}>Créer un projet</button>
            <AddProjectModel isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
        <GetAllProjects/>
      </main>
    </ApolloProvider>
  )
}