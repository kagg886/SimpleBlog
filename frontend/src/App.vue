<template>
  <router-view></router-view>
  <Particles
      :particlesInit="particlesInit"
      id="tsparticles"
      :options="options"
  />
</template>

<script setup lang="ts">
import {loadFull} from "tsparticles";

const particlesInit = async (engine: any) => {
  await loadFull(engine);
};

const options = {
  background: {
    color: {
      value: 'rgb(255,255,255,0)'
    }
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'window',
    events: {
      onHover: {
        enable: true,
        mode: 'grab'
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 10,
        duration: 2,
        opacity: 0.8,
        size: 40,
        speed: 3
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#3bec0b'
    },
    links: {
      color: '#3bec0b',
      distance: 50,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 0.5,
      straight: false
    },
    number: {
      density: {
        enable: true,
        value_area: 200
      },
      value: 50
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle',
      // type: 'edge',
      // type: 'triangle',
      // type: 'polygon',
      // type: 'star',
    },
    size: {
      random: true,
      value: 5
    }
  },
  detectRetina: true
}
</script>

<style scoped>
#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
</style>

