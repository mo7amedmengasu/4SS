export type Capability = {
  slug: string;
  pillar: string;
  title: string;
  headline: string;
  narrative: string;
  services: string[];
  servicesLabel?: string;
  techniques?: { title: string; text: string }[];
  techniquesLabel?: string;
};

export type Pillar = {
  id: string;
  number: string;
  title: string;
  summary: string;
  detailHeadline?: string;
  detail?: string;
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Technology", href: "/technology" },
  { label: "Partners", href: "/partners" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export const pillars: Pillar[] = [
  {
    id: "radiation",
    number: "01",
    title: "Radiation Detection, Monitoring & Dosimetry",
    summary: "Detect, identify, measure and monitor ionizing radiation across people, facilities, cargo, vehicles and the environment.",
  },
  {
    id: "nuclear",
    number: "02",
    title: "Nuclear Engineering, Plant Support & Maintenance",
    summary: "Support safe nuclear and radiological operations through engineering, outage support, specialist maintenance coordination, inspection interfaces and technical documentation.",
  },
  {
    id: "inspection",
    number: "03",
    title: "Advanced NDT, Robotics & AI Inspection",
    summary: "Inspect difficult or safety-critical assets with advanced NDT, remote platforms, robotic systems and human-reviewed digital analytics.",
  },
  {
    id: "environment",
    number: "04",
    title: "Environment, NORM, Waste & Decommissioning",
    summary: "Characterize environmental and radiological conditions, manage NORM/TENORM and support controlled waste, remediation and decommissioning pathways.",
    detailHeadline: "Characterize the site. Model the risk. Engineer the pathway.",
    detail: "4Ss integrates environmental science, radiological engineering, geological and geotechnical assessment, modelling and waste-management expertise to support complex contaminated sites, NORM facilities, industrial assets and decommissioning programs.",
  },
  {
    id: "security",
    number: "05",
    title: "Nuclear Security, CBRNe & Critical Infrastructure",
    summary: "Support layered detection, preparedness and response architectures for government, border, port, airport and essential-infrastructure missions.",
  },
  {
    id: "integration",
    number: "06",
    title: "Technology Integration, Training & Lifecycle Support",
    summary: "Turn specialist equipment into an operational capability through requirements, integration, validation, training, maintenance, calibration, spares and long-term support.",
  },
];

export const outcomes = [
  { title: "Detect", text: "Discover, localize, identify and monitor radiological conditions across people, vehicles, cargo, facilities and the environment." },
  { title: "Inspect", text: "Reach critical assets with advanced NDT, robotics, remote sensing and traceable digital inspection data." },
  { title: "Protect", text: "Support radiation protection, nuclear security, CBRNe readiness, environmental protection and informed response." },
  { title: "Sustain", text: "Improve lifecycle performance, manage NORM and waste, extend asset life and build durable local technical capability." },
];

export const flagshipCapabilities = [
  {
    label: "Radiation & Monitoring",
    headline: "From personal awareness to connected detection.",
    text: "Build a layered path from measurement and alarm to verification, escalation, reporting and readiness.",
  },
  {
    label: "Inspection, Robotics & AI",
    headline: "Send the sensor. Not the risk.",
    text: "Extend access to hazardous or difficult environments while keeping qualified people in control of interpretation and decisions.",
  },
  {
    label: "Environment, NORM & Nuclear",
    headline: "Better evidence. Stronger technical decisions.",
    text: "Connect field characterization, engineering analysis and lifecycle planning so complex conditions become manageable.",
  },
];

export const howWeWork = [
  { number: "01", title: "Understand", text: "Mission, operating environment, hazards, stakeholders, access, interfaces and desired decision." },
  { number: "02", title: "Engineer", text: "Scope, methods, architecture, responsibilities, acceptance criteria and qualified technical path." },
  { number: "03", title: "Integrate", text: "Equipment, sensors, platforms, software, communications, data, procedures and supporting documentation." },
  { number: "04", title: "Validate", text: "Factory/site acceptance, testing, calibration or verification, commissioning evidence and user readiness." },
  { number: "05", title: "Support", text: "Training, maintenance, spares, updates, performance review and escalation so capability remains ready." },
];

export const industries = [
  { number: "01", slug: "government", title: "Government & National Infrastructure", text: "Mission-led solutions for authorities, civil protection, security, environmental entities and essential public services where readiness, traceability and continuity matter.", related: ["security", "radiation", "integration"] },
  { number: "02", slug: "nuclear-energy", title: "Nuclear Energy", text: "Engineering, inspection, radiation protection, security, environmental monitoring and lifecycle support across nuclear operating environments.", related: ["nuclear", "radiation", "inspection"] },
  { number: "03", slug: "oil-gas", title: "Oil & Gas", text: "NDT, asset integrity, robotics, NORM management, environmental monitoring and remote inspection for complex operating assets.", related: ["inspection", "environment", "integration"] },
  { number: "04", slug: "ports-borders-airports", title: "Ports, Borders & Airports", text: "Layered detection, cargo/vehicle screening, mobile search, CBRNe preparedness and integrated monitoring for gateways and logistics hubs.", related: ["security", "radiation", "integration"] },
  { number: "05", slug: "environment-municipal", title: "Environment & Municipal Services", text: "Environmental intelligence, radiological monitoring, remediation planning and field data systems for sustainable public-service decisions.", related: ["environment", "radiation", "integration"] },
  { number: "06", slug: "industrial-utilities", title: "Industrial Facilities & Utilities", text: "Inspection, condition assessment, remote access, monitoring and lifecycle support for facilities where reliability and continuity are critical.", related: ["inspection", "radiation", "integration"] },
  { number: "07", slug: "norm-waste-remediation", title: "NORM, Waste & Remediation", text: "Characterization, mapping, monitoring, waste-pathway support and remediation planning for radiological legacies and operational waste streams.", related: ["environment", "radiation", "integration"] },
];

export const capabilities: Capability[] = [
  {
    slug: "radiation-detection-monitoring",
    pillar: "radiation",
    title: "Radiation Detection & Monitoring",
    headline: "Know what is present. Know where. Know what to do next.",
    narrative: "Detection architectures for identifying, locating and characterizing radiological sources across fixed facilities, mobile operations, borders and critical infrastructure.",
    services: ["Gamma & neutron detection systems", "Spectroscopic identification and radionuclide analysis", "Handheld, portable and mobile detection platforms", "Area and perimeter radiation monitoring", "Vehicle, cargo and pedestrian portal monitoring", "Contamination monitoring and clearance systems"],
  },
  {
    slug: "environmental-radiation-monitoring",
    pillar: "radiation",
    title: "Environmental Radiation Monitoring",
    headline: "Measure continuously. Understand change.",
    narrative: "Continuous and campaign-based monitoring systems for establishing radiological baselines, identifying abnormal conditions and understanding environmental trends over time.",
    services: ["Ambient gamma dose-rate monitoring", "Fixed & mobile environmental monitoring stations", "Airborne and effluent radiation monitoring", "Soil, water and environmental survey programs", "GIS-based radiological mapping", "Telemetry, alarms, dashboards and trend analysis"],
  },
  {
    slug: "dosimetry-radiation-protection",
    pillar: "radiation",
    title: "Dosimetry & Radiation Protection",
    headline: "Protect the workforce. Control exposure.",
    narrative: "Integrated personnel and operational radiation-protection solutions supporting dose control, workplace monitoring.",
    services: ["Personal and operational dosimetry", "Electronic personal dosimeters", "Area and workplace radiation monitoring", "Dose assessment, recording and reporting", "Radiation protection instrumentation"],
  },
  {
    slug: "nuclear-engineering",
    pillar: "nuclear",
    title: "Nuclear Engineering, Plant Support & Maintenance",
    headline: "Engineering certainty for safety-critical nuclear operations.",
    narrative: "4Ss provides specialist engineering and plant-support capability across the nuclear lifecycle — connecting technical requirements, qualified expertise, field execution and controlled documentation to support safe, reliable and compliant operations.",
    services: ["Nuclear systems engineering & technical studies", "Plant modifications, design interfaces & engineering support", "Outage, maintenance & specialist field coordination", "Radiological engineering & radiation-protection support", "Commissioning, testing & operational readiness", "Technical procedures, configuration control & documentation"],
  },
  {
    slug: "advanced-ndt-asset-integrity",
    pillar: "inspection",
    title: "Advanced NDT & Digital Inspection",
    headline: "See inside the asset. Detect degradation before it becomes failure.",
    narrative: "4Ss combines conventional and advanced NDT with digital acquisition, robotics and data-driven analysis to inspect critical assets with greater coverage, repeatability and traceability. Where access is difficult, hazardous or costly, inspection systems can be deployed using robotic crawlers, autonomous platforms, drones and remote inspection tools.",
    services: [],
    techniques: [
      { title: "Digital Ultrasonic Testing", text: "High-resolution ultrasonic inspection for thickness measurement, corrosion mapping, weld assessment and internal defect detection. Can be integrated with robotic scanners for automated data collection." },
      { title: "Phased Array Ultrasonic Testing — PAUT", text: "Electronically steered ultrasonic beams provide detailed imaging of welds and complex geometries with improved coverage and defect characterization." },
      { title: "TOFD — Time of Flight Diffraction", text: "Precise detection and sizing of weld discontinuities using diffraction signals, particularly effective for crack-height measurement and integrity assessment." },
      { title: "Digital Radiography — DR / CR", text: "Digital X-ray and gamma inspection for internal visualization of welds, piping, components and assemblies with rapid image acquisition, enhancement and archiving." },
      { title: "Eddy Current Testing — ECT", text: "Electromagnetic inspection for surface and near-surface defects, tube inspection, conductivity measurement and detection of cracking in conductive materials." },
      { title: "Acoustic Emission Testing — AET", text: "Real-time monitoring of active structural damage by detecting stress-generated acoustic signals from cracking, leakage or material degradation." },
      { title: "Remote Visual & CCTV Inspection", text: "High-resolution cameras, borescopes and robotic visual systems for internal and inaccessible areas including vessels, pipelines, tanks and confined spaces." },
      { title: "Magnetic Particle Testing — MT", text: "Detection of surface and near-surface discontinuities in ferromagnetic materials, particularly welds and structural components." },
      { title: "Liquid Penetrant Testing — PT", text: "Sensitive surface inspection for cracks, porosity and other surface-breaking discontinuities in non-porous materials." },
      { title: "Leak Testing", text: "Pressure, vacuum, tracer-gas and other techniques for identifying and locating leakage in piping, vessels, systems and sealed components." },
    ],
  },
  {
    slug: "robotics-remote-inspection",
    pillar: "inspection",
    title: "Robotics + Digital NDT",
    headline: "Send the sensor, not the inspector.",
    narrative: "Digital NDT techniques can be integrated with robotic crawlers, magnetic platforms, pipe robots, drones and autonomous inspection systems, allowing sensors to operate in high-radiation, confined, elevated, underwater or otherwise hazardous environments.",
    services: ["Magnetic and wheeled crawlers", "Pipe, tank and vessel inspection platforms", "Remote visual and NDT payloads", "Radiation mapping payloads", "Teleoperation and mission support", "Inspection data capture and traceability"],
  },
  {
    slug: "smart-autonomous-ai",
    pillar: "inspection",
    title: "Smart Autonomous & AI Solutions",
    headline: "Combine data streams. Focus expert attention.",
    narrative: "AI-assisted analytics can help flag anomalies, combine data streams, compare conditions over time and focus expert attention.",
    services: ["Sensor fusion: radiation, camera, LiDAR, GNSS and GIS", "AI-assisted anomaly detection and prioritization", "Compare conditions over time", "Mission planning and route optimization", "Human-reviewed reporting and decision support"],
  },
  {
    slug: "environmental-radiological-consultancy",
    pillar: "environment",
    title: "Environmental, Geological & Site Characterization",
    headline: "Understand the ground before making the decision.",
    narrative: "Integrated site investigations establish the physical, environmental and radiological conditions that control risk, migration and long-term site performance.",
    servicesLabel: "We offer:",
    services: ["Geological & hydrogeological characterization", "Geotechnical and soil-condition assessment", "Soil erosion, sediment transport & surface stability studies", "Groundwater flow and contaminant-migration assessment", "Topographic survey, GIS & digital terrain modelling", "Soil, water, sediment & environmental sampling", "Climate, rainfall, flooding and extreme-weather assessment", "Baseline radiological and environmental surveys", "Environmental impact & risk assessment"],
  },
  {
    slug: "norm-tenorm",
    pillar: "environment",
    title: "NORM, Waste & Radiological Assessment",
    headline: "Characterize first. Control the full lifecycle.",
    narrative: "4Ss supports technically defensible management of NORM and radioactive waste from characterization and inventory through disposal strategy, remediation and long-term surveillance.",
    servicesLabel: "We offer:",
    services: ["NORM inventory, classification & source characterization", "Gamma surveys, dose-rate mapping & contamination assessment", "Soil and waste radiological sampling", "Waste acceptance criteria development", "Segregation, packaging, storage & transport strategy", "Disposal-cell and landfill optimization", "Worker and public dose assessment", "Radionuclide migration and pathway analysis", "Remediation strategy & long-term monitoring"],
  },
  {
    slug: "radioactive-waste-decommissioning",
    pillar: "environment",
    title: "Modelling & Decision Support",
    headline: "Turn site data into defensible engineering decisions.",
    narrative: "For complex disposal, landfill, shielding, remediation and radiological assessment projects, 4Ss combines field data with advanced numerical and radiation-transport modelling to evaluate long-term performance, exposure pathways and engineering controls.",
    services: ["RESRAD-ONSITE / RESRAD-OFFSITE — dose and exposure-pathway assessment", "GoldSim — long-term environmental, system and probabilistic modelling", "MCNP — Monte Carlo radiation transport, shielding, source-term and detector-response modelling", "DCFPAK — radionuclide dose-conversion factors and internal/external dose assessment support", "GIS-based spatial analysis & radiological mapping", "Groundwater and contaminant-transport modelling", "Climate-change and extreme-event scenario assessment", "Sensitivity, uncertainty & scenario analysis", "Long-term receptor and exposure-pathway modelling"],
  },
  {
    slug: "nuclear-security-cbrne",
    pillar: "security",
    title: "Nuclear Security & CBRNe",
    headline: "Detect. Assess. Coordinate. Respond.",
    narrative: "4Ss supports carefully scoped detection and readiness architectures for nuclear security and CBRNe missions, connecting technology with procedures, people, communications and response concepts.",
    services: ["Threat- and mission-led requirements definition", "Layered detection architectures", "Portable, mobile, portal and fixed monitoring", "Command-and-control integration concepts", "Training, exercises and readiness support", "Lifecycle maintenance and verification"],
  },
  {
    slug: "technology-integration-lifecycle",
    pillar: "integration",
    title: "Technology Integration, Training & Lifecycle Support",
    headline: "Build capability. Validate competence. Sustain performance.",
    narrative: "4Ss supports organizations beyond equipment delivery by integrating technology with technical training, operational procedures, competency development and lifecycle support. Programs can be tailored for government, nuclear, industrial, environmental and critical-infrastructure operations.",
    techniquesLabel: "Technical & Professional Training",
    techniques: [
      { title: "HSE & Safety Training", text: "Practical training covering workplace safety, hazard identification, risk assessment, permit-to-work principles, emergency response and safety culture." },
      { title: "ISO & Management-System Training", text: "ISO-aligned awareness and implementation training covering areas such as ISO 9001, ISO 14001 and ISO 45001, including quality, environmental and occupational health & safety management systems." },
      { title: "Radiation Protection Training", text: "Courses covering radiation fundamentals, dose and exposure, contamination control, radiation monitoring and dosimetry." },
    ],
    servicesLabel: "Integration & Lifecycle Support",
    services: ["Technical requirements and solution architecture", "System and sensor integration", "Factory/site acceptance support", "Training and knowledge transfer", "Maintenance, calibration and spares planning", "Performance review, upgrades and escalation"],
  },
];

export const fourSs = [
  { title: "Safety", text: "Protect people. Reduce exposure. Engineer risk out of the mission." },
  { title: "Security", text: "Strengthen protection. Improve readiness. Secure critical operations." },
  { title: "Safeguards", text: "Know what matters. Maintain control. Preserve accountability." },
  { title: "Sustainability", text: "Build capability that lasts. Extend asset life. Create long-term value." },
];

export const principles = [
  { title: "Mission First", text: "Understand the operating environment, stakeholder need, hazard, asset and decision before specifying technology." },
  { title: "Evidence Led", text: "Define what must be measured, verified, documented and accepted. Technical confidence comes from traceable evidence." },
  { title: "Human Accountability", text: "Use automation and AI to extend capability, not to obscure responsibility. Qualified people remain accountable for regulated decisions." },
  { title: "Lifecycle Responsibility", text: "Plan integration, training, maintenance, calibration, spares, updates and escalation before commissioning." },
  { title: "Local Capability", text: "Use international specialism to create knowledge and readiness in the UAE, not dependency on remote expertise alone." },
  { title: "Controlled Claims", text: "Publish only what is approved and evidenced: partner status, clients, authorisations, certifications and performance data." },
];

export const differentiators = [
  { title: "Mission-first scoping", text: "Start with operating context, risk, access, decision and acceptance criteria—not a predefined product." },
  { title: "One coordinated technical path", text: "Connect technology, engineering, integration, training and lifecycle support through one responsible coordination point." },
  { title: "Global specialism, UAE delivery", text: "Use specialist international technology while building local knowledge, readiness and support capability." },
  { title: "Distance from hazard", text: "Use remote sensing, robotics and intelligent data where they can reduce unnecessary human exposure." },
  { title: "Traceable evidence", text: "Design measurement, inspection and reporting so technical decisions are supported by controlled and reviewable data." },
  { title: "Lifecycle readiness", text: "Plan calibration, maintenance, spares, updates, performance review and escalation from the beginning." },
];

export const technologyCategories = [
  { title: "Radiation & Dosimetry", text: "Detection, spectroscopy, monitoring, personal dosimetry and measurement systems." },
  { title: "Robotics & Autonomy", text: "UAVs, UGVs, crawlers, remote inspection platforms and mission payloads." },
  { title: "Nuclear & Radiological", text: "Specialist engineering, instrumentation, safeguards, protection and waste-related technology." },
  { title: "Inspection & Asset Integrity", text: "Advanced NDT, digital inspection, condition assessment and data capture." },
  { title: "Environmental Intelligence", text: "Field monitoring, sensors, mapping, data management and analytical tools." },
  { title: "Integration & Support", text: "Deployment, acceptance, training, maintenance, calibration, spares and lifecycle readiness." },
];

export const leaders = [
  {
    role: "Chairman",
    name: "H.E. Mohamed Ali Al Shamsi",
    biography: [
      "H.E. Mohamed Ali Al Shamsi is an accomplished Emirati diplomat and senior public-sector leader with extensive experience in foreign affairs, international cooperation, and crisis management. He holds a Bachelor's Degree in Military Sciences and a Diploma in Crisis and Emergency Management.",
      "Throughout his career, he served in several senior positions at the Ministry of Foreign Affairs, including Counsellor at the UAE Permanent Mission to the International Atomic Energy Agency, Deputy Director of International Cooperation, and Director of African Affairs.",
      "H.E. Al Shamsi also served as Ambassador Extraordinary and Plenipotentiary of the UAE to the Republic of Chad and as Ambassador to the State of Libya, contributing to the strengthening of the UAE's diplomatic relations and international partnerships.",
    ],
  },
  {
    role: "Vice Chairman & Board member",
    name: "Eng. Nazim S. Nemer",
    biography: [
      "Eng. Nazim S. Nemer is a senior professional with over 33 years of experience within ADNOC, where he held key roles across maintenance planning, production operations, IT support, information systems, quality management, project management, and cost optimization.",
      "Throughout his career, he contributed to the development and implementation of operational and technology-driven solutions, including exploration and development support, production operation systems, and business process improvement initiatives.",
      "He holds a Bachelor of Science degree in Industrial Engineering from Texas A&M University, Texas, USA.",
    ],
  },
  {
    role: "Chief Executive Officer & Board member",
    name: "Dr. Walid A. Elmowafi",
    biography: [
      "Dr. Walid A. Elmowafi is a senior nuclear and radiological expert with more than 31 years of experience, including 16 years with the UAE Federal Authority for Nuclear Regulation (FANR). He holds a Ph.D. in Nuclear Safeguards, a Master’s degree in Radiometric Physics, and a Bachelor of Science degree (Physics), all from Mansoura University, with his doctoral work undertaken in cooperation with Karlsruhe Institute of Technology (KIT), Germany.",
      "During his time at FANR, he served for approximately 10 years as Process Owner for Emergency Preparedness and Response, conducted regulatory inspections, contributed to the development of UAE nuclear and radiation regulations and regulatory guides, and participated in the development and supervision of national emergency plans. He also served as the UAE National INES Officer with the IAEA, participated in major national emergency exercises, and chaired three national nuclear emergency preparedness exercises for the Barakah Nuclear Power Plant.",
      "His experience also includes leading audits of FANR’s environmental laboratory in accordance with ISO/IEC 17025.",
    ],
  },
];

export const companyCopy = {
  overview: "4Ss Engineering Services is an Abu Dhabi-based engineering and technology company focused on critical environments where safety, evidence, asset integrity and long-term performance matter.",
  detail: "We help organizations detect invisible hazards, inspect difficult assets, understand radiological and environmental conditions, strengthen technical readiness and sustain specialist systems over their full lifecycle. Our work connects radiation detection, autonomous and robotic inspection, AI-assisted analytics, nuclear engineering, advanced NDT, dosimetry, NORM and waste pathways, nuclear security, CBRNe and environmental consultancy.",
  value: "Our value is integration. We connect the instrument to the platform, the platform to the data, the data to qualified interpretation, and the solution to the people, procedures and support model that must sustain it.",
  positionHeading: "Engineering confidence where uncertainty carries consequences.",
  position: "Critical environments demand more than equipment. They demand the right evidence, the right engineering judgement and a system that performs in context. 4Ss brings together radiation technologies, autonomous platforms, nuclear and environmental expertise, advanced inspection and lifecycle support around the client’s real operating mission.",
  positionDetail: "We begin with the environment, the hazard, the asset and the decision that must be made. Then we define the technical path, integration interfaces, acceptance criteria, training and support needed to turn specialist technology into dependable capability.",
};

export const statements = [
  { label: "Vision", title: "To be a trusted UAE engineering platform connecting advanced nuclear, radiation, inspection and critical-infrastructure technologies with mission-ready capability.", text: "Connecting global specialist technology with responsible engineering, local capability and long-term operational value." },
  { label: "Mission", title: "To transform advanced nuclear, radiation, inspection and environmental technologies into mission-ready engineering capability.", text: "We support government and industry detect risk earlier, inspect assets more safely, protect people and the environment, and sustain essential systems through disciplined engineering, integration and dependable support." },
  { label: "Purpose", title: "Turn complex and invisible risks into clear, actionable engineering decisions.", text: "So people, assets, communities and critical infrastructure can be protected with greater confidence." },
];

export const uaeCommitment = "4Ss is based in Abu Dhabi and is being developed in alignment with the UAE’s long-term national direction under the leadership of His Highness Sheikh Mohamed bin Zayed Al Nahyan, President of the United Arab Emirates. Inspired by the country’s commitment to advanced technology, knowledge-based economic growth, resilient infrastructure and sustainable development, and aligned with the objectives of Abu Dhabi Economic Vision 2030, 4Ss seeks to connect international specialist expertise with the evolving operational needs of the UAE and the wider region.";

export const uaeObjective = "Our objective is to transform advanced engineering and specialist technologies into practical local capability through responsible integration, knowledge transfer, training, technology localization and dependable lifecycle support. Through this approach, 4Ss aims to contribute to safer communities, stronger critical infrastructure, advanced national industries and a more sustainable future, while operating within applicable regulatory authorisations and clearly defined responsibilities with qualified specialist partners.";
