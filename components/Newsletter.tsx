import styled from "@emotion/styled";
import {Box, Typography} from "@mui/material";

import theme, {textColor} from "../styles/theme";
import Button from "./Button";

const StyledBox = styled(Box)`
  margin: 100px 0;

  .title {
    font-weight: 600;
    font-size: 55px;
    line-height: 36px;
    text-align: center;
    color: ${textColor};
  }

  .desc {
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: ${textColor};
    mix-blend-mode: normal;
    margin-top: 25px;
  }

  display: grid;
  justify-content: center;
  align-items: center;

  .email__input__box {
    background-color: ${theme.palette.primary.main};
    width: 850px;
    height: 90px;
    margin-top: 70px;

    background: #f5f5f5;
    border-radius: 20px;
    display: flex;
    flex-wrap: nowrap;
    @media (max-width: 992px) {
      width: 90%;
      height: 70px;
      min-width: unset;
    }

    .input__field {
      display: flex;
      flex: 1;
      height: 100% !important;
      flex-grow: 1 !important;
      border: 0 !important;
      border-radius: 10px !important;
      background-color: transparent;
      padding-left: 34px;
      font-weight: 600;
      font-size: 20px;
      line-height: 22px;
      color: ${textColor};
    }

    .input__field:focus {
      border: 0 !important;
      outline: none;
    }

    .btn__get__start {
      height: 100%;
      color: white;
      font-weight: 600;
      font-size: 20px;
      line-height: 22px;
      @media (max-width: 992px) {
        font-size: 15px;
        line-height: 16px;
      }
    }
  }
`;

function Newsletter() {
    return (
        <StyledBox>
            <Box>
                <Typography className="title">
                    Subscribe <span style={{fontWeight: "900"}}>Newsletter</span>
                </Typography>
                <Typography className="desc">
                    Our goal is top at the heart creative services industry as a digital
                    creator. In has a after comment
                </Typography>
            </Box>
            <Box className="email__input__box">
                <input className="input__field" placeholder="Enter your email"/>
                <Button
                    backgroundColor={theme.palette.primary.main}
                    className="btn__get__start"
                    borderRadius="20px"
                >
                    Get start
                </Button>
            </Box>
        </StyledBox>
    );
}

export default Newsletter;
