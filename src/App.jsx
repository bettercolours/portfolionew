import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Journey", "Work", "Resume", "Contact"];

const TIMELINE = [
  { year: "July 2024–Present", role: "Product Strategy & UX Leadership Consultant", company: "Stealth Startup", desc: "Serving as consulting Product Lead — guiding product vision and translating complex data and user insights into intuitive product features. Establishing UX best practices, defining user-centered design processes, and overseeing research initiatives to refine product-market fit for new market segments.", icon: "★" },
  { year: "June 2022–June 2024", role: "User Experience Manager", company: "Accenture India", desc: "Led a multidisciplinary team of 18 UX and visual designers across APAC and global markets. Spearheaded design initiatives delivering an 85% increase in user satisfaction and 80% improvement in task completion. Created comprehensive design systems and branding guidelines ensuring consistency across multiple global products.", icon: "◉" },
  { year: "2018–2022", role: "Principal Designer / Lead Designer", company: "KPIT Technologies", desc: "Directed design efforts across complex, large-scale workflows during a high-growth period — mentoring staff, ensuring design excellence, and leveraging storytelling and presentation skills to align stakeholders on conceptual work and interactive design solutions.", icon: "◈" },
  { year: "2014–2017", role: "Design Manager / Design Lead", company: "Onepoint Global", desc: "Managed design team operations and delivery schedules for large-scale global projects. Focused on grid systems, typography, and maintaining rigorous quality and consistency standards across cross-platform deliverables.", icon: "◉" },
  { year: "2012–2014", role: "Visual Design Consultant", company: "Mahindra Retail, Bangalore", desc: "Embedded within Mahindra Retail as a visual design consultant — translating brand strategy into compelling in-store and digital experiences. Worked closely with cross-functional teams to maintain visual consistency across retail touchpoints at scale.", icon: "◉" },
  { year: "2008–2012", role: "Visual & Graphic Designer", company: "Agency Era", desc: "Laid the craft foundation across independent design agencies — spanning print, branding, editorial, and early web design. Graduated with a Bachelor's in Visual Communication from Madras University in 2008, and immediately began shaping a multi-disciplinary design sensibility.", icon: "◈" },
];

const CASE_STUDIES = [
  {
    id: "01",
    title: "Redesigning a Proptech App",
    tags: ["Product Design", "UX Research", "AI Implemented Design Process"],
    outcome: "80% drop in front end development time",
    desc: "Introducing an AI-augmented design flow which fastened the process — reducing handoff friction, accelerating iterations, and enabling the team to ship faster without compromising quality.",
    color: "#C9A84C",
    pdf: "Proptechapp.pdf", // set to "/project01.pdf" when ready
  },
  {
    id: "02",
    title: "SaaS Product & Design System",
    tags: ["Design System", "Leadership", "Atom Component"],
    outcome: "Faster component delivery",
    desc: "Designed and implemented an enterprise-grade design library for an Oil & Gas SaaS ecosystem. Led the complete product revamp, modernising legacy interfaces into a high-performance, user-centric experience tailored for the Middle East market.",
    color: "#8B9EA8",
    pdf: "/2.SaaS project.pdf", // set to "/project02.pdf" when ready
  },
  {
    id: "03",
    title: "B2C Application for Bikers",
    tags: ["Information Architecture", "User Interviews", "Persona Creation", "User Journey", "Visual Design", "Usability Testing"],
    outcome: "Researched across 2 countries & 5 states in India",
    desc: "Restructured a legacy product applying every parameter of the UX process — from in-depth user interviews and persona creation to journey mapping, visual design, and interface testing — to derive the best possible product for the market.",
    color: "#A89070",
    pdf: "/3.B2c Bikes app.pdf",
  },
  {
    id: "04",
    title: "Brand Identity & Collateral",
    tags: ["Brand Identity", "Collateral"],
    outcome: "Identity closed within 4–5 weeks across 3 concepts",
    desc: "To unite industrial precision with a human, food-centric purpose — creating a distinctive, scalable mark that conveys both engineering strength and safe food handling. Three distinct brand identity directions were developed and presented, with the project expectation to create a cohesive brand identity from the ground up.",
    color: "#7A8C7E",
    pdf: "/4.Brand identity.pdf",
  },
  {
    id: "05",
    title: "Research Activity — GoJek Indonesia",
    tags: ["User Research", "User Journey", "Journey Mapping", "Guerrilla Research"],
    outcome: "25+ driver partners interviewed across Jakarta & Depok",
    desc: "Spent an entire week in Indonesia conducting guerrilla research in a country where I don't speak the language — interviewing GoJek delivery partners to understand their real-world behaviours, motivations, frustrations and workflows on the ground.",
    color: "#6B8FA8",
    pdf: "/5.Gojek research.pdf", // set to "/UX_Research_GoJek.pdf" when ready
  },
  {
    id: "06",
    title: "Guided Diagnostic tool",
    tags: ["User research", "Usability testing", "Visual Design", "Component library"],
    outcome: "Conducted user research and Usability testing at 2 service stations in India & FCA.",
    desc: "This case study demonstrates the strategic design approach and UX leadership applied to revamp a legacy technical troubleshooting application, resolving critical pain points in cognitive load through context-first visualization principles.",
    color: "#C9A84C",
    pdf: "6.Guided Diagnostics.pdf", // set to "/UX_Research_GoJek.pdf" when ready
  }
];

const RESUME_ITEMS = [
  { period: "Jul 2023–Present", title: "Product Strategy & UX Leadership Consultant", org: "Stealth Startup" },
  { period: "Jun 2022–Jun 2023", title: "User Experience Manager", org: "Accenture India" },
  { period: "2018–2022", title: "Principal Designer / Lead Designer", org: "KPIT Technologies" },
  { period: "2014–2017", title: "Design Manager / Design Lead", org: "Onepoint Global" },
  { period: "2012–2014", title: "Visual Design Consultant", org: "Mahindra Retail, Bangalore" },
  { period: "2008–2012", title: "Visual & Graphic Designer", org: "Agency Era" },
];

