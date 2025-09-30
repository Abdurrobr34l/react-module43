import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router";
import Container from "../container/Container";

const Root = () => {
  return (
    <div>
      <Container>
        <Header></Header>
        <Outlet></Outlet>
      </Container>
    </div>
  );
};

export default Root;
