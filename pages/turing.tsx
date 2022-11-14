import React from "react";
import ProfileHeader from "../components/turing/ProfileHeader";
import TechnicalSkills from "../components/turing/TechnicalSkills";
import LeftRightContainer from "../components/turing/LeftRightContainer";
import IconTitle from "../components/turing/IconTitle";
import { CodeOutlined } from "@ant-design/icons";
import WorkHistory from "../components/turing/WorkHistory";
import Education from "../components/turing/Education";

const Turing = () => {
  return (
    <div className="bg-slate-100 font-gordita">
      <div className="bg-white max-w-4xl mx-auto p-6 space-y-6 divide-y">

        <ProfileHeader />

        <LeftRightContainer
          leftChildren={
            <IconTitle
              icon={
                <CodeOutlined className="text-xl" style={{ color: "#888" }} />
              }
              title="Technical Skills"
            />
          }
          rightChildren={<TechnicalSkills />}
        />

        <LeftRightContainer
          leftChildren={
            <IconTitle
              icon={<img src="/icons/work.svg" />}
              title="Work History"
            />
          }
          rightChildren={<WorkHistory />}
        />

        <LeftRightContainer
          leftChildren={
            <IconTitle
              icon={<img src="/icons/school.svg" />}
              title="Education"
            />
          }
          rightChildren={<Education />}
        />
      </div>
    </div>
  );
};

export default Turing;
