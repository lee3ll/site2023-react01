import React from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";

import IntroCont from "../intro/IntroCont";

const IntroPage = () => {
  return (
    <Contents>
      <ContTitle title="intro" />
      <IntroCont attr="intro__wrap section gamrket5" />
    </Contents>
  );
};

export default IntroPage;
