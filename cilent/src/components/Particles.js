import React from "react";
import Particles from 'react-particles-js';
import "./stylesheets/particles.css";


function ParticlesDom(){
    return <div id="particles-js"className="App">  
    <Particles 
      params={{ 
        particles: { 
          number: { 
            value: 80, 
            density: { 
              enable: true, 
              value_area: 800, 
            } 
          },
          shape: {
            type: 'polygon',
            stroke: {
              width: 0,
              color: '#fffffff'
            },
            polygon: {
              nb_sides: 6
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100
            }
        },
        opacity: {
            value: 0.6, //opacity of particle
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
          },
          size: {
            value: 4,
            random : true,
            anim : {
                enable: false,
                speed: 60,
                size_min: 0.1,
                sync: false
            }
          },
           move: {
               enable: true,
               speed: 10,
               direction: "none",
               random: true,
               straight: false,
               out_mode: "out",
               bounce: false,
               attract:{
                   enable: false,
                   rotateX: 600,
                   rotateY: 1200,
               }

           },
           line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
           },
           interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse'
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              grab:{
                distance: 400,
                line_linked:{
                  opacity: 1
                }
              },
              bubble:{
                distance: 200,
                size: 80,
                duration: 0.4
              },
              repulse:{
                distance: 40,
                duration: 0.2
              },
              push:{
                particles_nb: 4
              },
              remove:{
                particles_nb: 2
              }
            },
            
          },
          retina_detect: true
        }, 
      }} 
    />   
  </div>
}
export default ParticlesDom;