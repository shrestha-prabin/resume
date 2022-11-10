import React from "react";
import { Space, Layout, Typography } from "antd";
import styles from '../../styles/turing.module.css'

const { Title, Text } = Typography;

const ProfileHeader = () => {
  return (
    <Space direction="vertical" size="small">
      <Text className={styles.name}>Prabin Shrestha</Text>

      <Text type="secondary" className={styles.description}>
        Software engineer with 4+ years of professional work experience
        specialized in development of mobile and web applications. Open to
        taking on new opportunities, learn new programming languages and
        frameworks, and follow best software design practices.
      </Text>
    </Space>
  );
};

export default ProfileHeader;
