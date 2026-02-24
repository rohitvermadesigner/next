"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import { Bebas_Neue } from "next/font/google";
import { FaEnvelopeOpen, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const slides = [
  {
    image: "/images/slider/slider1.webp",
    title: "Of Simplifying your Business with a Touch of Excellence",
    description: "Audit . Accounting . Tax . Corporate Services",
  },
  // { image: "/images/slider/slider2.webp", title: 'Slide 2', description: 'Description for Slide 2' },
  // { image: "/images/slider/slider3.webp", title: 'Slide 3', description: 'Description for Slide 3' },
  // { image: "/images/slider/slider4.webp", title: 'Slide 4', description: 'Description for Slide 4' },
];

export default function Slider() {
  return (
    <>
    <div className="h-screen">
      <Swiper
        navigation={true}
        autoplay={true}
        loop={true}
        pagination={{ type: "bullets", clickable: true }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="slide-image"
                priority={index === 0}
              />
              <div className="slide-content">
                <Image
                  src="/images/10-yrs.webp"
                  alt="10 years"
                  width={100}
                  height={100}
                />
                <h2 className={bebasNeue.className}>{slide.title}</h2>
                <p>{slide.description}</p>

                <div className="clearfix"></div>
                <a href="contact/" className="btn btn-outline-primary">
                  Contact Us
                </a>
                <div className="social-icon">
                  <ul>
                    <li>
                      <a href="tel:+97145570410" aria-label="phone">
                        {/* <i className="fa fa-phone" aria-hidden="true"></i> */}
                        <FaPhoneAlt className="text-white" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:info@excellenceauditing.com"
                        aria-label="email"
                      >
                        {/* <i className="fa fa-envelope-open" aria-hidden="true"></i> */}
                        <FaEnvelopeOpen className="text-white" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/97145570410"
                        target="_blank"
                        aria-label="whatsapp"
                      >
                        {/* <i className="fab fa-whatsapp" aria-hidden="true"></i> */}
                        <FaWhatsapp className="text-white" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}
