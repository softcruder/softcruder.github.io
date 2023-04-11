import { useEffect } from 'react';
import { TimelineLite } from 'gsap';
import Image from 'next/image';
import styles from '@/styles/MainPageLoader.module.css';
import { useRouter } from 'next/router';

const MainLoader = () => {
  const router = useRouter();

  useEffect(() => {
    const tl = new TimelineLite({ onComplete: () => console.log('Preloader animation completed') });

    // Dots animation
    tl.to('.preloader .dots .dot:nth-child(3)', { y: -10, repeat: 2, yoyo: true })
      .to('.preloader .dots', { opacity: 0 }, '-=0.5')
      .to('.preloader .text', { opacity: 1, scale: 1.2 }, '-=0.5')
      .to('.preloader .strike', { scaleX: 1 })
      .to('.preloader .version', { opacity: 1 })
      .to('.preloader .icon', { opacity: 1, y: 0 });

    return () => {
      tl.kill();
    };
  }, []);

  const deviceIcon = () => {
    const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
    return isMobile ? (
      <Image src="/images/smartphone-white.svg" width={64} height={64} alt="Smartphone Icon" />
    ) : (
      <Image src="/images/monitor-white.svg" width={64} height={64} alt="Monitor icon" />
    );
  };

  const loaderPaths = ['/contact', '/', '/home'];
  
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
