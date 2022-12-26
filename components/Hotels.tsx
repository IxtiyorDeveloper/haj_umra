import Image from "next/image";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import theme, { textColor } from "../styles/theme";
import s1 from "../assets/Logo.svg";
import s2 from "../assets/s2.svg";
import marked from "../assets/marked.svg";
import usdollar from "../assets/usdollar.svg";
import small_arrow from "../assets/small_arrow.svg";

const Div = styled.div`
  margin-top: 100px;
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
  display: column;
  width: 248px;
  height: 240px;
  border: 2px solid #efefef;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.03),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 20px;
  margin-top: 16px;
  padding: 26px;

  .title {
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: ${textColor};
    margin: 7px 0;
    height: 48px;
  }

  .desc {
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    color: #7d7987;
  }

  .image {
    width: 198px;
    height: 90px;
  }

  .hidden__scroll {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-x: scroll;
  }

  .hidden__scroll::-webkit-scrollbar {
    display: none;
  }

  .marked {
    position: absolute;
  }
`;

const StyledCheckNowButton = styled.button`
  width: 117px;
  height: 39px;
  border: 1px solid
    ${(props: any) =>
      props?.color ? props?.color : theme.palette.primary.main};
  border-radius: 150px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  background-color: ${(props: any) =>
    props?.color ? props?.color : "transparent"};
  cursor: pointer;
  margin: ${(props: any) => (props?.margin ? props?.margin : "")};

  &:hover {
    color: ${(props: any) =>
      props.textHoverColor ? props.textHoverColor : "#fff"};
    background-color: ${(props: any) =>
      props?.hoverColor ? props?.hoverColor : theme.palette.primary.main};
    transition: 0.3s;
    border: 1px solid
      ${(props: any) =>
        props?.hoverColor ? props?.hoverColor : theme.palette.primary.main};
  }
`;

type ChProps = {
  children?: any;
  hoverColor?: string;
  textHoverColor?: string;
  color?: string;
  margin?: string;
};

const CheckNowButton = (props: ChProps) => {
  return (
    <StyledCheckNowButton {...props}>{props.children}</StyledCheckNowButton>
  );
};

const ArrowContainer = styled.div`
  width: 80px;
  height: 71px;
  margin: 8px 0;
  background: linear-gradient(360deg, #def8c5 0%, rgba(200, 255, 145, 0) 100%),
    #f5f9fc;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledBox = styled(Box)`
  background: #007436;
  border-radius: 20px;

  .title {
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #ffffff;
    display: block;
    margin: 15px 25px 0 25px;
  }

  .big__card__description {
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    display: block;
    margin: 0 25px;
  }

  .img {
    width: 198px;
    height: 218px;
    left: 25px;
    top: 25px;

    background: #000000;
    border: 1px solid #c9e8e0;
    border-radius: 10px;
    margin: 25px 25px 0 25px;
  }

  .booking__button {
    width: 129px;
    height: 36px;

    background: #c9e8e0;
    border-radius: 5px;
    border: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: ${textColor};
    margin: 8px 25px;
    cursor: pointer;
  }
