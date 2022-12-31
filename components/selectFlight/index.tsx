import { Box, Checkbox, Grid, Typography } from "@mui/material";
import theme from "../../styles/theme";
import CenterFlightIcon from "../actions/icons/centerFlight";
import FLightIcon from "../actions/icons/flight";
import FlightDayIcon from "../actions/icons/flightDay";
import StyledButton from "../Button";
import {
  SelectFlightTitle,
  SelectFlightWrapper,
  WrapperInput,
  WrapperInput1,
} from "./selectFlight.e";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import PersonStepper from "../personSteper";
import { useRouter } from "next/router";

import * as yup from "yup";

const schema = yup.object().shape({
  fromCity: yup.string().required(),
  toCity: yup.number().required(),
  date: yup
    .date()
    .min(new Date())
    .default(function () {
      return new Date();
    }),
});

function SelectFlights() {
  const [city, setCity] = useState<string | null>();
  const [toCity, setToCity] = useState<string | null>();
  const [value, setValue] = useState({ a: 1, ch: 1 });
  const [startDate, setStartDate] = useState<Date | null>(null);

  const route = useRouter();

  // // check validity
  // schema
  //   .isValid({
  //     name: 'jimmy',
  //     age: 24,
  //   })
  //   .then(function (valid) {
  //     valid; // => true
  //   });
  const handlePressSubmit = () => {
    schema
      .isValid({
        fromCity: city,
        toCity: toCity,
        date: startDate,
      })
      .then(function (valid) {
        if (valid) {
          route.push("/step1"); // => true
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <SelectFlightWrapper>
      <Grid container m={0} p={0}>
        <Grid item sm={12}>
          <SelectFlightTitle>Парвозни танлаш</SelectFlightTitle>
        </Grid>
        <Grid item sm={12}>
          <Grid container justifyContent={"space-between"} spacing="10px">
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <WrapperInput>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  flex={1}
                  className="left"
                >
                  <FLightIcon />
                  <Box ml="15px">
                    <Typography className="title">Учиш шаҳри</Typography>
                    <Typography className="desc">
                      {city || "Shaharni tanlang"}
                    </Typography>
                  </Box>
                  <div className="dropdown">
                    <div className="city" onClick={() => setCity("Тошкент")}>
                      Тошкент
                    </div>
                    <div className="city" onClick={() => setCity("Aндижон")}>
                      Aндижон
                    </div>
                    <div className="city" onClick={() => setCity("Фаръгона")}>
                      Фаръгона
                    </div>
                    <div className="city" onClick={() => setCity("Ўш")}>
                      Ўш
                    </div>
                  </div>
                </Box>
                <div className="average">
                  <CenterFlightIcon
                    style={{
                      marginTop: "2.5px",
                      marginLeft: "-1.5px",
                      position: "absolute",
                    }}
                  />
                </div>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  flex={1}
                  className="left"
                >
                  <FLightIcon />
                  <Box ml="15px">
                    <Typography className="title">Қўниш шаҳри</Typography>
                    <Typography className="desc">
                      {toCity || "Shaharni tanlang"}
                    </Typography>
                  </Box>
                  <div className="dropdown">
                    <div className="dropdown">
                      <div className="city" onClick={() => setToCity("Макка")}>
                        Макка
                      </div>
                      <div className="city" onClick={() => setToCity("Мадина")}>
                        Мадина
                      </div>
                      <div className="city" onClick={() => setToCity("Жидда")}>
                        Жидда
                      </div>
                    </div>
                  </div>
                </Box>
              </WrapperInput>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <WrapperInput1
                display={"flex"}
                position="relative"
                justifyContent={"center"}
              >
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  flex={1}
                  position={"relative"}
                >
                  <FlightDayIcon />
                  <Box ml="15px">
                    <Typography className="title">Парвоз куни</Typography>
                    <DatePicker
                      customInput={
                        <Typography className="desc">
                          {startDate
                            ? moment(startDate).format("DD/MM/YYYY")
                            : "Тўғридан - тўғри"}
                        </Typography>
                      }
                      onChange={(date: Date) => setStartDate(date)}
                    />
                  </Box>
                </Box>
              </WrapperInput1>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <WrapperInput1 display={"flex"} justifyContent={"center"}>
                <PersonStepper value={value} setValue={setValue} />
              </WrapperInput1>
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
                onClick={handlePressSubmit}
              >
                Буюртма бериш
              </StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SelectFlightWrapper>
  );
}

export default SelectFlights;
