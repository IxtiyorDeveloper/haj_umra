import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";

import clock from "../assets/image.svg";
import arrow from "../assets/arrow.svg";
import { textColor } from "../styles/theme";
import { useMediaQuery, useTheme } from "@mui/material";

const Div = styled.div`
  .center {
    text-align: center;
    margin-bottom: -10%;
  }
  .back1 {
    z-index: -2;
    background: linear-gradient(
      360deg,
      #def8c5 0%,
      rgba(200, 255, 145, 0) 100%
    );
    border-radius: 50%;
    z-index: -1;
    width: 80vw;
    height: 80vw;
    margin: 0 auto;
    margin-top: -15vw;
    padding-top: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .image1 {
      margin: 10%;
      width: 80%;
      height: 80%;
      margin-bottom: 5%;
    }
    .scroll {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 23px;
      text-align: center;
      color: ${textColor};
    }
    .get__umrah {
      font-style: normal;
      font-weight: 400;
      font-size: 35px;
      line-height: 36px;
      text-align: center;
      display: block;
      color: ${textColor};
    }
    .arrow {
      margin-top: 10%;
    }
    .mt5 {
      margin-top: 500vh;
      display:none
    }
  }

  @media only screen and (max-width:  899px) {
    & {
      margin-top:15vh
    }
  }
`;

export default function Main() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Div>
      <Head>
        <title>Arava Travel</title>
        <meta
          name="description"
          content="Arava Travel bilan haj va umra safarlarini to'liq ado eting!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="back1">
        <Image src={clock} className="image1" alt={""} />
        <div className="center">
          <span className="scroll">SCROLL</span>
          <span className="get__umrah">
            Get <b>Umrah</b> visa
            <br />
            online <b>with us</b>
          </span>
        </div>
        <Image src={arrow} className="arrow" alt="scroll" />
      </div>
    </Div>
  );
}
