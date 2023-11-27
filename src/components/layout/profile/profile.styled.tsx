import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

export const ProfileContainer = styled.section``;

export const ProfileWrapper = styled.div``;

export const ProfileImageWrapper = styled.div`
  width: 8rem;
  height: 8rem;
`;

export const ProfileImage = styled(StaticImage)`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
`;
