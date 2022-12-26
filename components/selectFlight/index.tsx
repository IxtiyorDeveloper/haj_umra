import { Box, Checkbox, Grid, Typography } from "@mui/material";
import theme from "../../styles/theme";
import CenterFlightIcon from "../actions/icons/centerFlight";
import FLightIcon from "../actions/icons/flight";
import FlightDayIcon from "../actions/icons/flightDay";
import PeopleIcon from "../actions/icons/people";
import StyledButton from "../Button";
import {
  SelectFlightTitle,
  SelectFlightWrapper,
  WrapperInput,
} from "./selectFlight.e";

function SelectFlights() {
  return (
    <SelectFlightWrapper>
      <Grid container m={0} p={0}>
        <Grid item sm={12}>
          <SelectFlightTitle>Парвозни танлаш</SelectFlightTitle>
        </Grid>
        <Grid item sm={12}>
          <Grid container justifyContent={"space-between"} spacing="10px">
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <WrapperInput
                display={"flex"}
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  flex={1}
                >
                  <FLightIcon />
                  <Box ml="15px">
                    <Typography className="title">Учиш шаҳри</Typography>
                    <Typography className="desc">DXB, Dubai - UAE</Typography>
                  </Box>
                </Box>
                <Box
                  width={"1px"}
                  bgcolor="#EFEFEF"
                  height={"100%"}
                  overflow={"none"}
                  alignItems={"center"}
                  mx="40px"
                >
                  <CenterFlightIcon
                    style={{ marginTop: "26.5px", marginLeft: "-21.5px" }}
                  />
                </Box>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  flex={1}
                >
                  <FLightIcon />
                  <Box ml="15px">
                    <Typography className="title">Қўниш шаҳри</Typography>
                    <Typography className="desc">DXB, Dubai - UAE</Typography>
                  </Box>
                </Box>
              </WrapperInput>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <WrapperInput display={"flex"} justifyContent={"center"}>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  flex={1}
                >
                  <FlightDayIcon />
                  <Box ml="15px">
                    <Typography className="title">Парвоз куни</Typography>
                    <Typography className="desc">Тўғридан - тўғри</Typography>
                  </Box>
                </Box>
              </WrapperInput>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <WrapperInput display={"flex"} justifyContent={"center"}>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  flex={1}
                >
                  <PeopleIcon />
                  <Box ml="15px">
                    <Typography className="title">Йўловчилар</Typography>
                    <Typography className="desc">3 Adults - 2 Childs</Typography>
                  </Box>
                </Box>
              </WrapperInput>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12} xs={12}>
          <Grid container mt={"21px"} justifyContent={"space-between"}>
            <Grid item>
              <Box display={"flex"} alignItems="center">
                <Checkbox sx={{ borderRadius: "50%" }} />
                <Typography>Борди келди</Typography>
              </Box>
            </Grid>
            <Grid item>
              <StyledButton
                backgroundColor={theme.palette.primary.main}
                color="white"
                height="39px"
                borderRadius={"10px"}
              >
                Излаш
              </StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SelectFlightWrapper>
  );
}
export default SelectFlights;
