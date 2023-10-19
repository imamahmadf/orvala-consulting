// import { useDispatch, useSelector } from "react-redux";
// import lang_types from "../Redux/Reducers/Types/langTypes";
// const { lang } = useSelector((state) => state.lang);
// console.log(lang);
const menu = [
  {
    menuUtama: "Serivces",
    subMenu: [
      {
        judul: "Main Services",
        foto: "/Assets/main-services.jpg",
        link: "/main-services",
      },
      {
        judul: "expo",
        foto: "/Assets/outsource.jpg",
        link: "/expo",
      },
      {
        judul: "Sectors",
        foto: "/Assets/sectors.jpg",
        link: "/sectors",
      },
    ],
  },
  {
    menuUtama: "About Us",
    subMenu: [
      { judul: "About Us", foto: "/Assets/about.jpg", link: "/about-us" },
      { judul: "Our Events", foto: "/Assets/event.jpg", link: "our-events" },
      {
        judul: " Our Achievements",
        foto: "/Assets/achievements.jpg",
        link: "/our-achievements",
      },
    ],
  },
  {
    menuUtama: "Careers",
    subMenu: [
      { judul: "Careers", foto: "/Assets/careers.jpg", link: "/careers" },
    ],
  },
];

const artikel = [
  {
    id: 1,
    judul: "Russian Economy Surprises to the Upside",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    foto: "/Assets/article/1.png",
    kategori: "",
  },
  {
    id: 2,
    judul: "Bilateral Relations Between Indonesia and Russia",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    foto: "/Assets/article/2.jpg",
    kategori: "",
  },
  {
    id: 3,
    judul: "Economic Forum In Moscow, Russia 2023",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    foto: "/Assets/article/3.jpg",
    kategori: "",
  },
];
const sosmeds = [
  {
    logo: "instagram",
    link: "https://www.instagram.com/imamfahrurazi/",
  },

  {
    logo: "linkedin",
    link: "https://www.linkedin.com/in/imam-ahmad-fahrurazi/",
  },
  {
    logo: "youtube",
    link: "https://github.com/imamahmadf",
  },
];

const Partners = [
  {
    nama: "/Assets/logo/Magnit.jpg",
    logo: "Magnit",
  },
  {
    nama: "/Assets/logo/X5.jpg",
    logo: "KB",
  },
  {
    nama: "/Assets/logo/KB.jpg",
    logo: "X5",
  },
  {
    nama: "/Assets/logo/Diksi.jpg",
    logo: "DIksi",
  },
  {
    nama: "/Assets/logo/Imexis.jpg",
    logo: "Imexis",
  },
  {
    nama: "/Assets/logo/RSPP.jpg",
    logo: "RSPP",
  },
  {
    nama: "/Assets/logo/Indo.jpg",
    logo: "Indo",
  },
  {
    nama: "/Assets/logo/Rus.jpg",
    logo: "Rus",
  },
  {
    nama: "/Assets/logo/Permira.png",
    logo: "permira",
  },
  {
    nama: "/Assets/logo/Kemendag.png",
    logo: "Kemendag",
  },
  {
    nama: "/Assets/logo/KemendagRus.jpg",
    logo: "Kemendagrus",
  },
  {
    nama: "/Assets/logo/EtnoMir.jpg",
    logo: "Etnomir",
  },
  {
    nama: "/Assets/logo/EM.jpg",
    logo: "EM",
  },
  {
    nama: "/Assets/logo/REC.jpg",
    logo: "REC",
  },
  {
    nama: "/Assets/logo/MEC.jpg",
    logo: "MEC",
  },
];

const proses = [
  {
    judul: "Initial Contact",
    foto: "/Assets/process/1.jpg",
    step: [
      "Visit Our Website: Start by visiting our website orvalaconsulting.com.",
      "Submit Your Inquiry: Use the provided contact form to share your name, email, phone, and a brief message outlining your needs.",
    ],
  },
  {
    judul: "  Consultation Meeting",
    foto: "/Assets/process/2.jpg",
    step: [
      "Schedule a Meeting: We'll promptly get in touch to schedule a consultation meeting.",
      "Discuss Your Needs: During the consultation, discuss your challenges and goals with our experts.",
    ],
  },
  {
    judul: "Proposal and Agreement",
    foto: "/Assets/process/3.jpg",
    step: [
      "Receive Recommendations: Our experts will provide tailored recommendations.",
      "Proposal and Agreement: If you decide to proceed, we'll send you a proposal and agreement for your approval.",
    ],
  },
  {
    judul: "Commencement and Ongoing Support",
    foto: "/Assets/process/4.jpg",
    step: [
      "Commence Services: Once agreed, we'll start working together.",
      "Ongoing Support: We'll stay in touch to ensure your success.",
    ],
  },
];

