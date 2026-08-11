import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tools: string;
  image: string;
  link?: string;
}

const projects: ProjectItem[] = [
  {
    id: "01",
    title: "Codentra 3D Showcase",
    category: "3D Web Application",
    tools: "React, Three.js, R3F, GSAP, TypeScript",
    image: "/images/placeholder.webp",
    link: "https://github.com/atif00150"
  },
  {
    id: "02",
    title: "Impact Campaign Videos",
    category: "Video Editing & Production",
    tools: "Adobe Premiere Pro, After Effects, Motion Graphics",
    image: "/images/placeholder.webp",
    link: "https://github.com/atif00150"
  },
  {
    id: "03",
    title: "Modern Web Portal",
    category: "Web Development",
    tools: "React, JavaScript, HTML5, CSS3",
    image: "/images/placeholder.webp",
    link: "https://github.com/atif00150"
  },
  {
    id: "04",
    title: "Social Impact Reel",
    category: "Digital Marketing & Video",
    tools: "Premiere Pro, Social Media Marketing",
    image: "/images/placeholder.webp",
    link: "https://github.com/atif00150"
  },
  {
    id: "05",
    title: "Encho Software Projects",
    category: "Web Development Internship",
    tools: "React, TypeScript, Responsive Web Design",
    image: "/images/placeholder.webp",
    link: "https://github.com/atif00150"
  },
  {
    id: "06",
    title: "Creative Motion Graphics",
    category: "Visual Effects",
    tools: "After Effects, UI Design, Animation",
    image: "/images/placeholder.webp",
    link: "https://github.com/atif00150"
  }
];

const Work = () => {
  useEffect(() => {
    let timeline: gsap.core.Timeline | null = null;

    const initScroll = () => {
      const box = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");

      if (!box || box.length === 0 || !container) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement
        ? box[0].parentElement.getBoundingClientRect().width
        : window.innerWidth;
      
      const computedPadding = window.getComputedStyle(box[0]).padding;
      const padding = parseInt(computedPadding || "0") / 2;

      const translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;

      if (translateX <= 0) return;

      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${translateX}`,
          scrub: true,
          pin: true,
          id: "work",
          invalidateOnRefresh: true,
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        ease: "none",
      });
    };

    const timer = setTimeout(() => {
      initScroll();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (timeline) timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
