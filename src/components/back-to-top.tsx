import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { FaArrowAltCircleUp } from "react-icons/fa";

export const BackToTop = () => {
  const [show, setShow] = useState(false);
  const handleScroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -1500) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          css={`
            position: fixed;
            bottom: 20px;
            right: 20px;
            cursor: pointer;
          `}
          onClick={handleScroll}
        >
          <FaArrowAltCircleUp size={40} color="#666" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
