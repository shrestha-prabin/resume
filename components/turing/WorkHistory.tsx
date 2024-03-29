import { Timeline } from "antd";

const data = [
  {
    role: "iOS Developer",
    name: "Nepal Payment Solution (DigiHub Pvt. Ltd.)",
    date: "October 2020 - September 2022",
    duration: "1 yrs 11 mos",
    list: ["Development of "],
    skills: [
      "iOS",
      "Swift",
      "Push Notifications",
      "Google Maps SDK",
      "Dynamic Form",
      "Kotlin",
    ],

    projects: [
      {
        name: "YoApp",
        link: "https://apps.apple.com/us/app/yo-app-nepal/id1568459884",
        overview:
          "SuperApp that offers digital payment solutions such as utilities bill payment, ticketing and booking system, with more features still under development.",
        info: [
          "Implementation of user interfaces (UI) and integration smooth animations and transitions for better user experience (UX).",
          "MVVM architecture setup, handing network requests, offline data persistence.",
          "Development of testable, accessible and reusable modules.",
          "Biometrics setup for quicker and safer authentication of transactions.",
        ],
        skills: ["iOS", "Swift"],
      },
      {
        name: "Kisan App",
        link: "",
        overview:
          "An initiation taken by ADBL that focuses on helping the local farmers thereby increasing productivity of the country. Farming guidelines, Kisan Credit System and trading with merchants are some of the key features that have been developed in the mobile application.",
        info: [
          "Development of iOS Mobile Application and API Integration.",
          "Integration of Google Maps SDK to show merchant locations",
          "Development of e-commerce system for purchasing farming equipment and agricultural goods.",
        ],
        skills: ["iOS", "Swift", "E-commerce"],
      },
      {
        name: "SIM Management",
        link: "",
        overview:
          "An information management software developed for telecommunication companies to manage its customers and their associated SIM cards.",
        info: [
          "Development of iOS Mobile Application and implementation of user interfaces.",
          "MVVM architecture setup, development of API core for handling network requests and development of Core Data wrapper for offline data persistence.",
          "Generation of dynamic form based on JSON response from the API.",
          "Integration of 3rd party OCR API to scan user documents and autofill forms.",
          "Performed UI Tests to fill out forms and submit data on various test cases.",
          "Integration of Fastlane to automate screenshots on varying screen sizes/`",
        ],
        skills: ["iOS", "Swift", "Dynamic Form"],
      },
      {
        name: "NIBL - Thaili",
        link: "",
        overview:
          "Digital Wallet and banking app for Nepal Investment Bank Limited (NIBL) - Thaili",
        info: [
          "Development of iOS Mobile Application and API Integration.",
          "Integration of Google Maps SDK to show banks and ATM locations.",
          "Development of QR Module to initiate fund transfer or merchant payments.",
          "Push notification integration to notify transaction and activity logs.",
          "Performed unit testing and UI testing.",
        ],
        skills: ["iOS", "Swift", "Google Maps SDK"],
      },
    ],
  },
  {
    role: "Software Engineer",
    name: "Zero Logic Space Pvt. Ltd.",
    date: "December 2020 -",
    duration: "",
    projects: [
      {
        name: "Voyageons Nepal Website",
        link: "https://voyageonsnepal.com/",
        info: [],
        skills: ["NextJS", "React", "Tailwind CSS", "Formik", "Paypal SDK"],
      },
      {
        name: "Paradise Institute Website",
        link: "",
        info: [],
        skills: ["NextJS", "React", "Tailwind CSS"],
      },
      {
        name: "BPazes Mobile Application",
        link: "",
        info: [],
        skills: [
          "React",
          "React Native",
          "Redux",
          "REST/RESTful APIs",
          "E-Commerce",
        ],
      },
    ],
  },
  {
    role: "Mobile Application Developer",
    name: "Prabhu Technology Pvt. Ltd.",
    date: "August 2019 - October 2020",
    duration: "1 yrs 2 mos",
    projects: [
      {
        name: "PrabhuPAY",
        link: "",
        overview:
          "A digital mobile application that helps users to pay bills online and purchase tickets.\nPrimarily worked on Movie, Bus and Flight ticketing system. Use of Rest APIs to get seat layout info, sync available seats and submit user forms.\n\nWorked on multiple platforms",
        info: [
          "PrabhuPAY Wallet | Android app - Java | iOS app - React Native",
          "PrabhuPAY Merchant | Android app - Java | iOS app - Swift",
        ],
        skills: [
          "Android",
          "Java",
          "React Native",
          "Redux",
          "iOS-Swift",
          "REST/RESTful APIs",
        ],
      },
    ],
  },
  {
    role: "Software Engineer",
    name: "Engineering Solution for Nepal",
    date: "September 2018 -",
    duration: "",
    projects: [
      {
        name: "Brooklyn College App",
        link: "https://play.google.com/store/apps/details?id=com.es4n.attendance",
        overview:
          "A mobile application aimed to improve education quality. Teachers can view their assigned class routines and record attendance of the students. Students can read course books and notes.",

        info: [
          "Designed and developed the user interfaces and business logic of the application that satisfied client requirements.",
          "Development of Android application (Kotlin) for teachers and cross-platform application (React Native) for students.",
          "Offline persistence of students' details and their attendance status, ad-hoc synchronization when internet is available.",
          "Development of backend system in Laravel.",
          "Development of admin panel in React for performing CRUD operations of teachers, students, courses, class routines and books.",
          "Generation of downloadable attendance reports as excel file.",
          "Integration of Push Notification, SMS Gateway and mail server to help facilitate delivery message and reports to end user.",
        ],
        skills: [
          "Laravel",
          "ReactJS",
          "React Native",
          "Android/Kotlin",
          "Firebase",
          "Push Notification",
          "SMS Gateway",
          "Excel",
        ],
      },
      {
        name: "Priyam Digital Book Series",
        link: "https://play.google.com/store/apps/details?id=com.es4n.allinone",
        overview:
          "A digitized version of a children book aimed to improve vocabulary skills and learning engagement in early developmental stages of the children.",
        info: [
          "Design of user interfaces, color theming and icons development best suited for children to be aesthetically pleasing and simple to use.",
          "Design and development of fun, interactive and educative mini-games.",
          "An admin panel development to keep track of registered users and their details.",

          "Priyam All In One Digital Book",
          "Priyam Coloring A & B",
          "Priyam LKG Books",
        ],
        skills: ["React Native", "ReactJS", "Laravel"],
      },
    ],
  },
];

