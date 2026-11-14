import type { Contact } from "@/types/contact";
import { PiGithubLogoDuotone, PiLinkedinLogoDuotone } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

export const contacts: Contact[] = [
  {
    icon: MdEmail,
    name: "Email",
    username: "yihao.dev@gmail.com",
    link: "mailto:yihao.dev@gmail.com",
  },
  {
    icon: MdEmail,
    name: "University email",
    username: "hyihao@u.nus.edu",
    link: "mailto:hyihao@u.nus.edu",
  },
  {
    icon: PiLinkedinLogoDuotone,
    name: "LinkedIn",
    username: "Yi Hao Hon",
    link: "https://www.linkedin.com/in/yihaooo",
  },
  {
    icon: PiGithubLogoDuotone,
    name: "GitHub",
    username: "yihao03",
    link: "https://github.com/yihao03",
  },
];
