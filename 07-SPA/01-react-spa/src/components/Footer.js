import React from 'react';
import clgLogo from '../assets/pvpsitlogo.png';

function Footer() {
  return (
    <div id="footerSec" className="bg-white px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a href="https://www.pvpsiddhartha.ac.in/index.html" aria-label="Go home" className="inline-flex items-center">
            <img src={clgLogo} alt="PVPSIT Logo" className="w-8" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">PVPSIT</span>
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              P.V.P.Siddhartha Institute Of Technology<br />
              Kanuru, Vijayawada-520 007<br />
              Andhra Pradesh, India<br />
              Tel: 0866-2581699, 0866-2583037, 0866-2585681, 0866-2585682<br />
              Email: principal@pvpsiddhartha.ac.in<br />
              Fax: 0866-2581184
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 footer">
          {[
            [
              { label: 'Home', link: 'https://www.pvpsiddhartha.ac.in/index.html' },
              { label: 'Departments', link: 'https://www.pvpsiddhartha.ac.in/department_home.html' },
              { label: 'Gallery', link: 'https://www.pvpsiddhartha.ac.in/cse_gallery.html' },
              { label: 'Placements', link: 'https://www.pvpsiddhartha.ac.in/department_tp.html' },
              { label: 'About', link: 'https://www.pvpsiddhartha.ac.in/aboutus.html' },
            ],
            [
              { label: 'Dept. Library', link: 'https://www.pvpsiddhartha.ac.in/dep_cse/docs/CSE%20Department%20Library%20Books%20List.pdf' },
              { label: 'Board of Studies', link: 'https://www.pvpsiddhartha.ac.in/dep_cse/docs/bos.pdf' },
              { label: 'Code of Conduct', link: 'https://www.pvpsiddhartha.ac.in/naac/doc/cc.pdf' },
              { label: "MoU's", link: 'https://www.pvpsiddhartha.ac.in/naac/doc/mous.pdf' },
              { label: 'Results', link: 'https://pvpsitresults.com/' },
            ],
            [
              { label: 'Core Values', link: '/' },
              { label: 'Academic Council', link: '/' },
              { label: 'Governing-Body Minutes', link: '/' },
              { label: 'AICTE Approvals', link: '/' },
              { label: 'Feedback Reports', link: '/' },
            ],
            [
              { label: 'Student Council', link: '/' },
              { label: 'Contact', link: 'https://www.pvpsiddhartha.ac.in/contact.html' },
              { label: 'Login', link: 'http://202.53.81.85/index.sit?service=STAFF_LOGIN' },
            ],
          ].map((column, index) => (
            <div key={index}>
              <ul className="mt-2 space-y-2">
                {column.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.link} className="hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-600">© Copyright PVPSIT. All rights reserved.</p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 50 50">
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30">
              <path d="M10 3C6.14 3 3 6.14 3 10v10c0 3.86 3.14 7 7 7h10c3.86 0 7-3.14 7-7V10c0-3.86-3.14-7-7-7H10zM22 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM15 9c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 2a4 4 0 100 8 4 4 0 000-8z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
