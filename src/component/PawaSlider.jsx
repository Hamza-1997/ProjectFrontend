import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function PawaSlider() {
  return (
    <AwesomeSlider
      media={[
        {
          source: "/slider/pawa1.jpg",
        },
        {
          source: "/slider/pawa2.jpg",
        },
        {
          source: "/slider/pawa3.jpg",
        },
        {
          source: "/slider/pawa5.jpg",
        },
      ]}
    />
  );
}
