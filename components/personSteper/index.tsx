import * as React from "react";
import { Box, Typography, Grid, Button, List, Menu } from "@mui/material";
import styled from "@emotion/styled";

import PeopleIcon from "../actions/icons/people";
import theme from "../../styles/theme";

type TPersonObject = {
  a: number;
  ch: number;
};

type TPerson = {
  value: TPersonObject;
  setValue: (value: TPersonObject) => void;
};

const StyledButton = styled(Button)`
  border: 1px solid ${theme.palette.primary.main};
  border-radius: 8px;
  font-size: 20px;
  width: 36px !important;
  height: 36px !important;
`;

const StyledText = styled(Typography)`
  margin-top: 4px;
  margin-right: 16px;
`;
export default function PersonStepper({ value, setValue }: TPerson) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" flex={1} alignItems="center">
      <List component="nav" aria-label="Device settings">
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          flex={1}
          onClick={handleClickListItem}
        >
          <PeopleIcon />
          <Box ml="15px">
            <Typography className="title">Йўловчилар</Typography>
            <Typography className="desc">{value.a} та одам</Typography>
          </Box>
        </Box>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        <Box minWidth={"250px"} p="16px">
          <Grid container justifyContent="space-between">
            <Grid item>
              <StyledText>Одамлар</StyledText>
            </Grid>
            <Grid item display={"flex"}>
              <StyledButton
                onClick={() =>
                  setValue({
                    ...value,
                    a: value.a - 1 > 0 ? value.a - 1 : 1,
                  })
                }
              >
                -
              </StyledButton>
              <Typography mx={"8px"} mt={"4px"}>
                {value?.a}
              </Typography>
              <StyledButton
                onClick={() => setValue({ ...value, a: value.a + 1 })}
              >
                +
              </StyledButton>
            </Grid>
          </Grid>
          {/*<Grid container mt="12px" justifyContent="space-between">*/}
          {/*  <Grid item>*/}
          {/*    <StyledText>Childs</StyledText>*/}
          {/*  </Grid>*/}
          {/*  <Grid item display={"flex"}>*/}
          {/*    <StyledButton*/}
          {/*      onClick={() =>*/}
          {/*        setValue({*/}
          {/*          ...value,*/}
          {/*          ch: value.ch - 1 > 0 ? value.ch - 1 : 1,*/}
          {/*        })*/}
          {/*      }*/}
          {/*    >*/}
          {/*      -*/}
          {/*    </StyledButton>*/}
          {/*    <Typography mx={"8px"} mt={"4px"}>*/}
          {/*      {value?.ch}*/}
          {/*    </Typography>*/}
          {/*    <StyledButton*/}
          {/*      onClick={() => setValue({ ...value, ch: value.ch + 1 })}*/}
          {/*    >*/}
          {/*      +*/}
          {/*    </StyledButton>*/}
          {/*  </Grid>*/}
          {/*</Grid>*/}
        </Box>
      </Menu>
    </Box>
  );
}
