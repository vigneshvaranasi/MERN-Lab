import React from 'react'
import amazon from '../assets/companies/amazon.png'
import tcs from '../assets/companies/tcs.png'
import capgemini from '../assets/companies/capgemini.png'
import accenture from '../assets/companies/accenture.png'
import walmart from '../assets/companies/walmart.png'
import valueLabs from '../assets/companies/value_labs.png'
import atandt from '../assets/companies/atandt.png'


function Recruiters() {
  return (
    <section className="bg-white mt-4">
    <div className="py-8 lg:py-6 max-w-screen-xl mx-auto px-2">
      <h1 className="mb-4 text-3xl font-bold text-gray-900">Our Recruiters</h1>
      <div className="flex flex-wrap justify-center items-center gap-1">
        {[amazon,tcs,capgemini,accenture,walmart,valueLabs,atandt].map((company) => (
          <p key={company} className="flex justify-center items-center mx-4 gap-2">
            <img className="h-8 md:h-12" src={company} alt={company} />
          </p>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Recruiters