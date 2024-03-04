"use client"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import style from './chart.module.css';
const data = [
    {
        name: 'Monday',
        visit: 4000,
        like: 100,
    },
    {
        name: 'Tuesday',
        visit: 3000,
        like: 1398,
    },
    {
        name: 'Wednesday',
        visit: 2000,
        like: 900,
    },
    {
        name: 'Thrusday',
        visit: 2780,
        like: 2500,
    },
    {
        name: 'Friday',
        visit: 1890,
        like: 400,
    },
    {
        name: 'Saturday',
        visit: 2390,
        like: 300,
    },
    {
        name: 'Sunday',
        visit: 3490,
        like: 2000,
    },
];
export default function Chart() {

    return (
        <div className={style.container}>
            <h2 className= {style.title}> Weekly Recap </h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                <Tooltip contentStyle={{background:"#151c2c",border:"none"}} />
                    <Legend />
                    <Line type="monotone" dataKey="like" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="visit" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );

}