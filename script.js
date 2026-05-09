// Fungsi Pindah Halaman
function bukaHalaman(idHalaman) {
    document.getElementById('menuUtama').style.display = 'none';
    document.getElementById('halamanAbjad').style.display = 'none';
    document.getElementById('halamanGame').style.display = 'none';
    
    document.getElementById(idHalaman).style.display = 'block';
}

const databaseIsyarat = {
    "a": "assets/a.jpeg",
    "b": "assets/b.jpeg",
    "c": "assets/c.jpeg",
    "d": "assets/d.jpeg",
    "e": "assets/e.jpeg",
    "f": "assets/f.jpeg",
    "g": "assets/g.jpeg",
    "h": "assets/h.jpeg",
    "i": "assets/i.jpeg",
    "j": "assets/j.jpeg",
    "k": "assets/k.jpeg",
    "l": "assets/l.jpeg",
    "m": "assets/m.jpeg",
    "n": "assets/n.jpeg",
    "o": "assets/o.jpeg",
    "p": "assets/p.jpeg",
    "q": "assets/q.jpeg",
    "r": "assets/r.jpeg",
    "s": "assets/s.jpeg",
    "t": "assets/t.jpeg",
    "u": "assets/u.jpeg",
    "v": "assets/v.jpeg",
    "w": "assets/w.jpeg",
    "x": "assets/x.jpeg",
    "y": "assets/y.jpeg",
    "z": "assets/z.jpeg"
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
    
    gameDisplay.innerHTML = `<img src="assets/${hurufTarget}.jpeg">`;
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
