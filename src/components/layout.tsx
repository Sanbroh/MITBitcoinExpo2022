import * as React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Docs from "@components/docs";

const StyledBody = tw.body`flex flex-col bg-white`;
const StyledContainer = tw.div`flex flex-col p-4 md:p-12`;
const StyledMain = styled.main`
  min-height: 80vh;
`;

const Layout: React.FC<{}> = ({ children }) => {

  const documentTitle = document.title;
  let documentSubTitle = "🏠 / " + documentTitle;

  if (documentTitle == "Home") {
    documentSubTitle = "🏠 / ";
  }

  return (
    <div style={{ marginLeft: "17.5vw" }}>
      <StyledContainer>
        <p style={{ fontSize: 28, fontWeight: "bold", marginTop: -20, cursor: "default" }}>{documentTitle}</p>
        <p style={{ fontSize: 16, fontWeight: "light", marginTop: -4, cursor: "default" }}>{documentSubTitle}</p>
        <StyledMain>{children}</StyledMain>
      </StyledContainer>
    </div>
  );
};

export default Layout;
