'use client'
import "@/app/globals.css";
import { usePathname, useSearchParams } from 'next/navigation';
import { UserButton } from "@clerk/nextjs";
import { Dialog, Transition } from '@headlessui/react'
//flyout Menu imports
import { Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

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
    return (
      <>
        {/*
        This example requires updating your template:
          
          
        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */ }

        <div>
            <Popover className="relative flex flex-col items-center text-center mt-10 ml-20  "> 
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  )}
                >
                  <span>Projects</span>
                  <ChevronDownIcon
                    className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-9 px-2 w-screen max-w-xs sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <Listbox value={selected} onChange={setSelected}>
                                {({ open }) => (
                                  <>
                                    <div className="relative">
                                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                        <span className="flex items-center">
                                          <span className="ml-3 block truncate">Projet 1 : {selected.name}</span>
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                          <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                      </Listbox.Button>

                                      <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                      >
                                        <Listbox.Options className="relative z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                          {people.map((person) => (
                                            <Listbox.Option
                                              key={person.id}
                                              className={({ active }) =>
                                                classNames(
                                                  active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                  'relative cursor-default select-none py-2 pl-3 pr-9'
                                                )
                                              }
                                              value={person}
                                            >
                                              {({ selected, active }) => (
                                                <>
                                                  <div className="flex items-center">
                                                    <span
                                                      className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                    >
                                                      {person.name}
                                                    </span>
                                                  </div>

                                                  {selected ? (
                                                    <span
                                                      className={classNames(
                                                        active ? 'text-white' : 'text-indigo-600',
                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                      )}
                                                    >
                                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                  ) : null}
                                                </>
                                              )}
                                        </Listbox.Option>
                                ))}
                                        </Listbox.Options>
                                      </Transition>
                                    </div>
                                  </>
                                )}
                        </Listbox>
                        <Listbox value={selected} onChange={setSelected}>
                                {({ open }) => (
                                  <>
                                    <div className="relative">
                                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                        <span className="flex items-center">
                                          <span className="ml-3 block truncate">Projet 2</span>
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                          <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                      </Listbox.Button>

                                      <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                      >
                                        <Listbox.Options className="relative z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                          {people1.map((person) => (
                                            <Listbox.Option
                                              key={person.id}
                                              className={({ active }) =>
                                                classNames(
                                                  active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                  'relative cursor-default select-none py-2 pl-3 pr-9'
                                                )
                                              }
                                              value={person}
                                            >
                                              {({ selected, active }) => (
                                                <>
                                                  <div className="flex items-center">
                                                    <span
                                                      className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                    >
                                                      {person.name}
                                                    </span>
                                                  </div>

                                                  {selected ? (
                                                    <span
                                                      className={classNames(
                                                        active ? 'text-white' : 'text-indigo-600',
                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                      )}
                                                    >
                                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                  ) : null}
                                                </>
                                              )}
                                        </Listbox.Option>
                                ))}
                                        </Listbox.Options>
                                      </Transition>
                                    </div>
                                  </>
                                )}
                        </Listbox> 
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
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
                  <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                      <UserButton afterSignOutUrl="/" />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-white">Tom Cook</p>
                        <a href="/user-profile" className="text-sm font-medium text-gray-400 group-hover:text-gray-300">View profile</a>
                      </div>
                    </div>
                  </a>
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
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                  <UserButton afterSignOutUrl="/" />  
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">Tom Cook</p>
                    <a href="/user-profile" className="text-xs font-medium text-gray-300 group-hover:text-gray-200">View profile</a>
                  </div>
                </div>
              </a>
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
