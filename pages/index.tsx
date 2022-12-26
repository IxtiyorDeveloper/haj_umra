import { Container } from "@mui/material";

import Main from "../components/Main";
import Hotels from "../components/Hotels";
import AboutUs from "../components/AboutUs";
import HowItsWorks from "../components/HowItsWorks";
import Newsletter from "../components/Newsletter";
import SelectFlights from "../components/selectFlight";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Main />
      <SelectFlights/>
      <HowItsWorks />
      <Hotels />
      <AboutUs />
      <Newsletter />
    </Container>
  );
}
