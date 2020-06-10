import React from "react";
import Particles from "react-particles-js";
import "./particles.css";

function ParticlesDom() {
  return (
    <Particles
      className="particles-js"
      params={{
        fpsLimit: 28,
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          shape: {
            type: "polygon",
            stroke: {
              width: 100,
              color: "#fffffff",
            },
            polygon: {
              enable: true,
              type: "inline",
              move: {
                radius: 10,
              },
              url: "path/to/svg.svg",
              inline: { arrangement: "equidistant" },
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.6, //opacity of particle
            random: true,
            anim: { enable: true, speed: 2, opacity_min: 0.05, sync: false },
          },
          size: {
            value: 4,
            random: true,
          },
          move: {
            enable: true,
            speed: 6,
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.5,
              },
            },
          },
          retina_detect: false,
        },
      }}
    />
  );
}
export default ParticlesDom;