const SKILLS = ["Design Leadership", "UX Research & Validation", "Design Systems", "Strategic Planning", "Interactive Design", "Prototyping", "Agile & Scrum", "User-Centered Design", "Figma", "Sketch", "Adobe XD", "Performance Coaching", "Stakeholder Management", "Cross-functional Collaboration", "Design Governance"];

const TESTIMONIALS = [
  { name: "Neeraj Deshpande", role: "Principal Program Manager · Cadence Design Systems, India", text: "Sumeetha worked as a UX designer for connected vehicle products I was managing, with primary focus on visual design and contributing to user research and wireframing. She brings in-depth knowledge of her field, is a diligent and reliable team member, and fun to work with. Her contribution to the transformation of the UX for one of our smartphone apps was extremely valuable. She will be an asset to any team she works with." },
  { name: "Srivatsa Rao", role: "UX Assistant Manager · Accenture, India", text: "I've had the pleasure of working with Sumeetha on multiple occasions and it's been an absolute delight. She brings a lot of UX experience, empathy and collaboration. She has an innate ability to balance user-centered design with business goals, ensuring that the end products are not only intuitive and engaging but also strategically aligned. I highly recommend Sumeetha for any organization looking for a creative UX leader — she would be a great asset to any team!" },
  { name: "Saba Alvi", role: "Startup Founder · France", text: "I had the opportunity to work with Sumeetha early on in my career and I can say with confidence that besides being an incredibly talented designer she is a great colleague. She not only owns her projects but doesn't ever shy away from stepping up as a leader when needed. My experience with Sumeetha was one of learning — both the skill and the wonderful attitude that she has. She is indispensable in any team." },
  { name: "Navin Ragade", role: "Account Manager · Clasticon, India", text: "Sumeetha was part of my team for about 2 years during my days at Clasticon Solutions. She was a pleasure to work with — not just in terms of design skills but also in her attitude to work and to people. We even won several awards, beating agencies 7 to 8 times larger in staffing and infrastructure. I'd love to work with Sumeetha again should such an opportunity arise." },
  { name: "Anusha Sridhar", role: "Product Manager · KPIT, India", text: "I worked with Sumeetha on a UX research project to validate assumptions in the shared mobility space. At the end of the project, Sumeetha presented a report which succinctly captured all the important conclusions and helped me as a product manager in taking business-critical, data-driven decisions. She managed to highlight her skills as an inquisitive UX researcher whose approach led us to uncover critical user problems." },
  { name: "Sonali Malu", role: "Product Manager · KPIT, India", text: "Sumeetha is one of those UX designers who is able to grasp requirements fast and make great screens even faster. Every time she delivered high quality output. She was also efficient in user testing and research activities. Moreover her interaction with product owners and developers was always seamless — she never failed to create magic! I recommend her to any organisation she wants to work with." },
  { name: "Nisha Handa", role: "Product Designer · Fractal, India", text: "Sumeetha is one of the most delightful people I've had the pleasure to work with. Not only does she have the ability to keep things organised but her constant communication has helped lift my spirits in challenging situations. I was able to gain some valuable professional insights from her." },
];

