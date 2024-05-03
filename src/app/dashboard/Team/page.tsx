/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon, ChevronRightIcon, MailIcon } from '@heroicons/react/solid'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import add_project_model from '@/components/add_project_model'
const applications = [
  {
    applicant: {
      name: 'Beeclick',
      imageUrl:
        '/beeclick.jpeg',
      icon: <FaFacebook className="text-blue-600 mt-3" />,
    },
    href: 'https://www.facebook.com/BEECLIK.Delivery/?ti=as',
  },
  {
    applicant: {
      name: 'Beeclick',
      imageUrl:
        '/beeclick.jpeg',
      icon: <FaInstagram className="text-pink-500 mt-3" />,
    },
    href: 'https://www.instagram.com/beeclik.delivery/',
  },
]
const cobeez = [
  {
    applicant: {
      name: 'coobeez',
      imageUrl:
        '/cobeez.jpg',
      icon: <FaFacebook className="text-blue-600 mt-3" />,
    },
    href: 'https://www.facebook.com/cobeez.coworking.space',
  },
  {
    applicant: {
      name: 'cobeez',
      imageUrl:
      '/cobeez.jpg',
      icon: <FaInstagram className="text-pink-500 mt-3" />,
    },
    href: 'https://www.instagram.com/cobeez_coworkingspace/',
  },
]
const wereact = [
  {
    applicant: {
      name: 'wereact',
      imageUrl:
        '/wereact_logo.jpeg',
      icon: <FaFacebook className="text-blue-600 mt-3" />,
    },
    href: 'https://www.facebook.com/people/Wereact-SA/100057304665890/',
  },
  {
    applicant: {
      name: 'wereact',
      imageUrl:
      '/wereact_logo.jpeg',
      icon: <FaInstagram className="text-pink-500 mt-3" />,
    },
    href: 'https://www.instagram.com/wereact_creativeagency',
  },
]

export default function Example() {
  return (
    <main>
        <div className='pb-3 pt-3'>
          <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
          <button onClick={<add_project_model />}></button>
        </div>
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src="/Beeclick.jpeg"
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
              <li key="#">
                <a href="#" className="block hover:bg-gray-50">
                  <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <img className="h-12 w-12 rounded-full" src={application.applicant.imageUrl} alt="" />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="text-sm font-medium text-indigo-600 truncate">{application.applicant.name}</p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            This is a professional account
                          </p>
                        </div>
                        <div className="hidden md:block">
                            {application.applicant.icon}
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
      <div>
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 pt-5">
          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
            <div className="ml-4 mt-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="/cobeez.jpg"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Coobeez</h3>
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
              {cobeez.map((application) => (
                <li key="#">
                  <a href="#" className="block hover:bg-gray-50">
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="min-w-0 flex-1 flex items-center">
                        <div className="flex-shrink-0">
                          <img className="h-12 w-12 rounded-full" src={application.applicant.imageUrl} alt="" />
                        </div>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <p className="text-sm font-medium text-indigo-600 truncate">{application.applicant.name}</p>
                            <p className="mt-2 flex items-center text-sm text-gray-500">

                              This is a professional account
                            </p>
                          </div>
                          <div className="hidden md:block">
                            {application.applicant.icon}
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
      </div>
      <div>
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 pt-5">
          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
            <div className="ml-4 mt-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="/wereact_logo.jpeg"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">WEREACT</h3>
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
              {wereact.map((application) => (
                <li key="#">
                  <a href="#" className="block hover:bg-gray-50">
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="min-w-0 flex-1 flex items-center">
                        <div className="flex-shrink-0">
                          <img className="h-12 w-12 rounded-full" src={application.applicant.imageUrl} alt="" />
                        </div>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <p className="text-sm font-medium text-indigo-600 truncate">{application.applicant.name}</p>
                            <p className="mt-2 flex items-center text-sm text-gray-500">

                              This is a professional account
                            </p>
                          </div>
                          <div className="hidden md:block">
                            {application.applicant.icon}
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
      </div>
    </main>
  )
}