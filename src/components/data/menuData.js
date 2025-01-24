import React from "react";
import { IoLogoFacebook } from "react-icons/io"; 
import { IoLocationSharp } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";

export const menuData = [
  { title: "OFERTA", link: "/#howItWorks" },
  { title: "CENNIK", link: "/#howItWorks" },
  { title: "OPINIE", link: "/#howItWorks" },
  { title: "STREFA \nKLIENTA", link: "/#howItWorks" },
  { title: "KALKULATORY \nI WYSZUKIRWARKI", link: "/#howItWorks" },
  { title: "KONTAKT ", link: "/#howItWorks" },
];

export const labelData = [
  { title: "Facebook", icon: <IoLogoFacebook /> },
  { title: "ul. Lipcowa 5, Bielawa", icon: <IoLocationSharp /> },
  { title: "+48 790 578 923", icon: <PiPhoneCallFill /> },
  { title: "biuro@ideo.info.pl", icon: <IoMdMail /> },
];
