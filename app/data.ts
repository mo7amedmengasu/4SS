export type Capability = {
  slug: string;
  pillar: string;
  title: string;
  headline: string;
  narrative: string;
  services: string[];
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

export const pillars = [
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
    narrative: "4Ss supports radiation detection from personal awareness and field survey to mobile search, portal screening, fixed-area monitoring and environmental surveillance. We help define the detector, deployment, communications, alarm and lifecycle-support model around the mission.",
    services: ["Personal radiation detectors and electronic dosimeters", "Survey meters and contamination monitors", "Radionuclide identification and spectrometry", "Backpack, vehicle and transportable detection", "Pedestrian, vehicle and cargo portals", "Fixed-area, process, effluent and environmental monitoring"],
  },
  {
    slug: "environmental-radiation-monitoring",
    pillar: "radiation",
    title: "Environmental Radiation Monitoring",
    headline: "Measure continuously. Understand change.",
    narrative: "4Ss supports monitoring architectures that connect field instruments, fixed stations, mobile systems, telemetry and data review into a defensible picture of radiological conditions over time.",
    services: ["Ambient gamma monitoring", "Airborne and effluent monitoring interfaces", "Mobile and fixed environmental stations", "Telemetry and alerting", "Mapping and trend analysis", "Calibration, verification and lifecycle support"],
  },
  {
    slug: "dosimetry-radiation-protection",
    pillar: "radiation",
    title: "Dosimetry & Radiation Protection",
    headline: "Protect the workforce. Control exposure.",
    narrative: "4Ss supports personal monitoring, workplace radiation protection and operational dose-control systems around the people, tasks and environments that create exposure risk.",
    services: ["Personal and operational dosimetry", "Area and task monitoring", "Radiation protection instrumentation", "Dose data workflows and reporting", "Training and operational support", "Program review and lifecycle readiness"],
  },
  {
    slug: "nuclear-engineering",
    pillar: "nuclear",
    title: "Nuclear Engineering & Technical Support",
    headline: "Engineering discipline for safety-critical work.",
    narrative: "4Ss coordinates specialist technical support across nuclear and radiological projects, connecting requirements, qualified expertise, documentation, field implementation and lifecycle readiness.",
    services: ["Technical studies and engineering support", "Requirements definition and design interfaces", "Safety and radiological engineering support", "Technical procedures and documentation", "Commissioning and acceptance support", "Training, readiness and specialist coordination"],
  },
  {
    slug: "advanced-ndt-asset-integrity",
    pillar: "inspection",
    title: "Advanced NDT & Asset Integrity",
    headline: "See inside the asset. Act before failure.",
    narrative: "4Ss connects advanced non-destructive testing, digital inspection data and integrity engineering to help clients understand condition, prioritize intervention and extend asset life.",
    services: ["Ultrasonic and phased-array inspection", "Eddy current and electromagnetic methods", "Visual and remote visual inspection", "Corrosion mapping and thickness measurement", "Digital inspection records and analytics", "Integrity assessment and inspection planning"],
  },
  {
    slug: "robotics-remote-inspection",
    pillar: "inspection",
    title: "Robotics & Remote Inspection",
    headline: "Put distance between people and hazard.",
    narrative: "Robotic and remote inspection systems can improve access to confined, elevated, contaminated or otherwise difficult environments while producing repeatable, traceable data for expert review.",
    services: ["Magnetic and wheeled crawlers", "Pipe, tank and vessel inspection platforms", "Remote visual and NDT payloads", "Radiation mapping payloads", "Teleoperation and mission support", "Inspection data capture and traceability"],
  },
  {
    slug: "smart-autonomous-ai",
    pillar: "inspection",
    title: "Smart Autonomous & AI Solutions",
    headline: "Send the sensor. Not the risk.",
    narrative: "4Ss integrates radiation and inspection sensors with UAVs, UGVs, crawlers and remote platforms to extend access and reduce unnecessary human exposure. AI-assisted analytics can help flag anomalies, combine data streams, compare conditions over time and focus expert attention.",
    services: ["UAV and UGV payload integration", "Remote survey and inspection platforms", "Sensor fusion: radiation, camera, LiDAR, GNSS and GIS", "AI-assisted anomaly detection and prioritization", "Mission planning and route optimization", "Human-reviewed reporting and decision support"],
  },
  {
    slug: "environmental-radiological-consultancy",
    pillar: "environment",
    title: "Environmental & Radiological Consultancy",
    headline: "Better evidence. Stronger environmental decisions.",
    narrative: "Integrated environmental and radiological consultancy supports clients from early scoping and baseline understanding through assessment, monitoring, mitigation, remediation and closure. Work is delivered within applicable authorisations and qualified-party arrangements.",
    services: ["Screening, scoping and permitting strategy", "Environmental and social assessment support", "Baseline field surveys and radiological assessment", "Air, water, soil, sediment, ecology and noise studies", "GIS, modelling and data management", "Management plans, audit, remediation and closure planning"],
  },
  {
    slug: "norm-tenorm",
    pillar: "environment",
    title: "NORM & TENORM",
    headline: "Characterize first. Control the lifecycle.",
    narrative: "NORM and TENORM decisions depend on reliable characterization, exposure understanding and a technically and legally appropriate management path. 4Ss helps connect survey, mapping, inventory, assessment and long-term monitoring.",
    services: ["Radiological surveys and mapping", "Sampling and laboratory coordination", "Inventory and dose assessment", "Segregation and minimization planning", "Storage, transport and clearance interfaces", "Remediation and long-term monitoring"],
  },
  {
    slug: "radioactive-waste-decommissioning",
    pillar: "environment",
    title: "Radioactive Waste & Decommissioning Support",
    headline: "Make the end state clear from the start.",
    narrative: "4Ss supports waste and decommissioning pathways through characterization, planning, measurement, data control and specialist coordination from early strategy through final monitoring.",
    services: ["Waste characterization and inventory", "Non-destructive assay interfaces", "Segregation and packaging strategy", "Storage and transport interfaces", "Clearance/release measurement support", "Decommissioning and remediation planning"],
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
    title: "Technology Integration & Lifecycle Support",
    headline: "Make advanced technology work in the field.",
    narrative: "The value of specialist technology depends on integration, acceptance, training, maintenance and sustained performance. 4Ss provides one coordinated path from requirement to deployment and long-term readiness.",
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
  { role: "Chairman", name: "H.E. Mohamed Ali Al Shamsi" },
  { role: "Vice Chairman", name: "Eng. Nazim Sarhan" },
  { role: "Chief Executive Officer", name: "Walid A. Elmowafi, PhD" },
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
