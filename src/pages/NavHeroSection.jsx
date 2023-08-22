"use client";
import React, { ReactFragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Hidden,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { StyledText } from "@/components/SmallComponents/AppComponents";

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

export default function NavHeroSection() {
  const matches = useMediaQuery("(max-width:960px)");

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            mt: 1,
            backgroundImage: 'url("/herobg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopLeftRadius: { xs: "50px", md: "70px" },
            borderTopRightRadius: { xs: "50px", md: "70px" },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: matches ? "end" : "center",
          }}
        >
          <Box
            display="flex"
            justifyContent={matches ? "flex-end" : "center"}
            mt={3}
          >
            <Hidden mdDown>
              {navArray.map(({ name, link }, i) => (
                <React.Fragment key={name}>
                  <Link href={link}>
                    <StyledText mr={i === navArray.length - 1 ? 0 : 6}>
                      {name}
                    </StyledText>
                  </Link>
                </React.Fragment>
              ))}
            </Hidden>
          </Box>

          <Box mt={8} mb={25}>
            <Typography
              sx={{
                fontFamily: "lora",
                fontWeight: "400",
                fontSize: { xs: "30px", md: "65px" },
                color: "#B43715",
                textAlign: "center",
              }}
            >
              WELCOME TO
            </Typography>
            <Typography
              sx={{
                fontFamily: "lora",
                fontWeight: "500",
                fontSize: { xs: "50px", md: "100px" },
                color: "#B43715",
                textAlign: "center",
                lineHeight: { xs: "50px", md: "90px" },
              }}
            >
              Farina Travel & Tours
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
