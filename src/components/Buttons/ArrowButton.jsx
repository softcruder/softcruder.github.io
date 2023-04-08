import React from "react";
import styles from "@/styles/ArrowButton.module.css";
import Image from "next/image";

const ArrowButton = (props) => {
  const { text, href, direction, target = "_blank" } = props;
  const buttonProps = href ? { href: href, target: target } : {};
  const ButtonElement = href ? "a" : "button";

  const icon =
    direction === "right" ? (
      <>
        {text && <span className={styles.arwText}>{text}</span>}
        <Image
          src="/images/btn-arrow-right.svg"
          alt="Arrow Right"
          width={55}
          height={13}
          className={styles["arrow-right"]}
        />
      </>
    ) : (
      <>
        <Image
          src="/images/btn-arrow-left.svg"
          alt="Arrow Left"
          width={55}
          height={13}
          className={styles["arrow-right"]}
        />
        {text && <span className={styles.arwText}>{text}</span>}
      </>
    );

  return (
    <ButtonElement className={styles.arwBtn} {...buttonProps}>
      {icon}
    </ButtonElement>
  );
};

export default ArrowButton;
