import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

// ENGLISH DATA
const dataEN = {
  pageTitle: "Conference Organizing Committee",
  pageSubtitle: "A complete listing of all committee members",
  totalCommitteesLabel: "Total Committees",
  totalMembersLabel: "Total Members",
  majorCommitteesHeading: "Major Committees",
  accordions: {
    technicalProgram: "Technical Program Committee",
    internationalAdvisory: "International Advisory Committee",
    nationalAdvisory: "National Advisory Committee",
    editorial: "Editorial Board",
    paperReview: "Technical Paper Review Board",
  },
  cardTitles: [
    "Chief Patrons",
    "Patrons",
    "General Chair",
    "Convener & Co-Convener",
  ],
  chiefPatrons: [
    "Dr R Venkat Rao, Chairman, NRI Institute of Technology (NRIIT), Agiripalli, Vijayawada",
    "Prof Gutta Sambasivarao, Director (Academics), NRIIT",
  ],
  patrons: [
    "Dr G Naga Bhaskar, Principal, NRIIT",
    "Dr M Ramesh, Principal, PB Siddhartha College of Arts & Science (PBSc), Vijayawada",
  ],
  generalChair: ["Dr K V Sambasiva Rao, Professor & Dean, CSE, NRIIT (Chair)"],
  convener: ["Dr D Sunitha, HOD : CSE, NRIIT"],
  coConvener: ["Dr T S Ravi Kiran, HOD & Associate Prof., PBSc"],
  technicalProgram: [
    "Dr. D. Sunitha, Professor & HOD : CSE, (Chair)",
    "Prof. J. Rajendra Prasad, HOD : IT Dept, NRIIT",
    "Dr. Ramesh Kumar Bhukya,IIIT Allahabad, Prayagraj",
    "Prof. Venugopal Boppana, CSE, NRIIT",
    "Dr. Garimella Rama Murthy,Professor, Mahindra University,Hyderabad",
    "Dr. Neha Gupta,Associate Professor,VIT-AP",
    "Dr. Srilatha Chebrolu,Assistant Professor,NIT AP",
    "Dr. Balwinder Raj, NIT Jalandhar,Punjab",
    "Neha Boloor,Software Engineer,Zoox Inc.Foster City,California,USA",
    "Yuhao Chen,Data Scientist at Circle,Master Degree of UC Berkeley,Circle Internet Financial,UC Berkeley,New York,US",
    "Praveen Hegde,Senior Manager - Emerging Commercial Platforms  Verizon,Atlanta,US GA, USA",
    "Prof. Paritosh Bhattacharya,Professor,NIT Agartala",
    "Dr. Bhargavi Konda,Independent Reseache,University of the Cumberlands,Massachusetts,USA",
    "Dr. Manisha Bharti,Associate Professor,NIT Delhi",
    "Mr. Uma Desu,GenAI Specialist,IntelliIndia,Hyderabad",
    "Mr. Sai Satish Damaraju,Founder and CEO,Indian Servers,Vijayawada",
    "Mr. Abhishek Dojjode,Cheif Talent Officer,Virtusa" /* …same as before… */,
    "Mr. K. Sudhir,PBSc,Vijayawada",
    "Dr. B. Madhavarao,Professor,Sir C R Reddy College of Engineering,Eluru",
    "Prof. V. Ch. Venkaiah,School of Computer Scince,University of Hyderabad",
  ],
  internationalAdvisory: [
    "Srikanth Bellamkonda,Assistant Vice President | Networks & Security,Barclays Services Corp,New Jersey,USA(Chair)",
    "Vishal Jain,Software Engineering Leader,NYC,USA,NJ,USA",
    "Niranjan Reddy Kotha,Sr. Cloud and Infrastructure Sequrity Engineer,Charter Communication, Colorado,USA",
    "Dr. Mohammad S Khan,Professor Department of Computing,ETSU,TN,USA",
    "Prof. Marcos Eduardo Valle,Assistant Professor of Applied Mathematics,Institute of Mathematics,Statistics and Scientific Computing (IMECC),University of Campinas,Brazil",
    "Prof Marco Di Renzo,CNRS Research Director,Centrale Supelec - University Paris-Sud Paris,France",
    "Prof. Saad Mekhilef,Dean & Professor,University of Malaya,Malaysia.Rachit Gupta,Sr.Technical Architech,Gaurdian Life Insurance,TN,USA",
    "Jyotirmay Jena,Associate General Manager,HCL Technologies,Texas,US",
    "Dr. Shashi Kant Gupta,Adjunct Research Faculty,Lincoln University College,Malaysia",
    "Muhammad Saqib,Delivery Consultant - AI/ML & Cybersecurity,Amazon Web Services – USA,Texas,USA",
    "Sudheer Kolla,Senior PostgreSQL DBA Centers for Medicare & Medicaid Services,7500 Security Boulevard,Baltimore,MD 21244,Texas,USA",
    "Shubham Malhotra,Software Developer, Amazon Web Services,Washington, United States",
    "Shilpi Bhattacharyya, Global Product Manager  IBM,2455 South Rd,Poughkeepsie,NY 12601,Washington,United States",
    "Dr. Vinay Kumar Kasula,Independent Researcher,University of the Cumberlands Virginia,USA",
    "Sam Prakash Bheri,Principal Technical Manager,Microsoft,WA,USA",
    "Raja Chakraborty,Senior Engineer,LiveNation Ent.,Ticketmaster,CA,USA 91381",
    "Chinmay Jain,Group Product Manager,Waymo,CA,USA",
    "Priya Yesare,Principal SQA Engineer,Asurion, 1101 Church St,Nashville, TN 37203,USA",
    "Dr. Mounica Yenugula,Sr. Cloud Services Engineer,Equifax,Atlanta,Georgia",
    "Ruthvik Uppaluri,Manager,FP&A Systems,University of Missouri at Kansas City,MO,NC,USA",
  ],
  nationalAdvisory: [
    "Dr Ch V Murali Krishna, HOD CS-DSc., NRIIT (Chair)",
    "Dr Krishna Prakash, CS-AIML, NRIIT",
    "Mr. Veeranjaneyulu Kureti,Technical SpecialistTeam Lead,Accenture Innovation Hub,Bengaluru",
    "Mr. G Samrat Krishna,Asst. Prof., PBSc",
    "Dr. Anoop Kumar Mishra,Professor,VITAP",
    "Dr. Kanwarpreet Kaur,Assistant ProfessorContractual-II,Thapar Institute of Engineering andTechnology, atiala,Punjab",
    "Dr. Manjunath Mulimani,Manipal Institute of Technology,Manipal Academy of Higher Education(MAHE),Manipal",
    "Dr. Jay Singh,Professor,BL Bajaj Institute of Technology & Management,New Delhi",
    "Prof. Rama Murthy Garimella,Mahindra University,Hyderabad",
    "Dr. J. Venkataramanaiah,EEE,NIT Surat",
    "Dr. Bheemappa Halavar,IIIT Sricity",
    "Dr. Y. Arpitha,CS-DSc.,NRIIT",
    "Prof. Kuthadi Venu Madhav,Dept of cS & IS,International University of Sc. & Tech.,Botswana,South Africa",
    "Dr. Shesha Raghunathan,Quantum Computing & Deep Tech Leader,IBM,Bengaluru",
    "Dr. Koppala Guravaiah,Dept of CSE,IIIT,Kottayam",
    "Prof. G. Apparo,GITAM Deemed to be University,Visakhapatnam",
    "Prof. S. Chandra Sekhar,CS-AIML,NRIIT",
    "Prof. V. Lakshmikanth Chowdary,CS-AIML,NRIIT",
    "Prof. M. Chaitanya Kishore Reddy,IT,NRIIT",
    "Dr. D. Vijaya Kumar,Asso,Prof,CS-DSc,NRIIT",
    "Mr. Kavuri Sridhar,Asst. Prof.,CS Department,PBSc.,Vijayawada",
    "Dr. M. Venkateswara Rao,IT,NRIIT",
    "Dr. G. Shobana,CSE,NRIIT",
    "Dr. T. Manasa Veena,AIML,NRIIT",
    "Dr. B. Kondalu,Prof., AIML",
    "Dr. K. Gayatri,Associate Prof.,AIML,NRIIT",
    "Prof. V. Teju,CS-AIML,NRIIT",
  ],
  editorial: [
    "Dr. D. Sunitha,HOD:CSE,NRIIT(Chair)",
    "Dr. T. S. Ravi Kiran,HOD & Associate Prof.,PBSc",
    "Dr. Ch. V. Murali Krishna,HOD:CS-DSc.,NRIIT",
    "Dr. Bb. Dasaradh Ram,HOD:CS-AIML,NRIIT",
    "Dr. P. Rajendra Kumar,HOD:AIML,NRIIT",
    "Prof. V.V. Subrahmanyam Director & ProfessorSchool of Computer and Information Sciences(SOCIS) IGNOU,New Delh",
    "Dr. Shonak Bansal,Associate professor,Chandigarh University",
  ],
  paperReview: [
    "Dr. K. V. Sambasiva Rao,Dean,CSE,NRIIT(Chair)",
    "Dr. Udit Satija,IIT Patna",
    "Dr. Vinay Kumar Kasula,Independent Researcher,University of the Cumberlands,Virgina,USA",
    "Mr. G. Samrat Krishna,Asst.Prof.,PBSc,Vijayawada",
    "Dr. Dakshina Ranjan Kisku,Associate Professor, NITDurgapur,CSE, Durgapur - 713209,West Bengal",
    "Dr. P. Durga,CSE,NRIIT",
    "Prof. J. Chaitanya,CS-DSc,NRIIT",
  ],
};

