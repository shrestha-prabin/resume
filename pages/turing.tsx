import React from "react";
import styles from "../styles/turing.module.css";
import { Space, Divider, Layout, Typography } from "antd";
import ProfileHeader from "../components/turing/ProfileHeader";
import TechnicalSkills from "../components/turing/TechnicalSkills";
import LeftRightContainer from "../components/turing/LeftRightContainer";
import IconTitle from "../components/turing/IconTitle";
import { CodeFilled, AppleFilled, AppstoreFilled } from "@ant-design/icons";
import WorkHistory from "../components/turing/WorkHistory";
import Education from "../components/turing/Education";

const { Title, Text } = Typography;

const Turing = () => {
  return (
    <Layout>
      <Layout.Content className={styles.container}>
        <ProfileHeader />

        <Divider />

        <LeftRightContainer
          leftChildren={
            <IconTitle icon={<CodeFilled style={{ color: '#888'}} />} title="Technical Skills" />
          }
          rightChildren={<TechnicalSkills />}
        />

        <Divider />

        <LeftRightContainer
          leftChildren={
            <IconTitle icon={<img src='/icons/work.svg' />} title="Work History" />
          }
          rightChildren={<WorkHistory />}
        />

        <Divider />

        <LeftRightContainer
          leftChildren={
            <IconTitle icon={<img src='/icons/school.svg' />} title="Education" />
          }
          rightChildren={<Education />}
        />
      </Layout.Content>
    </Layout>
  );
};

export default Turing;
