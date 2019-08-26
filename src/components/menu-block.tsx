import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

interface MenuBlockWrapperProps {
  rotate: number;
  to?: string;
  gradient: string[];
  color?: string;
  index?: number;
  icon: React.FC;
}

const MenuBlockWrapper: React.FC<MenuBlockWrapperProps> = ({
  to,
  children,
  rotate,
  gradient,
  color,
  icon: Icon,
}) => {
  return (
    <motion.div
      key="modal"
      animate={{
        filter: ["grayscale(100%)", "grayscale(0%)"],
        rotate: [-(rotate * 0.25), 0],
      }}
      initial={{ rotate: -(rotate * 0.25), filter: "grayscale(100%)" }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Link
        to={to}
        css={`
          transform-style: preserve-3d;
          transform: rotateZ(${rotate}deg);
          max-width: 280px;
          min-width: 210px;
          margin: 20px;
          outline: none;
          border: 3px solid ${({ theme }) => theme.darkblue};
          transition: border 0.2s, opacity 0.5s;
          &:focus {
            border: 3px solid yellow;
          }
          :hover {
            opacity: 0.9;
          }
          backface-visibility: hidden;
          background: ${gradient[0]};
          background: -webkit-linear-gradient(
            to right,
            ${gradient[0]},
            ${gradient[1]}
          );
          background: linear-gradient(to right, ${gradient[0]}, ${gradient[1]});
          color: ${color};
          border-radius: 4px;
          padding: 10px;
          height: 35px;
          font-size: 30px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          font-family: "Barriecito", cursive;
        `}
      >
        {children}

        <Icon />
      </Link>
    </motion.div>
  );
};

export default MenuBlockWrapper;
