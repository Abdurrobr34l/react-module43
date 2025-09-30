import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router";
import Container from "../container/Container";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";

const Root = () => {
  return (
    <div>
      <Container>
        <Header></Header>
        <div className="flex gap-10">
          <Sidebar></Sidebar>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </Container>
    </div>
  );
};

export default Root;
