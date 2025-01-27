import React from "react";
import { IoLogoFacebook } from "react-icons/io"; 
import { IoLocationSharp } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";

export const menuData = [
  { title: "OFERTA", link: "/#oferta" },
  { title: "CENNIK", link: "/#cennik" },
  { title: "OPINIE", link: "/#opinie" },
  { title: "STREFA \nKLIENTA", link: "/#strefaKlienta" },
  { title: "KALKULATORY \nI WYSZUKIRWARKI", link: "/#kalkulatory" },
  { title: "KONTAKT ", link: "/#kontakt" },
];

export const labelData = [
  { title: "Facebook", icon: <IoLogoFacebook />, link : "https://www.facebook.com/ideoksiegowosc", target: "_blank" },
  { title: "ul. Lipcowa 5, Bielawa", icon: <IoLocationSharp />, link: "#kontakt", target: "_self" },
  { title: "+48 790 578 923", icon: <PiPhoneCallFill />, link : "tel: +48790578923", target: "_self" },
  { title: "biuro@ideo.info.pl", icon: <IoMdMail />, link: "mailto: biuro@ideo.info.pl", target: "_self" }, 
];
