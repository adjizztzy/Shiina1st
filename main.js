// main.js
document.getElementById('startButton').addEventListener('click', () => {
  document.getElementById('start-page').classList.add('hidden');
  document.getElementById('loading-page').classList.remove('hidden');

  setTimeout(() => {
    document.getElementById('loading-page').classList.add('hidden');
    document.getElementById('main-page').classList.remove('hidden');
  }, 2000);
});

particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    color: { value: '#00c6ff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#00c6ff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out'
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
      
