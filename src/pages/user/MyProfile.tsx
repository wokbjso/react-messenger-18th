import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ChipButton, PageHeader } from "@common/components";
import { ReactComponent as LeftArrow } from "@common/icons/arrows/leftarrow.svg";
import { ReactComponent as Edit } from "@common/icons/edit.svg";
import { ReactComponent as Phone } from "@common/icons/phone.svg";
import { ReactComponent as Mail } from "@common/icons/mail.svg";
import { ReactComponent as Behance } from "@common/icons/profileLink/behance.svg";
import { ReactComponent as Instagram } from "@common/icons/profileLink/instagram.svg";
import { ReactComponent as Github } from "@common/icons/profileLink/github.svg";
import { ContactUserBtn, LinkButton, Profile } from "@features/user";
import { ReactComponent as BottomArrow } from "@common/icons/arrows/bottomarrow.svg";
import theme from "@styles/theme";

const PERSONAL_LINK = [
  {
    icon: Behance,
    text: "Behance",
  },
  {
    icon: Instagram,
    text: "Instagram",
  },
  {
    icon: Github,
    text: "Github",
  },
];

export function MyProfile() {
  const navigate = useNavigate();
  return (
    <>
      <PageHeader
        leftIcon={<LeftArrow onClick={() => navigate(-1)} />}
        title="프로필"
        rightIcon1={<Edit />}
        addClass={`background-color:${theme.colors.gray7}`}
      />
      <ProfileInfoWrapper>
        <MainProfile>
          <Profile $img="/img/profile.jpg" $size="14rem" />
          <MainProfileText>
            <UserName>
              <span>김현민</span>
            </UserName>
            <ChipButton
              width="10rem"
              height="2.8rem"
              radius="0.4rem"
              color={theme.colors.mainColor}
              fontStyle={theme.fontStyles.body1}
              addClass="padding: 0.2rem 0.4rem 0.2rem 0.8rem;"
            >
              <BtnText>
                <span>Frontend</span>
              </BtnText>
              <BottomArrow />
            </ChipButton>
          </MainProfileText>
        </MainProfile>
        <ContactUserWrapper>
          <ContactUserBtn
            icon={<Phone />}
            text="+82) 10-1234-5678"
            addClass="margin-right:0.9rem;"
          />
          <ContactUserBtn icon={<Mail />} text="ren6294@naver.com" />
        </ContactUserWrapper>
      </ProfileInfoWrapper>
      <DirectAccessWrapper>
        <DirectAccessText>
          <span>바로가기</span>
        </DirectAccessText>
        <DirectAccessLink>
          {PERSONAL_LINK.map((link) => (
            <LinkButton key={link.text} icon={<link.icon />} text={link.text} />
          ))}
        </DirectAccessLink>
      </DirectAccessWrapper>
    </>
  );
}

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 35.1rem;
  padding: 0 2rem;
  border-radius: 0px 0px 1.6rem 1.6rem;
  background-color: ${(props) => props.theme.colors.gray7};
`;

const MainProfile = styled.div`
  width: 14rem;
  height: 22.2rem;
  display: flex;
  flex-direction: column;
`;

const MainProfileText = styled.div`
  margin-top: 1.2rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserName = styled.div`
  text-align: center;
  height: 3.8rem;
  margin-bottom: 0.4rem;
  span {
    ${(props) => props.theme.fontStyles.headLine0}
  }
`;

const BtnText = styled.div`
  display: flex;
  justify-content: center;
  span {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fontStyles.body1};
    font-weight: 500;
  }
`;

const ContactUserWrapper = styled.div`
  margin-top: 3.2rem;
  display: flex;
`;

const DirectAccessWrapper = styled.div`
  margin-top: 3.12rem;
  height: 11.2rem;
  padding: 0 2rem;
`;

const DirectAccessText = styled.div`
  height: 2.1rem;
  span {
    color: ${(props) => props.theme.colors.gray2};
    ${(props) => props.theme.fontStyles.body2_medium};
  }
`;

const DirectAccessLink = styled.div`
  margin-top: 1.2rem;
  display: flex;
`;