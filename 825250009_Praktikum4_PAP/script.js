const student = {
    name: 'Gresia Valerina Widi',
    nim: '825250009'
};

const cardContainer = document.getElementById('card-container');
const status = document.getElementById('status');
const createBtn = document.getElementById('create-card');
const removeBtn = document.getElementById('remove-card');

function createCard() {
    cardContainer.innerHTML =
        "<article class='student-card'>" +
            "<header><span>Student Identity</span></header>" +
            "<h2>" + student.name + "</h2>" +
            "<p>NIM: " + student.nim + "</p>" +
            "<footer><span>Active student</span><span> 2025 / 2026</span></footer>" +
        "</article>";
    status.textContent = "ID card berhasil dibuat.";
}

function removeCard() {
    cardContainer.innerHTML = "<p class='empty'>Klik <strong>Buat ID card</strong> untuk menampilkan kartu.</p>";
    status.textContent = "ID card telah dihapus.";
}

createBtn.addEventListener('click', createCard);
removeBtn.addEventListener('click', removeCard);
