import React, { useRef } from 'react';
import { gsap } from 'gsap';
import styles from '@/styles/Button.module.css';

const Button = (props) => {
  const { text, href, target = '_blank' } = props;
  const buttonProps = href ? { href: href, target: target } : {};
  const ButtonElement = href ? 'a' : 'button';

  const buttonRef = useRef(null);

  const handleHover = () => {
    gsap.to(buttonRef.current, {
      duration: 0.5,
      backgroundColor: 'var(--secondary-color)',
      color: 'var(--primary-color)',
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      duration: 0.3,
      backgroundColor: 'transparent',
      color: 'var(--text-color)',
      ease: 'power2.out',
    });
  };

  return (
    <ButtonElement
      className={styles.btn}
      ref={buttonRef}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      {...buttonProps}
      {...props}
    >
      {text}
    </ButtonElement>
  );
};

export default Button;