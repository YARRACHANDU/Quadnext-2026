import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

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
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 relative ">
      <h2 className="text-3xl font-bold text-blue-800 text-center" style={{'padding':'20px'}}>
        📄 {isTelugu ? "Paper Submission Guidelines" : "Paper Submission Guidelines"}
      </h2>

      {/* Language Toggle Button under heading */}
      <div className="text-center mb-6">
        <button
          onClick={() => setIsTelugu(!isTelugu)}
          style={{
            borderRadius: '20px',
            backgroundColor: isTelugu ? 'green' : 'red',
            border: 'none'
          }}
          className="text-white px-4 py-1 rounded-full shadow-md hover:opacity-90 transition"
        >
          {isTelugu ? "English" : "తెలుగు"}
        </button>
      </div>

      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="rounded-lg p-4 w-full text-gray-700 text-lg font-medium hover:bg-gray-50 transition">
              {step.includes("Click here") || step.includes("ఇక్కడ క్లిక్ చేయండి") ? (
                isTelugu ? (
                  <>
                    గరిష్ట పేజీల సంఖ్య: <strong>8</strong> (8.25 × 11 అంగుళాల పేపర్, సింగిల్ కాలమ్ టెంప్లేట్). పేపర్ ఫార్మాట్:{" "}
                    <a
                      href="https://shorturl.at/JzGmG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      ఇక్కడ క్లిక్ చేయండి
                    </a>
                  </>
                ) : (
                  <>
                    Maximum number of pages: <strong>8</strong> (8.25 × 11 inch paper, single-column template). Paper format:{" "}
                    <a
                      href="https://shorturl.at/JzGmG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Click here
                    </a>
                  </>
                )
              ) : step.includes("Submit here") || step.includes("ఇక్కడ సమర్పించండి") ? (
                <a
                  href="https://forms.gle/mTyhLUwubgzpvEHS8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition" style={{'backgroundColor':'#141E46','color':'#fff','borderRadius':'7px'}}>
                    {isTelugu ? "పత్రం సమర్పించండి" : "Submit Paper"}
                  </button>
                </a>
              ) : (
                step
              )}
            </div>

            {index < steps.length - 1 && (
              <FaArrowDown className="text-blue-500 mt-3 animate-bounce" style={{ fontSize: '24px' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaperSubmissionGuidelines;
