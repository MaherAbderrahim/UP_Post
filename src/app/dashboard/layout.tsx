'use client'
import "@/app/globals.css";
import { usePathname, useSearchParams } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react'
//flyout Menu imports
import { Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

//import components
import userMeta from "@/components/user-meta";

//Clerk imports
import { UserButton,useUser  } from "@clerk/nextjs";
//select menu imports 
import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'

/* This example requires Tailwind CSS v2.0+ */
import React,{ Fragment, useState,useEffect, Children } from 'react'

import {
  CalendarIcon,
  ArrowCircleUpIcon,
  FolderIcon,
  ChartBarIcon,
  PlusCircleIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import Link from "next/link";
import UserMeta from "@/components/user-meta";


  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: ChartBarIcon },
    { name: 'Team', href: '/dashboard/Team', icon: UsersIcon },
    { name: 'Posts', href: '/dashboard/Posts', icon: FolderIcon },
    { name: 'Upgrade a post', href: '/dashboard/Upgrade', icon: ArrowCircleUpIcon },
    { name: 'Create a post', href: '/dashboard/Create', icon: PlusCircleIcon },
  ];

  //flyout menu const
  const solutions = [
    { name: 'Blog', description: 'Learn about tips, product updates and company culture.', href: '#' },
    {
      name: 'Help Center',
      description: 'Get all of your questions answered in our forums of contact support.',
      href: '#',
    },
    { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
    { name: 'Events', description: 'Check out webinars with experts and learn about our annual conference.', href: '#' },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
  ]

  //select menu const
  const people = [
    {
      id: 1,
      name: 'Page 1',
      
    },
    {
      id: 2,
      name: 'Page 2',
    },
    {
      id: 3,
      name: 'Page 3'
    },
    {
      id: 4,
      name: 'Page 4',
    },
    {
      id: 5,
      name: 'Page 5',
    },
  ]
  const people1 = [
    {
      id: 1,
      name: 'Page 1',
      
    },
    {
      id: 2,
      name: 'Page 2',
    },
    {
      id: 3,
      name: 'Page 3'
    },
    {
      id: 4,
      name: 'Page 4',
    },
    {
      id: 5,
      name: 'Page 5',
    },
  ]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function getLastWorldAfterSlash(input:string):string{
  const arr = input.split('/');
  if (arr[arr.length - 1]=="dashboard"){
    return "Dashboard";
  }
  if (arr[arr.length - 1]=="Create"){
    return "Create a post";
  }
  if (arr[arr.length - 1]=="Upgrade"){
    return "Upgrade a post";
  }
  return arr[arr.length - 1];

}


export default function RootLayout ( { children,
}: Readonly<{
  children: React.ReactNode;
}>)   {
  //select menu const
  const [selected, setSelected] = useState(people[3])
  const [selected1, setSelected1] = useState(people1[2])
  
  const pathname = usePathname();
    const [current, setCurrent] = useState(getLastWorldAfterSlash(pathname));
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
      localStorage.setItem('navItem', current);
    }, [current]);

    //current user clerk const
    const { isSignedIn, user, isLoaded } = useUser();


    //trying to fix the hydration error 
    return (
      <>
        {/*
        This example requires updating your template:
          
          
        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */ }
        {/*Project List*/}
        <div>
            {/*<div>
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 pt-5">
          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
            <div className="ml-4 mt-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Beeclick</h3>
                  <p className="text-sm text-gray-500">
                    Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, 
                    consectetur id nulla tempus. Fringilla egestas justo massa purus sagittis malesuada.
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
        <div>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
              {applications.map((application) => (
                <li key={application.applicant.email}>
                  <a href={application.href} className="block hover:bg-gray-50">
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="min-w-0 flex-1 flex items-center">
                        <div className="flex-shrink-0">
                          <img className="h-12 w-12 rounded-full" src={application.applicant.imageUrl} alt="" />
                        </div>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <p className="text-sm font-medium text-indigo-600 truncate">{application.applicant.name}</p>
                            <p className="mt-2 flex items-center text-sm text-gray-500">
                              <MailIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                              <span className="truncate">{application.applicant.email}</span>
                            </p>
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <p className="text-sm text-gray-900">
                                Applied on <time dateTime={application.date}>{application.dateFull}</time>
                              </p>
                              <p className="mt-2 flex items-center text-sm text-gray-500">
                                <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                {application.stage}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>*/}
        </div>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-15 w-auto"
                      src="/wereact_logo.jpeg"
                      alt="WeReact"
                    />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setCurrent(item.name)}
                        className={classNames(
                          item.name === current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.name === current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                            'mr-4 flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex bg-gray-700 p-4">
                <UserMeta />
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-13 w-auto"
                  src="/wereact_logo.jpeg"
                  alt="WeReact"
                />
              </div>
              <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setCurrent(item.name)}
                  className={classNames(
                    item.name === current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.name === current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                      'mr-4 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
            
            </div>
              <div className="flex-shrink-0 flex bg-gray-700 p-4">
                <UserMeta />
              </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>

          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               {children}
              </div>
             
            </div>
          </main>
          </div>
      </div>

     
    </>
    );
  }
