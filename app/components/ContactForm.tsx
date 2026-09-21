"use client";

import { FormEvent, useEffect, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const capability = params.get("capability");
    const capabilityInterests: Record<string, string> = {
      "radiation-detection-monitoring": "Radiation Detection, Monitoring & Dosimetry",
      "environmental-radiation-monitoring": "Radiation Detection, Monitoring & Dosimetry",
      "dosimetry-radiation-protection": "Radiation Detection, Monitoring & Dosimetry",
      radiation: "Radiation Detection, Monitoring & Dosimetry",
      "nuclear-engineering": "Nuclear Engineering, Plant Support & Maintenance",
      nuclear: "Nuclear Engineering, Plant Support & Maintenance",
      "advanced-ndt-asset-integrity": "Advanced NDT, Robotics & AI Inspection",
      "robotics-remote-inspection": "Advanced NDT, Robotics & AI Inspection",
      "smart-autonomous-ai": "Advanced NDT, Robotics & AI Inspection",
      inspection: "Advanced NDT, Robotics & AI Inspection",
      "environmental-radiological-consultancy": "Environment, NORM, Waste & Decommissioning",
      "norm-tenorm": "Environment, NORM, Waste & Decommissioning",
      "radioactive-waste-decommissioning": "Environment, NORM, Waste & Decommissioning",
      environment: "Environment, NORM, Waste & Decommissioning",
      "nuclear-security-cbrne": "Nuclear Security, CBRNe & Critical Infrastructure",
      security: "Nuclear Security, CBRNe & Critical Infrastructure",
      "technology-integration-lifecycle": "Technology Integration, Training & Lifecycle Support",
      integration: "Technology Integration, Training & Lifecycle Support",
    };
    if (capability && capabilityInterests[capability]) setInterest(capabilityInterests[capability]);
    else if (params.get("interest") === "technology-cooperation") setInterest("Technology Cooperation");
    else if (params.has("industry")) setInterest("Industries");
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <span className="success-mark" aria-hidden="true">✓</span>
        <h2>Thank you.</h2>
        <p>Your requirement has been received. The 4Ss team will review the information and respond through the contact details provided.</p>
        <button className="button button-ghost" type="button" onClick={() => setSubmitted(false)}>Contact 4Ss</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-field"><label htmlFor="name">Name <span>required</span></label><input id="name" name="name" autoComplete="name" required /></div>
      <div className="form-field"><label htmlFor="organization">Organization <span>required</span></label><input id="organization" name="organization" autoComplete="organization" required /></div>
      <div className="form-field"><label htmlFor="role">Role / Title <span>optional</span></label><input id="role" name="role" autoComplete="organization-title" /></div>
      <div className="form-field"><label htmlFor="email">Work Email <span>required</span></label><input id="email" name="email" type="email" autoComplete="email" required /></div>
      <div className="form-field"><label htmlFor="phone">Phone <span>optional</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
      <div className="form-field"><label htmlFor="country">Country <span>required</span></label><input id="country" name="country" autoComplete="country-name" required /></div>
      <div className="form-field form-wide">
        <label htmlFor="interest">Area of Interest <span>required</span></label>
        <select id="interest" name="interest" required value={interest} onChange={(event) => setInterest(event.target.value)}>
          <option value="" disabled>Select</option>
          <option>Radiation Detection, Monitoring & Dosimetry</option>
          <option>Nuclear Engineering, Plant Support & Maintenance</option>
          <option>Advanced NDT, Robotics & AI Inspection</option>
          <option>Environment, NORM, Waste & Decommissioning</option>
          <option>Nuclear Security, CBRNe & Critical Infrastructure</option>
          <option>Technology Integration, Training & Lifecycle Support</option>
          <option>Industries</option>
          <option>Technology Cooperation</option>
          <option>General</option>
        </select>
      </div>
      <div className="form-field form-wide"><label htmlFor="message">Requirement / Message <span>required</span></label><textarea id="message" name="message" rows={6} required /></div>
      <div className="form-field"><label htmlFor="method">Preferred Contact Method <span>optional</span></label><select id="method" name="method" defaultValue=""><option value="">Select</option><option>Email</option><option>Phone</option></select></div>
      <div className="form-submit form-wide"><button className="button button-gold" type="submit">Discuss a Requirement <span aria-hidden="true">↗</span></button></div>
    </form>
  );
}
