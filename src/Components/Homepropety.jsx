import React from 'react'
import { Link } from 'react-router-dom'
import Properties from '../Pages/Properties'

const Homepropety = () => {
  return (
    <>
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Recent Properties
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recenetProperties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div> */}
        
        <Properties/>
        
      </div>
    </section>

    <section className="m-auto max-w-lg my-6 px-6">
      <Link
        to={"/properties"}
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >
        View All Properties
      </Link>
    </section>
  </>
  )
}

export default Homepropety
