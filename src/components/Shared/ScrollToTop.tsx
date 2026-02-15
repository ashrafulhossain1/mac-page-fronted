import { useEffect } from "react";
import type { FC } from "react";
import { useLocation } from "react-router";

const ScrollToTop: FC = () => {
  const { pathname } = useLocation(); // destructure for clarity

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // "instant" is not standard, "auto" or "smooth" is recommended
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
