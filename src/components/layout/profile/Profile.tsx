import React from "react";
import * as St from "./profile.styled";

function Profile() {
  return (
    <St.ProfileContainer>
      <St.ProfileWrapper>
        <St.ProfileImageWrapper>
          <St.ProfileImage
            src="../../../images/yeols.jpg"
            alt="profile photo"
          />
        </St.ProfileImageWrapper>
        {/*  theme toggle button*/}
      </St.ProfileWrapper>
    </St.ProfileContainer>
  );
}

export default Profile;
