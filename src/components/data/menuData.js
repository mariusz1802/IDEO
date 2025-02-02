import React from "react";
import { IoLogoFacebook } from "react-icons/io"; 
import { IoLocationSharp } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";

export const menuData = [
  { title: "Oferta", link: "/#oferta" },
  { title: "Cennik", link: "/#cennik" },
  { title: "Opinie", link: "/#opinie" },
  { title: "Strefa \nKlienta", link: "/#strefaKlienta" },
  { title: "Kalkulatory \ni Wyszukiwarki", link: "/#kalkulatory" },
  { title: "Kontakt ", link: "/#kontakt" },
];

export const labelData = [
  { title: "Facebook", icon: <IoLogoFacebook />, link : "https://www.facebook.com/ideoksiegowosc", target: "_blank" },
  { title: "ul. Lipcowa 5, Bielawa", icon: <IoLocationSharp />, link: "#kontakt", target: "_self" },
  { title: "+48 790 578 923", icon: <PiPhoneCallFill />, link : "tel: +48790578923", target: "_self" },
  { title: "biuro@ideo.info.pl", icon: <IoMdMail />, link: "mailto: biuro@ideo.info.pl", target: "_self" }, 
];
