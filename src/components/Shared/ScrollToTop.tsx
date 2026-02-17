import { useEffect } from "react";
import type { FC } from "react";
import { useLocation } from "react-router";

const ScrollToTop: FC = () => {
  const { pathname } = useLocation(); // destructure for clarity

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
