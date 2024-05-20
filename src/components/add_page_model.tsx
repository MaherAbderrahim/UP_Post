/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState, useEffect  } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ApolloClient, InMemoryCache, ApolloProvider, gql,useQuery, useMutation } from '@apollo/client';
import {  useUser,  } from "@clerk/nextjs";


interface AddProjectModelProps {
  isOpen: boolean;
  onClose: () => void;
}

const project_mute = gql`
mutation Create_Project($name: String!, $userId: Int!, $description: String) {
  create_Project(name: $name, user_id: $userId, description: $description) {
    description
    id  
    name
  }
}
` 
const user_id = gql`
query Query($email: String!) {
  get_User_By_Email(email: $email) {
    id
  }
}
`

export default function AddProjectModel({ isOpen, onClose }:
   AddProjectModelProps) {
    const {  user } = useUser();
    const cancelButtonRef = useRef(null)
  
    const handleSubmit = async (event:any) => {
      event.preventDefault();
      // You can now use the projectName and projectDescription variables here
      // For example, you can call your mutation here
      onClose();
    }


  return (
    <Transition.Root show={isOpen} as={Fragment}>
       <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={onClose}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                {/*Here is the start of the form*/}
                  <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
                    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                      <div>
                        <div>
                          <h3 className="text-lg leading-6 font-medium text-gray-900">Nouveau projet</h3>
                          <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          Saisissez les informations relatives à votre nouveau projet.
                          </p>
                        </div>

                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                              Nom Projet
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                              <div className="max-w-lg flex rounded-md shadow-sm">
                              <input
                                type="text"
                                name="project_name"
                                id="pr_name"
                                className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                              />
                              </div>
                            </div>
                          </div>

                          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                              Description
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <textarea
                              id="about"
                              name="about"
                              rows={3}
                              className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                              defaultValue={''}
                            />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                {/*Here is the end of the form*/}
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                  onClick={handleSubmit}
                >
                  submit
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={onClose}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
