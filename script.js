// Fungsi Pindah Halaman
function bukaHalaman(idHalaman) {
    document.getElementById('menuUtama').style.display = 'none';
    document.getElementById('halamanAbjad').style.display = 'none';
    document.getElementById('halamanGame').style.display = 'none';
    
    document.getElementById(idHalaman).style.display = 'block';
}

const databaseIsyarat = {
    "a": "a.jpeg",
    "b": "b.jpeg",
    "c": "c.jpeg",
    "d": "d.jpeg",
    "e": "e.jpeg",
    "f": "f.jpeg",
    "g": "g.jpeg",
    "h": "h.jpeg",
    "i": "i.jpeg",
    "j": "j.jpeg",
    "k": "k.jpeg",
    "l": "l.jpeg",
    "m": "m.jpeg",
    "n": "n.jpeg",
    "o": "o.jpeg",
    "p": "p.jpeg",
    "q": "q.jpeg",
    "r": "r.jpeg",
    "s": "s.jpeg",
    "t": "t.jpeg",
    "u": "u.jpeg",
    "v": "v.jpeg",
    "w": "w.jpeg",
    "x": "x.jpeg",
    "y": "y.jpeg",
    "z": "z.jpeg"
};

// Fungsi Translator
function translateKeIsyarat() {
    const teks = document.getElementById('inputTeks').value.toLowerCase();
    const display = document.getElementById('displayIsyarat');
    display.innerHTML = "";

    for (let huruf of teks) {
        // Kita cek di "Database", ada gak gambarnya?
        if (databaseIsyarat[huruf]) {
            const img = document.createElement('img');
            img.src = databaseIsyarat[huruf]; // Ambil link dari database
            display.appendChild(img);
        }
    }
}

// Fungsi Game
let hurufTarget = "";
let skor = 0;

function startGame() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    hurufTarget = alphabet[Math.floor(Math.random() * alphabet.length)];
    const gameDisplay = document.getElementById('gameDisplay');
    const tebakInput = document.getElementById('tebakInput');
    
    gameDisplay.innerHTML = `<img src="${hurufTarget}.jpeg">`;
    tebakInput.style.display = "inline-block";
    tebakInput.value = "";
    tebakInput.focus();
    document.getElementById('btnGame').innerText = "Ganti Huruf";

    tebakInput.oninput = function() {
        if (this.value.toLowerCase() === hurufTarget) {
            document.getElementById('feedback').innerText = "✨ BENAR!";
            skor += 10;
            document.getElementById('skor').innerText = skor;
            setTimeout(startGame, 800);
        }
    };
}
