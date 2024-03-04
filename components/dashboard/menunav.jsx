import style from './menunav.module.css';
import Image from "next/image";
import { MdAnalytics, MdAttachMoney, MdConstruction, MdDashboard, MdHelpCenter, MdLogout, MdOutline10K, MdOutlineSettings, MdPeople, MdShoppingBag, MdSupervisedUserCircle, MdWork } from 'react-icons/md';
import MenuLink from './menulink';
const categories = [
    {
        title: 'Page',
        lists: [
            {
                title: 'Dashboard',
                path: '/dashboard',
                icon: <MdDashboard />,
            }, {
                title: 'User',
                path: '/dashboard/user',
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: 'Product',
                path: '/dashboard/product',
                icon: <MdShoppingBag />,

            },
            {
                title: 'Transactions',
                path: '/dashboard/transaction',
                icon: <MdAttachMoney />,

            },
        ],
    },
    {
        title: "Analytic",
        lists: [
            {
                title: 'Revenue',
                path: '/dashboard/revenue',
                icon: <MdWork />,
            },
            {
                title: 'Reports',
                path: '/dashboard/reports',
                icon: <MdAnalytics />,
            },
            {
                title: 'Teams',
                path: '/dashboard/teams',
                icon: <MdPeople />,
            },
        ]
    }, {
        title: "User",
        lists: [
            {
                title: 'Settings',
                path: '/dashboard/settings',
                icon: <MdOutlineSettings />,
            },
            {
                title: 'Help',
                path: '/dashboard/help',
                icon: <MdHelpCenter />,
            }
        ]
    }
]
export default function Menunav() {

    return (
        <div className={style.container}>
            <div className={style.user}>
                <Image className={style.userimage} src='/mavator.jpg' alt='User Photo' width={50} height={50} />
                <div className={style.userdetails}>
                    <span className={style.username}>Osman Wako</span>
                    <span className={style.usertitle}>Administrator</span>
                </div>
            </div>
            <ul>
                {categories.map((category) => (
                    <li key={category.title} className={style.list}>
                        <span className={style.category}>{category.title}</span>
                        {category.lists.map((list) => (
                            <MenuLink key={list.title} list={list} />
                        ))}
                    </li>
                ))
                }
            </ul>
            <button className={style.logout}>
                <MdLogout />
                Logout
            </button>
        </div>
    );
}