const whyUs = [
  {
    icon: "/Assets/why/1.png",
    judul: "Expertise",
    isi: "Our seasoned professionals have in-depth knowledge of global markets, including Russia, and a track record of successfully guiding clients through complex market entry challenges.",
  },
  {
    icon: "/Assets/why/2.png",
    judul: "Tailored Solutions",
    isi: "We understand that every client is unique. We work closely with you to develop a customized market entry strategy that aligns with your specific goals and needs.",
  },
  {
    icon: "/Assets/why/3.png",
    judul: "Local Partnerships",
    isi: "Our extensive network of local partners and stakeholders ensures you have access to the right contacts and resources, making your market entry smoother.",
  },
  {
    icon: "/Assets/why/4.png",
    judul: "Data-Driven Decisions",
    isi: "We base our strategies on thorough market research and analysis, providing you with the data you need to make informed decisions and reduce risks.",
  },
  {
    icon: "/Assets/why/5.png",
    judul: "Customer-Centric Approach",
    isi: "Your success is our top priority. We're committed to delivering the highest level of service and support, always ready to assist you throughout your market entry journey.",
  },
];

const mainServices = [
  {
    step: "PRE-ENTRY PREPARATION",
    exp: "lorem ipsum",
    background: "/Assets/services/1.png",
    content: [
      {
        judul: "1.	Market Research & Analysis (MRA)",
        isi: "Conduct comprehensive market research to gain insights into the dynamics of the Russian market. Analyse customer behaviour, assess the market's size, potential, and trends, identify key competitors and their strategies, and scrutinize regulatory and cultural factors that impact market entry. This step provides the foundation for informed decision-making. (ILS)",
      },
      {
        judul: "2.	Market Entry Strategy (MES)",
        isi: "Based on the research findings, formulate a well-defined market entry strategy aligned with the company's objectives. Evaluate the risks and opportunities associated with various entry methods, such as exporting, joint ventures, partnerships, or establishing subsidiaries. A sound strategy is crucial for a successful market entry. (DDS, ILS)",
      },
      {
        judul: "3.	Legal and Regulatory Compliance (LRC)",
        isi: "Ensure strict adherence to Russian laws and regulations. Seek legal advice on local regulations, permits, and compliance requirements. Facilitate the setup of legal entities and navigate the intricacies of business registration to ensure legal compliance. (GSR, ILS)",
      },
      {
        judul: "4.	Partner Identification and Link (PIL)",
        isi: "Identify and rigorously assess potential partners, distributors, or local representatives. Verify their credibility and capabilities to ensure they align with your company's goals. Forge valuable connections by linking and matching with suitable partners, enhancing your market entry prospects. (DDS, IAD, GSR, ILS)",
      },
      {
        judul: "5.	Localization and Culture Adaptation (LCA)",
        isi: "Tailor marketing materials, product/service offerings, and branding to resonate with Russian preferences and culture. Ensure compliance with local language and cultural norms, as localization is key to effective global marketing efforts. (ILS)",
      },
    ],
  },
  {
    step: "ENTRY IMPLEMENTATION",
    exp: "lorem ipsum",
    background: "/Assets/services/2.png",
    content: [
      {
        judul: "6.	Expo Participation, Market Testing and Entry Support (EMTES)",
        isi: "Test the market on a smaller scale before committing to full market entry. Facilitate initial market interactions and negotiations. Expo participation involves showcasing your products or services at industry-specific events or trade shows in Russia to generate leads, network, and enhance brand visibility. This typically occurs after initial market research and strategy development. (ILS, IAD, DDS)",
      },
      {
        judul: "7.	Financial and Risk Model (FRM)",
        isi: "Develop a comprehensive financial plan encompassing budgeting, revenue projections, and risk assessment. Create financial models to estimate market entry costs and revenue projections. Assess financial and currency exchange risks, and establish risk mitigation strategies to safeguard your investments. (ILS, IAD)",
      },
      {
        judul: "8.	Market Entry Execution (MEE)",
        isi: "Implement your chosen market entry strategy, whether it involves setting up operations, forming partnerships, or exporting. This step is pivotal in putting your market entry plan into action. (ILS, DDS, GSR, BT)",
      },
      {
        judul: "9.	Sales, Marketing and Distribution (SMD)",
        isi: "Execute sales and marketing strategies tailored to the Russian market. Assist in building a distribution network or sales channels in Russia, and provide guidance on pricing strategies to optimize sales performance.  (ILS, DDS, BT)",
      },
    ],
  },
  {
    step: "POST-ENTRY MANAGEMENT & GROWTH",
    exp: "lorem ipsum",
    background: "/Assets/services/3.png",
    content: [
      {
        judul: "10.	Government and Stakeholders Relations (GSR)",
        isi: "Cultivate relationships with government agencies and stakeholders to facilitate seamless business operations. Establish valuable connections with local government agencies, trade associations, and industry bodies. Navigate government approvals and incentives to ensure smooth market entry. (ILS)",
      },
      {
        judul: "11.	Monitoring, Improvement and Adjustment (MIA)",
        isi: "Continuously monitor market performance, identify areas for improvement, and enhance the marketability of your products/services. Make necessary adjustments to your strategies based on feedback and performance results. (ILS)",
      },
      {
        judul: "12.	Expansion, Growth, and Sustainability (EGS):",
        isi: "Strategically plan for the company's long-term growth, expansion, and sustainability within the Russian market. This phase involves considering further business development and investment opportunities to ensure sustained success. (ILS, DDS, IAD)",
      },
    ],
  },
];

