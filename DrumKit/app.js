const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const pads = document.querySelectorAll('.drum-pad');

const soundMap = {
    A: 'kick',
    S: 'snare',
    D: 'hihat',
    F: 'tom',
    G: 'clap',
    H: 'ride',
    J: 'shaker'
};

pads.forEach(pad => {
    pad.addEventListener('click', () => {
        const key = pad.dataset.key;
        handleDrum(key);
    });
});

window.addEventListener('keydown', event => {
    const key = event.key.toUpperCase();
    if (!soundMap[key]) {
        return;
    }

    event.preventDefault();
    handleDrum(key);
});

function handleDrum(key) {
    const pad = document.querySelector(`.drum-pad[data-key="${key}"]`);
    if (!pad) {
        return;
    }

    pad.classList.add('active');
    window.setTimeout(() => pad.classList.remove('active'), 120);

    const sound = soundMap[key];
    switch (sound) {
        case 'kick':
            playKick();
            break;
        case 'snare':
            playSnare();
            break;
        case 'hihat':
            playHiHat();
            break;
        case 'tom':
            playTom();
            break;
        case 'clap':
            playClap();
            break;
        case 'ride':
            playRide();
            break;
        case 'shaker':
            playShaker();
            break;
        default:
            break;
    }
}

function createNoiseBuffer(duration = 1) {
    const sampleRate = audioContext.sampleRate;
    const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    return buffer;
}

function playKick() {
    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(150, now);
    oscillator.frequency.exponentialRampToValueAtTime(40, now + 0.2);

    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.5);
}

function playSnare() {
    const now = audioContext.currentTime;

    const noise = audioContext.createBufferSource();
    noise.buffer = createNoiseBuffer(0.2);
    const noiseFilter = audioContext.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.value = 1000;
    const noiseGain = audioContext.createGain();

    noiseGain.gain.setValueAtTime(1, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);

    noise.connect(noiseFilter).connect(noiseGain).connect(audioContext.destination);
    noise.start(now);
    noise.stop(now + 0.2);

    const tone = audioContext.createOscillator();
    tone.type = 'triangle';
    tone.frequency.setValueAtTime(180, now);
    const toneGain = audioContext.createGain();

    toneGain.gain.setValueAtTime(0.7, now);
    toneGain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

    tone.connect(toneGain).connect(audioContext.destination);
    tone.start(now);
    tone.stop(now + 0.2);
}

function playHiHat() {
    const now = audioContext.currentTime;
    const noise = audioContext.createBufferSource();
    noise.buffer = createNoiseBuffer(0.05);

    const bandpass = audioContext.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = 8000;

    const highpass = audioContext.createBiquadFilter();
    highpass.type = 'highpass';
    highpass.frequency.value = 5000;

    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.9, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

    noise.connect(bandpass).connect(highpass).connect(gain).connect(audioContext.destination);
    noise.start(now);
    noise.stop(now + 0.05);
}

function playTom() {
    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(220, now);
    oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.3);

    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.45);
}

function playClap() {
    const now = audioContext.currentTime;
    const buffer = createNoiseBuffer(0.12);
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;

    const bandpass = audioContext.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = 1200;
    bandpass.Q.value = 0.7;

    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    noise.connect(bandpass).connect(gain).connect(audioContext.destination);
    noise.start(now);
    noise.stop(now + 0.12);
}

function playRide() {
    const now = audioContext.currentTime;
    const noise = audioContext.createBufferSource();
    noise.buffer = createNoiseBuffer(0.3);

    const bandpass = audioContext.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = 7000;

    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);

    noise.connect(bandpass).connect(gain).connect(audioContext.destination);
    noise.start(now);
    noise.stop(now + 0.18);
}

function playShaker() {
    const now = audioContext.currentTime;
    const noise = audioContext.createBufferSource();
    noise.buffer = createNoiseBuffer(0.2);

    const bandpass = audioContext.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = 6000;

    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.25, now + 0.02);
    gain.gain.linearRampToValueAtTime(0.05, now + 0.18);
    gain.gain.linearRampToValueAtTime(0.001, now + 0.22);

    noise.connect(bandpass).connect(gain).connect(audioContext.destination);
    noise.start(now);
    noise.stop(now + 0.22);
}

// Resume audio context on first user interaction if needed.
window.addEventListener('click', resumeAudioContext, { once: true });
window.addEventListener('keydown', resumeAudioContext, { once: true });

function resumeAudioContext() {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
}
