import type { IconType } from "react-icons/lib";

export interface Contact {
  icon: IconType;
  name: string;
  username: string;
  link: string | null;
}
