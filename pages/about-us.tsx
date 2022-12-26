import { Container } from "@mui/material";

import Main from "../components/Main";
import Hotels from "../components/Hotels";
import AboutUs from "../components/AboutUs";
import HowItsWorks from "../components/HowItsWorks";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Main />
      <HowItsWorks />
      <Hotels />
      <AboutUs />
      <Newsletter />
    </Container>
  );
}
