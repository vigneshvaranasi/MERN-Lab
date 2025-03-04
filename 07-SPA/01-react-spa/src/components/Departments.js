const Departments = () => {
    const departments = [
      {
        title: "B.Tech - Computer Science Engineering",
        description:
          "Explore the world of computing, AI, and software development with our cutting-edge curriculum.",
      },
      {
        title: "B.Tech - Artificial Intelligence & Data Science",
        description:
          "Learn AI, machine learning, and data analysis with innovative tools and technologies.",
      },
      {
        title: "B.Tech - Information Technology",
        description:
          "Delve into IT systems, cybersecurity, and software engineering practices.",
      },
      {
        title: "B.Tech - Electronics & Communication Engineering",
        description:
          "Dive into circuits, robotics, and embedded systems in ECE.",
      },
      {
        title: "B.Tech - Mechanical Engineering",
        description:
          "Discover the mechanics behind modern innovations and advanced machinery.",
      },
      {
        title: "B.Tech - Electrical & Electronics Engineering",
        description:
          "Explore electrical systems, power electronics, and energy solutions.",
      },
      {
        title: "B.Tech - Civil Engineering",
        description:
          "Shape the future of infrastructure and sustainable construction.",
      },
      {
        title: "M.Tech",
        description:
          "Specialize in advanced technical fields and innovate for tomorrow.",
      },
      {
        title: "MBA",
        description:
          "Master the art of business strategy, finance, and marketing.",
      },
    ];
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl text-center mt-5 font-semibold">Departments</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {departments.map((dept, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">{dept.title}</h2>
              <p className="text-gray-700 mb-4">{dept.description}</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More &rarr;
              </a>
            </div>
          ))}
        </section>
      </div>
    );
  };
  
  export default Departments;
  