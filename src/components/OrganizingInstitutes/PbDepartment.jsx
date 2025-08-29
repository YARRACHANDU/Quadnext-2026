import React, { useState } from "react";

const teluguDescription = `కంప్యుట్ర్ సైన్ట విభాగం 1988లో స్థాపంచబడింద్ధ మరియు విసూృత్ శ్రేణి అండర్ గ్రాడ్యుయేట్ మరియు పోస్టు గ్రాడ్యుయేట్ ప్రోగ్రామేను అంద్ధస్సూ ంద్ధ. అండర్ గ్రాడ్యుయేట్ స్థాయిలో, ఇద్ధ B.Sc అంద్ధస్సూ ంద్ధ. (కంప్యుట్ర్ సైన్ట) B.Sc. (కంప్యుట్ర్ సైన్ట & క్నగిాటవ్ సిసుమ్సట) B.Sc. (ఆనర్ట కంప్యుట్ర్ సైన్ట) మరియు B.C.A. ప్రోగ్రామ్లే , కంప్యుట్ర్ సైన్స్ట ో B.Sc లో మైనర్ సబ్జెకుగా కూడా అందుబాట్టలో ఉనాాయి. (గణిత్ం) మరియు B.Sc. (ఆనర్ట ఎలక్నరనిక్సట) పోస్టు గ్రాడ్యుయేట్ స్థాయిలో, ఇద్ధ M.Sc అంద్ధస్సూ ంద్ధ. (కంప్యుట్ర్ సైన్ట) మరియు M.C.A. క్నర్ుక్రమాలు. ప ్రస్సూత్ం, ఈ విభాగంలో 2,234 మంద్ధ అండర్ గ్రాడ్యుయేట్ విదాురుాలు మరియు 202 మంద్ధ పోస్టు గ్రాడ్యుయేట్ విదాురుాలు ఉనాారు, వీరికి 33 మంద్ధ అంకిత్మైన అధాుపకలు మద్దతు ఇస్సూనాారు. ఈ విభాగం వ ిదాువేత్ూలు, పరిశ్రమ నిపుణులు మరియు ప్రమ్లఖ పరిశోధ్కల నైపుణ్ుం న ుండి ప్రయోజనం పందుతుంద్ధ మరియు స్థంకేతిక పరిజాానం యొకక అభివృద్ధి చందుతునా ర్ంగాలలో స్పమినారుే , వర్గాపుే , సింపోజియా మరియు సమావేశలను నిర్వహించడం, విదాు వృద్ధి, పరిశోధ్న మరియు ద ాని విదాురుాలలో పరిశ్రమ సంసిద్ిత్ను పెంపంద్ధంచడం వంట అదుుత్మైన రిక్నరుును కలిగి ఉంద్ధ. ;`;

const englishDescription = `The Department of Computer Science was established in 1988 and offers a wide range of undergraduate and postgraduate programmes. At the undergraduate level, it offers B.Sc. (Computer Science), B.Sc. (Computer Science & Cognitive Systems), B.Sc. (Honours Computer Science), and B.C.A. programmes, with Computer Science also available as a minor subject in B.Sc. (Mathematics) and B.Sc. (Honours Electronics). At the postgraduate level, it offers M.Sc. (Computer Science) and M.C.A. programmes. Currently, the department has 2,234 undergraduate students and 202 postgraduate students, supported by 33 dedicated faculty members. The department benefits from the expertise of academicians, industry professionals, and eminent researchers and has an excellent record of organising seminars, workshops, symposia, and conferences in emerging areas of technology, fostering academic growth, research, and industry readiness among its students.`;

const PbDepartment = () => {
  const [language, setLanguage] = useState("english"); // english or telugu

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "telugu" : "english"));
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: "#141E46",
        minHeight: "10vh",
        overflowX: "hidden",
        width: "100vw",
        boxSizing: "border-box",
        backgroundColor: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      {/* Static Heading */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          color: "#141E46",
          lineHeight: "1.2",
          userSelect: "none",
          marginBottom: "20px",
        }}
      >
        About the Organizing Department
      </h1>

      {/* Toggle Button under heading */}
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
          marginBottom: "30px",
        }}
      >
        {language === "english" ? "తెలుగు" : "English"}
      </button>

      {/* Department About Section */}
      <div
        style={{
          maxWidth: "1000px",
          padding: "30px 20px 40px",
          color: "#141E46",
          lineHeight: 1.6,
          fontSize: "1.1rem",
          whiteSpace: "pre-line",
          textAlign: "justify",
          borderRadius: "10px",
        }}
      >
        <p>{language === "english" ? englishDescription : teluguDescription}</p>
      </div>
    </div>
  );
};

export default PbDepartment;
