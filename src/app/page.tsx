import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import About from "@/components/About";
import ProjectShowcase from "@/components/ProjectShowcase";
import CaseStudy from "@/components/CaseStudy";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { ResumeOptionState } from "@/components/ResumeDropdown";
import { checkPublicFiles, publicFileExists } from "@/lib/files";
import { resumes } from "@/data/resumes";
import { dashboardProjects, moreProjects, showcaseProjects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function Home() {
  // Build-time availability checks (static export): resume PDFs,
  // project screenshots, profile photo, certificate image.
  const resumeOptions: ResumeOptionState[] = resumes.map((r) => ({
    ...r,
    available: publicFileExists(`resumes/${r.file}`),
  }));

  const screenshotPaths = [
    ...showcaseProjects.flatMap((p) => p.screenshots),
    ...dashboardProjects.map((d) => d.screenshot),
    ...moreProjects.map((m) => m.screenshot),
  ].filter((p): p is string => Boolean(p));
  const imageMap = checkPublicFiles(screenshotPaths);

  const photoAvailable = publicFileExists(profile.photo.replace(/^\//, ""));
  const certificateImageAvailable = publicFileExists("certificates/codeverse-2026.png");

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar resumeOptions={resumeOptions} />
      <main id="main">
        <Hero photoAvailable={photoAvailable} />
        <StatsStrip />
        <About />
        <ProjectShowcase imageMap={imageMap} />
        <CaseStudy />
        <Experience />
        <Skills />
        <Achievements certificateImageAvailable={certificateImageAvailable} />
        <Education />
        <Contact resumeOptions={resumeOptions} />
      </main>
      <Footer />
    </>
  );
}
