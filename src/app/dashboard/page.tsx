'use client'
/* This example requires Tailwind CSS v2.0+ */

export default function page() {
  

  return (
    <>
      <main className="flex-1">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">  

              <div>
                <iframe
                  title="PowerBI-Dashboard"
                  src="https://app.powerbi.com/view?r=eyJrIjoiNGI2NjEwNmMtYWNlYi00N2M4LWI0OWItMTU3YmM5ZmViOGEzIiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9"
                  width="100%"
                  height="600"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}