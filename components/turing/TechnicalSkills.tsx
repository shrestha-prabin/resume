import React from "react";
import { Table, TableColumnProps } from "antd";

const {} = Table;

const TechnicalSkills = ({ className }: any) => {
  const columns = [
    { title: "Skill", dataIndex: "skill" },
    {
      title: "Years of experience",
      dataIndex: "duration",
    },
  ];
  const data = [
    { skill: "React", duration: "4 years" },
    { skill: "React-Native", duration: "4 years" },
    { skill: "iOS/Swift", duration: "3 years" },
    { skill: "Android/Java/Kotlin", duration: "3 years" },
    { skill: "Python", duration: "3 years" },
    { skill: "Laravel", duration: "2 years" },
    { skill: "Flutter", duration: "6 months" },
  ];

  return (
    <Table
      className={className}
      columns={columns}
      dataSource={data}
      pagination={false}
      size="small"
    />
  );
};

export default TechnicalSkills;
