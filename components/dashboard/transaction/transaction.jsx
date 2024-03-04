import Image from 'next/image';
import style from './transaction.module.css';
export default function Transaction() {
    return (
        <div className={style.container}>
            <h2 className={style.title}>Latest Transaction</h2>
            <table className={style.table}>
                <thead>
                  <tr>
                  <td>Name</td>
                    <td>Status</td>
                    <td>Date</td>
                    <td>Amount</td>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={style.user}>
                        <Image className={style.userimage} src="/mavator.jpg" alt='customer Photo' width={30} height={30} />
                        Osman Wako
                    </td>
                    <td><span className={`${style.status} ${style.pending}`}>Pending</span></td>
                    <td>2024-09-09</td>
                    <td>123.455</td>
                    </tr>
                    <tr>
                    <td className={style.user}>
                        <Image className={style.userimage} src="/female.avif" alt='customer Photo' width="30" height="30" />
                        Muna Abdulshukur
                    </td>
                    <td><span className={`${style.status} ${style.done}`}>Pending</span></td>
                    <td>2024-09-09</td>
                    <td>123.455</td>
                    </tr>
                    <tr>
                    <td className={style.user}>
                        <Image className={style.userimage} src="/male.png" alt='customer Photo' width={30} height={30} />
                        Mohammed Nassir
                    </td>
                    <td><span className={`${style.status} ${style.cancelled}`}>Pending</span></td>
                    <td>2024-09-09</td>
                    <td>123.455</td>
                    </tr>
                    <tr>
                    <td className={style.user}>
                        <Image className={style.userimage} src="/female.jpg" alt='customer Photo' width={30} height={30} />
                       Jemal Fatah
                    </td>
                    <td><span className={`${style.status} ${style.done}`}>Pending</span></td>
                    <td>2024-09-09</td>
                    <td>123.455</td>
                    </tr>
                    <tr>
                    <td className={style.user}>
                        <Image className={style.userimage} src="/male1.png" alt='customer Photo' width={30} height={30} />
                        Sofia Abdullahi
                    </td>
                    <td><span className={`${style.status} ${style.cancelled}`}>Pending</span></td>
                    <td>2024-09-09</td>
                    <td>123.455</td>
                    </tr>
                    <tr>
                    <td className={style.user}>
                        <Image className={style.userimage} src="/female1.avif" alt='customer Photo' width={30} height={30} />
                       Hussien Abdulkadir
                    </td>
                    <td><span className={`${style.status} ${style.cancelled}`}>Pending</span></td>
                    <td>2024-09-09</td>
                    <td>123.455</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}