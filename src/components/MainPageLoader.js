import Image from 'next/image';
import styles from '@/styles/MainPageLoader.module.css';
import { useRouter } from 'next/router';

const MainLoader = () => {
  const router = useRouter();

  const deviceIcon = () => {
    const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
    return isMobile ? (
      <Image src="/images/smartphone-white.svg" width={64} height={64} alt="Smartphone Icon" />
    ) : (
      <Image src="/images/monitor-white.svg" width={64} height={64} alt="Monitor icon" />
    );
  };
  
  if (router.pathname !== '/contact' && router.pathname !== '/' && router.pathname !== '/home') {
    return null;
  }

  return (
    <div className={styles.preloader}>
      <div className={styles.dots}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
      <h1 className={styles.text}> &lt;SOFTCRUDER /&gt; <span className={styles.version}>v2.1</span> </h1>
      <div className={styles.strike} />
      <div className={styles.icon}>
        <div className={styles.iconWrapper}>
          {deviceIcon()}
        </div>
      </div>
    </div>
  );
};

export default MainLoader;
