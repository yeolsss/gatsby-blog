import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useToggleContext } from "../../../context/ToggleContext";
import * as St from "./profile.styled";

function ProfileImage() {

  const {toggleProfile} = useToggleContext();
  
  const handleOnClickProfileToggle = ()=> {
    toggleProfile();
  }
  return (
    <St.ProfileContainer>
      <St.ProfileWrapper>
        <St.ProfileImageWrapper onClick={handleOnClickProfileToggle}>
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
