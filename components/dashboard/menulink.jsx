'use client';
import Link from "next/link";
import style from "./menulink.module.css";
import { usePathname } from "next/navigation";

export default function MenuLink({list}){
const pathname=usePathname();

return (
    <Link href={list.path} className={`${style.container} ${pathname==list.path && style.active}`}>
         {list.icon}
        {list.title}
    </Link>
);
};