// TELUGU DATA
const dataTE = {
  pageTitle: "Conference Organizing Committee",
  pageSubtitle: "A complete listing of all committee members",
  totalCommitteesLabel: "మొత్తం కమిటీలు",
  totalMembersLabel: "మొత్తం సభ్యులు",
  majorCommitteesHeading: "Major Committees",
  accordions: {
    technicalProgram: "Technical Program Committee",
    internationalAdvisory: "International Advisory Committee",
    nationalAdvisory: "National Advisory Committee",
    editorial: "Editorial Board",
    paperReview: "Technical Paper Review Board",
  },
  cardTitles: [
    "Chief Patrons",
    "Patrons",
    "General Chair",
    "Convener & Co-Convener",
  ],
  chiefPatrons: [
    "Dr. R. వెంకటరావు, ఛైర్మన్, ఎన్ఆరఐ ఇన్స్టిట్యూట్ ఆఫ్ టెక్నాలజీ (ఎన్ఆరఐఐటీ), అగిరిపల్లి, విజయవాడ",
    "Prof. Gutta. సాంబశివరావు, డైరెక్టర్ (అకాడెమిక్స్), ఎన్ఆరఐఐటీ",
  ],
  patrons: [
    "డా.   నాగ భాస్కర్, ప్రిన్సిపాల్, ఎన్ఆరఐఐటీ",
    "డా. ఎం. రమేష్, ప్రిన్సిపాల్, పీబీ ఎస్క్, విజయవాడ",
  ],
  generalChair: [
    "డా. కె. వి. సాంబశివరావు, ప్రొఫెసర్ & డీన్, సిఎస్ఈ, ఎన్ఆరఐఐటీ (చైర్)",
  ],
  convener: ["డా. డి. సునీత, హెచ్‌ఓడీ: సిఎస్ఈ, ఎన్ఆరఐఐటీ"],
  coConvener: [
    "డా. టి. ఎస్. రవి కిరణ్, హెచ్‌ఓడీ & అసోసియేట్ ప్రొఫెసర్, పీబీ ఎస్క్",
  ],
  technicalProgram: [
    "డా. డి. సునీత, ప్రొఫెసర్ & హెచ్‌ఓడీ: సిఎస్ఈ (చైర్)",
    "ప్రొ. జె. రాజేంద్ర ప్రసాద్, హెచ్‌ఓడీ: ఐటి విభాగం, ఎన్ఆరఐఐటీ",
    "డా. రమేష్ కుమార్ భుక్యా, ఇండియన్ ఇన్స్టిట్యూట్ ఆఫ్ ఇన్ఫర్మేషన్ టెక్నాలజీ - అలహాబాద్, ప్రయాగ్ రాజ్",
    "ప్రొ. వేణుగోపాల్ బోప్పన, కంప్యూటర్ సైన్స్ అండ్ ఇంజినీరింగ్, ఎన్ఆరఐఐటీ",
    "డా. గరిమెళ్ళ రామమూర్తి, ప్రొఫెసర్, మహీంద్రా యూనివర్శిటీ, హైదరాబాద్",
    "డా. నేహా గుప్తా, అసోసియేట్ ప్రొఫెసర్, VITAP",
    "డా. శ్రిలత చెబ్రోలు, అసిస్టెంట్ ప్రొఫెసర్, NIT AP",
    "డా. బాల్విందర్ రాజ్, NIT జలంధర్, పంజాబ్",
    "నేహ బాలూర్, సాఫ్ట్‌వేర్ ఇంజినీర్, Zoox Inc., ఫోస్టర్ సిటీ, కాలిఫోర్నియా, USA",
    "యుహావో చెన్, డేటా సైంటిస్ట్, సర్కిల్, UC బెర్క్లే మరియు USA",
    "ప్రవీణ్ హేగ్డె, సీనియర్ మేనేజర్ - వరిజాన్, అట్లాంటా, USA",
    "ప్రొ. పరితోష్ భట్టాచార్య, ప్రొఫెసర్, NIT అగర్తలా",
    "డా. భార్గవి కొండా, స్వతంత్ర పరిశోధకుడు, యూనివర్సిటీ ఆఫ్ ద కంబర్లాండ్, మాసచూసెట్స్, USA",
    "డా. మనీషా భారతి, అసోసియేట్ ప్రొఫెసర్, NIT ఢిల్లీ",
    "శ్రీ ఉమా దేశు, GenAI స్పెషలిస్ట్, IntelliIndia, హైదరాబాద్",
    "శ్రీ సాయి సతీష్ దామరాజు, Founder & CEO, ఇండియన్ సర్వర్స్, విజయవాడ",
    "శ్రీ అభిషేక్ దోజ్జోడే, చీఫ్ టాలెంట్ ఆఫీసర్, Virtusa",
    "శ్రీ కే. సుధీర్, PBSc, విజయవాడ",
    "డా. బీ. మధవరావు, ప్రొఫెసర్, సర్ సి ఆర్ రెడ్డి ఇంజినీరింగ్ కాలేజీ, ఏలూరు",
    "ప్రో. వి. చి. వెంకయ్య, కంప్యూతర్ సైన్స్ స్కూల్, హైదరాబాద్ యూనివర్శిటీ",
  ],
  internationalAdvisory: [
    "శ్రీకాంత్ బెల్లంకొండ, అసిస్టెంట్ వైస్ ప్రెసిడెంట్ | నెట్‌వర్క్స్ & సెక్యూరిటీ, బార్క్లేస్ సర్వీసెస్ కార్ప్, న్యూజెర్సీ, USA (చైర్)",
    "విశాల్ జైన్, సాఫ్ట్‌వేర్ ఇంజినీరింగ్ లీడర్, NYC, USA, NJ, USA",
    "నిరంజన్ రెడ్డి కొత, సీనియర్ క్లౌడ్ అండ్ ఇన్‌ఫ్రాస్ట్రక్చర్ సెక్యూరిటీ ఇంజినీర్, షార్టర్ కమ్యూనికేషన్, కోలరేడో, USA",
    "డాక్టర్ మొహమ్మద్ ఎస్ ఖాన్, ప్రొఫెసర్, కంప్యూటింగ్ డిపార్ట్‌మెంట్, ETSU, TN, USA",
    "ప్రొఫెసర్ మార్కోస్ ఎడ్వార్డో వల్లే, అసిస్టెంట్ ప్రొఫెసర్ ఆఫ్ అప్లైడ్ మ్యాథమెటిక్స్, ఇన్‌స్టిట్యూట్ ఆఫ్ మ్యాథ్స్ (IMECC), యూనివర్సిటీ ఆఫ్ క్యాంపినాస్, బ్రెజిల్",
    "ప్రొఫెసర్ మార్కో డి రెంజో, CNRS రిసెర్చ్ డైరెక్టర్, సెంట్రల్ సుపెలెక్ - యూనివర్శిటీ పారిస్-సుడ్, ఫ్రాన్స్",
    "ప్రొఫెసర్ సాద్ మెక్హిలెఫ్, డీన్ & ప్రొఫెసర్, యూనివర్శిటీ ఆఫ్ మలయ, మలేషియా. రాచిత్ గుప్తా, సీనియర్ టెక్నికల్ ఆర్కిటెక్ట్, గార్డియన్ లైఫ్ ఇన్సూరెన్స్, TN, USA",
    "జ్యోతిర్మయ్ జెన, అసోసియేట్ జనరల్ మేనేజర్, HCL టెక్నాలజీస్, టెక్సాస్, US",
    "డాక్టర్ శశికాంత్ గుప్తా, అడ్డజంక్ట్ రిసెర్చ్ ఫ్యాకల్టీ, లింకన్ యూనివర్శిటీ కాలేజ్, మలేషియా",
    "ముహమ్మద్ సాకిబ్, డెలివరీ కన్సల్టెంట్ - AI/ML & సైబర్ సెక్యూరిటీ, అమెజాన్ వెబ్ సర్వీసెస్ – టెక్సాస్, USA",
    "సుధీర్ కొల్ల, సీనియర్ PostgreSQL DBA, సెంటర్స్ ఫర్ మెడికేర్ & మెడికెయిడ్ సర్వీసెస్, బాట్టిమోర్, మেরిలాండ్, USA",
    "శుభమ్ మల్హోత్ర, సాఫ్ట్‌వేర్ డెవలపర్, అమెజాన్ వెబ్ సర్వీసెస్, వాషింగ్టన్, USA",
    "శిల్పి భట్టాచార్య, గ్లోబల్ ప్రోడక్ట్ మేనేజర్, IBM, పౌగ్కీప్సీ, NY, USA",
    "డాక్టర్ వింయ్ కుమార్ కసుల, స్వతంత్ర పరిశోధకుడు, యూనివర్సిటీ ఆఫ్ ద కంబర్లాండ్స్, వర్జీనియా, USA",
    "శామ్ ప్రకాష్ భేరి, ప్రిన్సిపల్ టెక్నికల్ మేనేజర్, మైక్రోసాఫ్ట్, WA, USA",
    "రాజా చక్రవర్తి, సీనియర్ ఇంజనీర్, లైవ్ నేషన్ ఎంట్., టికెట్‌మాస్టర్, CA, USA",
    "చిన్మయ్ జైన్, గ్రూప్ ప్రోడక్ట్ మేనేజర్, వేమో, CA, USA",
    "ప్రియ యేసారే, ప్రిన్సిపల్ SQA ఇంజనీర్, అసురియన్, నాష్విల్లే, TN, USA",
    "డా. మౌనిక యనుగుల, సీనియర్ క్లౌడ్ సర్వీసెస్ ఇంజనీర్, ఇక్విఫాక్స్, అట్లాంటా, జార్జియా, USA",
    "రుత్విక్ ఉప్పలూరు, మేనేజర్, FP&A సిస్టమ్స్, యూనివర్సిటీ ఆఫ్ మిస్సూరి, కెన్సాస్ సిటీ, MO, NC, USA",
  ],
  nationalAdvisory: [
    "డా. చి. వి. మురళి కృష్ణ, హెచ్‌ఓడీ, CS-DSc., ఎన్ఆరఐఐటీ (చైర్)",
    "డా. కృష్ణ ప్రకాష్, CS-AIML, ఎన్ఆరఐఐటీ",
    "శ్రీ వీరాంజనేయులు కురేటి, టెక్నికల్ స్పెషలిస్ట్, టీమ్ లీడ్, అక్చుర్ ఇన్నొవేషన్ హబ్, బెంగళూరు",
    "శ్రీ జి. సమ్రాట్ కృష్ణ, అసిస్టెంట్ ప్రొఫెసర్, పీబీ ఎస్క్",
    "డా. అనూప్ కుమార్ మిశ్రా, ప్రొఫెసర్, VITAP",
    "డా. కన్వర్‌ప్రీత్ కౌర్, అసిస్టెంట్ ప్రొఫెసర్, థాపర్ ఇన్స్ ఆఫ్ ఇంజినీరింగ్ అండ్ టెక్నాలజీ, పటియాలా, పంజాబ్",
    "డా. మంజునాథ్ ములిమాని, మణిపాల్ ఇన్స్టిట్యూట్ ఆఫ్ టెక్నాలజీ, MAHE, మణిపాల్",
    "డా. జయ్ సింగ్, ప్రొఫెసర్, BL బజాజ్ ఇన్స్టిట్యూట్ ఆఫ్ టెక్నాలజీ & మేనేజ్‌మెంట్, ఢిల్లీ",
    "ప్రొ. రామ మూర్తి గరిమెళ్ళ, మహీంద్రా యూనివర్శిటీ, హైదరాబాద్",
    "డా. జె. వేంకట రమణయ్య, EEE, NIT సूरत",
    "డా. భీమప్ప హలవర్, IIIT శ్రీసిటీ",
    "డా. యే. అర్పిత, CS-DSc., ఎన్ఆరఐఐటీ",
    "ప్రొ. కుతాది వేను మాధవ్, CS & IS, ఇంటర్నేషనల్ యూనివర్శిటీ ఆఫ్ సైన్స్ & టెక్నాలజీ, బోట్స్వానా, దక్షిణాఫ్రికా",
    "డా. శేష రఘునాధన్, క్వాంటం కంప్యూటింగ్ & డీప్ టెక్ లీడర్, IBM, బెంగళూరు",
    "డా. కోప్పాల గురవయ్య, CSE, IIIT కట్టాయం",
    "ప్రొ. గి. అప్పారావు, GITAM డీమ్డ్ యూనివర్సిటీ, విశాఖపట్నం",
    "ప్రొ. ఎస్. చంద్రశేఖర్, CS-AIML, ఎన్ఆరఐఐటీ",
    "ప్రొ. వి. లక్ష్మికాంత్ చౌదరి, CS-AIML, ఎన్ఆరఐఐటీ",
    "ప్రొ. ఎం. చైతన్య కిశోర్ రెడ్డి, IT, ఎన్ఆరఐఐటీ",
    "డా. డి. విజయ కుమార్, అసో. ప్రొఫెసర్, CS-DSc, ఎన్ఆరఐఐటీ",
    "శ్రీ కవురు శ్రీధర్, అసిస్టెంట్ ప్రొఫెసర్, CS డిపార్ట్‌మెంట్, PBSc, విజయవాడ",
    "డా. ఎం. వెంకటేశ్వర రావు, IT, ఎన్ఆరఐఐటీ",
    "డా. గి. శోభన, CSE, ఎన్ఆరఐఐటీ",
    "డా. టి. మనస వీన, AIML, ఎన్ఆరఐఐటీ",
    "డా. బి. కొండలు, ప్రొఫెసర్, AIML",
    "డా. కె. గాయత్రి, అసోసియేట్ ప్రొఫెసర్, AIML, ఎన్ఆరఐఐటీ",
    "ప్రొ. వి. తేజు, CS-AIML, ఎన్ఆరఐఐటీ",
  ],
  editorial: [
    "డా. డి. సునీత, హెచ్‌ఓడీ: సిఎస్ఈ, ఎన్ఆరఐఐటీ (చైర్)",
    "డా. టి. ఎస్. రవి కిరణ్, హెచ్‌ఓడీ & అసోసియేట్ ప్రొఫెసర్, పీబీ ఎస్క్",
    "డా. చి. వి. మురళి కృష్ణ, హెచ్‌ఓడీ: CS-DSc., ఎన్ఆరఐఐటీ",
    "డా. బి బి. దశరథ్ రామ్, హెచ్‌ఓడీ: CS-AIML, ఎన్ఆరఐఐటీ",
    "డా. పి. రాజేంద్ర కుమార్, హెచ్‌ఓడీ: AIML, ఎన్ఆరఐఐటీ",
    "ప్రొ. వి వి. సుబ్రహ్మణ్యం, డైరెక్టర్ & ప్రొఫెసర్, కంప్యూటర్ అండ్ ఇన్ఫర్మేషన్ సైన్సెస్ స్కూల్, IGNOU, న్యూఢిల్లీ",
    "డా. షోనాక్ బన్సల్, అసోసియేట్ ప్రొఫెసర్, చండీగఢ్ యూనివర్శిటీ",
  ],
  paperReview: [
    "డా. కె. వి. సాంబశివరావు, డీన్, సిఎస్ఈ, ఎన్ఆరఐఐటీ (చైర్)",
    "డా. ఉదిత్ సతిజ, IIT పట్నా",
    "డా. విణయ్ కుమార్ కసుల, స్వతంత్ర పరిశోధకుడు, యూనివర్శిటీ ఆఫ్ ద కంబర్లాండ్స్, వర్జీనియా, USA",
    "శ్రీ జి. సమ్రాట్ కృష్ణ, అసిస్టెంట్ ప్రొఫెసర్, పీబీ ఎస్క్, విజయవాడ",
    "డా. దక్షిణా రంజన్ కిస్కు, అసోసియేట్ ప్రొఫెసర్, NIT దుర్గాపూర్, పశ్చిమబెంగాల్",
    "డా. పి. దుర్గా, సిఎస్ఈ, ఎన్ఆరఐఐటీ",
    "ప్రొ. జె. చైతన్య, CS-DSc, ఎన్ఆరఐఐటీ",
  ],
};

