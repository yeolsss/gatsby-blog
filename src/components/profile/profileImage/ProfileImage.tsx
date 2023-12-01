import React from "react";
import * as St from "./profile.styled";
import { StaticImage } from "gatsby-plugin-image";

function ProfileImage() {
  return (
    <St.ProfileContainer>
      <St.ProfileWrapper>
        <St.ProfileImageWrapper>
          <StaticImage
            src="../../../images/yeols.jpg"
            alt="profile photo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </St.ProfileImageWrapper>
        {/*  theme toggle button*/}
      </St.ProfileWrapper>
    </St.ProfileContainer>
  );
}

export default ProfileImage;
