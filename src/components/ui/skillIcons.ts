import type { IconType } from "react-icons";
import { FaAws, FaCss3Alt, FaDocker, FaFileExcel, FaGitAlt, FaGithub, FaHtml5, FaJs, FaLinux, FaPython, FaReact } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { MdOutlineKeyboard } from "react-icons/md";

/** Skill name (as written in data/portfolio.ts) → icon + brand color. Add new skills here. */
export const skillIcons: Record<string, { Icon: IconType; color: string }> = {
  HTML: { Icon: FaHtml5, color: "#E34F26" },
  CSS: { Icon: FaCss3Alt, color: "#1572B8" },
  JavaScript: { Icon: FaJs, color: "#F7DF1E" },
  "React.js": { Icon: FaReact, color: "#61DAFB" },
  Python: { Icon: FaPython, color: "#3776AB" },
  Linux: { Icon: FaLinux, color: "#FCC624" },
  Git: { Icon: FaGitAlt, color: "#F05032" },
  GitHub: { Icon: FaGithub, color: "#FFFFFF" },
  AWS: { Icon: FaAws, color: "#FF9900" },
  Docker: { Icon: FaDocker, color: "#2496ED" },
  Kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  "Microsoft Excel": { Icon: FaFileExcel, color: "#217346" },
  "Data Entry": { Icon: MdOutlineKeyboard, color: "#94A3B8" },
};
