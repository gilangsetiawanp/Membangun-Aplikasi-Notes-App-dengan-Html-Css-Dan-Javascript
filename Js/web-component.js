class HeaderContent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
    <header>
        <div class="header">
    <marquee>
            <h1>Notes App</h1>
    </marquee>
        </div>
    </header>
    `;
    }
}

customElements.define('header-content', HeaderContent);

class MainForm extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <main>
        <section>
            <div class="form">
                <form>
                    <div class="form-group nama">
                        <label for="judul">Judul :</label>
                        <input type="text" class"judul" id="judul" name="judul" placeholder="Isikan Judul" required
                            minlength="6" pattern="^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$" size="50"
                            aria-describedby="usernameValidation" />
                        <p id="usernameValidation" class="validation-message" aria-live="polite"></p>
                    </div>
                    <div class="form-group">
                        <label for="textarea">Catatan :</label>
                        <textarea rows="10" cols="50" id="textarea" name="textarea" placeholder="Isikan Catatan"
                            required minlength="6" aria-describedby="textareaValidation"></textarea>
                        <p id="textareaValidation" class="validation-message" aria-live="polite"></p>
                    </div>
                    <div class="form-group">
                        <button class="btn">Kirim</button>
                    </div>
                </form>
            </div>
            <div class="search">
                <label for="Catatan">Cari Catatan Kamu disini !</label>
                <input type="search" class="searchCat">
                <button class="btn">Search</button>
            </div>
        </section>
    </main>
        `;
    }

}
customElements.define('main-form', MainForm);


class NoteList extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="note-list">
        </div>
        `;
    }
}
customElements.define('note-list', NoteList);