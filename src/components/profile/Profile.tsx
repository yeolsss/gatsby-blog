import * as React from "react";
import { BsMailboxFlag } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { useToggleContext } from "../../context/ToggleContext";
import * as St from "./profile.styled";
import ProfileImage from "./profileImage";
import ThemeButton from "./themeButton";

const Profile = () => {
  const { profileState } = useToggleContext();
  return (
    <St.ProfileWrapper>
      {/* 가상 div */}
      <St.VisibleProfileWrapper $profileState={profileState} />

      <St.ProfileContent $profileState={profileState}>
        {/* profile image */}
        <ProfileImage />

        {/* profile info */}
        <St.ProfileInformation $profileState={profileState}>
          <h2>저에 대해 소개 합니다.</h2>
          <St.ProfileInformationNameTag>
            <h1>권경열</h1>
            {/*icons*/}
            <a href="https://github.com/yeolsss" target="_blank">
              <FaGithub />
            </a>
            <a href="mailto: yeol8810@gmail.com" target="_blank">
              <BsMailboxFlag />
            </a>
            <a href="#" target="_blank">
              <GrDocumentUser />
            </a>
          </St.ProfileInformationNameTag>
        </St.ProfileInformation>

        {/* theme toggle button */}
        <ThemeButton />
      </St.ProfileContent>
      <St.ProfileDescriptionWrapper $profileState={profileState}>
        <St.ProfileDescription>
          <p>
            안녕하세요. 웹 개발 2년차로 활동중인 개발자 입니다. 단순히 책이나
            영상으로 접하는 코딩이 아닌, 실무에서 맞닥드렸던 문제를 해결하며
            겪었던 경험 위주에 내용을 작성 예정이며 블로그를 읽는 모든 분에게
            도움이 되었으면 좋겠습니다.
          </p>
        </St.ProfileDescription>
        <St.ProfileSkill>
          <span>
            HTML/CSS, Javascript, Typescript, Gatsby, Zustand, Redux:toolkit
          </span>
        </St.ProfileSkill>
      </St.ProfileDescriptionWrapper>
    </St.ProfileWrapper>
  );
};

export default Profile;
