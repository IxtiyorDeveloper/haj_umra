import styled from "@emotion/styled";
import {Box, Typography} from "@mui/material";
import Image from "next/image";

import background1 from "../assets/background_aboutus.svg";
import theme from "../styles/theme";
import StyledButton from "./Button";

const StyledBox = styled(Box)`
  background-color: #f5f9fc;
  height: auto;
  margin-top: 100px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  .background__image {
    position: absolute;
    right: 0;
    z-index: 0;
  }


  .box {
    width: 50%;
    padding: 100px 80px;

    .background__img {
      z-index: 0;
    }

    .about__us {
      font-weight: 600;
      font-size: 55px;
      line-height: 36px;
      /* or 66% */

      text-align: left;

      color: #2a3d56;
    }

    .desc {
      font-weight: 300;
      font-size: 20px;
      line-height: 28px;
      color: #2a3d56;
      margin-top: 25px;
    }

    .btn__read__more {
      margin-top: 35px;
    }

    .im {
      z-index: 0;
    }
  }

  @media (max-width: 992px) {
    .background__image {
      display: none;
    }

    .box {
      width: 100%;
      padding: 5%;
    }
  }
`;

export default function AboutUs() {
    return (
        <StyledBox>
            <Image src={background1} alt="About" className="background__image" layout="fill"/>
            <Box className="box" zIndex={100}>
                <div className="yt">
                    <Typography className="about__us">About Us</Typography>
                    <Typography className="desc">
                        Umrah is part of Akbar Travels that was established in 1978 to provide
                        travel-related solutions in India & Middle East.
                        <br/>
                        <br/>
                        Akbar Travels headquartered in Mumbai the financial capital of India,
                        is the parent company for the Akbar Group – Middle East venture.
                        <br/>
                        <br/>
                        With a turnover of more than 1.2 Billion dollars, Akbar Travels is one
                        of the largest Travel Management Company in Asia.
                    </Typography>
                    <StyledButton
                        className="btn__read__more"
                        backgroundColor={theme.palette.primary.main}
                        color={"#FFF"}
                    >
                        Read more
                    </StyledButton>
                </div>
            </Box>
            <div style={{backgroundImage: `url('${background1}')`}} className="im"/>
        </StyledBox>
    );
}