const ProjectItem = ({ name, link, overview, info, skills }: any) => {
  return (
    <div className="mt-2 mb-8">
      <div className="font-semibold">{name}</div>
      {link && (
        <a className="text-xs" href={link}>
          {link}
        </a>
      )}
      <p className="text-gray-900" style={{ whiteSpace: "pre-wrap" }}>
        {overview}
      </p>
      <ul className="list-dash space-y-1">
        {info.map((item: any, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="space-x-2 mt-2 flex flex-row flex-wrap dark:text-white">
        {skills.map((item: any, i: number) => (
          <p key={i} className="text-gray-800 border rounded pt-1 px-2 text-xs">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

const WorkHistoryItem = ({ role, name, date, duration, projects }: any) => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>
          <div className="text-lg font-bold">{name}</div>
          <div>{date}</div>
        </div>

        {/* <div className="flex flex-col items-end text-xs text-right">
          <div>{date}</div>
          <div>{duration}</div>
        </div> */}
      </div>

      {projects.map((item: any, i: number) => (
        <ProjectItem key={i} {...item} />
      ))}
    </div>
  );
};

const WorkHistory = ({ className }: any) => {
  return (
    <Timeline className={className}>
      {data.map((item, i) => {
        return (
          <Timeline.Item key={i}>
            <WorkHistoryItem
              role={item.role}
              name={item.name}
              date={item.date}
              duration={item.duration}
              projects={item.projects}
            />
          </Timeline.Item>
        );
      })}

      <Timeline.Item></Timeline.Item>
    </Timeline>
  );
};

export default WorkHistory;
