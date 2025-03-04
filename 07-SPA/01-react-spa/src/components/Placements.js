import React from "react";
import Recruiters from "./Recruiters";

const placementsData = [
  { year: "2023-24", selections: 1005 },
  { year: "2022-23", selections: 956 },
  { year: "2021-22", selections: 1118 },
  { year: "2020-21", selections: 954 },
  { year: "2019-20", selections: 606 },
  { year: "2018-19", selections: 606 },
];

const recruiters = [
  { name: "Amazon", img: "assets/companies/amazon.png" },
  { name: "TCS", img: "assets/companies/tcs.png" },
  { name: "Capgemini", img: "assets/companies/capgemini.png" },
  { name: "Accenture", img: "assets/companies/accenture.png" },
  { name: "Walmart", img: "assets/companies/walmart.png" },
  { name: "Value Labs", img: "assets/companies/value_labs.png" },
];

const placementStaff = [
  { id: 1, name: "Mr. G. Ramesh Babu", designation: "Head- Training & Placements", qualification: "MBA", mobile: "9246620777" },
  { id: 2, name: "Mr. K. Naresh Kumar", designation: "Asst. Training & Placement Officer", qualification: "MBA", mobile: "7893656735" },
  { id: 3, name: "Ms. L. Sudheera", designation: "Soft Skills Trainer", qualification: "MBA", mobile: "9640958999" },
  { id: 4, name: "Mr. K. Sai Devan", designation: "Soft Skills Trainer", qualification: "MBA", mobile: "7013506746" },
];

const Placements = () => {
  return (
    <div className="p-8 space-y-16">
      {/* Campus Selections */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Campus Selections (Yearwise)</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Academic Year</th>
                <th className="border border-gray-300 px-4 py-2 text-left">No. of Selections</th>
              </tr>
            </thead>
            <tbody>
              {placementsData.map((item) => (
                <tr key={item.year}>
                  <td className="border border-gray-300 px-4 py-2">{item.year}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.selections}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Recruiters */}
      <Recruiters/>

      {/* About T&P Cell */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">About T&P Cell</h2>
        <p className="text-gray-700 text-lg text-justify leading-relaxed">
          The Training and Placement Cell of PVP Siddhartha is established with the aim of finding suitable employment
          opportunities for all the eligible students. It caters to all the training requirements of students through highly
          experienced faculty. The unique program of skill enhancement identifies and nurtures talent in job aspirants and
          ignites young minds to confidently face recruitment drives.
        </p>
        <p className="text-gray-700 text-lg text-justify leading-relaxed mt-4">
          The placement cell has state-of-the-art infrastructure and a rich ambiance to facilitate the training process. The
          students of PVP are provided excellent training that enhances their potential and improves their confidence levels.
          Facilities include a well-furnished auditorium, GD rooms, closed interview panels, and conference halls.
        </p>
      </section>

      {/* Placement Staff */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Placement Staff</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">S.No.</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Designation</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Qualifications</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Mobile No.</th>
              </tr>
            </thead>
            <tbody>
              {placementStaff.map((staff) => (
                <tr key={staff.id}>
                  <td className="border border-gray-300 px-4 py-2">{staff.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{staff.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{staff.designation}</td>
                  <td className="border border-gray-300 px-4 py-2">{staff.qualification}</td>
                  <td className="border border-gray-300 px-4 py-2">{staff.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Placements;
