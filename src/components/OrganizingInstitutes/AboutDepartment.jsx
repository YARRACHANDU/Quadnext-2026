import React, { useState } from "react";

const hods = [
  {
    id: 1,
    name: "Dr K V Sambasiva Rao",
    profession: "Professor & Dean, CSE & Allied, NRIIT",

    image: "/faculty/dean.jpg",
  },
  {
    id: 2,
    name: "Dr D Sunitha",
    profession: "Head of Department, CSE",

    image: "/Nri/cse.jpeg",
  },
  {
    id: 3,
    name: "Dr.Rajendra Prasad Jaladi",
    profession: "Head of Department, IT & Professor",

    image: "/faculty/it.jpeg",
  },
  {
    id: 4,
    name: "Dr.Ch V Murali Krishna",
    profession: "Head of Department, CS-DSc & Associate Professor",

    image: "/faculty/csd.jpeg",
  },
  {
    id: 5,
    name: "Dr.P Rajendra Kumar",
    profession: "Head of Department, AIML & Professor",

    image: "/faculty/aiml.jpeg",
  },
  {
    id: 6,
    name: "Dr B Dasaradha Ram",
    profession: "Head of Department, CS-AIML &  Professor",

    image: "/faculty/csm.JPG",
  },
];

const teluguDescription = `ఎన్ఆర్ఐ ఇనిట ిట్యుట్ ఆఫ్ టెక్నాలజీలో కంప్యుట్ర్ సైన్ట అండ్ ఇంజనీరింగ్ విభాగం అధిక-నాణ్ుత్ స్థంకేతిక విద్ును అంద్ధంచడం మరియు కంప్యుటంగ్లే పరిశోధ్న మరియు ఆవిషకర్ణ్లనుప ్ర ోత్టహించాలనే ద్ృష్టుతో స్థాపంచబడింద్ధ. ఇద్ధ B.Tech తో సహా అనేక అండర్గా ాడ్యుయేట్ ప్రోగ్రామేను అంద్ధస్సూ ంద్ధ. కంప్యుట్ర్ సైన్ట అండ్ ఇంజనీరింగ్, CSE (ఆరిుఫిష్టయల్ ఇంటెలిజ్న్ట & మెష్టన్ ల ెరిాంగ్) CSE (డేటా సైన్ట) CSE (తెలుగు మీడియం) మరియు ఇనఫర్మమషన్ ట ెక్నాలజీ. ప ోస్టు గ్రాడ్యుయేట్ స్థాయిలో, విభాగం M.Tech అంద్ధస్సూ ంద్ధ. 
 
కంప్యుట్ర్ సైన్ట మరియు ఇంజనీరింగ్లే , అభివృద్ధి చందుతునార ్ంగాలలో అధునాత్న జాానం మరియు పరిశోధ్న అవక్నశలను అంద్ధంచడం. విదాుపర్మైన నైపుణ్ుం మరియు విదాురుాల అభివృద్ధికి కట్టుబడి ఉనా అత్ుంత్ అర్హత్ కలిగిన మరియు అంకిత్మైన అధాుపక సభ్యుల బృంద్ం ఈ విభాగానికి మద్దతు ఇస్సూ ంద్ధ. ప్రస్సూత్ం, ఈ విభాగం త్న క్నర్ుక్రమాలలో బలమైన వ ిదాురుాల నమ్తదును కలిగి ఉంద్ధ మరియు సైదాి ంతిక పునాదులు, ఆచర్ణాత్మక అనువర్ూనాలు మరియు ప్రజ్క్సు ఆధారిత్ అభాుసంద ావర్గ సంప్యర్ణ అభాుస్థనిా నిర్గిరిస్సూ ంద్ధ. సమర్ావంత్మైన బోధ్న, అభాుసం మరియు పరిశోధ్నలను 

 
 సలభత్ర్ం చేయడానికి ఈ విభాగంలో ఆధునిక ప్రయోగశలలు, అధునాత్న కంప్యుట్ర్ వువసాలు మరియు లైస్పన్ట పంద్ధన స్థఫ్ట్ుేర్ ఉనాాయి. ఇద్ధ వర్గాపుే , స్పమినారుే మరియు సమావేశలను న ిర్వహించడానికి పరిశ్రమ నిపుణులు, విదాువేత్ూలు మరియు పరిశోధ్కలతో చురుకైన సహక్నర్గనిా నిర్వహిస్సూ ంద్ధ, విదాురుాలక స ్్థంకేతిక పురోగతులతో నవీకరించడానికి మరియు పరిశ్రమక స ిద్ింగా ఉనా నైపుణాులను అభివృద్ధి చేయడానికి వీలు కలిెస్సూ ంద్ధ.`;

