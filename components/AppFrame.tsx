import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Stack,
  useTheme,
  ThemeProvider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import { Mulish } from "@next/font/google";
import { useRouter } from "next/router";

import theme, { dark } from "../styles/theme";
import logo from "../assets/Logo.svg";
import Sidebar from "./sidebar/sidebar";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import LogoMain from "./LogoMain";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

type Props = {
  children?: React.ReactNode;
};

const ButtonMenu = styled.button`
  font-family: ${mulish.style.fontFamily}!important;
  text-transform: none;
  font-weight: 600 !important;
  font-size: 18px;
  line-height: 22px;
  z-index: 100;
  padding: 0 !important;
  border: none !important;
  background-color: transparent !important;
`;

const StyledButton = styled(Button)`
  background-color: ${theme.palette.primary.main}!important;
  padding: 16px;
  border-radius: 100px;
  padding: 16px 56px;
  color: white;
  font-family: ${mulish.style.fontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: none;
`;

export default function AppFrame({ children }: Props) {
  const router = useRouter();
  const { t } = useTranslation();
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={mulish.className}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Head>
        <title>Arava Travel</title>
        <meta
          name="description"
          content="Arava Travel bilan haj va umra safarlarini to'liq ado eting!"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            display={{ md: "none" }}
            mt="16px"
          >
            <div></div>
            {/*<Image*/}
            {/*  src={logo}*/}
            {/*  alt="Main Logo"*/}
            {/*  width={100}*/}
            {/*  onClick={() => router.push("/")}*/}
            {/*  style={{ cursor: "pointer" }}*/}
            {/*/>*/}
            <div onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </div>
          </Stack>
        </Container>
        <Container maxWidth="xl">
          <Stack
            maxHeight={100}
            height={100}
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            display={{ xs: "none", md: "flex" }}
          >
            {/*<Image*/}
            {/*  src={logo}*/}
            {/*  alt="Main Logo"*/}
            {/*  onClick={() => router.push("/")}*/}
            {/*/>*/}
            <LogoMain onClick={() => router.push("/")} />
            <Stack direction="row" color={dark} spacing={"10px"}>
              <ButtonMenu color="inherit">{t("home")}</ButtonMenu>
              <ButtonMenu color="inherit">{t("about_us")}</ButtonMenu>
              <ButtonMenu color="inherit">{t("hotels")}</ButtonMenu>
              <ButtonMenu color="inherit">{t("howwework")}</ButtonMenu>
              <ButtonMenu color="inherit">{t("contact")}</ButtonMenu>
            </Stack>
            <StyledButton>{t("select_day")}</StyledButton>
          </Stack>
        </Container>
        <Box minHeight={600}>{children}</Box>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