`;

type CardProps = {
  title?: string;
  img?: any;
  desc?: string;
  isMarked?: boolean;
};

function Card({ title, img, desc, isMarked }: CardProps) {
  return (
    <div style={{ display: "flex", position: "relative" }}>
      <Item className="nTh">
        <Image className="image" src={img} alt={desc || ""} />
        <div className="title">{title}</div>
        <CheckNowButton>Check now</CheckNowButton>
      </Item>

      {isMarked && (
        <Box sx={{ position: "absolute", top: "16px", right: "14px" }}>
          <Image src={marked} alt="marked" />
        </Box>
      )}
    </div>
  );
}

type BigCardProps = {
  img: string;
  price: string;
  title?: string;
  desc?: string;
};

function BigCard({ img, price, title }: BigCardProps) {
  return (
    <StyledBox className="big__card" sx={{ height: "100%", width: "248px" }}>
      <Image src={img} className="img" alt="hotel" />
      <span className="title">Jabal Omar Hyatt Regency Makkah</span>
      <button className="booking__button">
        <Image
          style={{ marginBottom: -1 }}
          src={usdollar}
          alt="Usa dollar symbol"
        />{" "}
        {price}
      </button>
      <span className="big__card__description">
        Located in front of Al Masjid Al-Haram, Dar Al Tawhid Intercontinental
        Makkah
      </span>
      <CheckNowButton
        hoverColor="#fff"
        textHoverColor="#000"
        margin="8px 25px"
        color="white"
      >
        Check Now
      </CheckNowButton>
    </StyledBox>
  );
}

export default function Hotels() {
  return (
    <Div>
      <span className="how__its_works">Hotels</span>
      <div className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. <br /> Lorem Ipsum has been the industry&apos;s standard dummy
        text ever since
      </div>
      <Container maxWidth="xl" sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            flexWrap: "wrap",
            marginRight: "30px",
          }}
        >
          <div style={{ display: "flex", alignSelf: "flex-end" }}>
            <ArrowContainer>
              <Image src={small_arrow} alt="ios arrow" />
            </ArrowContainer>
          </div>
          <div style={{ display: "flex", alignSelf: "flex-start" }}>
            <ArrowContainer>
              <Image
                style={{ transform: "rotate(180deg)" }}
                src={small_arrow}
                alt="ios arrow"
              />
            </ArrowContainer>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            overflowX: "scroll",
          }}
          className={"hidden__scroll"}
          gap={4}
        >
          <Grid
            height={"100%"}
            container
            top={16}
            sx={{ display: "flex", flexGrow: 1 }}
          >
            <Grid lg={12} md={12} sm={12}>
              <BigCard
                img={s1}
                title={"Lorem iosum time"}
                price={"3,754,969"}
                desc="An e-service provided by the Ministry of Hajj and Umrah, which enables the pilgrimage services providers"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} top={16}>
            <Grid lg={12} md={12} sm={12}>
              <Card
                img={s1}
                title={"Lorem iosum time"}
                desc="An e-service provided by the Ministry of Hajj and Umrah, which enables the pilgrimage services providers"
              />
            </Grid>
            <Grid lg={12} md={12} sm={12}>
              <Card
                img={s2}
                isMarked={true}
                title={"Lorem iosum time"}
                desc="An e-service provided by the Ministry of Hajj and Umrah, which enables the pilgrimage services providers"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} top={16}>
            <Grid lg={12} md={12} sm={12}>
              <Card
                img={s1}
                title={"Lorem iosum time"}
                desc="An e-service provided by the Ministry of Hajj and Umrah, which enables the pilgrimage services providers"
              />
            </Grid>
            <Grid lg={12} md={12} sm={12}>
              <Card
                img={s2}
                title={"Lorem iosum time"}
                desc="An e-service provided by the Ministry of Hajj and Umrah, which enables the pilgrimage services providers"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} top={16}>
            <Grid lg={12} md={12} sm={12}>
              <Card
                img={s1}
                title={"Lorem iosum time"}
                desc="An e-service provided by the Ministry of Hajj and Umrah, which enables the pilgrimage services providers"
              />
            </Grid>
            <Grid lg={12} md={12} sm={12}>
              <Card
                img={s2}
                title={"Lorem iosum time"}
                desc="An e-service provided by the Ministry of Hajj and Umrah, which enables the pilgrimage services providers"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} top={16}>
            <Grid lg={12} md={12} sm={12}>
              <Card
                img={s1}
                title={"Lorem iosum time"}
                desc="An e-service provided by the Ministry of Hajj and Umrah, which enables the pilgrimage services providers"
              />
            </Grid>
            <Grid lg={12} md={12} sm={12}>
              <Card
                img={s2}
                title={"Lorem iosum time"}
                desc="An e-service provided by the Ministry of Hajj and Umrah, which enables the pilgrimage services providers"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} top={16}>
            <Grid lg={12} md={12} sm={12}>
              <Card
                img={s1}
                title={"Lorem iosum time"}
                desc="An e-service provided by the Ministry of Hajj and Umrah, which enables the pilgrimage services providers"
              />
            </Grid>
            <Grid lg={12} md={12} sm={12}>
              <Card
                img={s2}
                title={"Lorem iosum time"}
                desc="An e-service provided by the Ministry of Hajj and Umrah, which enables the pilgrimage services providers"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} top={16}>
            <Grid lg={12} md={12} sm={12}>
              <Card
                img={s1}
                title={"Lorem iosum time"}
                desc="An e-service provided by the Ministry of Hajj and Umrah, which enables the pilgrimage services providers"
              />
            </Grid>
            <Grid lg={12} md={12} sm={12}>
              <Card
                img={s2}
                title={"Lorem iosum time"}
                desc="An e-service provided by the Ministry of Hajj and Umrah, which enables the pilgrimage services providers"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} top={16}>
            <Grid lg={12} md={12} sm={12}>
              <Card
                img={s1}
                title={"Lorem iosum time"}
                desc="An e-service provided by the Ministry of Hajj and Umrah, which enables the pilgrimage services providers"
              />
            </Grid>
            <Grid lg={12} md={12} sm={12}>
              <Card
                img={s2}
                title={"Lorem iosum time"}
                desc="An e-service provided by the Ministry of Hajj and Umrah, which enables the pilgrimage services providers"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Div>
  );
}
