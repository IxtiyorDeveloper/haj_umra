import styled from "@emotion/styled";
import {Box} from "@mui/material";

export const SelectFlightWrapper = styled(Box)`
  margin-top: 204px;
  min-height: 310px;

  background: #fafafa;
  border: 1px solid #efefef;
  border-radius: 20px;
  //overflow: hidden;
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

  @media (max-width: 500px) {
    padding: 0 5px;
  }
`;

export const SelectFlightTitle = styled.p`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #2a3d56;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const WrapperInput = styled(Box)`
  display: flex;
  height: 96px;
  padding: 0 20px;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 10px;

  .left {
    position: relative;

    .dropdown {
      position: absolute;
      top: 100%;
      left: -20px;
      width: calc(100% + 57px);
      z-index: 10;
      background: gray;
      display: none;

      .city {
        padding: 10px;

        &:hover {
          background: #FFE7BB;
        }
      }
    }

    &:hover .dropdown {
      display: block;
    }
  }

  .average {
    display: flex;
    background-color: #efefef;
    overflow: auto;
    align-items: center;
    justify-content: center;
    margin-inline: 40px;
    height: 100%;
    width: 1px;

  }

  @media (max-width: 992px) {
    flex-direction: column;
    height: auto;
    padding: 0;
    border: none !important;
    background: none !important;
    gap: 10px;
    .average {
      display: none;
    }

    .left {
      background: #ffffff;
      border: 1px solid #efefef;
      border-radius: 10px;
      padding: 20px 20px;
    }
  }

`;
export const WrapperInput1 = styled(Box)`
  display: flex;
  height: 96px;
  padding: 0 20px;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 10px;
  //@media (max-width: 992px) {
  //  flex-direction: column;
  //  height: auto;
  //  padding: 0;
  //}
`;