// SVG Icon Placeholders (You can use your preferred SVGs here)
const Icons = {
  ChiefPatrons: () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="#0d6efd"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C13.1 2 14 2.9 14 4c0 1.1-0.9 2-2 2s-2-0.9-2-2c0-1.1 0.9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
    </svg>
  ),
  Patrons: () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="#198754"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c0.23 0 0.45 0.02 0.67 0.05-0.19 0.75-0.67 1.37-1.32 1.7-0.25-0.2-0.53-0.34-0.85-0.41V13h1.5z" />
    </svg>
  ),
  GeneralChair: () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="#0dcaf0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  ConvenerCo: () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="#ffc107"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2c1.1 0 2 .9 2 2s-0.9 2-2 2-2-0.9-2-2S10.9 2 12 2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
    </svg>
  ),
};

export default function ConferenceOrganizingCommittee() {
  const [inView, setInView] = useState(false);
  const [lang, setLang] = useState("EN");

  const d = lang === "EN" ? dataEN : dataTE;

  // CountUp animation on scroll into view
  useEffect(() => {
    const onScroll = () => {
      const rect = document
        .getElementById("statsSection")
        ?.getBoundingClientRect();
      if (rect?.top < window.innerHeight && !inView) setInView(true);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [inView]);

  const totalCommittees = Object.keys(d).filter((k) =>
    Array.isArray(d[k])
  ).length;
  const totalMembers = Object.values(d).filter(Array.isArray).flat().length;

  // Correspond items strictly to their headings/titles
  const keyRoles = [
    { title: d.cardTitles[0], list: d.chiefPatrons, Icon: Icons.ChiefPatrons },
    { title: d.cardTitles[1], list: d.patrons, Icon: Icons.Patrons },
    { title: d.cardTitles[2], list: d.generalChair, Icon: Icons.GeneralChair },
    {
      title: d.cardTitles[3],
      list: [...d.convener, ...d.coConvener],
      Icon: Icons.ConvenerCo,
    },
  ];

  return (
    <div className="container-fluid p-0">
      {/* HEADER */}
      <header className="bg-dark text-white text-center py-5 position-relative">
        <h1 className="display-4">{d.pageTitle}</h1>
        <p className="lead">{d.pageSubtitle}</p>
        <button
          style={{}}
          className="btn btn-warning position-absolute top-0 end-0 m-3"
          onClick={() => setLang(lang === "EN" ? "TE" : "EN")}
        >
          {lang === "EN" ? "తెలుగు" : "English"}
        </button>
      </header>

      <main className="container py-5 text-center">
        {/* COUNTS */}
        <section id="statsSection" className="mb-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow-lg border-0 text-center p-4">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <h2>
                      {inView ? (
                        <CountUp end={totalCommittees} duration={2} />
                      ) : (
                        0
                      )}
                    </h2>
                    <p>{d.totalCommitteesLabel}</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <h2>
                      {inView ? <CountUp end={totalMembers} duration={2} /> : 0}
                    </h2>
                    <p>{d.totalMembersLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEY ROLES */}
        {/* KEY ROLES */}
        <section className="container mb-5">
          <div className="row g-4 justify-content-center align-items-stretch">
            {keyRoles.map(({ title, list, Icon }, idx) => (
              <div key={idx} className="col-10 col-sm-6 col-lg-4 d-flex">
                <motion.div
                  className="card shadow-lg text-center p-3 mx-auto flex-fill"
                  style={{ maxWidth: "350px", minHeight: "100%" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <div className="mb-3">
                    <Icon />
                  </div>
                  <h5 className="fw-bold">{title}</h5>
                  <ul className="list-group list-group-flush small">
                    {Array.from(new Set(list)).map((m, i) => (
                      <li key={i} className="list-group-item text-start">
                        {m}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* MAJOR COMMITTEES */}
        {/* MAJOR COMMITTEES */}
        <section>
          <h3 className="mb-4">{d.majorCommitteesHeading}</h3>
          <div className="accordion" id="committeesAccordion">
            {[
              "technicalProgram",
              "internationalAdvisory",
              "nationalAdvisory",
              "editorial",
              "paperReview",
            ].map((key, idx) => (
              <div className="accordion-item mb-3 shadow-sm" key={key}>
                <h2 className="accordion-header" id={`heading${idx}`}>
                  <button
                    className={`accordion-button ${
                      idx > 0 ? "collapsed" : ""
                    } justify-content-center`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${idx}`}
                  >
                    {d.accordions[key]}
                  </button>
                </h2>
                <div
                  id={`collapse${idx}`}
                  className={`accordion-collapse collapse ${
                    idx === 0 ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <div className="row justify-content-center">
                      <div className="col-md-10">
                        <div className="row">
                          {d[key].map((m, i) => (
                            <div key={i} className="col-md-6 text-start mb-2 d-flex align-items-start">
  <span style={{display: "inline-flex", width: 18, height: 18, marginRight: 8, flex: "0 0 18px"}}>
    <svg width="18" height="18" viewBox="0 0 40 40">
      <polygon points="5,5 35,20 5,35 13,20" fill="#000" stroke="#000" strokeWidth="1"/>
      <polygon points="5,5 35,20 13,20" fill="white" stroke="black" strokeWidth="1"/>
    </svg>
  </span>
  <span>
    {m}
  </span>
</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
