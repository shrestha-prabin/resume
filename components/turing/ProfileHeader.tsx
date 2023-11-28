import React from "react";

const ProfileHeader = () => {
  return (
    <div className="space-y-2">
      <div className="text-xl font-bold">Prabin Shrestha</div>
      <div>
        <div>
          <a href="mailto:mail.prabin.shrestha@gmail.com">
            mail.prabin.shrestha@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:9861375062">9861375062</a>
        </div>
      </div>

      <div className="text-base text-gray-500">
        Software engineer with 4+ years of professional work experience
        specialized in development of mobile and web applications. Open to
        taking on new opportunities, learn new programming languages and
        frameworks, and follow best software design practices.
      </div>
    </div>
  );
};

export default ProfileHeader;
