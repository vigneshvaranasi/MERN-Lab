import React from "react";
import fullClg from '../assets/college.png'
import abt1 from '../assets/about1.png'
import abt2 from '../assets/about2.png'
import Recruiters from "./Recruiters";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div>
        <div className="m-5 rounded-lg sm:mx-16 mb-1 lg:mb-2 sm:mt-5">
          <img src={fullClg} className="w-full rounded-lg sm:rounded-3xl overflow-hidden" alt="College" />
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-500 mx-5">
            PVP Siddhartha Institute of Technology, established in 1998
          </p>
        </div>
      </div>

      {/* About College */}
      <section className="bg-white py-8 px-4 lg:py-16 lg:px-6">
        <div className="gap-16 items-center max-w-screen-xl mx-auto lg:grid lg:grid-cols-2">
          <div className="font-medium text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">About Us</h2>
            <p class="mb-4 text-justify">Prasad V Potluri Siddhartha Institute of Technology (PVPSIT), established
                    in 1998, is a premier self-financed institution known for academic excellence. Located in Kanuru,
                    Vijayawada, the college offers undergraduate and postgraduate programs in various engineering
                    disciplines and MBA. It is autonomous, AICTE-approved, affiliated with JNTUK, and accredited by NAAC
                    with an A+ grade. PVPSIT has a strong focus on research, innovation, and entrepreneurship, with 60
                    industry MOUs and a top placement package of 44 lakhs. The institution emphasizes holistic
                    development through mentoring, extracurricular activities, and student leadership. Gender equity and
                    social responsibility are key values, with opportunities in sports, cultural events, and community
                    service.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src={abt1} alt="Office Content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={abt2} alt="Office Content 2" />
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <div className="md:hidden px-4 py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
        <div className="grid gap-8 row-gap-12 lg:grid-cols-2">
          <div className="max-w-md sm:mx-auto sm:text-center">
            <h6 className="mb-3 text-3xl font-bold">Vision</h6>
            <p className="mb-3 text-lg text-gray-900 text-justify">
              To provide a rich ambience for Academic and Professional Excellence, Research, Employability skills, Entrepreneurship, and Social responsibility.
            </p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <h6 className="mb-3 text-3xl font-bold">Mission</h6>
            <p className="mb-3 text-lg text-gray-900 text-justify">
              To empower students with technical knowledge, awareness of up-to-date technical trends, research inclination, and societal applications.
            </p>
          </div>
        </div>
      </div>

      {/* Courses Offered */}
      <div className="bg-white px-6 hidden sm:block">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">Courses Offered</h1>
        <div className="flex flex-wrap gap-4 justify-start md:justify-center">
          {["B.Tech - CSE", "B.Tech - AIML/DS", "B.Tech - IT", "B.Tech - ECE", "B.Tech - ME", "B.Tech - EEE", "B.Tech - CE", "M.Tech", "MBA"].map((course) => (
            <div key={course} className="bg-gray-100 p-3">
              {course}
            </div>
          ))}
        </div>
      </div>

      {/* Placements */}
      <Recruiters/>

    </div>
  );
};

export default Home;