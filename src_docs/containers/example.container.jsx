import React from 'react';
import styled from 'styled-components';
import ExampleComponent from '../components/example.component';
import GithubLogo from '../images/logo-github.svg';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  overflow: hidden;
  min-width: 0%;
  min-height: 0%;
  width: 100%;
  height: 40px;
  background: white;
  box-sizing: border-box;
  margin-bottom: 10px;
`;
const HeaderText = styled.div`
  flex: 1 1 auto;
  min-width: 0%;
  min-height: 0%;
  overflow: hidden;
  height: 40px;
  font-size: 24px;
  line-height: 40px;
  padding-left: 10px;
`;
const HeaderLink = styled.div`
  flex: 0 0 auto;
  min-width: 0%;
  min-height: 0%;
  overflow: hidden;
  height: 40px;
  line-height: 45px;
  padding-right: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  min-width: 0%;
  min-height: 0%;
  overflow: hidden;
  height: calc(100% - 70px);
  box-sizing: border-box;
`;

export default () => (
  <PageContainer>
    <HeaderContainer>
      <HeaderText>
        React Splitpane
      </HeaderText>
      <HeaderLink>
        <a href="https://github.com/OpusCapita/react-splitpane">
          <GithubLogo />
        </a>
      </HeaderLink>
    </HeaderContainer>
    <ContentContainer>
      <ExampleComponent />
    </ContentContainer>
  </PageContainer>
);
