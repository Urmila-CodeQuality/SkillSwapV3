function switchTab(tab) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if(tab === 'seeker') {
        document.getElementById('seekerView').style.display = 'block';
        document.getElementById('providerView').style.display = 'none';
        event.target.classList.add('active');
    } else {
        document.getElementById('seekerView').style.display = 'none';
        document.getElementById('providerView').style.display = 'block';
        event.target.classList.add('active');
    }
}

let currentEmail = '';

function openModal(name, topic, time, email) {
    currentEmail = email;
    document.getElementById('modalTitle').innerText = `Say hello to ${name}`;
    document.getElementById('icebreakerText').value = `Hi ${name}! I saw your SkillSwap post regarding ${topic}. I'd love to connect during your scheduled time (${time}).`;
    document.getElementById('feedbackBanner').style.display = 'none';
    document.getElementById('connectModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('connectModal').style.display = 'none';
}

function copyMessage() {
    const textarea = document.getElementById('icebreakerText');
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    showFeedback();
}

function triggerEmailClient() {
    showFeedback();
}

function showFeedback() {
    document.getElementById('targetEmail').innerText = currentEmail;
    document.getElementById('feedbackBanner').style.display = 'block';
}

function handlePostSubmit(e) {
    e.preventDefault();
    alert('Listing successfully published with structured time-blocks!');
    switchTab('seeker');
}
