'use client';
import { usePathname } from "next/navigation";
import style from "./contentnav.module.css";
import { MdNotifications,MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";
export default function Headernav() {
    const pathname = usePathname().split('/').pop();
    return (
        <div className={style.container}>
            <div className={style.title}>
                {pathname}
            </div>
            <div className={style.menu}>
                <div className={style.search}>
                    <MdSearch />
                    <input type="text" placeholder="Search..." className={style.input} />
                </div>
                <div className={style.icons}>
                    <MdOutlineChat size={20}/>
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
        </div>
    );
}