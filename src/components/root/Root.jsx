import React from "react";
import Header from "../header/Header";
import { Outlet, useNavigation } from "react-router";
import Container from "../container/Container";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div>
      <Container>
        <Header></Header>
        <div className="flex gap-10">
          <Sidebar></Sidebar>
          {isNavigating && <span className="w-full text-5xl font-semibold text-cyan-400 text-center">Loading...</span>}
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </Container>
    </div>
  );
};

export default Root;
