import { MdSupervisedUserCircle } from 'react-icons/md';
import style from './card.module.css';
export default function Card() {

    return (
        <div className={style.container}>
            <MdSupervisedUserCircle size={24}/>
            <div className={style.text}>
                <span className={style.title}>Total User</span>
                <span className={style.number}>10.928</span>
                <span className={style.detail}>
                    <span className={style.positive}>12% </span>
                    More than prevous weeks.
                </span>
            </div>
        </div>
    );

}