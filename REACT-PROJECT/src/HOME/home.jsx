import React from "react";
import { useEffect, useState } from "react";
import Insta from "/src/assets/insta.png";
import GitHub from "/src/assets/github.png";
import LinkedIn from "/src/assets/linkedin.png";
import "./home.css";

const Home = () => {
  const Roledata1 = [
    {
      // "Full Stack Developer" role
      name: "Full Stack Developer",
      description:
        "Master frontend, backend, and deployment using the MERN stack.",
      skills_required: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
      ],
      skills_subtopics: {
        HTML: {
          explanation:
            "HTML is the foundation of all web pages, used to structure content.",
          use_cases: "Defines layout and structure of websites.",
          learn_link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        CSS: {
          explanation:
            "CSS styles HTML elements and creates responsive layouts.",
          use_cases: "Used for responsive designs, animations, and UI layouts.",
          learn_link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        JavaScript: {
          explanation:
            "JavaScript adds interactivity and logic to web applications.",
          use_cases:
            "Used for client-side scripting, validations, and dynamic interfaces.",
          learn_link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        React: {
          explanation:
            "React is a JS library for building interactive UIs using components.",
          use_cases:
            "Used for building modern single-page applications (SPAs).",
          learn_link: "https://reactjs.org/docs/getting-started.html",
        },
        "Node.js": {
          explanation: "Node.js enables JavaScript to run on the server.",
          use_cases: "Used to build scalable backend services and APIs.",
          learn_link: "https://nodejs.dev/en/learn",
        },
        MongoDB: {
          explanation:
            "MongoDB is a NoSQL database used to store JSON-like documents.",
          use_cases:
            "Used for storing structured/unstructured data in web apps.",
          learn_link: "https://www.mongodb.com/docs/",
        },
        Express: {
          explanation: "Express is a backend web framework for Node.js.",
          use_cases: "Used for routing, middleware, and RESTful APIs.",
          learn_link: "https://expressjs.com/",
        },
      },
      salary_range_inr: {
        entry_level: 400000,
        senior_level: 2500000,
      },
      estimated_days: 120,
    },
    // "Python Developer"
    {
      name: "Python Developer",
      description:
        "Use Python for backend development, automation, and web apps.",
      skills_required: [
        "Python",
        "OOP",
        "File Handling",
        "APIs",
        "Flask",
        "Django",
      ],
      skills_subtopics: {
        Python: {
          explanation:
            "Popular language for automation, backend, and data science.",
          use_cases: "Used in scripting, data science, backend, and ML.",
          learn_link: "https://docs.python.org/3/tutorial/",
        },
        OOP: {
          explanation:
            "Object-Oriented Programming helps structure complex code efficiently.",
          use_cases: "Used to build scalable and maintainable applications.",
          learn_link:
            "https://realpython.com/python3-object-oriented-programming/",
        },
        "File Handling": {
          explanation:
            "Reading/writing files, working with paths and directories.",
          use_cases: "Used in automation, log processing, and data pipelines.",
          learn_link: "https://www.geeksforgeeks.org/file-handling-python/",
        },
      },
      salary_range_inr: {
        entry_level: 350000,
        senior_level: 2000000,
      },
      estimated_days: 90,
    },
    // "Java Developer"
    {
      name: "Java Developer",
      description:
        "Design and build scalable backend systems using Java and Spring.",
      skills_required: [
        "Java",
        "OOP",
        "Collections",
        "Spring Boot",
        "JPA",
        "REST APIs",
      ],
      skills_subtopics: {
        Java: {
          explanation: "General-purpose, high-performance OOP language.",
          use_cases: "Used in enterprise apps, Android, and backend systems.",
          learn_link: "https://docs.oracle.com/javase/tutorial/",
        },
        "Spring Boot": {
          explanation:
            "Java framework for building web apps and microservices.",
          use_cases: "Used in REST API development and enterprise software.",
          learn_link: "https://spring.io/projects/spring-boot",
        },
      },
      salary_range_inr: {
        entry_level: 400000,
        senior_level: 2200000,
      },
      estimated_days: 120,
    },
    // "Data Scientist"
    {
      name: "Data Scientist",
      description:
        "Analyze data and build ML models to extract insights and predictions.",
      skills_required: [
        "Python",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Scikit-Learn",
        "Deep Learning",
      ],
      skills_subtopics: {
        NumPy: {
          explanation:
            "Library for efficient numerical computations using arrays.",
          use_cases:
            "Used in data science pipelines for vectorized math operations.",
          learn_link: "https://numpy.org/learn/",
        },
        Pandas: {
          explanation: "Python library for data manipulation and analysis.",
          use_cases: "Used for cleaning, transforming, and analyzing datasets.",
          learn_link: "https://pandas.pydata.org/docs/",
        },
        "Scikit-Learn": {
          explanation: "Python library for machine learning models and tools.",
          use_cases:
            "Used for training/testing models like regression or classification.",
          learn_link: "https://scikit-learn.org/stable/tutorial/",
        },
      },
      salary_range_inr: {
        entry_level: 500000,
        senior_level: 3500000,
      },
      estimated_days: 150,
    },
    // "AI Developer"
    {
      name: "AI Developer",
      description:
        "Develop intelligent systems using machine learning and deep learning.",
      skills_required: [
        "Python",
        "ML",
        "Deep Learning",
        "NLP",
        "TensorFlow",
        "Keras",
      ],
      skills_subtopics: {
        "Deep Learning": {
          explanation:
            "Subset of ML using neural networks with multiple layers.",
          use_cases: "Used in image recognition, speech processing, and more.",
          learn_link: "https://www.deeplearning.ai/",
        },
        TensorFlow: {
          explanation:
            "Google’s deep learning framework for large-scale ML apps.",
          use_cases: "Used to train and deploy deep learning models.",
          learn_link: "https://www.tensorflow.org/learn",
        },
        NLP: {
          explanation:
            "Field focused on enabling computers to understand human language.",
          use_cases:
            "Used in chatbots, language translation, and sentiment analysis.",
          learn_link: "https://www.coursera.org/learn/language-processing",
        },
      },
      salary_range_inr: {
        entry_level: 600000,
        senior_level: 4000000,
      },
      estimated_days: 180,
    },
    // "Machine Learning Engineer"
    {
      name: "ML Engineer",
      description:
        "Build production-ready ML pipelines and deploy models at scale.",
      skills_required: [
        "Python",
        "ML",
        "Data Preprocessing",
        "Model Evaluation",
        "TensorFlow",
        "MLOps",
      ],
      skills_subtopics: {
        "Model Evaluation": {
          explanation: "Assess the performance of ML models using metrics.",
          use_cases: "Used to choose the best model for deployment.",
          learn_link:
            "https://scikit-learn.org/stable/modules/model_evaluation.html",
        },
        MLOps: {
          explanation:
            "Set of practices to deploy and maintain ML models in production.",
          use_cases:
            "Used in automating ML lifecycle, from training to monitoring.",
          learn_link: "https://ml-ops.org/",
        },
      },
      salary_range_inr: {
        entry_level: 550000,
        senior_level: 3800000,
      },
      estimated_days: 160,
    },
    // "Data Analyst"
    // {
    //   name: "Data Analyst",
    //   description:
    //     "Collect, clean, analyze, and visualize data to support business decisions.",
    //   skills_required: [
    //     "Excel",
    //     "SQL",
    //     "Python",
    //     "Pandas",
    //     "Power BI",
    //     "Tableau",
    //   ],
    //   skills_subtopics: {
    //     Excel: {
    //       explanation:
    //         "Spreadsheet tool for analyzing tabular data using formulas and charts.",
    //       use_cases:
    //         "Used for quick calculations and visualization in business reports.",
    //       learn_link: "https://exceljet.net/",
    //     },
    //     "Power BI": {
    //       explanation:
    //         "Microsoft’s business analytics tool for creating dashboards.",
    //       use_cases:
    //         "Used in real-time reporting and enterprise visual analytics.",
    //       learn_link: "https://learn.microsoft.com/en-us/power-bi/",
    //     },
    //   },
    //   salary_range_inr: {
    //     entry_level: 400000,
    //     senior_level: 1600000,
    //   },
    //   estimated_days: 100,
    // },
    // "Cloud Engineer"
    // {
    //   name: "Cloud Engineer",
    //   description:
    //     "Design and manage cloud infrastructure using AWS, Azure, or GCP.",
    //   skills_required: [
    //     "AWS",
    //     "Azure",
    //     "Linux",
    //     "Networking",
    //     "CI/CD",
    //     "Terraform",
    //   ],
    //   skills_subtopics: {
    //     AWS: {
    //       explanation:
    //         "Amazon Web Services – cloud platform with storage, compute, and AI services.",
    //       use_cases: "Used for scalable application deployment and hosting.",
    //       learn_link: "https://aws.amazon.com/training/",
    //     },
    //     Terraform: {
    //       explanation:
    //         "Infrastructure-as-code tool to automate cloud resource provisioning.",
    //       use_cases:
    //         "Used to manage cloud resources via declarative config files.",
    //       learn_link: "https://developer.hashicorp.com/terraform/docs",
    //     },
    //   },
    //   salary_range_inr: {
    //     entry_level: 500000,
    //     senior_level: 3000000,
    //   },
    //   estimated_days: 140,
    // }
    // "DevOps Engineer"
    // {
    //   name: "DevOps Engineer",
    //   description:
    //     "Automate infrastructure, CI/CD pipelines, and software delivery lifecycle.",
    //   skills_required: [
    //     "Linux",
    //     "Git",
    //     "Docker",
    //     "Kubernetes",
    //     "CI/CD",
    //     "Jenkins",
    //   ],
    //   skills_subtopics: {
    //     Docker: {
    //       explanation:
    //         "Container platform for packaging applications and dependencies.",
    //       use_cases: "Used to run microservices and portable dev environments.",
    //       learn_link: "https://docs.docker.com/get-started/",
    //     },
    //     Kubernetes: {
    //       explanation:
    //         "Open-source system for managing containerized apps at scale.",
    //       use_cases: "Used in cloud-native deployments for orchestration.",
    //       learn_link: "https://kubernetes.io/docs/home/",
    //     },
    //     "CI/CD": {
    //       explanation:
    //         "Continuous Integration/Deployment helps automate code testing and delivery.",
    //       use_cases: "Used in modern DevOps pipelines to speed up development.",
    //       learn_link: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
    //     },
    //   },
    //   salary_range_inr: {
    //     entry_level: 550000,
    //     senior_level: 3000000,
    //   },
    //   estimated_days: 150,
    // },
    // "Blockchain Developer"
    // {
    //   name: "Blockchain Developer",
    //   description:
    //     "Develop decentralized apps (dApps) and smart contracts on blockchain networks.",
    //   skills_required: [
    //     "Solidity",
    //     "Ethereum",
    //     "Smart Contracts",
    //     "Web3.js",
    //     "Cryptography",
    //     "Truffle",
    //   ],
    //   skills_subtopics: {
    //     Solidity: {
    //       explanation:
    //         "Programming language for writing smart contracts on Ethereum.",
    //       use_cases: "Used to build dApps and DeFi protocols.",
    //       learn_link: "https://soliditylang.org/",
    //     },
    //     "Web3.js": {
    //       explanation:
    //         "Library to interact with Ethereum blockchain from JS apps.",
    //       use_cases: "Used in frontend integration with smart contracts.",
    //       learn_link: "https://web3js.readthedocs.io/",
    //     },
    //   },
    //   salary_range_inr: {
    //     entry_level: 600000,
    //     senior_level: 3500000,
    //   },
    //   estimated_days: 160,
    // }
  ];

  return (
    <div className="pt-5">
      <div className="home-container text-center">
        <h1 className="text-xl">
          🚀Launch Your Tech Career with <br />{" "}
          <span style={{ color: "orange", fontWeight: "bold" }}>CAREERA</span>
        </h1>
        <p className="text-sm/6 p-4 font-normal md:hidden">
          Discover accurated learning paths from beginner to pro in roles like
          Full Stack Developer, Data Scientist, and more — all in one place.
        </p>
        <div className="flex justify-center w-full pt-4 hidden md:flex">
          <p className="text-sm/5 w-4/6">
            Personalized tech career guide designed to help you navigate the
            complex world of software development and IT roles. Each roadmap
            includes skills, resources, estimated learning time, and salary
            insights—from fresher to senior level.Choose a path, follow the
            steps, and transform your skills into a successful tech career—all
            in one place.
          </p>
        </div>
      </div>
      <h2 className="w-full text-center pt-5 pb-4 md:pt-10 md:pb-4 text-blue-600">
        Top Career Roles
      </h2>
      <div className=" w-4/5 mx-auto sm:w-4/5 md:w-3/5">
        <div className="grid grid-cols-3 md:grid-cols-3 md:gap-10 gap-5 text-center">
          {Roledata1.map((role, index) => {
            return (
              <div className="card grid align-center justify-center">
                <a className="text-sm">{role.name}</a>
              </div>
            );
          })}
        </div>
      </div>
      {/* ABOUT SECTION */}
      <div>
        <h1 className="pb-5 hidden md:flex gap-3 text-base/6 mt-10 p-10">ABOUT <span id="brand">CAREERA</span></h1>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-5 hidden md:grid">
        <div className="card">
          <h2 className="pb-3 text-orange-600"> Why choose CAREERA ?</h2>
          <p className="text-sm/6">
            ✅ Beginner to advanced learning paths – Clear guidance at every stage. <br />
            ✅ Curated resources – Handpicked YouTube videos, blogs and official  docs. <br />
            ✅ Salary & duration estimates – Know what to expect at every level. <br />
            ✅ Career-aligned guidance – Learn what top companies expect.
          </p>
        </div>
        <div className="card">
          <h2 className="pb-3 text-orange-600"> How CAREERA works ?</h2>
          <p className="text-sm/6">
            🧭 Choose a roadmap – Select from 25+ tech career tracks. <br/>
            📚 Follow the path – Learn with guided sections and resources. <br/>
            ✅ Mark your progress – Save your journey step-by-step. <br/>
            🏆 Achieve your goal – Gain skills and confidence to get hired.
          </p>
        </div>
      </div>
      </div>
      {/* COROUSEL */}
      <div className="gap-10 p-2 mt-10 md:p-5 md:mt-10">
        <marquee behavior="" direction="" loop="infinite" >
          "Full Stack Developers with MERN skills earn up to ₹18 LPA in India" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          "Companies like Google, Microsoft, and Amazon hire Full Stack Engineers at ₹20–45 LPA" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          "Data Scientists in India earn between ₹8–25 LPA with Python & ML skills" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          "AI Engineers with deep learning skills are among the top 5 highest-paid tech roles in 2025"  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          "Full Stack Developers with MERN skills earn up to ₹18 LPA in India" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          "Companies like Google, Microsoft, and Amazon hire Full Stack Engineers at ₹20–45 LPA" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          "Data Scientists in India earn between ₹8–25 LPA with Python & ML skills" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          "Full Stack Developers with MERN skills earn up to ₹18 LPA in India" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          "Companies like Google, Microsoft, and Amazon hire Full Stack Engineers at ₹20–45 LPA" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          "Data Scientists in India earn between ₹8–25 LPA with Python & ML skills" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          "AI Engineers with deep learning skills are among the top 5 highest-paid tech roles in 2025"  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          "Full Stack Developers with MERN skills earn up to ₹18 LPA in India" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          "Companies like Google, Microsoft, and Amazon hire Full Stack Engineers at ₹20–45 LPA" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          "Data Scientists in India earn between ₹8–25 LPA with Python & ML skills" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          "AI Engineers with deep learning skills are among the top 5 highest-paid tech roles in 2025" 
        </marquee>
      </div>
      {/* CONTACT */}
      <div className="w-full p-10">
      <p className="text-center pb-5 w-5/6">Feel free to connect me on</p>
      <div className="flex justify-center items-center w-full p-5 pt-1" id="contact-logo">
        <a href="https://www.instagram.com/dev._.nest?igsh=MXgwYmtxYzlyN2ZtNw==" target="_blank" rel="noopener noreferrer">
          <img src={Insta} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/bathula-naga-sai-kiran" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="" id="linkedin"/>
        </a>
        <a href="https://github.com/DEV-NSK" target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="" />
        </a>
      </div>
      </div>
    </div>
  );
};

export default Home;
