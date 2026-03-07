const gameState = {
    stage: 'START',
    turn: 0,
    player: {
        name: 'Herói',
        hp: 100,
        atk: 0
    },
    enemy: null
};

const foes = {
    1: {
        name: 'Slime',
        hp: 20,
        amin: 2,
        amax: 5
    },

    2: {
        name: 'Orc',
        hp: 100,
        amin: 10,
        amax: 15
    },

    3: {
        name: 'Ogro',
        hp: 70,
        amin: 5,
        amax: 10
    },

    4: {
        name: 'Aranha',
        hp: 50,
        amin: 2,
        amax: 10
    }
}

const canvas = document.getElementById("canva");

function init() {
    render();
}

function render() {
    canvas.innerHTML = '';

    if (gameState.stage === 'START') {
        gameState.turn = 0;
        gameState.player.hp = 100;

        const btn = document.createElement('button');
        btn.innerText = "Iniciar Aventura";
        btn.onclick = () => {
            gameState.stage = 'COMBAT';
            spawnEnemy();
            render();
        };
        canvas.appendChild(btn);
    }

    if (gameState.stage === 'COMBAT') {
        showCombatScreen();
    }
}

function spawnEnemy() {
    const randomId = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    gameState.enemy = { ...foes[randomId] };

    console.log(`Um ${gameState.enemy.name} selvagem apareceu!`);
}

function showCombatScreen() {
    const p = gameState.player;
    const e = gameState.enemy;

    let logHTML = '';
    if (gameState.turn > 0) {
        logHTML = `
            <div class="log-box" style="color: #666; font-size: 0.9em;">
                <p>Turno: ${gameState.turn}</p>
                <p>Dano causado: <span style="color: green">${p.atk}</span></p>
                <p>Dano recebido: <span style="color: red">${e.atk}</span></p>
                <hr>
            </div>`;
    }

    canvas.innerHTML = `
        <div class="combat-container">
            ${logHTML}
            <div class="status">
                <p><strong>${p.name}</strong> (HP: ${p.hp})</p>
                <p><strong>${e.name}</strong> (HP: ${e.hp})</p>
            </div>
            <button onclick="attack()">Atacar</button>
        </div>
    `;
}

function attack() {
    gameState.turn++;
    const p = gameState.player;
    const e = gameState.enemy;

    p.atk = Math.floor(Math.random() * (15 - 7 + 1)) + 7;
    e.atk = Math.floor(Math.random() * (e.amax - e.amin + 1)) + e.amin;

    e.hp -= p.atk;

    if (e.hp <= 0) {
        alert("Você venceu!");
        gameState.stage = 'START';
    } else {
        p.hp -= e.atk;
        if (p.hp <= 0) {
            alert("Você perdeu.");
            gameState.stage = 'START';
        }
    }

    render();
}

document.addEventListener("DOMContentLoaded", init);