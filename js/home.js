// ── JOIN MEETING BUTTON ──
const joinBtn = document.querySelector('.btn-secondary');
joinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const meetingId = prompt('Enter Meeting ID:');

    if (meetingId === null) return;

    if (meetingId.trim() === '') {
        alert('Please enter a valid Meeting ID!');
    } else {
        window.location.href = 'pages/meeting.html';
    }
});

// ── NAVBAR SCROLL EFFECT ──
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});