import { useLocation } from "react-router";

export const NotFound = () => {
  let { pathname } = useLocation();
  return <h1>{pathname} Page Not Found:( </h1>;
};
