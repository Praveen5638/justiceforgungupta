/**
 * JUSTICE FOR GUN GUPTA - Central Data Store (Comprehensive Campaign Archive)
 * Evidence-based dataset for timeline, policy, documents, updates, demands, event details, press kit, and visit counter.
 */

const CAMPAIGN_DATA = {
    meta: {
        campaignTitle: "JUSTICE FOR GUN GUPTA",
        slogan: "STUDENTS ARE NOT MACHINES.",
        secondarySlogan: "Education with Humanity. Attendance with Fairness.",
        lastUpdated: "2026-10-01",
        contactEmail: "justiceforgungupta.campaign@gmail.com",
        baseVisitCount: 1420
    },

    eventConfig: {
        title: "Peaceful Solidarity March & Memorandum Submission",
        date: "2026-10-01", // YYYY-MM-DD
        gatheringTime: "8:30 AM IST",
        startTime: "10:00 AM IST",
        venue: "UCER Gate No. 2, Naini, Prayagraj",
        proposedRoute: "UCER Gate No. 2 → Main Campus Road → UIT Administrative Block",
        purpose: "निष्पक्ष जाँच की माँग करने तथा चिकित्सा सम्बन्धी अवकाश एवं उपस्थिति नियमों में सुधार हेतु ज्ञापन सौंपने के लिए एक शांतिपूर्ण छात्र सभा।",
        status: "CONFIRMED", // Options: PROPOSED, AWAITING CONFIRMATION, CONFIRMED, POSTPONED, CANCELLED, CONCLUDED
        guidelines: [
            "पूर्णतः शांतिपूर्ण और अहिंसक विरोध प्रदर्शन।",
            "संस्थान की संपत्ति का सम्मान करें तथा कानून और प्रशासन के निर्देशों का पालन करें।",
            "किसी भी प्रकार की व्यक्तिगत टिप्पणी, उग्र नारेबाजी या राजनीतिक हस्तक्षेप की अनुमति नहीं है।",
            "दिवंगत छात्रा गुण गुप्ता एवं उनके शोकाकुल परिवार के प्रति पूर्ण सम्मान और गरिमा बनाए रखें।",
            "अपना कॉलेज पहचान पत्र (ID Card) साथ रखें तथा स्वयंसेवक टीम के निर्देशों का पालन करें।"
        ]
    },

    demands: [
        {
            id: "demand-1",
            number: "01",
            title: "IMPARTIAL INVESTIGATION",
            status: "SUBMITTED", // Options: NOT SUBMITTED, SUBMITTED, ACKNOWLEDGED, UNDER REVIEW, RESPONSE RECEIVED, RESOLVED, AWAITING CONFIRMATION
            shortDesc: "इस मामले से जुड़े उपलब्ध तथ्यों, दस्तावेज़ों और संबंधित पक्षों के बयानों की निष्पक्ष, स्वतंत्र और पारदर्शी समीक्षा कराई जाए। जाँच की प्रक्रिया उचित और विश्वसनीय हो।",
            detailedDesc: "एक संयुक्त जाँच समिति का गठन किया जाए, जिसमें स्वतंत्र छात्र कल्याण प्रतिनिधि और अकादमिक लोकपाल शामिल हों, ताकि घटना से पूर्व प्रस्तुत किए गए चिकित्सा अवकाश आवेदनों, उपस्थिति अभिलेखों और प्रशासनिक पत्राचार की निष्पक्ष समीक्षा की जा सके।",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`
        },
        {
            id: "demand-2",
            number: "02",
            title: "MEDICAL DIGNITY & SUPPORT",
            status: "SUBMITTED",
            shortDesc: "विद्यार्थियों की स्वास्थ्य संबंधी समस्याओं को गंभीरता और संवेदनशीलता से लिया जाए। चिकित्सा अवकाश और स्वास्थ्य सहायता की प्रक्रिया स्पष्ट, सुलभ और समय पर उपलब्ध हो।",
            detailedDesc: "सत्यापित गंभीर बीमारी, अस्पताल में भर्ती होने तथा डॉक्टरों द्वारा अनुशंसित विश्राम अवधि के दौरान उपस्थिति दण्ड को स्वतः रोकने हेतु स्पष्ट और सुलभ नीति बनाई जाए ताकि छात्रों के स्वास्थ्य की सुरक्षा हो सके।",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
        },
        {
            id: "demand-3",
            number: "03",
            title: "FAIR ATTENDANCE POLICY",
            status: "UNDER REVIEW",
            shortDesc: "उपस्थिति, चिकित्सा अवकाश और अनुमत छूट से जुड़े नियम विद्यार्थियों को स्पष्ट रूप से बताए जाएँ। वास्तविक स्वास्थ्य समस्याओं के मामलों में लागू नियमों के अनुसार निष्पक्ष प्रक्रिया सुनिश्चित की जाए।",
            detailedDesc: "विश्वविद्यालय के नियमों के तहत चिकित्सा आधार पर उपस्थिति में छूट (AKTU Ordinance 15% Condonation) प्राप्त करने की चरणबद्ध प्रक्रिया को ऑनलाइन पोर्टल और नोटिस बोर्ड पर स्पष्ट रूप से प्रकाशित किया जाए।",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
        },
        {
            id: "demand-4",
            number: "04",
            title: "SAFE CAMPUS & BASIC FACILITIES",
            status: "SUBMITTED",
            shortDesc: "परिसर में स्वच्छ पेयजल, स्वास्थ्य सहायता, सुरक्षित वातावरण और अन्य आवश्यक सुविधाओं का नियमित निरीक्षण और उचित रखरखाव सुनिश्चित किया जाए।",
            detailedDesc: "कॉलेज परिसर में स्थित डिस्पेंसरी, पैरामेडिकल स्टाफ की तत्परता, आपातकालीन वाहन (एम्बुलेंस) की उपलब्धता, पेयजल फ़िल्टर व्यवस्था तथा मानसिक स्वास्थ्य परामर्श सुविधाओं का तत्काल तीसरे पक्ष द्वारा ऑडिट कराया जाए।",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
        },
        {
            id: "demand-5",
            number: "05",
            title: "STUDENT GRIEVANCE PROTECTION",
            status: "SUBMITTED",
            shortDesc: "विद्यार्थियों के लिए शिकायत दर्ज कराने की सरल, गोपनीय और निष्पक्ष व्यवस्था हो। शिकायत करने वाले विद्यार्थियों को अनुचित दबाव या प्रतिशोध से सुरक्षा मिले।",
            detailedDesc: "AKTU लोकपाल नियमों के अनुरूप एक सुरक्षित, गोपनीय डिजिटल शिकायत प्रणाली लागू की जाए, जिससे छात्र बिना किसी अकादमिक उत्पीड़न या अंक कटौती के भय के अपनी समस्याएँ दर्ज करा सकें।",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
        },
        {
            id: "demand-6",
            number: "06",
            title: "TRANSPARENCY & ACCOUNTABILITY",
            status: "SUBMITTED",
            shortDesc: "मामले की समीक्षा या जाँच से संबंधित उचित आधिकारिक जानकारी समय पर साझा की जाए। जहाँ आवश्यक हो, सुधारात्मक कदमों और जवाबदेही की प्रक्रिया स्पष्ट की जाए।",
            detailedDesc: "छात्रों द्वारा प्रस्तुत ज्ञापन पर उठाये गए कदमों, प्रशासनिक सुधारों की समय-सीमा तथा ढांचागत सुधारों की जानकारी सार्वजनिक की जाए, जिससे व्यक्तिगत गोपनीयता का सम्मान करते हुए पूर्ण संस्थागत जवाबदेही सुनिश्चित हो सके।",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`
        },
        {
            id: "demand-7",
            number: "07",
            title: "REASONABLE COLLEGE HOURS",
            status: "SUBMITTED",
            shortDesc: "कॉलेज के <strong style=\"color: var(--brand-red);\">8 घंटे</strong> के दैनिक समय को घटाकर <strong style=\"color: var(--signal-yellow);\">5–5.5 घंटे</strong> किया जाए, ताकि विद्यार्थियों को पढ़ाई, स्वास्थ्य, आराम और व्यक्तिगत विकास के लिए पर्याप्त समय मिल सके।",
            detailedDesc: "वर्तमान 8 घंटे के दैनिक कॉलेज समय को घटाकर 5 से 5.5 घंटे किया जाए। विद्यार्थियों के मानसिक एवं शारीरिक स्वास्थ्य, स्व-अध्ययन, पर्याप्त विश्राम और व्यक्तिगत विकास को ध्यान में रखते हुए कॉलेज का समय संतुलित और व्यावहारिक बनाया जाए। साथ ही, समय-सारणी में आवश्यक ब्रेक और पर्याप्त विश्राम का प्रावधान हो।",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
        }
    ],

    detailedTimeline: [
        {
            entryNumber: "01",
            title: "INTERNSHIP AND RETURN",
            date: "September 2026",
            statusLabel: "STUDENT-REPORTED",
            verified: false,
            lastReviewed: "2026-09-30",
            source: "Publicly Circulated Student Accounts",
            sourceLink: "#",
            description: "सार्वजनिक रूप से प्रसारित छात्र पोस्ट के अनुसार, गुण गुप्ता कॉलेज इंटर्नशिप के माध्यम से बैंकॉक की यात्रा पर गई थीं और अपनी कथित बीमारी से पूर्व वापस लौटी थीं। इसे केवल एक छात्र विवरण के रूप में प्रस्तुत किया जा रहा है; यात्रा विवरण और तिथियों की स्वतंत्र पुष्टि होना अभी बाकी है।",
            note: "नोट: यात्रा तिथियों और आधिकारिक इंटर्नशिप रिकॉर्ड की स्वतंत्र पुष्टि प्रतीक्षित है।"
        },
        {
            entryNumber: "02",
            title: "REPORTED MEDICAL CONDITION",
            date: "September 2026",
            statusLabel: "STUDENT-REPORTED",
            verified: false,
            lastReviewed: "2026-09-30",
            source: "Attributed Student Accounts",
            sourceLink: "#",
            description: "उसी सार्वजनिक छात्र खाते के अनुसार, वापस लौटने के बाद गुण गुप्ता को पीलिया (Jaundice) एवं स्वास्थ्य संबंधी जटिलताओं का सामना करना पड़ा। इस जानकारी की स्वतंत्र चिकित्सकीय पुष्टि होना बाकी है। परिवार की निजता का सम्मान करते हुए कोई निजी मेडिकल दस्तावेज प्रकाशित नहीं किए गए हैं।",
            note: "नोट: निजी चिकित्सकीय अभिलेखों की सुरक्षा हेतु विस्तृत रिपोर्ट साझा नहीं की गई है।"
        },
        {
            entryNumber: "03",
            title: "ALLEGED COMMUNICATION WITH THE CSE HOD",
            date: "Mid-September 2026",
            statusLabel: "AWAITING CONFIRMATION",
            verified: false,
            lastReviewed: "2026-09-30",
            source: "Student Community Submissions",
            sourceLink: "#",
            description: "छात्रों के बयानों में आरोप लगाया गया है कि संस्थान को उनकी बीमारी की सूचना दी गई थी और उपस्थिति संबंधी निर्देश संप्रेषित किए गए थे। इस कथित बातचीत को सिद्ध तथ्य के रूप में प्रस्तुत नहीं किया जा सकता। संबंधित अधिकारी की ओर से औपचारिक लिखित रिकॉर्ड और आधिकारिक प्रतिक्रिया प्रतीक्षित है।",
            note: "नोट: कथित बातचीत की निष्पक्ष जाँच एवं आधिकारिक पक्ष हेतु स्थान सुरक्षित रखा गया है।"
        },
        {
            entryNumber: "04",
            title: "ATTENDANCE AND MEDICAL LEAVE QUESTIONS",
            date: "September 2026",
            statusLabel: "STUDENT-REPORTED",
            verified: false,
            lastReviewed: "2026-09-30",
            source: "Student Assembly Discussions",
            sourceLink: "#",
            description: "इस विषय में कई महत्वपूर्ण प्रश्नों पर स्पष्टता आवश्यक है: क्या औपचारिक चिकित्सा अवकाश आवेदन जमा किया गया था, संस्थान को कब सूचित किया गया था, तथा क्या AKTU के 15% चिकित्सा छूट प्रावधानों के तहत कोई वैकल्पिक व्यवस्था प्रस्तावित की गई थी।",
            note: "नोट: बिना दस्तावेजी साक्ष्य के चिकित्सा अवकाश खारिज होने का दावा नहीं किया जा रहा है।"
        },
        {
            entryNumber: "05",
            title: "REPORTED DEATH OF GUN GUPTA",
            date: "Late September 2026",
            statusLabel: "VERIFIED",
            verified: true,
            lastReviewed: "2026-09-30",
            source: "UCER Campus Communications & Student Notices",
            sourceLink: "#",
            description: "सार्वजनिक छात्र चर्चाओं और शोक संदेशों में यूनाइटेड कॉलेज ऑफ इंजीनियरिंग एंड रिसर्च (UCER), प्रयागराज की कंप्यूटर साइंस इंजीनियरिंग तृतीय वर्ष की छात्रा गुण गुप्ता के दुखद निधन की पुष्टि की गई है।",
            note: "नोट: मृत्यु के चिकित्सीय कारण पर कोई अटकलें नहीं लगाई जा रही हैं।"
        },
        {
            entryNumber: "06",
            title: "INSTITUTIONAL COMMUNICATION",
            date: "29 September 2026",
            statusLabel: "OFFICIAL STATEMENT",
            verified: true,
            lastReviewed: "2026-09-30",
            source: "UCER Management Circular",
            sourceLink: "#",
            description: "संस्थान द्वारा दिवंगत छात्रा के प्रति संवेदना व्यक्त करते हुए परिपत्र जारी किया गया। प्रामाणिक आधिकारिक संचार को रिकॉर्ड में शामिल किया गया है।",
            note: "नोट: केवल प्रामाणिक आधिकारिक परिपत्रों को ही आधिकारिक संचार के रूप में वर्गीकृत किया गया है।"
        },
        {
            entryNumber: "07",
            title: "STUDENT REACTIONS AND ASSEMBLIES",
            date: "29-30 September 2026",
            statusLabel: "VERIFIED",
            verified: true,
            lastReviewed: "2026-09-30",
            source: "Regional Media & Documented Student Outpour",
            sourceLink: "#",
            description: "छात्रों ने परिसर के बाहर शांतिपूर्वक एकत्र होकर मोमबत्तियाँ जलाईं, संवेदना व्यक्त की तथा चिकित्सा अवकाश नीति, कॉलेज समय सुधार और छात्र कल्याण सुविधाओं पर पारदर्शिता की माँग की।",
            note: "नोट: प्रत्यक्षदर्शियों के शांतिपूर्ण खातों को बिना किसी भड़काऊ भाषा के दर्ज किया गया है।"
        },
        {
            entryNumber: "08",
            title: "CAMPAIGN DEVELOPMENTS AND MEMORANDUM",
            date: "01 October 2026",
            statusLabel: "VERIFIED",
            verified: true,
            lastReviewed: "2026-10-01",
            source: "Campaign Organizing Committee",
            sourceLink: "#",
            description: "छात्र समन्वय समिति द्वारा 7-सूत्रीय ज्ञापन को अंतिम रूप दिया गया तथा निष्पक्ष जाँच एवं चिकित्सा सम्मान की माँग हेतु गेट नं. 2 से शांतिपूर्ण मार्च का आयोजन किया गया।",
            note: "नोट: सभी अभियान अपडेट सत्यापनीय स्रोतों पर आधारित हैं।"
        }
    ],

    medicalReportPanels: {
        reportedMedical: "सार्वजनिक रूप से प्रसारित छात्र खाते के अनुसार, गुण गुप्ता को बैंकॉक से लौटने के बाद पीलिया (Jaundice) एवं स्वास्थ्य संबंधी जटिलताओं का सामना करना पड़ा था। जब तक परिवार या सक्षम अधिकारियों द्वारा आधिकारिक मेडिकल रिपोर्ट जारी नहीं की जाती, तब तक स्वतंत्र चिकित्सीय पुष्टि उपलब्ध नहीं है।",
        reportedAdmin: "छात्रों के बयानों में आरोप लगाया गया है कि विभागाध्यक्ष (HOD) तथा प्रशासन को स्वास्थ्य स्थिति की जानकारी दी गई थी। इस दावे की पुष्टि हेतु लिखित आवेदन, ईमेल रिकॉर्ड या प्रशासनिक पावती की निष्पक्ष जाँच आवश्यक है।",
        informationNeeded: "1. प्रस्तुत किए गए चिकित्सा आवेदनों की मूल प्रतियाँ।\n2. प्रशासन द्वारा दिए गए लिखित उत्तर का रिकॉर्ड।\n3. अस्पताल में भर्ती होने और उपचार से संबंधित प्राधिकृत तिथियाँ।\n4. आपातकालीन स्वास्थ्य प्रतिक्रिया का आधिकारिक विवरण।"
    },

    clarificationQuestions: [
        "गुन गुप्ता की बीमारी की सूचना कॉलेज प्रशासन को कब और किस माध्यम से दी गई थी?",
        "क्या औपचारिक चिकित्सा अवकाश आवेदन प्रस्तुत किया गया था?",
        "यदि आवेदन दिया गया था, तो उस पर क्या कार्रवाई हुई?",
        "उस समय उनके शैक्षणिक बैच पर कौन-से उपस्थिति और चिकित्सा अवकाश नियम लागू थे?",
        "क्या संबंधित बातचीत या निर्देशों का कोई लिखित रिकॉर्ड उपलब्ध है?",
        "इस घटनाक्रम पर संबंधित प्रशासनिक अधिकारियों का आधिकारिक पक्ष क्या है?",
        "क्या किसी सक्षम प्राधिकारी ने मामले की समीक्षा या जाँच की है?",
        "यदि जाँच हुई है, तो क्या उसके निष्कर्ष सार्वजनिक किए गए हैं?",
        "विद्यार्थियों की स्वास्थ्य सहायता और शिकायत प्रक्रिया में क्या सुधार किए जा सकते हैं?"
    ],

    policyInfo: {
        documentTitle: "AKTU Academic Ordinances for B.Tech Degree Courses",
        applicableSession: "Academic Session 2025-26 / 2026-27",
        standardRequirement: "मानक AKTU अकादमिक अध्यादेश के तहत सेमेस्टर परीक्षाओं में सम्मिलित होने के लिए कुल 75% उपस्थिति अनिवार्य है।",
        condonationClause: "AKTU अध्यादेश सक्षम अधिकारियों (निदेशक / कुलपति) को पंजीकृत चिकित्सकों द्वारा जारी वैध चिकित्सा प्रमाण पत्र के आधार पर 15% तक की उपस्थिति छूट देने का अधिकार देता है, जिससे परीक्षा पात्रता 60% उपस्थिति तक संभव हो जाती है।",
        distinctionNote: "चिकित्सा अवकाश (Medical Leave) बनाम उपस्थिति छूट (Attendance Condonation): 'चिकित्सा अवकाश' बीमारी के कारण अनुपस्थिति हेतु ली गई प्रशासनिक अनुमति है, जबकि 'उपस्थिति छूट' (Attendance Condonation) सेमेस्टर के अंत में दर्ज अनुपस्थिति को वैधानिक रूप से माफ करने की प्रक्रिया है।",
        disclaimer: "यह जानकारी शैक्षणिक नियमों को समझाने के लिए है। किसी विशिष्ट आवेदन या मामले पर निर्णय का विकल्प नहीं है।",
        sourceUrl: "https://aktu.ac.in",
        dateChecked: "2026-09-30"
    },

    documents: [
        {
            id: "doc-1",
            category: "rules",
            title: "AKTU B.Tech Ordinance — Attendance & Condonation Rules",
            authority: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
            date: "Session 2025-26",
            type: "OFFICIAL DOCUMENTS",
            summary: "आधिकारिक अकादमिक अध्यादेश जिसमें 75% न्यूनतम उपस्थिति नियम, 15% चिकित्सा छूट प्रावधान और अनुमोदन प्रक्रिया का उल्लेख है।",
            link: "https://aktu.ac.in",
            lastReviewed: "2026-09-30"
        },
        {
            id: "doc-2",
            category: "statements",
            title: "7-Point Student Charter of Demands",
            authority: "Justice for Gun Gupta Campaign Committee",
            date: "30 September 2026",
            type: "STUDENT STATEMENTS",
            summary: "पारदर्शी जाँच, चिकित्सा सम्मान, कॉलेज समय सुधार (5-5.5 घंटे), स्वास्थ्य सुरक्षा ऑडिट और छात्र संरक्षण की माँग करने वाला औपचारिक 7-सूत्रीय ज्ञापन।",
            link: "#",
            lastReviewed: "2026-09-30"
        },
        {
            id: "doc-3",
            category: "notices",
            title: "UCER Institutional Condolence Circular",
            authority: "United College of Engineering and Research Management",
            date: "29 September 2026",
            type: "UNIVERSITY NOTICES",
            summary: "दिवंगत छात्रा गुण गुप्ता के शोकाकुल परिवार के प्रति संवेदना व्यक्त करने वाला संस्थान का आधिकारिक परिपत्र।",
            link: "#",
            lastReviewed: "2026-09-30"
        },
        {
            id: "doc-4",
            category: "news",
            title: "Reported Media Coverage of Student Assemblies in Prayagraj",
            authority: "Regional & Educational Press Outlets",
            date: "30 September 2026",
            type: "NEWS REPORTS",
            summary: "प्रयागराज में छात्रों के शांतिपूर्ण एकत्र होने, प्रशासनिक संवाद और पारदर्शिता की माँग से सम्बन्धित समाचार कवरेज।",
            link: "#",
            lastReviewed: "2026-09-30"
        }
    ],

    pressKit: {
        hindiReleaseTitle: "प्रेस विज्ञप्ति: गुण गुप्ता मामले में निष्पक्ष जाँच और छात्र स्वास्थ्य सुरक्षा की माँग",
        hindiReleaseBody: "प्रयागराज, 01 अक्टूबर 2026: यूनाइटेड कॉलेज ऑफ इंजीनियरिंग एंड रिसर्च (UCER) की छात्रा गुण गुप्ता के दुखद निधन के पश्चात छात्रों ने 7-सूत्रीय ज्ञापन सौंपकर निष्पक्ष जाँच, पारदर्शी चिकित्सा अवकाश नीति, कॉलेज समय में सुधार (5–5.5 घंटे) और छात्र सुरक्षा ऑडिट की माँग की है...",
        englishReleaseTitle: "PRESS RELEASE: Students Demand Impartial Inquiry & Medical Leave Safeguards",
        englishReleaseBody: "PRAYAGRAJ, 01 OCTOBER 2026: Following the reported passing of third-year B.Tech CSE student Gun Gupta, student representatives have submitted a formal 7-point memorandum seeking an independent inquiry, reasonable college hours (5–5.5 hours), and transparent medical leave guidelines...",
        summaryOnePager: "यह एक पृष्ठ का तथ्य-पत्रक गुण गुप्ता मामले से जुड़ी प्रामाणिक जानकारी, मुख्य 7 माँगों और सत्यापनीय कालानुक्रमिक विवरण का संक्षिप्त सार प्रस्तुत करता है।",
        downloadablePdfNotice: "मीडिया प्रतिनिधि एवं शोधकर्ता यहाँ से अभियान का आधिकारिक प्रेस किट, ज्ञापन एवं समय-रेखा दस्तावेज डाउनलोड कर सकते हैं।"
    },

    updates: [
        {
            id: "upd-1",
            date: "01 October 2026 — 06:00 AM IST",
            title: "Finalizing Preparations for Peaceful Assembly at Gate No. 2",
            body: "अभियान समन्वयकों ने आचार संहिता जारी कर दी है। सभी प्रतिभागी सुबह 8:30 बजे गेट नं. 2 पर शांतिपूर्वक एकत्र हों तथा काले/सफेद रिबन धारण करें।",
            status: "VERIFIED",
            source: "Campaign Organizing Team"
        },
        {
            id: "upd-2",
            date: "30 September 2026 — 08:00 PM IST",
            title: "Student Memorandum Finalized for Submission",
            body: "उपस्थिति निष्पक्षता, कॉलेज समय सुधार (5–5.5 घंटे), चिकित्सा अवकाश सुरक्षा और परिसर स्वास्थ्य सुविधाओं से सम्बन्धित 7-सूत्रीय ज्ञापन को अंतिम रूप दे दिया गया है।",
            status: "VERIFIED",
            source: "Student Steering Committee"
        },
        {
            id: "upd-3",
            date: "30 September 2026 — 02:00 PM IST",
            title: "Reported Preliminary Dialogue",
            body: "प्राप्त विवरणों के अनुसार छात्र प्रतिनिधियों और प्रशासन के बीच उपस्थिति दिशा-निर्देशों एवं दैनिक कॉलेज समय की समीक्षा हेतु प्रारंभिक वार्ता हुई है।",
            status: "STUDENT-REPORTED",
            source: "Student Assembly Representatives"
        }
    ]
};
