import {
  Box,
  Container,
  Grid,
  List,
  ListItemText,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

import theme from "../styles/theme";
import Llogo from "../assets/Llogo.svg";
import i1 from "../assets/socials/1.svg";
import i2 from "../assets/socials/2.svg";
import i3 from "../assets/socials/3.svg";
import i4 from "../assets/socials/4.svg";
import message from "../assets/socials/message.svg";
import call from "../assets/socials/call.svg";
import { Mulish } from "@next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

const Item = styled(Box)(({ theme }) => ({
  color: "white",
  backgroundColor: "transparent",
  ".desc": {
    fontWeight: "200",
    fontSize: "18px",
    lineHeight: "28px",
  },
}));

const Title = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "60px",
}));

const ListItemTextStyled = styled(ListItemText)(({}) => ({
  fontWeight: "300",
  lineHeight: "38px",
  fontSize: "18px",
  marginTop: "8px",
  height: "38px",
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  //   fontWeight: mulish,
  [".item__icon"]: {
    marginRight: "16px",
    alignSelft: "center",
    marginBottom: "-2px",
  },
}));

function Footer() {
  const router = useRouter();

  return (
    <Stack
      pt={"100px"}
      minHeight={400}
      bgcolor={theme.palette.primary.main}
      color="white"
      direction={{ xs: "column", md: "row" }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item lg={4} md={12} sm={12}>
            <Item>
              <Title>
                <Image src={Llogo} alt={"Logo"} />
              </Title>
              <Typography className="desc">
                Since its inception in 2006 with the first office in the Emirate
                of Sharjah, Akbar Travels has grown tremendously with over 41+
                locations across the Middle East
              </Typography>
            </Item>
          </Grid>
          <Grid item lg={2} md={6} sm={12}>
            <Item>
              <Title>Биз ҳақимизда</Title>
              <List sx={{ padding: 0 }}>
                <ListItemTextStyled className={mulish.className}>
                  Янгиликлар
                </ListItemTextStyled>
                <ListItemTextStyled className={mulish.className}>
                  Тадбирлар
                </ListItemTextStyled>
                <ListItemTextStyled className={mulish.className}>
                  Хизматларимиз
                </ListItemTextStyled>
                <ListItemTextStyled className={mulish.className}>
                  Мобиле илова
                </ListItemTextStyled>
              </List>
            </Item>
          </Grid>
          <Grid item lg={2} md={6} sm={12}>
            <Item>
              <Title>Боғланиш</Title>
              <List sx={{ padding: 0 }}>
                <ListItemTextStyled>Ёрдам</ListItemTextStyled>
                <ListItemTextStyled>Биз билан боғланиш</ListItemTextStyled>
              </List>
            </Item>
          </Grid>
          <Grid item lg={4} md={12} sm={12}>
            <Item>
              <Title>
                <Grid container columnSpacing={2} p={0}>
                  <Grid item>
                    <Image src={i1} alt="instagram" />
                  </Grid>
                  <Grid item>
                    <Image src={i2} alt="instagram" />
                  </Grid>
                  <Grid item>
                    <Image src={i3} alt="instagram" />
                  </Grid>
                  <Grid item>
                    <Image src={i4} alt="instagram" />
                  </Grid>
                </Grid>
              </Title>
              <List sx={{ padding: 0, marginTop: "-4px" }}>
                <ListItemTextStyled>
                  <Image className="item__icon" src={message} alt="email" />
                  umrah@gmail.com
                </ListItemTextStyled>
                <ListItemTextStyled>
                  <Image className="item__icon" src={call} alt="call" />
                  +1 (999) 9999 - 9999
                </ListItemTextStyled>
              </List>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default Footer;