const englishDescription = `The Department of Computer Science and Engineering at NRI Institute of Technology was established with the vision of imparting high-quality technical education and promoting research and innovation in computing. It offers a range of undergraduate programmes, including B.Tech. in Computer Science and Engineering, CSE (Artificial Intelligence & Machine Learning), CSE (Data Science), CSE (Telugu Medium), and Information Technology.

At the postgraduate level, the department offers M.Tech. in Computer Science and Engineering, providing advanced knowledge and research opportunities in emerging areas. The department is supported by a team of highly qualified and dedicated faculty members committed to academic excellence and student development. Currently, the department has strong student enrolment across its programmes and ensures holistic learning through theoretical foundations, practical applications, and project-based learning.

The department is equipped with modern laboratories, advanced computer systems, and licensed software to facilitate effective teaching, learning, and research. It maintains active collaboration with industry experts, academicians, and researchers to organise workshops, seminars, and conferences, enabling students to stay updated with technological advancements and develop industry-ready skills.`;

const AboutDepartment = () => {
  const [language, setLanguage] = useState("english"); // english or telugu

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "telugu" : "english"));
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: "#2c3e50",
        minHeight: "100vh",
        overflowX: "hidden",
        width: "100vw",
        boxSizing: "border-box",
        backgroundColor: "#f0f0f0",
        position: "relative", // for button positioning
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Translate button fixed top-right */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        <button
          onClick={toggleLanguage}
          style={{
            cursor: "pointer",
            padding: "10px 20px",
            fontSize: "1rem",
            borderRadius: "25px",
            border: "none",
            backgroundColor: language === "english" ? "red" : "green",
            color: "white",
            boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
            transition: "background-color 0.3s ease",
          }}
        >
          {language === "english" ? "తెలుగు" : "English"}
        </button>
      </div>

      {/* Centered content wrapper */}
      <div
        style={{
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          padding: "0 20px",
          boxSizing: "border-box",
          textAlign: "center", // center all text content inside
        }}
      >
        {/* Static Heading */}
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            lineHeight: "1.2",
            userSelect: "none",
            opacity: 1,
            transition: "opacity 0.3s ease",
            color: "#141E46",
            marginBottom: "0px",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          About the Organizing Departments
        </h1>

        {/* HODs Section */}
        <div
          style={{
            padding: "30px 0 40px",
            marginBottom: "5px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
            {/* First Row */} {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
               {" "}
            {hods
              .slice(0, 3)
              .map(({ id, name, profession, description, image }) => (
                <div
                  key={id}
                  style={{
                    width: "33%",
                    boxSizing: "border-box",
                    padding: "0 10px",
                    textAlign: "center",
                  }}
                >
                          {/* ...content as before... */}       {" "}
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      overflow: "hidden",
                      borderRadius: "50%",
                      margin: "0 auto 15px",
                      boxShadow: "0 0 8px rgba(0,0,0,0.15)",
                    }}
                  >
                             {" "}
                    <img
                      src={image}
                      alt={name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                           {" "}
                  </div>
                         {" "}
                  <h2
                    style={{
                      fontSize: "1rem",
                      marginBottom: "3px",
                      color: "#2c3e50",
                    }}
                  >
                              {name}       {" "}
                  </h2>
                         {" "}
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: "500",
                      color: "#2980b9",
                      fontStyle: "italic",
                      marginBottom: "8px",
                    }}
                  >
                              {profession}       {" "}
                  </h3>
                         {" "}
                  <p style={{ color: "#556677", fontSize: "0.95rem" }}>
                              {description}       {" "}
                  </p>
                       {" "}
                </div>
              ))}
             {" "}
          </div>
            {/* Second Row */} {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
               {" "}
            {hods
              .slice(3, 6)
              .map(({ id, name, profession, description, image }) => (
                <div
                  key={id}
                  style={{
                    width: "33%",
                    boxSizing: "border-box",
                    padding: "0 10px",
                    textAlign: "center",
                  }}
                >
                          {/* ...content as before... */}       {" "}
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      overflow: "hidden",
                      borderRadius: "50%",
                      margin: "0 auto 15px",
                      boxShadow: "0 0 8px rgba(0,0,0,0.15)",
                    }}
                  >
                             {" "}
                    <img
                      src={image}
                      alt={name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                           {" "}
                  </div>
                         {" "}
                  <h2
                    style={{
                      fontSize: "1.25rem",
                      marginBottom: "6px",
                      color: "#2c3e50",
                    }}
                  >
                              {name}       {" "}
                  </h2>
                         {" "}
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: "500",
                      color: "#2980b9",
                      fontStyle: "italic",
                      marginBottom: "8px",
                    }}
                  >
                              {profession}       {" "}
                  </h3>
                         {" "}
                  <p style={{ color: "#556677", fontSize: "0.95rem" }}>
                              {description}       {" "}
                  </p>
                       {" "}
                </div>
              ))}
             {" "}
          </div>
        </div>

        {/* Department About Section */}
        <div
          style={{
            padding: "30px 20px 40px",
            color: "#34495e",
            lineHeight: 1.6,
            fontSize: "1.1rem",
            whiteSpace: "pre-line",
            textAlign: "center", // center description text
          }}
        >
          <p>
            {language === "english" ? englishDescription : teluguDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
