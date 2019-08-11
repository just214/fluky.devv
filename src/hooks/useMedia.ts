import useMedia from "use-media";

const UseMedia = () => {
  const isMobile = useMedia({ maxWidth: "500px" });

  return { isMobile };
};

export default UseMedia;
