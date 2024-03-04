import styles from './layout.module.css';
export default function DashboardLayout({ children,menusection,contentsection}) {
    return (
        <div className={styles.container}>
          <div className={styles.menu}>{menusection}</div>
          <div className={styles.content}>
            {children}
            {contentsection}
            </div>
    </div>
    );
  }