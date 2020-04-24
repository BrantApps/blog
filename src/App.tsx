import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Container>
      <Box my={4}>
        <Blog />
        <Footer title="Tech, Teams & Tea" description="" />
      </Box>
    </Container>
  );
}
