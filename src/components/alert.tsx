import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

type StyledAlertProps = {
  type: "success" | "error";
  style: object;
};
const StyledAlert = styled(motion.div)<StyledAlertProps>`
  height: 50px;
  width: 300px;
  background: rgba(0, 0, 0, 0.9);
  color: ${props =>
    props.type === "success" ? props.theme.green : props.theme.red};
  display: flex;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0px;
  left: 40%;
  right: 40%;
  transform: translate(-40%, -40%);
  border-radius: 5px;
`;

type AlertProps = {
  type: "success" | "error";
  style: object;
  isOpen: boolean;
};

const Alert: React.FC<AlertProps> = ({ type, children, style, isOpen }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [isOpen]);
  return (
    <AnimatePresence>
      {show && (
        <StyledAlert
          style={style}
          type={type}
          initial={{ opacity: 0.5, y: 0 }}
          animate={{ opacity: 1, y: 3 }}
          exit={{ opacity: 0.5, y: 0 }}
        >
          {children}
        </StyledAlert>
      )}
    </AnimatePresence>
  );
};

export default Alert;
