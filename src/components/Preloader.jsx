import { useState, useEffect } from "react";
import styles from "@/styles/Preloader.module.css";
import Image from "next/image";

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading && (
        <div className={styles.container}>
          <div className={`${styles.loader} ${styles.rotate}`}>
            <div className={`${styles.logo} ${styles.logoContainer}`}>
              <Image
                src="/images/monitor-white.svg"
                className={styles.logoImage}
                alt="logo"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Preloader;
