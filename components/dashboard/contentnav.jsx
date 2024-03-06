'use client';
import { usePathname } from "next/navigation";
import "./contentnav.css";
import { MdNotifications,MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";
export default function Headernav() {
    const pathname = usePathname().split('/').pop();
    return (
        <div className="container">
            <div className="title">
                {pathname}
            </div>
            <div className="menu">
                <div className="search">
                    <MdSearch size={20}/>
                    <input type="text" placeholder="Search..." className="input" />
                </div>
                <div className="icons">
                    <MdOutlineChat size={22}/>
                    <MdNotifications size={22} />
                    <MdPublic size={22} />
                </div>
            </div>
        </div>
    );
}