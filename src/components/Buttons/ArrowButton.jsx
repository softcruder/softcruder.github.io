import React, { useRef } from "react";
import { gsap } from "gsap";
import styles from "@/styles/ArrowButton.module.css";

const ArrowButton = (props) => {
  const { text, href, direction } = props;
  const buttonProps = href ? { href: href, target: "_blank" } : {};
  const ButtonElement = href ? "a" : "button";

  const svgRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(svgRef.current, {
      duration: 0.2,
      scaleY: 1.2,
      transformOrigin: "50% 50%",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(svgRef.current, {
      duration: 0.2,
      scaleY: 1,
      transformOrigin: "50% 50%",
    });
  };

  const icon =
    direction === "right" ? (
      <>
        {text && <span className={styles.arwText}>{text}</span>}
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          width="64.207"
          height="14.587"
          viewBox="0 0 64.207 14.587"
          style={{transform: "scale(1.2)"}}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <g
            id="arrow_btn_right"
            data-name="arrow btn right"
            transform="translate(-657.3 418.733) rotate(-90)"
          >
            <path
              id="chevron_left"
              data-name="chevron left"
              d="M6.94,13.88,0,6.94,6.94,0h0"
              transform="translate(404.5 720.8) rotate(-90)"
              fill="none"
              stroke="#fff"
              strokeWidth="1"
            />
            <line
              id="Line_8"
              data-name="Line 8"
              y2="63.409"
              transform="translate(411.414 657.3)"
              fill="none"
              stroke="#fff"
              strokeWidth="1"
            />
          </g>
        </svg>
      </>
    ) : (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64.207"
          height="14.587"
          viewBox="0 0 64.207 14.587"
          style={{transform: "scale(1.2)"}}
        >
          <g
            id="arrow_btn_left"
            data-name="arrow btn left"
            transform="translate(721.507 -404.146) rotate(90)"
          >
            <path
              id="chevron_left"
              data-name="chevron left"
              d="M6.94,13.88,0,6.94,6.94,0h0"
              transform="translate(404.5 720.8) rotate(-90)"
              fill="none"
              stroke="#fff"
              strokeWidth="1"
            />
            <line
              id="Line_8"
              data-name="Line 8"
              y2="63.409"
              transform="translate(411.414 657.3)"
              fill="none"
              stroke="#fff"
              strokeWidth="1"
            />
          </g>
        </svg>
        {text && <span className={styles.arwText}>{text}</span>}
      </>
    );

    return (
      <ButtonElement
        className={styles.arwBtn}
        ref={svgRef}
        {...buttonProps}
      >
        {icon}
      </ButtonElement>
    );
  };
  
  export default ArrowButton;