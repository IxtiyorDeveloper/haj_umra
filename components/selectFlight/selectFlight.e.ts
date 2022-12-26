import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const SelectFlightWrapper = styled(Box)`
  margin-top: 204px;
  min-height: 310px;

  background: #fafafa;
  border: 1px solid #efefef;
  border-radius: 20px;
  overflow: hidden;
  //   padding:50px 50px 60px 50px;
  padding: 0 50px;

  .title {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }

  .desc {
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
  }
`;

export const SelectFlightTitle = styled.p`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #2a3d56;
`;

export const WrapperInput = styled(Box)`
  height: 96px;
  padding: 0 20px;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 10px;
`;