function useIntersection(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef();
  const visible = useIntersection(ref);
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCase, setHoveredCase] = useState(null);
  const [activePdf, setActivePdf] = useState(null); // null | "01" | "02" | "03" | "04"
  const [requestOpen, setRequestOpen] = useState(false);
  const [requestForm, setRequestForm] = useState({ name: "", email: "", message: "" });
  const [requestSent, setRequestSent] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(n => document.getElementById(n.toLowerCase()));
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1)); });
    }, { threshold: 0.3 });
    sections.forEach(s => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  const styles = {
    root: {
      background: "#0C0C0C",
      color: "#E8E0D4",
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      position: "relative",
      overflowX: "hidden",
    },
    cursor: {
      position: "fixed",
      left: cursorPos.x - 6,
      top: cursorPos.y - 6,
      width: 12,
      height: 12,
      background: "#C9A84C",
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: 9999,
      mixBlendMode: "difference",
      transition: "transform 0.1s ease",
      transform: cursorActive ? "scale(3)" : "scale(1)",
    },
    grain: {
      position: "fixed",
      inset: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
      pointerEvents: "none",
      zIndex: 1,
      opacity: 0.6,
    },
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 48px",
      background: "rgba(12,12,12,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(201,168,76,0.1)",
    },
    logo: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "18px",
      letterSpacing: "0.08em",
      color: "#C9A84C",
      fontWeight: 700,
    },
    navLinks: {
      display: "flex",
      gap: "36px",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    hero: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "140px 0 60px",
      position: "relative",
      background: "radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)",
    },
    heroEyebrow: {
      fontFamily: "'DM Mono', monospace",
      fontSize: "11px",
      letterSpacing: "0.25em",
      color: "#C9A84C",
      textTransform: "uppercase",
      marginBottom: "24px",
    },
    heroTitle: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "clamp(52px, 8vw, 110px)",
      fontWeight: 700,
      lineHeight: 0.95,
      color: "#F2EDE6",
      marginBottom: "32px",
      maxWidth: "900px",
      letterSpacing: "-0.02em",
    },
    heroAccent: {
      color: "transparent",
      WebkitTextStroke: "1px #C9A84C",
      display: "block",
    },
    heroPara: {
      fontSize: "17px",
      lineHeight: 1.7,
      color: "#A09884",
      maxWidth: "500px",
      marginBottom: "48px",
    },
    ctaBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      padding: "16px 32px",
      background: "transparent",
      border: "1px solid #C9A84C",
      color: "#C9A84C",
      fontFamily: "'DM Mono', monospace",
      fontSize: "12px",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    section: {
      padding: "120px 0",
      position: "relative",
      zIndex: 2,
    },
    sectionLabel: {
      fontFamily: "'DM Mono', monospace",
      fontSize: "10px",
      letterSpacing: "0.3em",
      color: "#C9A84C",
      textTransform: "uppercase",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    sectionTitle: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "clamp(36px, 5vw, 64px)",
      fontWeight: 700,
      lineHeight: 1.1,
      color: "#F2EDE6",
      marginBottom: "64px",
      letterSpacing: "-0.02em",
    },
    divider: {
      height: "1px",
      background: "linear-gradient(90deg, rgba(201,168,76,0.4) 0%, transparent 100%)",
      marginBottom: "24px",
    },
    // Timeline
    timelineWrap: {
      position: "relative",
      maxWidth: "900px",
    },
    timelineSpine: {
      position: "absolute",
      left: "16px",
      top: 0,
      bottom: 0,
      width: "1px",
      background: "linear-gradient(180deg, #C9A84C 0%, rgba(201,168,76,0.08) 100%)",
    },
    timelineItem: {
      display: "grid",
      gridTemplateColumns: "60px 1fr",
      gap: "24px",
      marginBottom: "56px",
      position: "relative",
    },
    timelineDot: {
      width: "32px",
      height: "32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      color: "#C9A84C",
      background: "#0C0C0C",
      border: "1px solid rgba(201,168,76,0.3)",
      borderRadius: "50%",
      flexShrink: 0,
    },
    timelineYear: {
      fontFamily: "'DM Mono', monospace",
      fontSize: "10px",
      color: "#C9A84C",
      letterSpacing: "0.2em",
      marginBottom: "6px",
    },
    timelineRole: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "20px",
      color: "#F2EDE6",
      marginBottom: "4px",
    },
    timelineCompany: {
      fontSize: "12px",
      color: "#706856",
      letterSpacing: "0.1em",
      marginBottom: "12px",
    },
    timelineDesc: {
      fontSize: "14px",
      lineHeight: 1.7,
      color: "#A09884",
    },
    // Case Studies
    caseGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2px",
    },
    caseCard: {
      padding: "48px",
      background: "#111111",
      border: "1px solid rgba(255,255,255,0.04)",
      cursor: "pointer",
      transition: "all 0.4s ease",
      position: "relative",
      overflow: "hidden",
    },
    caseNum: {
      fontFamily: "'DM Mono', monospace",
      fontSize: "11px",
      color: "#403830",
      marginBottom: "24px",
      letterSpacing: "0.2em",
    },
    caseTitle: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "22px",
      color: "#F2EDE6",
      marginBottom: "16px",
      lineHeight: 1.3,
    },
    caseTags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "20px",
    },
    tag: {
      padding: "4px 12px",
      background: "rgba(201,168,76,0.08)",
      border: "1px solid rgba(201,168,76,0.2)",
      fontSize: "10px",
      fontFamily: "'DM Mono', monospace",
      letterSpacing: "0.1em",
      color: "#C9A84C",
    },
    caseOutcome: {
      fontSize: "13px",
      fontFamily: "'DM Mono', monospace",
      color: "#C9A84C",
      marginBottom: "16px",
      letterSpacing: "0.05em",
    },
    caseDesc: {
      fontSize: "14px",
      lineHeight: 1.7,
      color: "#706856",
    },
    // Resume
    resumeGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "80px",
    },
    resumeItem: {
      display: "flex",
      gap: "20px",
      paddingBottom: "28px",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      marginBottom: "28px",
    },
    resumePeriod: {
      fontFamily: "'DM Mono', monospace",
      fontSize: "10px",
      color: "#706856",
      letterSpacing: "0.1em",
      whiteSpace: "nowrap",
      paddingTop: "4px",
      minWidth: "90px",
    },
    resumeTitle: {
      fontSize: "15px",
      color: "#E8E0D4",
      marginBottom: "4px",
      fontWeight: 500,
    },
    resumeOrg: {
      fontSize: "12px",
      color: "#706856",
      fontFamily: "'DM Mono', monospace",
    },
    skillsWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "32px",
    },
    testimonialsTrack: {
      display: "flex",
      gap: "24px",
      overflowX: "auto",
      paddingBottom: "24px",
      cursor: "grab",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "thin",
    },
    testimonialCard: {
      width: "380px",
      flexShrink: 0,
      padding: "40px",
      background: "#111111",
      border: "1px solid rgba(255,255,255,0.05)",
      position: "relative",
      transition: "border-color 0.3s ease",
    },
    testimonialQuote: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "52px",
      color: "rgba(201,168,76,0.15)",
      lineHeight: 1,
      marginBottom: "16px",
      fontStyle: "italic",
    },
    testimonialText: {
      fontSize: "15px",
      lineHeight: 1.8,
      color: "#A09884",
      marginBottom: "32px",
      fontStyle: "italic",
    },
    testimonialDivider: {
      width: "32px",
      height: "1px",
      background: "rgba(201,168,76,0.3)",
      marginBottom: "20px",
    },
    testimonialName: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "16px",
      color: "#F2EDE6",
      marginBottom: "4px",
    },
    testimonialRole: {
      fontFamily: "'DM Mono', monospace",
      fontSize: "10px",
      letterSpacing: "0.15em",
      color: "#706856",
      textTransform: "uppercase",
    },
    skillPill: {
      padding: "8px 18px",
      border: "1px solid rgba(201,168,76,0.2)",
      fontSize: "12px",
      fontFamily: "'DM Mono', monospace",
      color: "#A09884",
      letterSpacing: "0.08em",
      transition: "all 0.2s",
    },
    csOverlay: {
      position: "fixed",
      inset: 0,
      zIndex: 300,
      background: "#0C0C0C",
      overflowY: "auto",
      transform: "translateX(100%)",
      transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    },
    csOverlayOpen: {
      transform: "translateX(0)",
    },
    csHero: {
      minHeight: "55vh",
      display: "flex",
      alignItems: "flex-end",
      padding: "80px 48px 60px",
      background: "linear-gradient(135deg, #0D1117 0%, #1a1f2e 100%)",
      position: "relative",
      overflow: "hidden",
    },
    csCard: {
      padding: "40px",
      background: "#111111",
      border: "1px solid rgba(255,255,255,0.04)",
    },
    csProcessStep: {
      padding: "32px",
      background: "#0F0F0F",
      border: "1px solid rgba(255,255,255,0.05)",
    },
    csAppItem: {
      padding: "32px",
      background: "#111111",
      border: "1px solid rgba(255,255,255,0.04)",
    },
    // Contact
    contactGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "80px",
      alignItems: "start",
    },
    contactItem: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      paddingBottom: "28px",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      marginBottom: "28px",
    },
    contactLabel: {
      fontFamily: "'DM Mono', monospace",
      fontSize: "10px",
      color: "#706856",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
    },
    contactVal: {
      fontSize: "16px",
      color: "#E8E0D4",
    },
    contactLink: {
      fontSize: "16px",
      color: "#C9A84C",
      textDecoration: "none",
    },
    footer: {
      padding: "40px 48px",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 2,
      position: "relative",
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { cursor: none; }
        a { color: inherit; }
        ::selection { background: rgba(201,168,76,0.25); }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0C0C0C; }
        ::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.3); }
        .nav-link { 
          font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.15em; 
          text-transform: uppercase; color: #706856; cursor: pointer; 
          transition: color 0.2s; text-decoration: none; background: none; border: none;
        }
        .nav-link:hover, .nav-link.active { color: #C9A84C; }
        .cta-hover:hover { background: #C9A84C; color: #0C0C0C; }
        .case-card:hover { background: #161616 !important; border-color: rgba(201,168,76,0.2) !important; }
        .case-card:hover .case-accent { opacity: 1 !important; }
        .skill-pill:hover { border-color: rgba(201,168,76,0.5); color: #C9A84C; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
        .hamburger span { display: block; width: 22px; height: 1px; background: #C9A84C; transition: all 0.3s; }
        @media (max-width: 768px) {
          .hamburger { display: flex; }
          .desktop-nav { display: none !important; }
          .mobile-nav { 
            position: fixed; top: 65px; left: 0; right: 0; background: rgba(12,12,12,0.98);
            padding: 32px 48px; display: flex; flex-direction: column; gap: 20px;
            border-bottom: 1px solid rgba(201,168,76,0.1);
          }
          .section-pad { padding: 80px 0 !important; }
          .hero-pad { padding: 0 24px !important; padding-top: 100px !important; }
          .nav-pad { padding: 20px 24px !important; }
          .timeline-wrap { padding-left: 0 !important; }
          .case-grid { grid-template-columns: 1fr !important; }
          .resume-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .section-inner { padding-left: 24px !important; padding-right: 24px !important; }
          .footer-inner { flex-direction: column !important; gap: 12px !important; text-align: center !important; }
        }
      `}</style>

      {/* Custom cursor */}
      <div style={styles.cursor} />

      {/* Grain overlay */}
      <div style={styles.grain} />

      {/* NAV */}
      <nav style={{ ...styles.nav }} className="nav-pad">
        <span style={styles.logo}>SS</span>
        <ul style={styles.navLinks} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <li key={l}>
              <button className={`nav-link ${activeSection === l ? "active" : ""}`} onClick={() => scrollTo(l)}>
                {l}
              </button>
            </li>
          ))}
        </ul>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </div>
        {menuOpen && (
          <div className="mobile-nav">
            {NAV_LINKS.map(l => (
              <button key={l} className={`nav-link ${activeSection === l ? "active" : ""}`} onClick={() => scrollTo(l)}>{l}</button>
            ))}
          </div>
        )}
      </nav>

      <div style={styles.root}>
        {/* HERO */}
        <section id="about" style={styles.hero}>
          {/* Background portrait — fades into dark bg */}
          <div style={{
            position: "absolute",
            top: 0, right: 0,
            width: "38%",
            height: "85%",
            bottom: "0",
            top: "auto",
            pointerEvents: "none",
            zIndex: 1,
            overflow: "hidden",
          }}>
            <img
              src="/Sumeetha_Portrait.jpg"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 15%",
                display: "block",
                // filter: "grayscale(25%) brightness(0.5) contrast(1.05)",
              }}
            />
            {/* Gradient masks: left fade + bottom fade blending into bg */}
            <div style={{
              position: "absolute", inset: 0,
              // background: "linear-gradient(to right, #0C0C0C 0%, #0C0C0C 5%, rgba(12,12,12,0.55) 40%, rgba(12,12,12,0.05) 100%)",
            }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, transparent 40%, rgba(12,12,12,0.7) 75%, #0C0C0C 100%)",
            }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.04) 0%, transparent 60%)",
            }} />
          </div>
          {/* Decorative circles */}
          <div style={{ position: "absolute", top: "120px", right: "48px", width: "200px", height: "200px", border: "1px solid rgba(201,168,76,0.06)", borderRadius: "50%", pointerEvents: "none", zIndex: 1 }} />
          <div style={{ position: "absolute", top: "140px", right: "68px", width: "160px", height: "160px", border: "1px solid rgba(201,168,76,0.04)", borderRadius: "50%", pointerEvents: "none", zIndex: 1 }} />

          <div style={{ maxWidth: "1200px", margin: "0 240px", paddingLeft: "24px", paddingRight: "48px", position: "relative", zIndex: 2 }}>
            {/* Open to Work badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 18px", border: "1px solid rgba(120,200,120,0.35)", background: "rgba(80,160,80,0.08)", marginBottom: "28px", animation: "fadeUp 0.7s ease 0.1s forwards", opacity: 0 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#6BCB77", display: "inline-block", boxShadow: "0 0 8px #6BCB77", animation: "pulse 2s infinite" }} />
              <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} } @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } from { opacity: 0; transform: translateY(20px); } }`}</style>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.2em", color: "#6BCB77", textTransform: "uppercase" }}>Open to Work — Available Now</span>
            </div>
            <div style={{ opacity: 0, animation: "none" }}>
              <div style={{ ...styles.heroEyebrow, animation: "fadeUp 0.8s ease 0.2s forwards", opacity: 0 }}>
                ◈ &nbsp; Design Operations & UX Leadership · 15 Years of Craft
              </div>
            </div>
            <h1 style={{ ...styles.heroTitle, animation: "fadeUp 0.9s ease 0.35s forwards", opacity: 0 }}>
              Design that<br />
              <span style={styles.heroAccent}>thinks</span>
            </h1>
            <p style={{ ...styles.heroPara, animation: "fadeUp 0.9s ease 0.5s forwards", opacity: 0 }}>
              I'm Sumeetha Suppiah — a UX Enthusiast with over 15 years of experience leading multidisciplinary teams to build digital products people actually love. I specialise in scaling user-centered design within large, product-led organisations, currently focusing on integrating AI to make technology feel more intuitive and human. With a background in Design and a track record of mentoring teams of 18+, I bridge the gap between complex AI-enabled workflows and clear business goals — ensuring we don't just build for the sake of tech, but for the people using it. I'm now actively looking for my next role — or the right consulting engagement.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", animation: "fadeUp 0.9s ease 0.65s forwards", opacity: 0 }}>
              <button className="cta-hover" style={styles.ctaBtn} onClick={() => scrollTo("Work")} onMouseEnter={() => setCursorActive(true)} onMouseLeave={() => setCursorActive(false)}>
                See My Work →
              </button>
              <button className="cta-hover" style={{ ...styles.ctaBtn, borderColor: "rgba(255,255,255,0.1)", color: "#A09884" }} onClick={() => scrollTo("Contact")} onMouseEnter={() => setCursorActive(true)} onMouseLeave={() => setCursorActive(false)}>
                Let's Connect
              </button>
            </div>
          </div>

          {/* Stat strip */}
          <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "48px", paddingTop: "40px", width: "100%", borderTop: "1px solid rgba(201,168,76,0.12)", marginTop: "60px", display: "flex", gap: "64px", flexWrap: "wrap", position: "relative", zIndex: 2 }}>
            {[["15+", "Years in Design"], ["4", "Disciplines Mastered"], ["20+", "Problems Solved"], ["18+", "Designers Led"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "36px", color: "#C9A84C", fontWeight: 700, lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#706856", letterSpacing: "0.15em", marginTop: "6px", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT DETAILS */}
        <section style={{ ...styles.section, borderTop: "1px solid rgba(255,255,255,0.04)" }} className="section-pad">
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
            <FadeIn>
              <div style={styles.sectionLabel}><span style={{ display: "inline-block", width: "32px", height: "1px", background: "#C9A84C" }} /> About Me</div>
              <h2 style={{ ...styles.sectionTitle, fontSize: "clamp(28px, 4vw, 44px)" }}>
                Experience that<br />leads.
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#A09884", marginBottom: "20px" }}>
                I didn't start in tech. I started with ink and paper — earning a Bachelor's in Visual Communication from Madras University, where I learned that every design decision carries a cost and a consequence. That sensibility has followed me through web, brand, product, and leadership over 15+ years.
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#A09884" }}>
                Most recently, I was consulting with an early-stage stealth startup as Product Strategy & UX Lead — and before that, I led 18 designers across APAC at Accenture India, delivering 85% user satisfaction gains. I'm now open to full-time leadership roles or the right consulting engagement where design can be a genuine competitive advantage.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div style={{ paddingTop: "8px" }}>
                <div style={{ marginBottom: "40px" }}>
                  <div style={styles.sectionLabel}><span style={{ display: "inline-block", width: "32px", height: "1px", background: "#C9A84C" }} /> What I Do Now</div>
                  {[
                    ["Design Strategy & Vision", "I translate complex user insights and business goals into clear, scalable product direction — having done this across fintech, enterprise, and startup contexts."],
                    ["UX Research & Validation", "I oversee end-to-end research initiatives — from usability testing to synthesis — that have driven 80% improvements in task completion and tangible product-market fit."],
                    ["Design Operations (DesOps)", "I build the systems, processes, and governance that let design teams scale without breaking. I've done this for teams of 18+ at Accenture across APAC and global markets."],
                    ["Team Leadership & Coaching", "I build high-performance design cultures through mentoring, performance coaching, and hiring — creating teams that ship quality at pace."],
                  ].map(([t, d]) => (
                    <div key={t} style={{ paddingBottom: "20px", marginBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <div style={{ fontSize: "14px", color: "#E8E0D4", fontWeight: 500, marginBottom: "6px" }}>{t}</div>
                      <div style={{ fontSize: "13px", color: "#706856", lineHeight: 1.6 }}>{d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* JOURNEY TIMELINE */}
        <section id="journey" style={{ ...styles.section, background: "#0A0A0A" }} className="section-pad">
          <div className="section-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
            <FadeIn>
              <div style={styles.sectionLabel}><span style={{ display: "inline-block", width: "32px", height: "1px", background: "#C9A84C" }} /> Career Journey</div>
              <h2 style={styles.sectionTitle}>The journey<br />so far.</h2>
            </FadeIn>
            <div style={{ ...styles.timelineWrap, paddingLeft: "40px" }} className="timeline-wrap">
              <div style={styles.timelineSpine} />
              {TIMELINE.map((item, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div style={styles.timelineItem}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{ ...styles.timelineDot, ...(i === 0 ? { background: "#C9A84C", color: "#0C0C0C", border: "none", boxShadow: "0 0 20px rgba(201,168,76,0.4)" } : {}) }}>
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <div style={styles.timelineYear}>{item.year}</div>
                      <div style={styles.timelineRole}>{item.role}</div>
                      <div style={styles.timelineCompany}>{item.company}</div>
                      <p style={styles.timelineDesc}>{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="work" style={styles.section} className="section-pad">
          <div className="section-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
            <FadeIn>
              <div style={styles.sectionLabel}><span style={{ display: "inline-block", width: "32px", height: "1px", background: "#C9A84C" }} /> Selected Work</div>
              <h2 style={styles.sectionTitle}>Work that<br />moved the needle.</h2>
            </FadeIn>
            <div style={styles.caseGrid} className="case-grid">
              {CASE_STUDIES.map((cs, i) => {
                const hasPdf = !!cs.pdf;
                return (
                  <FadeIn key={cs.id} delay={i * 0.1}>
                    <div
                      className="case-card"
                      style={{ ...styles.caseCard, cursor: "pointer" }}
                      // onClick={() => { hasPdf ? setActivePdf(cs.pdf) : setRequestOpen(true); }}
                      onMouseEnter={() => { setHoveredCase(cs.id); setCursorActive(true); }}
                      onMouseLeave={() => { setHoveredCase(null); setCursorActive(false); }}
                    >
                      <div className="case-accent" style={{
                        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                        background: cs.color, opacity: hoveredCase === cs.id ? 1 : 0,
                        transition: "opacity 0.4s"
                      }} />
                      <div style={styles.caseNum}>{cs.id}</div>
                      <h3 style={styles.caseTitle}>{cs.title}</h3>
                      <div style={styles.caseTags}>
                        {cs.tags.map(t => <span key={t} style={styles.tag}>{t}</span>)}
                      </div>
                      <div style={styles.caseOutcome}>↑ {cs.outcome}</div>
                      <p style={styles.caseDesc}>{cs.desc}</p>
                      <div
                        style={{ marginTop: "28px", cursor: "pointer" }}
                        onClick={(e) => {
                          e.stopPropagation(); // 🔥 prevents parent click
                          if (hasPdf) {
                            window.open(cs.pdf, "_blank"); // ✅ dynamic path
                          } else {
                            setRequestOpen(true);
                          }
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "10px",
                            color: hoveredCase === cs.id ? cs.color : (hasPdf ? "#706856" : "#555"),
                            letterSpacing: "0.15em",
                            transition: "color 0.3s"
                          }}
                        >
                          {hasPdf ? "VIEW CASE STUDY →" : "REQUEST ACCESS →"}
                        </span>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* RESUME */}
        <section id="resume" style={{ ...styles.section, background: "#0A0A0A" }} className="section-pad">
          <div className="section-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
            <FadeIn>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "64px" }}>
                <div>
                  <div style={styles.sectionLabel}><span style={{ display: "inline-block", width: "32px", height: "1px", background: "#C9A84C" }} /> Résumé</div>
                  <h2 style={{ ...styles.sectionTitle, marginBottom: "0" }}>Experience &<br />Credentials</h2>
                </div>
                <a
                  href="/Sumeetha_Suppiah_Resume.pdf"
                  download="Sumeetha_Suppiah_Resume.pdf"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 28px", border: "1px solid #C9A84C", color: "#C9A84C", fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.3s ease", flexShrink: 0, background: "transparent" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#0C0C0C"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A84C"; }}
                >
                  ↓ &nbsp; Download Résumé
                </a>
              </div>
            </FadeIn>
            <div style={styles.resumeGrid} className="resume-grid">
              <div>
                <div style={{ ...styles.sectionLabel, marginBottom: "28px" }}>— Experience</div>
                {RESUME_ITEMS.map((r, i) => (
                  <FadeIn key={i} delay={i * 0.04}>
                    <div style={styles.resumeItem}>
                      <span style={styles.resumePeriod}>{r.period}</span>
                      <div>
                        <div style={styles.resumeTitle}>{r.title}</div>
                        <div style={styles.resumeOrg}>{r.org}</div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <div>
                <div style={{ ...styles.sectionLabel, marginBottom: "28px" }}>— Education & Credentials</div>
                <FadeIn>
                  {[
                    ["Bachelor of Visual Communication", "Madras University, 2005–2008"],
                    ["Design Operations & Systems", "Ongoing Professional Development"],
                    ["Agile & Scrum Practitioner", "Applied in every role"],
                    ["User-Centered Design", "Applied across 15+ years of practice"],
                  ].map(([t, s]) => (
                    <div key={t} style={styles.resumeItem}>
                      <span style={styles.resumePeriod}></span>
                      <div>
                        <div style={styles.resumeTitle}>{t}</div>
                        <div style={styles.resumeOrg}>{s}</div>
                      </div>
                    </div>
                  ))}
                </FadeIn>

                <div style={{ ...styles.sectionLabel, marginTop: "48px", marginBottom: "20px" }}>— Core Skills</div>
                <FadeIn delay={0.2}>
                  <div style={styles.skillsWrap}>
                    {SKILLS.map(s => (
                      <span key={s} className="skill-pill" style={styles.skillPill}>{s}</span>
                    ))}
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div style={{ marginTop: "48px", padding: "28px", border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)" }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: "12px" }}>— Open To</div>
                    <p style={{ fontSize: "14px", color: "#A09884", lineHeight: 1.7 }}>
                      Full-time UX / Design Leadership roles · Head of Design · Principal Designer · Design Director · Fractional or consulting engagements · Design team audits & DesOps transformation
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" style={{ ...styles.section, background: "#0A0A0A" }} className="section-pad">
          <div className="section-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
            <FadeIn>
              <div style={styles.sectionLabel}><span style={{ display: "inline-block", width: "32px", height: "1px", background: "#C9A84C" }} /> Testimonials</div>
              <h2 style={styles.sectionTitle}>What others say<br />about me.</h2>
            </FadeIn>
            <div
              style={styles.testimonialsTrack}
              onMouseDown={e => {
                e.currentTarget.dataset.down = "true";
                e.currentTarget.dataset.startX = e.pageX - e.currentTarget.offsetLeft;
                e.currentTarget.dataset.scrollLeft = e.currentTarget.scrollLeft;
                e.currentTarget.style.cursor = "grabbing";
              }}
              onMouseLeave={e => { e.currentTarget.dataset.down = "false"; e.currentTarget.style.cursor = "grab"; }}
              onMouseUp={e => { e.currentTarget.dataset.down = "false"; e.currentTarget.style.cursor = "grab"; }}
              onMouseMove={e => {
                if (e.currentTarget.dataset.down !== "true") return;
                e.preventDefault();
                const x = e.pageX - e.currentTarget.offsetLeft;
                e.currentTarget.scrollLeft = parseInt(e.currentTarget.dataset.scrollLeft) - (x - parseInt(e.currentTarget.dataset.startX)) * 1.5;
              }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} style={styles.testimonialCard}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, width: "40px", height: "2px", background: "#C9A84C", opacity: 0, transition: "opacity 0.3s" }} className="t-accent" />
                  <div style={styles.testimonialQuote}>"</div>
                  <p style={styles.testimonialText}>{t.text}</p>
                  <div style={styles.testimonialDivider} />
                  <div style={styles.testimonialName}>{t.name}</div>
                  <div style={styles.testimonialRole}>{t.role}</div>
                </div>
              ))}
            </div>
            {/* Scroll hint */}
            <div style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.2em", color: "#403830", textTransform: "uppercase" }}>Drag to scroll</span>
              <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <div style={{ width: "24px", height: "1px", background: "rgba(201,168,76,0.4)" }} />
                <div style={{ width: "12px", height: "1px", background: "rgba(201,168,76,0.15)" }} />
                <div style={{ width: "8px", height: "1px", background: "rgba(201,168,76,0.1)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={styles.section} className="section-pad">
          <div className="section-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
            <FadeIn>
              <div style={styles.sectionLabel}><span style={{ display: "inline-block", width: "32px", height: "1px", background: "#C9A84C" }} /> Contact</div>
              <h2 style={styles.sectionTitle}>Let's work<br />together.</h2>
            </FadeIn>
            <div style={styles.contactGrid} className="contact-grid">
              <FadeIn delay={0.1}>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#A09884", marginBottom: "40px", maxWidth: "420px" }}>
                  After a focused consulting stint, I'm ready for my next chapter — a full-time leadership role or a meaningful engagement where great design has real stakes. If that sounds like something you're hiring for, I'd genuinely love to talk.
                </p>
                <button className="cta-hover" style={{ ...styles.ctaBtn }} onMouseEnter={() => setCursorActive(true)} onMouseLeave={() => setCursorActive(false)}>
                  Start a Conversation →
                </button>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  {[
                    ["Email", "sagisumee@gmail.com", "mailto:sagisumee@gmail.com"],
                    ["Phone", "+91 95388 66197", "tel:+919538866197"],
                    ["LinkedIn", "linkedin.com/in/sumeethsuppiah", "https://linkedin.com/in/sumeethsuppiah"],
                    ["Location", "Chennai, India · Remote Worldwide", null],
                  ].map(([label, val, href]) => (
                    <div key={label} style={styles.contactItem}>
                      <span style={styles.contactLabel}>{label}</span>
                      {href ? (
                        <a href={href} style={styles.contactLink} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{val}</a>
                      ) : (
                        <span style={styles.contactVal}>{val}</span>
                      )}
                    </div>
                  ))}
                  <div style={{ marginTop: "32px", padding: "24px", background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#706856", letterSpacing: "0.2em", marginBottom: "8px" }}>CURRENTLY</div>
                    <div style={{ fontSize: "14px", color: "#E8E0D4" }}>✦ &nbsp; Actively open to roles & engagements — available now</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }} className="footer-inner">
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "16px", color: "#C9A84C" }}>SS</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#403830", letterSpacing: "0.2em" }}>© 2025 · SUMEETHA SUPPIAH · OPEN TO WORK · DESIGN LEADERSHIP</span>
            <button className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑ TOP</button>
          </div>
        </footer>
      </div>

      {/* ── REQUEST ACCESS MODAL ── */}
      {requestOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 500,
          background: "rgba(0,0,0,0.85)",
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "fadeIn 0.25s ease",
          padding: "24px",
        }}
          onClick={e => { if (e.target === e.currentTarget) { setRequestOpen(false); setRequestSent(false); setRequestForm({ name: "", email: "", message: "" }); } }}
        >
          <div style={{
            background: "#111", border: "1px solid rgba(201,168,76,0.2)",
            maxWidth: "500px", width: "100%", padding: "48px", position: "relative",
          }}>
            {/* Corner accents */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "32px", height: "1px", background: "#C9A84C" }} />
            <div style={{ position: "absolute", top: 0, left: 0, width: "1px", height: "32px", background: "#C9A84C" }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: "32px", height: "1px", background: "#C9A84C" }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: "1px", height: "32px", background: "#C9A84C" }} />

            {/* Close */}
            <button onClick={() => { setRequestOpen(false); setRequestSent(false); setRequestForm({ name: "", email: "", message: "" }); }} style={{
              position: "absolute", top: "16px", right: "16px", width: "32px", height: "32px",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1px solid rgba(201,168,76,0.25)", background: "transparent",
              color: "#C9A84C", fontSize: "16px", cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#0C0C0C"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A84C"; }}
            >✕</button>

            {requestSent ? (
              /* ── Success State ── */
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: "40px", marginBottom: "20px" }}>✦</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.3em", color: "#C9A84C", textTransform: "uppercase", marginBottom: "16px" }}>Request Sent</div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "24px", color: "#F2EDE6", fontWeight: 700, marginBottom: "12px" }}>
                  I'll be in touch soon.
                </h3>
                <p style={{ fontSize: "14px", color: "#A09884", lineHeight: 1.7 }}>
                  Your request has been sent to my inbox. I typically respond within 24 hours.
                </p>
              </div>
            ) : (
              /* ── Form State ── */
              <>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.3em", color: "#C9A84C", textTransform: "uppercase", marginBottom: "16px" }}>Case Study Request</div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "24px", color: "#F2EDE6", fontWeight: 700, lineHeight: 1.2, marginBottom: "8px" }}>
                  This work is available<br />on request.
                </h3>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#706856", marginBottom: "28px" }}>
                  Share your details and I'll send the case study across. All work is covered under NDA.
                </p>
                <style>{`
                  .req-input {
                    width: 100%; padding: 12px 16px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.1);
                    color: #E8E0D4; font-family: 'DM Sans', sans-serif;
                    font-size: 14px; outline: none; box-sizing: border-box;
                    transition: border-color 0.2s; margin-bottom: 12px;
                  }
                  .req-input:focus { border-color: rgba(201,168,76,0.5); }
                  .req-input::placeholder { color: #555; }
                  .req-input-label {
                    font-family: 'DM Mono', monospace; font-size: 9px;
                    letter-spacing: 0.2em; color: #706856; text-transform: uppercase;
                    display: block; margin-bottom: 6px;
                  }
                `}</style>
                <div style={{ marginBottom: "4px" }}>
                  <span className="req-input-label">Your Name *</span>
                  <input className="req-input" type="text" placeholder="Full name"
                    value={requestForm.name}
                    onChange={e => setRequestForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div style={{ marginBottom: "4px" }}>
                  <span className="req-input-label">Your Email *</span>
                  <input className="req-input" type="email" placeholder="email@example.com"
                    value={requestForm.email}
                    onChange={e => setRequestForm(f => ({ ...f, email: e.target.value }))} />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <span className="req-input-label">Message (optional)</span>
                  <textarea className="req-input" rows={3} placeholder="What are you working on? Why are you interested?"
                    value={requestForm.message}
                    onChange={e => setRequestForm(f => ({ ...f, message: e.target.value }))}
                    style={{ resize: "vertical", marginBottom: 0 }} />
                </div>
                <a
                  href={requestForm.name && requestForm.email
                    ? `mailto:sagisumee@gmail.com?subject=Case Study Request from ${encodeURIComponent(requestForm.name)}&body=${encodeURIComponent(`Name: ${requestForm.name}
Email: ${requestForm.email}

Message:
${requestForm.message || "No message provided."}

---
This request was submitted via your portfolio website.`)}`
                    : "#"}
                  onClick={e => {
                    if (!requestForm.name || !requestForm.email) {
                      e.preventDefault();
                      alert("Please fill in your name and email.");
                      return;
                    }
                    setRequestSent(true);
                  }}
                  style={{
                    display: "block", textAlign: "center", padding: "14px 28px",
                    border: "1px solid #C9A84C", color: "#C9A84C",
                    fontFamily: "'DM Mono', monospace", fontSize: "11px",
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    textDecoration: "none", background: "transparent", transition: "all 0.3s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#0C0C0C"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A84C"; }}
                >
                  Send Request →
                </a>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── PDF POPOVER OVERLAY ── */}
      {activePdf && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 400,
          background: "rgba(0,0,0,0.92)",
          display: "flex", flexDirection: "column",
          animation: "fadeIn 0.3s ease",
        }}>
          <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>

          {/* Top bar */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "16px 32px",
            background: "rgba(12,12,12,0.95)",
            borderBottom: "1px solid rgba(201,168,76,0.15)",
            flexShrink: 0,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "16px", color: "#C9A84C", fontWeight: 700 }}>SS</span>
              <span style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.2em", color: "#706856", textTransform: "uppercase" }}>{CASE_STUDIES.find(cs => cs.pdf === activePdf)?.title || "Case Study"}</span>
            </div>
            <button
              onClick={() => setActivePdf(null)}
              style={{
                width: "36px", height: "36px",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid rgba(201,168,76,0.3)",
                background: "transparent", color: "#C9A84C",
                fontSize: "18px", cursor: "pointer",
                transition: "all 0.2s", borderRadius: "2px",
                lineHeight: 1,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#0C0C0C"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A84C"; }}
              title="Close"
            >
              ✕
            </button>
          </div>

          {/* PDF Viewer */}
          <div style={{ flex: 1, overflow: "hidden", padding: "0" }}>
            <iframe
              src={`${activePdf}#toolbar=0&navpanes=0&scrollbar=0`}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
              }}
              title="Case Study"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      )}
    </>
  );
}
