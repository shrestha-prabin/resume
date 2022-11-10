import React from "react";
import styles from "../../styles/turing.module.css";

const LeftRightContainer = ({ leftChildren, rightChildren }: any) => {
  return (
    <div className={styles.leftRightContainer}>
      <div className={styles.left}>{leftChildren}</div>
      <div className={styles.right}>{rightChildren}</div>
    </div>
  );
};

export default LeftRightContainer;
