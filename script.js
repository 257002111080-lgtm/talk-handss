function showFitur(fitur) {
    document.getElementById('menuUtama').style.display = 'none';
    document.getElementById('penerjemahSection').style.display = fitur === 'penerjemah' ? 'block' : 'none';
    document.getElementById('gameSection').style.display = fitur === 'game' ? 'block' : 'none';
}

function backToMenu() {
    document.getElementById('menuUtama').style.display = 'block';
    document.getElementById('penerjemahSection').style.display = 'none';
    document.getElementById('gameSection').style.display = 'none';
}

function translateKeIsyarat() {
    const teks = document.getElementById('inputTeks').value.toLowerCase();
    const display = document.getElementById('displayIsyarat');
    display.innerHTML = "";

    for (let char of teks) {
        if (char >= 'a' && char <= 'z') {
            const img = document.createElement('img');
            // Pakai ./assets/ agar jalur foldernya lebih tegas
            img.src = `./assets/${char}.jpeg`; 
            img.onerror = () => console.log(`Gagal muat: ${char}.jpeg`);
            display.appendChild(img);
        } else if (char === " ") {
            const gap = document.createElement('div');
            gap.style.width = "15px";
            display.appendChild(gap);
        }
    }
}

let target = "";
let skor = 0;

function startGame() {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    target = abc[Math.floor(Math.random() * 26)];
    const display = document.getElementById('gameDisplay');
    const input = document.getElementById('tebakInput');
    
    display.innerHTML = `<img src="./assets/${target}.jpeg" onerror="this.parentElement.innerHTML='Foto Error'">`;
    input.style.display = "inline-block";
    input.value = "";
    input.focus();
    
    input.oninput = function() {
        if (this.value.toLowerCase() === target) {
            document.getElementById('feedback').innerText = "✨ HEBAT! ✨";
            skor += 10;
            document.getElementById('skor').innerText = skor;
            setTimeout(startGame, 800);
        }
    };
}