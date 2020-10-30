import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./PawaSlider.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function PawaSlider() {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={true}
      interval={2000}
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
