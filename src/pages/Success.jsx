import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";

export const Success = () => {
  const { state } = useLocation();
  console.log(state);

  return <div>Success</div>;
};
