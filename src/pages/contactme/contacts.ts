import type { Contact } from "@/types/contact";
import { PiGithubLogoDuotone, PiLinkedinLogoDuotone } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const rawContacts: Contact[] = [
  {
    icon: PiGithubLogoDuotone,
    name: "GitHub",
    username: "yihao03",
    link: "https://github.com/yihao03"
  },
  {
    icon: MdEmail,
    name: "Email",
    username: "hyihao@u.nus.edu",
    link: null
  },
  {
    icon: PiLinkedinLogoDuotone,
    name: "LinkedIn",
    username: "Yi Hao Hon",
    link: "https://www.linkedin.com/in/yi-hao-hon-614884219/"
  }
]

export const contacts: Contact[] = rawContacts.sort(
  (a, b) => Math.max(b.name.length, b.username.length)
    - Math.max(a.name.length, a.username.length)
)
