import Link from "next/link";
import { IconType } from "react-icons";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

export default function SidebarItem({
  icon: Icon,
  active,
  href,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1 ${
        active && "text-white"
      }`}
    >
      <Icon size={26} />
      <p className="truncate w-full"></p>
    </Link>
  );
}
