import * as React from "react";
import { BackTop } from "antd";
import { FaArrowAltCircleUp } from "react-icons/fa";

export const BackToTop = () => {
  return (
    <BackTop>
      <FaArrowAltCircleUp size={40} color="#666" />
    </BackTop>
  );
};

export default BackToTop;
