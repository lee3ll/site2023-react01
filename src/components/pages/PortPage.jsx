import React from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import PortCont from "../port/PortCont";

const PortPage = () => {
  return (
    <Contents>
      <ContTitle title="Portfolio" />
      <PortCont attr="port__wrap gmarket5 section center" />
    </Contents>
  );
};

export default PortPage;
