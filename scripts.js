// Get DOM elements
const raffleForm = document.getElementById('raffleForm');
const participantNameInput = document.getElementById('participantName');
const participantsList = document.getElementById('participantsList');
const drawButton = document.getElementById('drawButton');
const winnerDisplay = document.getElementById('winnerDisplay');
const resetButton = document.getElementById('resetButton')

// Initialize participants array
let participants = [];

// Add event listener for form submission
raffleForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const participantName = participantNameInput.value;
    if (participantName) {
        participants.push(participantName);
        displayParticipants();
        participantNameInput.value = '';
    }
});

// Display participants in the list
function displayParticipants() {
    participantsList.innerHTML = participants.map(name => `<li>${name}</li>`).join('');
    if (participants.length > 0) {
        drawButton.disabled = false;
    }
}

// Add event listener for draw button
drawButton.addEventListener('click', function () {
    if (participants.length > 0) {
        const randomIndex = Math.floor(Math.random() * participants.length);
        const winnerName = participants[randomIndex];
        winnerDisplay.innerHTML = `<p>Congratulations to ${winnerName}! 🎉 Your furry friend has won a gift! 🐶🎁</p>`;
        drawButton.disabled = true;
    }
});

// Reset participants

resetButton.addEventListener('click', resetParticipants);

function resetParticipants() {
    participants = []; // Clear the participants array
    participantsList.innerHTML = ''; // Clear the participants list on the UI
    winnerDisplay.innerHTML = ''; // Clear the winner display
    drawButton.disabled = false; // Enable the "Draw Winner" button
}

