import * as React from "react";
import avatar from '../images/icon.png';
import styled from "styled-components";
import GlobalLayout from "../components/globalLayout"

// Social Icons
import { FaAt } from "@react-icons/all-files/fa/FaAt";
import { FaCodepen } from "@react-icons/all-files/fa/FaCodepen";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaFile } from "@react-icons/all-files/fa/FaFile";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaItchIo } from "@react-icons/all-files/fa/FaItchIo";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

// Styles
const MainContainer = styled.main`
  background-color: #0A0C1B;
  box-sizing: border-box;
  font-family: Verdana;
  margin: 0;
  padding: 0;
`;
const MainCard = styled.div`
  align-items: center;
  background-clip: content-box;
  background-color: #1C1938;
  display: flex;
  justify-content: space-around;
  padding: 5rem 20rem;

  @media screen and (max-width: 1380px) {
    flex-direction: column-reverse;
  }
`;
const IndividualSubCard = styled.div`
  padding: 2rem;
`;
const MainTitle = styled.h1`
  color: #A95FD4;
  padding-bottom: 1.6rem;
`;
const MainDescription = styled.div`
  color: #FFFFFF;
  padding-bottom: 4.6rem;
`;
const UnorderedList = styled.ul`
  align-content: center;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;

  @media screen and (max-width: 1380px) {
    align-items: center;
    flex-direction: column;
  }
`;
const ListItem = styled.li`
  color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1380px) {
    &:not(:last-child) {
      padding-bottom: 1rem;
    }
  }
`;
const LinkItem = styled.a`
  color: white;
  text-decoration: none;
`;
const AvatarImg = styled.img`
  max-height: 396px;
  max-width: 484px;
  width: 20vw; // imgs reduces alongside width
`;

const IndexPage = () => {
  return (
    <GlobalLayout>
      <MainContainer>
        <title>Carolina Melo - @caroolpmelo</title>
        <MainCard>
          <IndividualSubCard>
            <MainTitle>Carolina Melo</MainTitle>
            <MainDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </MainDescription>
            <div>
              <UnorderedList>
                <ListItem class="dropdown">
                  <div id="cvDropdown" class="dropdown-content">
                    {/* <a
                      href="https://drive.google.com/file/d/1FPCYCr_ppOEdyr9VxJ5dUmqwjvQLsFpv/view?usp=sharing"
                      target="_blank"
                    >
                      Português (pt-br)
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1vxdsUUfkUvDwoSVMV0ztJlaMUGdBpde7/view?usp=sharing"
                      target="_blank"
                      >English (en-us)</a
                    > */}
                  </div>
                  {/* <i alt="Resume" title="Resume" class="far fa-file dropbtn" onclick="openCvMenu()"></i> */}
                  <FaFile alt="Resume" title="Resume"></FaFile>
                </ListItem>
                <ListItem>
                  <LinkItem href="https://github.com/caroolpmelo" target="_blank">
                    <FaGithub alt="GitHub" title="GitHub"></FaGithub>
                  </LinkItem>
                </ListItem>
                <ListItem>
                  <LinkItem href="https://codepen.io/caroolpmelo" target="_blank">
                    <FaCodepen alt="CodePen" title="CodePen"></FaCodepen>
                  </LinkItem>
                </ListItem>
                <ListItem>
                  <LinkItem href="https://caroolpmelo.itch.io" target="_blank">
                    <FaItchIo alt="itch.io" title="itch.io"></FaItchIo>
                  </LinkItem>
                </ListItem>
                <ListItem>
                  <LinkItem href="https://linkedin.com/in/cmpmelo" target="_blank">
                    <FaLinkedin alt="LinkedIn" title="LinkedIn"></FaLinkedin>
                  </LinkItem>
                </ListItem>
                <ListItem>
                  <LinkItem href="https://fb.com/caroolpmelo" target="_blank">
                    <FaFacebook alt="Facebook" title="Facebook"></FaFacebook>
                  </LinkItem>
                </ListItem>
                <ListItem>
                  <LinkItem href="mailto:caroolpmelo@gmail.com">
                    <FaAt alt="Contact me : )" title="Contact me : )"></FaAt>
                  </LinkItem>
                </ListItem>
              </UnorderedList>
            </div>
          </IndividualSubCard>
          <IndividualSubCard>
            <AvatarImg src={avatar} alt="Myself :)" />
          </IndividualSubCard>
        </MainCard>
      </MainContainer>
    </GlobalLayout>
  )
}

export default IndexPage
