"use client"
import { usePathname } from "next/navigation";
import style from "./dashboard.module.css";
import Card from "./card/card";
import Transaction from "./transaction/transaction";
import Chart from "./chart/chart";

export default function Dashboard() {
    const pathname = usePathname().split('/').pop();
    return (
        <div className={style.wrapper}>
            <div className={style.main}>
                <div className={style.card}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transaction />
                <Chart />
            </div>
        </div>
    );
}