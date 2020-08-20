import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import { Box } from "@material-ui/core";

export default function HomePage() {
  const side = <Box width="100%" height="100%" bgcolor="#272727" />;
  const main = <Box width="100%" height="100%" bgcolor="#303030" />;

  return <DefaultLayout side={side} main={main} />;
}