const value = [
  {
    judul: "Team",
    isi: "We consist of international, multisectoral, and professional members equipped with both theoretical and practical experiences.",
    icon: "/Assets/value/1.png",
  },
  {
    judul: "Time",
    isi: "We are committed to delivering results promptly and being there whenever you need us.",
    icon: "/Assets/value/2.png",
  },
  {
    judul: "Target",
    isi: "We identify captive market segments, seize attainable markets, and highlight potential market growth.",
    icon: "/Assets/value/3.png",
  },
  {
    judul: "Trust",
    isi: "We build and maintain relationships for the long term. We focus on data-driven solutions and result-oriented actions.",
    icon: "/Assets/value/4.png",
  },
  {
    judul: "Trend",
    isi: "We stay updated with advanced innovations, technology, and global interests.",
    icon: "/Assets/value/5.png",
  },
];

const sectors = [
  {
    judul: "Industry and Technology",
    background: "/Assets/sectors/1s.png",
    conten: [
      {
        icon: "/Assets/sectors/1i.png",
        isi: "Energy (Including Oil and Gas)*",
      },
      {
        icon: "/Assets/sectors/2i.png",
        isi: "Mining and Metallurgy*",
      },
      {
        icon: "/Assets/sectors/3i.png",
        isi: "Machinery and Manufacturing",
      },
      {
        icon: "/Assets/sectors/4i.png",
        isi: "Information Technology (IT) & Cryptocurrency",
      },
      {
        icon: "/Assets/sectors/5i.png",
        isi: "Health",
      },
    ],
  },
  {
    judul: "Hospitality and Tourism",
    background: "/Assets/sectors/2s.png",
    conten: [
      {
        icon: "/Assets/sectors/1h.png",
        isi: "F&B (Food and Beverage)*",
      },
      {
        icon: "/Assets/sectors/2h.png",
        isi: "HORECA (Hotel, Restaurant, Catering)*",
      },
      {
        icon: "/Assets/sectors/3h.png",
        isi: "Tourism*",
      },
      {
        icon: "/Assets/sectors/4h.png",
        isi: "Spices*",
      },
    ],
  },
  {
    judul: "Logistics and Education",
    background: "/Assets/sectors/3s.png",
    conten: [
      {
        icon: "/Assets/sectors/1l.png",
        isi: "Education*",
      },
      {
        icon: "/Assets/sectors/2l.png",
        isi: "Transportation",
      },
      {
        icon: "/Assets/sectors/3l.png",
        isi: "Logistics",
      },
    ],
  },
  {
    judul: "Natural Resources & Defense",
    background: "/Assets/sectors/4s.png",
    conten: [
      {
        icon: "/Assets/sectors/1n.png",
        isi: "Education*",
      },
      {
        icon: "/Assets/sectors/2n.png",
        isi: "Transportation",
      },
      {
        icon: "/Assets/sectors/3n.png",
        isi: "Logistics",
      },
    ],
  },
  {
    judul: "Legal and Financial",
    background: "/Assets/sectors/5s.png",
    conten: [
      {
        icon: "/Assets/sectors/1f.png",
        isi: "Legal",
      },
      {
        icon: "/Assets/sectors/2f.png",
        isi: "Investment and Trading",
      },
    ],
  },
];

const expo = [
  {
    logo: "/Assets/expo/Prodexpo.png",
    judul: "ProdExpo",
    tema: "31ST INTERNATIONAL EXHIBITION FOR FOOD, BEVERAGES AND FOOD RAW MATERIALS",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    start: "July 1",
    end: "October 19, 2023",
    city: "Moscow",
    foto: [
      "/Assets/expo/Prodexpo/1.jpg",
      "/Assets/expo/Prodexpo/2.jpg",
      "/Assets/expo/Prodexpo/3.jpeg",
    ],
  },
  {
    logo: "/Assets/expo/Peterfood.png",
    judul: "Peterfood",
    tema: "31ST INTERNATIONAL EXHIBITION FOR FOOD, BEVERAGES AND FOOD RAW MATERIALS",
    content:
      "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    start: "July 4",
    end: "October 31, 2023",
    city: "St. Petersburg",
    foto: [
      "/Assets/expo/Peterfood/1.jp  g",
      "/Assets/expo/Peterfood/2.jpeg",
      "/Assets/expo/Peterfood/3.jpeg",
    ],
  },
];

const photos = [
  "/Assets/photo/1.jpg",
  "/Assets/photo/2.jpg",
  "/Assets/photo/3.JPG",
  "/Assets/photo/4.JPG",
  "/Assets/photo/5.jpg",
  "/Assets/photo/6.jpg",
];
export {
  artikel,
  sosmeds,
  menu,
  Partners,
  proses,
  whyUs,
  mainServices,
  value,
  sectors,
  expo,
  photos,
};
