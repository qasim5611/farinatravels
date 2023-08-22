"use client";

import React from "react";

import { Box, Container, Typography, useMediaQuery } from "@mui/material";
// Import Swiper React components

import FeaturedSlider1 from "../images/FeaturedSlider1.png";
import FeaturedSlider2 from "../images/FeaturedSlider2.png";
import FeaturedSlider3 from "../images/FeaturedSlider3.png";

import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import StyledSwiper from "./SwiperSlider";

const swiperData = [
  FeaturedSlider1,
  FeaturedSlider2,
  FeaturedSlider3,
  FeaturedSlider1,
  FeaturedSlider2,
];

const FeaturedSlider = () => {
  const matches = useMediaQuery("(max-width:960px)");

  return (
    <>
      <Box bgcolor="#B43715" py={10} position="relative">
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              width: "100%",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                width: { md: "50%", xs: "100%" },
                p: 1.5,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Palatino Linotype",
                  fontSize: { xs: "22px", md: "40px" },
                  fontWeight: 400,
                  lineHeight: "50px",
                  textAlign: "left",
                  color: "white",
                }}
              >
                Featured{" "}
                <span
                  style={{
                    borderBottom: "5px solid #fff",
                    paddingBottom: "10px",
                  }}
                >
                  Destinations
                </span>{" "}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "29px",
                  textAlign: "left",
                  color: "white",
                  mt: 3,
                }}
              >
                Embark on a Journey of Discovery to Captivating Places, Where
                Adventure and Beauty Await
              </Typography>
            </Box>

            <StyledSwiper>
              {swiperData.map((item, index) => {
                return (
                  <SwiperSlide key={index} style={{ borderRadius: "10%" }}>
                    <Image
                      src={item}
                      alt=""
                      style={{
                        background: "#B43715",
                        width: "100%",
                        height: "100%",
                        borderRadius: "10%",
                      }}
                    />
                  </SwiperSlide>
                );
              })}
            </StyledSwiper>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FeaturedSlider;
