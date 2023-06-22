import React from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import PortCont from "../port/PortCont";

const PortPage = () => {
  return (
    <Contents>
      <ContTitle title="Portfolio" />
      <PortCont title="PortCont" />
    </Contents>
  );
};

export default PortPage;
