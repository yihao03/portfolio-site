import type { Contact } from "@/types/contact";
import { ArrowUpRight } from "lucide-react";

export default function ContactCard({
  icon: Icon,
  name,
  username,
  link,
}: Contact) {
  const isEmail = link.startsWith("mailto:");
  return (
    <a
      href={link}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="group flex min-h-24 items-center gap-4 rounded-md px-2 py-5 hover:bg-white/5 sm:gap-5 sm:px-4"
    >
      <Icon
        aria-hidden="true"
        className="size-6 shrink-0 text-gray-400 group-hover:text-blue-200"
      />
      <span className="min-w-0 flex-1">
        <span className="block text-sm text-gray-400">{name}</span>
        <span className="mt-1 block text-base break-words text-blue-300 group-hover:underline sm:text-lg">
          {username}
        </span>
      </span>
      {!isEmail && (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 shrink-0 text-gray-400"
        />
      )}
    </a>
  );
}
