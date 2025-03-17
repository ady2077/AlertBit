// Initialize particles
particlesJS('particles-js', {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: '#ff8c00' }, // Orange particles
        shape: { type: 'triangle' }, // Different shape for variety
        opacity: { value: 0.6, random: true },
        size: { value: 4, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 3, direction: 'none', random: true }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'bubble' }, onclick: { enable: true, mode: 'push' } },
        modes: { bubble: { distance: 200, size: 6 }, push: { particles_nb: 5 } }
    },
    retina_detect: true
});

function checkThreshold() {
    const number = parseFloat(document.getElementById('numberInput').value);
    const resultDiv = document.getElementById('result');
    const threshold = 100;

    if (isNaN(number)) {
        resultDiv.innerHTML = '<span style="color: #ff6b6b;">Please enter a valid number!</span>';
        return;
    }

    if (number > threshold) {
        resultDiv.innerHTML = `<span style="color: #ff6b6b; animation: alertFlash 0.5s infinite;">ALERT! ${number} exceeds threshold (${threshold})!</span>`;
    } else {
        resultDiv.innerHTML = `<span style="color: #00ff9f;">${number} is safe (below ${threshold}).</span>`;
    }
}

// Extra animation for the alert
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes alertFlash {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
    }
`;
document.head.appendChild(styleSheet);