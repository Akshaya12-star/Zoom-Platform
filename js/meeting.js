// ── MEETING TIMER ──
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTimer() {
    seconds++;
    if (seconds === 60) { seconds = 0; minutes++; }
    if (minutes === 60) { minutes = 0; hours++; }

    const h = String(hours).padStart(2, '0');
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');

    document.querySelector('.meeting-timer').textContent = `${h}:${m}:${s}`;
}

setInterval(updateTimer, 1000);

// ── MUTE TOGGLE ──
let isMuted = false;
const muteBtn = document.querySelectorAll('.tool-icon')[0];

muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    muteBtn.textContent = isMuted ? '🔇' : '🎤';
    muteBtn.style.backgroundColor = isMuted
        ? 'rgba(255,0,0,0.4)'
        : 'rgba(255,255,255,0.08)';

    const muteLabel = muteBtn.closest('.tool-btn').querySelector('span');
    muteLabel.textContent = isMuted ? 'Unmute' : 'Mute';
});

// ── VIDEO TOGGLE ──
let isVideoOff = false;
const videoBtn = document.querySelectorAll('.tool-icon')[1];

videoBtn.addEventListener('click', () => {
    isVideoOff = !isVideoOff;
    videoBtn.textContent = isVideoOff ? '📵' : '📹';
    videoBtn.style.backgroundColor = isVideoOff
        ? 'rgba(255,0,0,0.4)'
        : 'rgba(255,255,255,0.08)';

    const videoLabel = videoBtn.closest('.tool-btn').querySelector('span');
    videoLabel.textContent = isVideoOff ? 'Start Video' : 'Video';
});

// ── END MEETING ──
const endBtn = document.querySelector('.end-btn');
endBtn.addEventListener('click', () => {
    const confirm = window.confirm('Are you sure you want to end the meeting?');
    if (confirm) {
        window.location.href = '../pages/dashboard.html';
    }
});

// ── CHAT SEND ──
const sendBtn = document.querySelector('.send-btn');
const chatInput = document.querySelector('.chat-input input');
const chatMessages = document.querySelector('.chat-messages');

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const text = chatInput.value.trim();
    if (text === '') return;

    const message = document.createElement('div');
    message.classList.add('chat-message', 'mine');
    message.innerHTML = `
        <div class="chat-bubble">
            <span class="chat-name">You</span>
            <p>${text}</p>
            <span class="chat-time">${getCurrentTime()}</span>
        </div>
    `;

    chatMessages.appendChild(message);
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
}