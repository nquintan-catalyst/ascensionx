import { useEffect, useState } from "react";
import { motion, useViewportScroll, useSpring, useTransform } from "framer-motion";

const Sidebar: React.FC = () => {

  const { scrollYProgress } = useViewportScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winscroll = document.documentElement.scrollTop;
    const height = 
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    
    const scrolled = (winscroll / height) * 100;

    setScrollTop(scrolled);
  };


  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return(
  <div className="sidebar">
    <div className="sidebar--progress" style={{ height: `${scrollTop}%`}} />

    <div className="sidebar--container">
      <SidebarItem title="Hi" link="/" animate={true} />
      <SidebarItem title="Hi" link="/" animate={true} />
      <SidebarItem title="Hi" link="/" animate={true} />
      <SidebarItem title="Hi" link="/" animate={true} />
      <SidebarItem title="Hi" link="/" animate={true} />
      <SidebarItem title="Hi" link="/" animate={true} />
      <SidebarItem title="Hi" link="/" animate={true} />
    </div>
  </div>
  );
};

type SidebarItemProps = {
  title: string;
  link: string;
  animate: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ title, link, animate }) => {
  return(
  <div className="sidebar--item">
    <svg className="sidebar--svg">
      <motion.path
        strokeWidth="5"
        stroke="white"
        strokeDasharray="0 1"
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        animate={{ pathLength: animate ? 1 : 0 }}
        style={{
          rotate: 90,
          translateX: 5,
          translateY: 5,
          scaleX: -1 // Reverse direction of line animation
        }}
      />
    </svg>
    <a href={link}>{title}</a>
  </div>
  );
}


export default Sidebar;