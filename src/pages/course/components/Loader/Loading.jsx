import { Backdrop } from "@mui/material";
import React from "react";
import Loader from "./Loader";

const Loading = ({attr}) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={attr}
    >
      <Loader />
    </Backdrop>
  );
};

export default Loading;
