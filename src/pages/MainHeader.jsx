"use client";
import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Paper,
  SwipeableDrawer,
  Button,
} from "@mui/material";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import { email, logo, phone } from "@/components/SmallComponents/Images";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#ffffff !important",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});

const navArray = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "FLIGHTS",
    link: "/flights",
  },
  {
    name: "HOTELS & HOLIDAYS",
    link: "/hotels",
  },
  {
    name: "HAJJ UMRAH",
    link: "/hajj-umrah",
  },
  {
    name: "Visa",
    link: "/visa",
  },
  {
    name: "INTERNATIONAL TOP UP",
    link: "/",
  },
];

function MainHeader() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const matches = useMediaQuery("(max-width:700px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display="flex" justifyContent="center" my={3}>
        <Image
          style={{
            width: "150px",
            height: "50px",
          }}
          src={logo}
          alt=""
        />
      </Box>
      <List>
        {navArray.map(({ name, link }, index) => (
          <ListItem
            button
            style={{
              justifyContent: "center",
            }}
            key={name}
          >
            <Link href={link}>
              <ListItemText
                style={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#000",
                }}
                primary={name}
              />
            </Link>
          </ListItem>
        ))}

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          ml={-2}
          mt={5}
        >
          <Image
            style={{
              width: matches ? "20px" : "40px",
              height: matches ? "20px" : "40px",
            }}
            src={phone}
            alt=""
          />
          <Box ml={1}>
            <Typography
              sx={{
                fontFamily: "Jost",
                fontWeight: "700",
                color: "#000000",
                fontSize: matches ? "12px" : "16px",
              }}
            >
              PHONE
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jost",
                fontWeight: "400",
                color: "#DD5471",
                fontSize: matches ? "12px" : "16px",
              }}
            >
              03248720361
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <Image
            style={{
              width: matches ? "20px" : "40px",
              height: matches ? "20px" : "40px",
            }}
            src={email}
            alt=""
          />
          <Box ml={1}>
            <Typography
              sx={{
                fontFamily: "Jost",
                fontWeight: "700",
                color: "#000000",
                fontSize: matches ? "12px" : "16px",
              }}
            >
              EMAIL
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jost",
                fontWeight: "400",
                color: "#DD5471",
                fontSize: matches ? "12px" : "16px",
              }}
            >
              major@gmail.com
            </Typography>
          </Box>
        </Box>
      </List>
    </div>
  );
  return (
    <Box bgcolor="#ffffff">
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pt={1.5}
        >
          <Image
            style={{
              width: matches ? "100px" : "220px",
              height: matches ? "40px" : "70px",
            }}
            src={logo}
            alt=""
          />
          <Hidden mdDown>
            <Box display="flex" alignItems="center">
              <Box display="flex" alignItems="center" mr={{ xs: 1, sm: 5 }}>
                <Image
                  style={{
                    width: matches ? "20px" : "40px",
                    height: matches ? "20px" : "40px",
                  }}
                  src={phone}
                  alt=""
                />
                <Box ml={1}>
                  <Typography
                    sx={{
                      fontFamily: "Jost",
                      fontWeight: "700",
                      color: "#000000",
                      fontSize: matches ? "12px" : "16px",
                    }}
                  >
                    PHONE
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Jost",
                      fontWeight: "400",
                      color: "#DD5471",
                      fontSize: matches ? "12px" : "16px",
                    }}
                  >
                    03248720361
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Image
                  style={{
                    width: matches ? "20px" : "40px",
                    height: matches ? "20px" : "40px",
                  }}
                  src={email}
                  alt=""
                />
                <Box ml={1}>
                  <Typography
                    sx={{
                      fontFamily: "Jost",
                      fontWeight: "700",
                      color: "#000000",
                      fontSize: matches ? "12px" : "16px",
                    }}
                  >
                    EMAIL
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Jost",
                      fontWeight: "400",
                      color: "#DD5471",
                      fontSize: matches ? "12px" : "16px",
                    }}
                  >
                    major@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Hidden>
          <Hidden mdUp>
            <Box>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    onClick={toggleDrawer(anchor, true)}
                    style={{ zIndex: 1 }}
                  >
                    <MenuIcon
                      style={{
                        fontSize: "30px",
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    ></MenuIcon>
                  </Button>
                  <Paper>
                    <SwipeableDrawer
                      classes={{ paper: classes.paper }}
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </Paper>
                </React.Fragment>
              ))}
            </Box>
          </Hidden>
        </Box>
      </Container>
    </Box>
  );
}

export default MainHeader;
