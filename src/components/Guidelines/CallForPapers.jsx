import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

// ---------- First Section (Call for Papers) ----------
const ProductDetail = () => {
  const [isTelugu, setIsTelugu] = useState(false);

  const englishText = `
    We warmly invite academicians, researchers, and industry
    professionals to submit their original, unpublished, and
    high-quality research papers to unlock the transformative
    potential of Quantum AI and Deep-Tech for the next era of
    intelligence.

    Manuscripts should be approximately 8–10 pages in the prescribed
    format. All accepted and presented papers will be published in
    the online conference proceedings with an ISBN number:
    978-93-343-7220-5.
  `;

  const teluguText = `
    మేము అకడమిక్, పరిశోధకులు మరియు పరిశ్రమ నిపుణులను తమ 
    అసలు, ప్రచురించని, మరియు ఉన్నత-నాణ్యత పరిశోధన పత్రాలను సమర్పించమని హృదయపూర్వకంగా ఆహ్వానిస్తున్నాము, 
    తదుపరి బుద్ధిమంతమైన యుగానికి Quantum AI మరియు Deep-Tech యొక్క పరివర్తనాత్మక సామర్థ్యాన్ని ఆన్‌లాక్ చేయడానికి.

    మాన్యుస్క్రిప్ట్‌లు సుమారు 8–10 పేజీలలో నిర్దిష్ట ఫార్మాట్‌లో ఉండాలి. 
    అన్ని అంగీకృత మరియు ప్రదర్శిత పత్రాలు ISBN నంబర్‌తో ఆన్‌లైన్ కాన్ఫరెన్స్ ప్రక్రియల్లో ప్రచురించబడతాయి: 978-93-343-7220-5.
  `;

  return (
    <div className="mt-4">
      {" "}
      {/* ✅ This moves Call for Papers content down */}
      <h1 className="display-5 fw-bold mb-3" style={{ color: "#141E46" }}>
        Call for Papers
      </h1>
      <div className="mb-3">
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => setIsTelugu(!isTelugu)}
          style={{
            borderRadius: "20px",
            backgroundColor: isTelugu ? "green" : "red",
            border: "none",
            color: "#fff",
          }}
        >
          {isTelugu ? "English" : "తెలుగు"}
        </button>
      </div>
      <div className="d-flex align-items-center mb-3">
        <div className="text-warning fs-5 me-2">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star"></i>
        </div>
      </div>
      <p className="text-muted lh-lg">{isTelugu ? teluguText : englishText}</p>
      <div className="text-center mt-4">
        <img
          src="./conferencetopicspics/papers.jpg"
          alt="Call for Papers"
          className="img-fluid rounded shadow"
          style={{ maxHeight: "300px", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

// ---------- Second Section (Submission Guidelines) ----------
const PaperSubmissionGuidelines = () => {
  const stepsEn = [
    "Background, Motivation and Objective",
    "Statement of Contribution, Methodology",
    "Results, Discussions and Conclusions",
    "Maximum number of pages: 8 (8.25 × 11 inch paper, single-column template). Paper format: Click here",
    "Telugu is the official language. Papers may be in Telugu or English; translation services provided.",
    "Plagiarism must not exceed 15% (excluding references). Attach the plagiarism report with the paper.",
    "Some papers may be accepted as poster presentations.",
    "Paper Submission Link: Submit here",
  ];

  const stepsTe = [
    "పరిశీలన, ప్రేరణ మరియు లక్ష్యం",
    "సహకారం యొక్క ప్రకటన, విధానశాస్త్రం",
    "ఫలితాలు, చర్చలు మరియు నిర్ధారణలు",
    "గరిష్ట పేజీల సంఖ్య: 8 (8.25 × 11 అంగుళాల పేపర్, సింగిల్ కాలమ్ టెంప్లేట్). పేపర్ ఫార్మాట్: ఇక్కడ క్లిక్ చేయండి",
    "తెలుగు అధికారిక భాష. పత్రాలు తెలుగు లేదా ఇంగ్లీషులో ఉండవచ్చు; అనువాద సేవలు అందుబాటులో ఉన్నాయి.",
    "ప్లేజరిజం 15% మించకూడదు (సూచనలను మినహాయించి). పత్రంతో పాటు ప్లేజరిజం నివేదికను జత చేయండి.",
    "కొన్ని పత్రాలు పోస్టర్ ప్రెజెంటేషన్లుగా ఆమోదించబడవచ్చు.",
    "పత్రం సమర్పణ లింక్: ఇక్కడ సమర్పించండి",
  ];

  const [isTelugu, setIsTelugu] = useState(false);
  const steps = isTelugu ? stepsTe : stepsEn;

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 h-100">
      <h2 className="fw-bold text-center mb-4" style={{ color: "#141E46" }}>
        📄{" "}
        {isTelugu ? "పత్ర సమర్పణ మార్గదర్శకాలు" : "Paper Submission Guidelines"}
      </h2>

      <div className="text-center ">
        <button
          onClick={() => setIsTelugu(!isTelugu)}
          className="px-4 py-1 text-white shadow-md"
          style={{
            borderRadius: "20px",
            backgroundColor: isTelugu ? "green" : "red",
            border: "none",
          }}
        >
          {isTelugu ? "English" : "తెలుగు"}
        </button>
      </div>

      {steps.map((step, index) => (
        <div key={index} className="text-center mb-3">
          <div className="p-2 text-muted fs-6 fw-medium">
            {step.includes("Click here") ||
            step.includes("ఇక్కడ క్లిక్ చేయండి") ? (
              isTelugu ? (
                <>
                  గరిష్ట పేజీల సంఖ్య: <strong>8</strong> ...{" "}
                  <a
                    href="https://shorturl.at/JzGmG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    ఇక్కడ క్లిక్ చేయండి
                  </a>
                </>
              ) : (
                <>
                  Maximum number of pages: <strong>8</strong> ...{" "}
                  <a
                    href="https://shorturl.at/JzGmG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    Click here
                  </a>
                </>
              )
            ) : step.includes("Submit here") ||
              step.includes("ఇక్కడ సమర్పించండి") ? (
              <a
                href="https://forms.gle/mTyhLUwubgzpvEHS8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="fw-semibold px-4 py-2"
                  style={{
                    backgroundColor: "#141E46",
                    color: "#fff",
                    borderRadius: "7px",
                    border: "none",
                  }}
                >
                  {isTelugu ? "పత్రం సమర్పించండి" : "Submit Paper"}
                </button>
              </a>
            ) : (
              step
            )}
          </div>
          {index < steps.length - 1 && (
            <FaArrowDown className="text-primary  animate-bounce" />
          )}
        </div>
      ))}
    </div>
  );
};

// ---------- Combined Page ----------
const CallForPapersPage = () => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row gx-5 gy-4">
          {" "}
          {/* ✅ gx-5 adds more space between columns */}
          <div className="col-12 col-lg-6">
            <ProductDetail />
          </div>
          <div className="col-12 col-lg-6">
            <PaperSubmissionGuidelines />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapersPage;


