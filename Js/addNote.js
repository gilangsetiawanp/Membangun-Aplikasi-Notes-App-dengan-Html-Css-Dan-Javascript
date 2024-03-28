document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    const noteList = document.querySelector('.note-list');
    const searchInput = document.querySelector('.searchCat');

    // Data dummy catatan
    const notesData = [
        {
            id: 'notes-jT-jjsyz61J8XKiI',
            title: 'Welcome to Notes, Dimas!',
            body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
            createdAt: '2022-07-28T10:03:12.594Z',
            archived: false,
        },
        {
            id: 'notes-aB-cdefg12345',
            title: 'Meeting Agenda',
            body: 'Discuss project updates and assign tasks for the upcoming week.',
            createdAt: '2022-08-05T15:30:00.000Z',
            archived: false,
        },
        {
            id: 'notes-XyZ-789012345',
            title: 'Shopping List',
            body: 'Milk, eggs, bread, fruits, and vegetables.',
            createdAt: '2022-08-10T08:45:23.120Z',
            archived: false,
        },
        {
            id: 'notes-1a-2b3c4d5e6f',
            title: 'Personal Goals',
            body: 'Read two books per month, exercise three times a week, learn a new language.',
            createdAt: '2022-08-15T18:12:55.789Z',
            archived: false,
        },
        {
            id: 'notes-LMN-456789',
            title: 'Recipe: Spaghetti Bolognese',
            body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
            createdAt: '2022-08-20T12:30:40.200Z',
            archived: false,
        },
        {
            id: 'notes-QwErTyUiOp',
            title: 'Workout Routine',
            body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
            createdAt: '2022-08-25T09:15:17.890Z',
            archived: false,
        },
        {
            id: 'notes-abcdef-987654',
            title: 'Book Recommendations',
            body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
            createdAt: '2022-09-01T14:20:05.321Z',
            archived: false,
        },
        {
            id: 'notes-zyxwv-54321',
            title: 'Daily Reflections',
            body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
            createdAt: '2022-09-07T20:40:30.150Z',
            archived: false,
        },
        {
            id: 'notes-poiuyt-987654',
            title: 'Travel Bucket List',
            body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
            createdAt: '2022-09-15T11:55:44.678Z',
            archived: false,
        },
        {
            id: 'notes-asdfgh-123456',
            title: 'Coding Projects',
            body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
            createdAt: '2022-09-20T17:10:12.987Z',
            archived: false,
        },
        {
            id: 'notes-5678-abcd-efgh',
            title: 'Project Deadline',
            body: 'Complete project tasks by the deadline on October 1st.',
            createdAt: '2022-09-28T14:00:00.000Z',
            archived: false,
        },
        {
            id: 'notes-9876-wxyz-1234',
            title: 'Health Checkup',
            body: 'Schedule a routine health checkup with the doctor.',
            createdAt: '2022-10-05T09:30:45.600Z',
            archived: false,
        },
        {
            id: 'notes-qwerty-8765-4321',
            title: 'Financial Goals',
            body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
            createdAt: '2022-10-12T12:15:30.890Z',
            archived: false,
        },
        {
            id: 'notes-98765-54321-12345',
            title: 'Holiday Plans',
            body: 'Research and plan for the upcoming holiday destination.',
            createdAt: '2022-10-20T16:45:00.000Z',
            archived: false,
        },
        {
            id: 'notes-1234-abcd-5678',
            title: 'Language Learning',
            body: 'Practice Spanish vocabulary for 30 minutes every day.',
            createdAt: '2022-10-28T08:00:20.120Z',
            archived: false,
        },
    ];

    displayNotesFromDummy();

    displayNotesFromLocalStorage();

    // Fungsi untuk menyimpan catatan ke localStorage
    function saveNoteToLocalStorage(noteTitle, noteContent) {
        const currentDate = new Date().toISOString(); // Mendapatkan waktu saat ini
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push({ title: noteTitle, content: noteContent, createdAt: currentDate, archived: false });
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    // Fungsi untuk mendapatkan catatan dari localStorage dan menampilkannya
    function displayNotesFromLocalStorage() {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.forEach(function (note, index) {
            const noteElement = createNoteElement(note.title, note.content, note.createdAt, note.archived, index, true);
            noteList.appendChild(noteElement);
        });
    }

    // Event listener untuk menangani pengiriman formulir catatan baru
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const noteTitle = document.getElementById('judul').value;
        const noteContent = document.getElementById('textarea').value;
        saveNoteToLocalStorage(noteTitle, noteContent);
        // Hapus semua catatan yang ada sebelum menampilkan kembali
        noteList.innerHTML = '';
        displayNotesFromDummy(); // Menampilkan catatan dari data dummy
        displayNotesFromLocalStorage(); // Menampilkan catatan dari localStorage
        form.reset(); // Reset formulir setelah pengiriman
    });

    // Fungsi untuk menghapus catatan dari localStorage berdasarkan indeksnya
    function deleteNoteFromLocalStorage(index) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    // Event listener untuk meng-handle klik tombol hapus
    noteList.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-delete')) {
            const index = event.target.getAttribute('data-index');
            deleteNoteFromLocalStorage(index);
            noteList.innerHTML = '';
            displayNotesFromDummy();
            displayNotesFromLocalStorage();
        }
    });

    // Fungsi untuk mencari catatan berdasarkan judul
    function searchNotes(searchText) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        let filteredNotes = notes.filter(function (note) {
            return note.title.toLowerCase().includes(searchText.toLowerCase());
        });
        noteList.innerHTML = '';
        filteredNotes.forEach(function (note, index) {
            const noteElement = createNoteElement(note.title, note.content, note.createdAt, note.archived, index, true);
            noteList.appendChild(noteElement);
        });

        // Filter juga dari dummy data
        let filteredDummyNotes = notesData.filter(function (note) {
            return note.title.toLowerCase().includes(searchText.toLowerCase());
        });
        filteredDummyNotes.forEach(function (note) {
            const noteElement = createNoteElement(note.title, note.body, note.createdAt, note.archived);
            noteList.appendChild(noteElement);
        });
    }

    // Event listener untuk pencarian catatan
    searchInput.addEventListener('input', function () {
        const searchText = this.value.trim();
        searchNotes(searchText);
    });

    // Fungsi untuk membuat elemen catatan
    function createNoteElement(title, body, createdAt, archived, index, isLocalStorage) {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
        <h2 class="note-title">${title}</h2>
        <p class="note-content">${body}</p>
        <p class="note-created-at">Created At: ${createdAt}</p>
        <p class="note-archived">Archived: ${archived}</p>
    `;
        if (isLocalStorage) {
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn-delete');
            deleteButton.setAttribute('data-index', index);
            deleteButton.textContent = 'Hapus';
            deleteButton.addEventListener('click', function () {
                deleteNoteFromLocalStorage(index);
                noteList.innerHTML = '';
                displayNotesFromLocalStorage();
            });
            noteElement.appendChild(deleteButton);
        }
        return noteElement;
    }


    // Fungsi untuk menampilkan catatan dari data dummy
    function displayNotesFromDummy() {
        notesData.forEach(function (note) {
            const noteElement = createNoteElement(note.title, note.body, note.createdAt, note.archived);
            noteList.appendChild(noteElement);
        });
    }
});
