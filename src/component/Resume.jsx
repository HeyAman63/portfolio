import React, { useMemo, useRef, useState } from "react";
import { Download, Printer, FileJson, Mail, Phone, MapPin, Link as LinkIcon, Github, Globe, Linkedin } from "lucide-react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// Resume data (you can pass props instead)
const sampleData = {
  name: "Aman Chaurasiya",
  title: "Computer Science Undergraduate",
  summary:
    "Computer Science undergraduate with strong foundation in software development, data structures, and web technologies. Skilled in JavaScript, React, Node.js, Python, and C++, with hands-on experience building full-stack web applications.",
  location: "Lucknow, UP",
  email: "chaurasiyaaman741@gmail.com",
  phone: "+91 6389086437",
  links: [
    { label: "GitHub", href: "https://github.com/HeyAman63", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/HeyAman63", icon: "linkedin" },
  ],
  skills: [
    "React", "JavaScript", "Express", "Python", "Java", "Node.js",
    "Git", "HTML", "CSS", "JWT", "Leadership", "Critical Thinking"
  ],
  experience: [
    {
      role: "Frontend Developer",
      company: "Raashee’25 (FoET, LU)",
      period: "Jan 2025 – Feb 2025",
      bullets: ["Worked as a frontend developer in the international conference named Raashee-25."],
    },
    {
      role: "Intern",
      company: "CERF Solution Pvt. Ltd.",
      period: "Jun 2025 – Aug 2025, Noida, India",
      bullets: ["Completed a 6-week summer internship contributing to software solutions."],
    },
  ],
  projects: [
    {
      name: "Full-Stack Authentication System",
      link: "https://github.com/HeyAman63/Basic-Auth",
      description: "Developed authentication flow with JWT-based role management and secure login/registration.",
      stack: ["React", "Node.js", "JWT"]
    },
    {
      name: "Subscription Tracking System (Backend)",
      link: "https://github.com/HeyAman63/subscription-tracker",
      description: "API for subscription plans and currency management with Mongoose validation.",
      stack: ["Node.js", "Express", "MongoDB"]
    },
    {
      name: "Raashee 25 Conference Website",
      link: "https://github.com/HeyAman63/Conference_LU1",
      description: "Responsive website for international conference Raashee 25, launched by Hon’ble VC.",
      stack: ["React", "Tailwind CSS"]
    },
  ],
  education: [
    { school: "University of Lucknow — B.Tech CSE", period: "2023 – 2027", details: ["CGPA: 8.1"] },
    { school: "JKIC — Intermediate", period: "2021 – 2022", details: ["81%", "Siddharthnagar, UP"] },
  ],
};

function LinkIconByName({ name }) {
  if (name === "github") return <Github className="h-4 w-4" />;
  if (name === "linkedin") return <Linkedin className="h-4 w-4" />;
  if (name === "globe") return <Globe className="h-4 w-4" />;
  return <LinkIcon className="h-4 w-4" />;
}

function Section({ title, children }) {
  return (
    <section className="mt-4">
      <h3 className="text-sm font-semibold tracking-wide text-gray-600 uppercase">{title}</h3>
      <div className="mt-2 space-y-2">{children}</div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded border px-2 py-0.5 text-xs text-gray-700 border-gray-200 bg-white/60">
      {children}
    </span>
  );
}

export default function ResumeViewer({ data: incomingData }) {
  const [data] = useState(() => incomingData || sampleData);
  const [fileName, setFileName] = useState(() => `${(data?.name || "Resume").replace(/\s+/g, "_")}_Resume`);
  const resumeRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const contactLine = useMemo(() => {
    const bits = [];
    if (data.email){
        bits.push({ icon: <Mail className="h-4 w-4" />, text: data.email })
    };
    if (data.phone){
        bits.push({ icon: <Phone className="h-4 w-4" />, text: data.phone })
    };
    if (data.location) {
        bits.push({ icon: <MapPin className="h-4 w-4" />, text: data.location })
    };
    return bits;
  }, [data]);

  const handleDownloadPDF = async () => {
    setLoading(true);
    const el = resumeRef.current;
    if (!el) {
        setLoading(false);
      return;
    }

    // Wait for images to load
    await Promise.all(
      Array.from(el.getElementsByTagName("img")).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete){
                resolve()
            }
            else{
                img.onload = resolve
            };
          })
      )
    );

    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      windowWidth: el.scrollWidth,
      windowHeight: el.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${fileName}.pdf`);
    setLoading(false);
  };

  return (
    <div className="min-h-screen mt-10 w-full bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Toolbar */}
      <div className="sticky top-0 z-10 mr-5 mx-auto max-w-[70rem] bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-600">Resume</span>
          </div>
          <button onClick={handleDownloadPDF} disabled={loading} className={`inline-flex items-center gap-2 rounded-xl border border-gray-800  px-3 py-2 text-white cursor-pointer  ${loading?'bg-gray-700 cursor-not-allowed':'bg-gray-900 hover:bg-black'}`}>
            <Download className="h-4 w-4" />{loading?"Loading...":"Download PDF"}
          </button>
        </div>
      </div>

      {/* Resume */}
      <main className="mx-auto mr-5 my-6 max-w-[70rem] px-4">
        <div ref={resumeRef} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <header className="flex flex-col gap-4 border-b border-gray-100 pb-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">{data.name}</h1>
              <p className="text-sm text-gray-600">{data.title}</p>
            </div>
            <div className="text-sm text-gray-700">
              <div className="flex flex-wrap items-center gap-4">
                {contactLine.map((c, i) => (
                  <span key={i} className="inline-flex items-center gap-1">{c.icon}{c.text}</span>
                ))}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-4">
                {data.links?.map((l, i) => (
                  <a key={i} href={l.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1 text-gray-700 hover:text-gray-900">
                    <LinkIconByName name={l.icon} />
                    <span className="underline decoration-gray-300 group-hover:decoration-gray-800 underline-offset-2">{l.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </header>

          {data.summary && (
            <Section title="Summary"><p className="text-sm text-gray-800">{data.summary}</p></Section>
          )}
          {data.skills?.length > 0 && (
            <Section title="Skills"><div className="flex flex-wrap gap-2">{data.skills.map((s,i)=><Badge key={i}>{s}</Badge>)}</div></Section>
          )}
          {data.experience?.length > 0 && (
            <Section title="Experience">{data.experience.map((exp,idx)=>(
              <div key={idx} className="rounded-xl border border-gray-100 p-3">
                <div className="flex justify-between text-sm font-semibold"><span>{exp.role} — {exp.company}</span><span className="text-gray-500">{exp.period}</span></div>
                <ul className="list-disc pl-5 text-xs text-gray-800">{exp.bullets?.map((b,i)=><li key={i}>{b}</li>)}</ul>
              </div>
            ))}</Section>
          )}
          {data.projects?.length > 0 && (
            <Section title="Projects">{data.projects.map((p,i)=>(
              <div key={i} className="rounded-xl border border-gray-100 p-3">
                <h4 className="font-semibold text-sm">{p.link?<a href={p.link} target="_blank" rel="noreferrer" className="hover:underline">{p.name}</a>:p.name}</h4>
                <p className="text-xs text-gray-800">{p.description}</p>
                <div className="flex flex-wrap gap-1 mt-1">{p.stack?.map((t,k)=><Badge key={k}>{t}</Badge>)}</div>
              </div>
            ))}</Section>
          )}
          {data.education?.length > 0 && (
            <Section title="Education">{data.education.map((e,i)=>(
              <div key={i} className="rounded-xl border border-gray-100 p-2">
                <div className="flex justify-between text-sm font-semibold"><span>{e.school}</span><span className="text-gray-500">{e.period}</span></div>
                <ul className="list-disc pl-5 text-xs text-gray-800">{e.details?.map((d,k)=><li key={k}>{d}</li>)}</ul>
              </div>
            ))}</Section>
          )}
        </div>
      </main>
    </div>
  );
}
