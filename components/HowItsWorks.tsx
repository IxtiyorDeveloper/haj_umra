import Image from "next/image";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { textColor } from "../styles/theme";
import s1 from "../assets/s1.svg";
import s2 from "../assets/s2.svg";
import s3 from "../assets/s3.svg";
import s4 from "../assets/s4.svg";
import s5 from "../assets/s5.svg";
import s6 from "../assets/s6.svg";
import { useTranslation } from "react-i18next";

const Div = styled.div`
  margin-top: 60px;
  .how__its_works {
    font-weight: 600;
    font-size: 55px;
    line-height: 36px;
    text-align: center;
    color: ${textColor};
    display: block;
  }
  .description {
    text-align: center;
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: ${textColor};
    mix-blend-mode: normal;
    max-width: 100vw;
    margin: 25px 0;
  }
  .nTh div:nth-child(n + 1) {
    margin-top: 16;
  }
`;

const Item = styled.div`
  background-color: #fff;
  border: 1px solid #efefef;
  border-radius: 20px;
  padding: 38px;
  display: column;
  width: 350px;

  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 56px;
    /* identical to box height, or 233% */
    color: #2a3d56;
    margin-top: 48px;
  }

  .desc {
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    color: #7d7987;
  }
  &:hover {
    cursor: pointer;
  }
`;

type CardProp = {
  title: string;
  img: string;
  desc: string;
};

function Card({ title, img, desc }: CardProp) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "37px",
      }}
    >
      <Item className="nTh">
        <Image src={img} alt={desc} />
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
      </Item>
    </div>
  );
}

export default function HowItsWorks() {
  const {t} = useTranslation()
  return (
    <Div>
      <span className="how__its_works">
        {t("about_us")}
        {/* How its <strong style={{ fontWeight: 900 }}>works</strong> */}
      </span>
      <div className="description">
        {/* The Ministry of Hajj and Umrah upgrades the provided services to
        pilgrims by <br /> using new technologies and facilitates Hajj and Umrah
        in coordination with all agencies */}
        {t("our_service_description")}
      </div>
      <Box
        sx={{
          justifyContent: "space-around",
          padding: "0 5vw",
          margin: "50px 0",
        }}
      >
        <Grid container spacing={2} top={16}>
          <Grid lg={4} md={6} sm={12}>
            <Card
              img={s1}
              title={t("flight_and_visa")}
              desc={t("flight_and_visa_description")}
            />
          </Grid>
          <Grid lg={4} md={6} sm={12}>
            <Card
              img={s2}
              title={t("ellikboshi")}
              desc={t("ellikboshi_d")}
            />
          </Grid>
          <Grid lg={4} md={6} sm={12}>
            <Card
              img={s3}
              title={t("mehmonllar")}
              desc={t("mehmonllar_d")}
            />
          </Grid>
          <Grid lg={4} md={6} sm={12}>
            <Card
              img={s4}
        
              title={t("hadya")}
              desc={t("hadya_d")}
            />
          </Grid>
          <Grid lg={4} md={6} sm={12}>
            <Card
              img={s5}
          
              title={t("mazzali")}
              desc={t("shifokor_d")}
            />
          </Grid>
          <Grid lg={4} md={6} sm={12}>
            <Card
              img={s6}
              title={t("shifokor")}
              desc={t("shifokor_d")}
            />
          </Grid>
        </Grid>
      </Box>
    </Div>
  );
}
