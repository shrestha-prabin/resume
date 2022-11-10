import React from "react";
import styles from '../../styles/typography.module.css'

const IconTitle = ({ icon, title }: any) => {
  return (
    <div>
      <span className={styles.icon}>{icon}</span>
      &nbsp;&nbsp;&nbsp;
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default IconTitle;
