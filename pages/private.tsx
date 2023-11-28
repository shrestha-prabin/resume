const projects = [
  {
    title: "MeroEV",
    link: "",
  },
  {
    title: "Janajagrati School",
    link: "",
  },
  {
    title: "Diyo Banquet",
    link: "http://diyo.com.np/",
  },
  {
    title: "Arunima Charity",
    link: "https://www.arunimacharity.org.np/",
  },
  {
    title: "BWN Survey",
    link: "https://survey.bwn.com.np/",
  },
  {
    title: "Enlightentrip",
    link: "https://enlightentrip.com/",
  },
  {
    title: "Sanjiwani Publication",
    link: "https://sanjiwanipublication.com.np/",
  },
  {
    title: "AED CAAN",
    link: "https://aedcaan.org.np/",
  },
  {
    title:
      "Priyam All In One | Creative Coloring A | Creative Coloring B | LKG (English, Maths, Science, Nepali)",
    link: "https://play.google.com/store/apps/developer?id=Engineering+Solution+For+Nepal",
  },
  {
    title: "Sanjiwani All In One",
    link: "https://play.google.com/store/apps/details?id=com.sanjiwani.allinone",
  },
  {
    title: "Brooklyn Academy Digital Library | Attendance",
    link: "https://play.google.com/store/apps/details?id=com.brooklyn",
  },
  {
    title: "Academic Certificate Generator",
    link: "",
  },
  {
    title: "Relife Wellness Nepal Pvt. Ltd",
    link: "https://relife.com.np/",
  },
  {
    title: "Auszeit Nepal",
    link: "https://auszeitnepal.com/",
  },
  {
    title: "Saraglobal Inventory",
  },
  {
    title: "Social Analytics",
    link: "https://teknarad.com/",
  },
  {
    title: "Australia Jobs",
    link: "",
  },
  {
    title: "Document Vault",
    link: "",
  },
  {
    title: "Mode23",
    link: "",
  },
  {
    title: "PrabhuPAY",
    link: "",
  },
  {
    title: "YoApp",
    link: "",
  },
  {
    title: "Kisan",
    link: "",
  },
  {
    title: "Sim Management",
    link: "",
  },
  {
    title: "NIBL Thaili",
    link: "",
  },
];

const PrivatePage = () => {
  return (
    <div>
      {projects.map((item, i) => {
        return (
          <div key={i} className="space-x-1 container mx-auto">
            <span>{item.title}</span>
            <a href={item.link}>{item.link}</a>
          </div>
        );
      })}
    </div>
  );
};

export default PrivatePage;
