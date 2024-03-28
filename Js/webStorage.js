function saveNoteToLocalStorage(judul, catatan) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push({ judul, catatan });
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Fungsi untuk memuat catatan dari localStorage saat halaman dimuat
function loadNotes() {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(function (note) {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.innerHTML = `
                        <h2>${note.judul}</h2>
                        <p>${note.catatan}</p>
                    `;
        noteList.appendChild(noteDiv);
    });
}