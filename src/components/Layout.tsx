import React from "react";
import { Container } from "react-bootstrap";
import { LayoutProps } from "../utils/model";
import NavigBar from "./NavigBar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavigBar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
