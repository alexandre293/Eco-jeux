(function () {
    function setupQuiz({ formId, resultContainerId, correctAnswers, correctTextAnswers, scorePrefix }) {
        const form = document.getElementById(formId);
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let score = 0;
            Object.keys(correctAnswers).forEach(question => {
                const selected = form.querySelector(`input[name="${question}"]:checked`);
                if (selected && selected.value === correctAnswers[question]) {
                    score++;
                }
            });

            let output = `
                <div class="result-card">
                    <h2>${scorePrefix} : <span class="score">${score}/10</span></h2>
                    <h3>✅ Bonnes réponses :</h3>
                    <div class="result-table">
                        <div class="result-row">
                            <div class="result-column"><strong>Question</strong></div>
                            <div class="result-column"><strong>Réponse correcte</strong></div>
                        </div>`;

            Object.keys(correctTextAnswers).forEach(question => {
                let num = question.substring(1);
                output += `
                    <div class="result-row">
                        <div class="result-column">Question ${num}</div>
                        <div class="result-column">${correctTextAnswers[question]}</div>
                    </div>`;
            });
            output += `</div></div>`;

            const resultContainer = document.getElementById(resultContainerId);
            resultContainer.innerHTML = output;
            resultContainer.classList.add('fadeIn');

            if (score === 10) {
                launchFireworks();
            }

            form.reset();
        });
    }

    function launchFireworks() {
        const fireworks = document.createElement('div');
        fireworks.classList.add('fireworks');
        document.body.appendChild(fireworks);
        setTimeout(() => {
            fireworks.remove();
        }, 3000);
    }

    const styles = `
        .result-card {
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            color: white;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            text-align: center;
            width: 50%;
            margin: 20px auto;
        }
        .score {
            font-size: 24px;
            font-weight: bold;
            color: yellow;
        }
        .result-table {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            width: 100%;
            text-align: left;
        }
        .result-row {
            display: flex;
            justify-content: space-between;
            margin: 5px 0;
        }
        .result-column {
            width: 45%;
            padding: 5px;
            border: 1px solid white;
            margin: 2px;
        }
        .fadeIn {
            animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
        .fireworks {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100vw;
            height: 100vh;
            background: url('https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif') center/cover no-repeat;
            z-index: 9999;
            pointer-events: none;
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Niveau Facile
    setupQuiz({
        formId: 'formFacile',
        resultContainerId: 'resultContainerFacile',
        correctAnswers: {
            q1: 'b', q2: 'c', q3: 'c', q4: 'a', q5: 'b',
            q6: 'b', q7: 'b', q8: 'c', q9: 'a', q10: 'b'
        },
        correctTextAnswers: {
            q1: "Le dioxyde de carbone (CO₂)",
            q2: "Fermer l’eau pendant le brossage de dents",
            q3: "Une bouteille en plastique",
            q4: "L’énergie solaire",
            q5: "Le plastique",
            q6: "Trois flèches formant un triangle",
            q7: "Utiliser des ampoules à faible consommation",
            q8: "Utiliser des sacs réutilisables",
            q9: "Le dauphin",
            q10: "Bleu"
        },
        scorePrefix: '🌱 Score'
    });

    // Niveau Moyen
    setupQuiz({
        formId: 'formMoyen',
        resultContainerId: 'resultContainerMoyen',
        correctAnswers: {
            q1: 'c', q2: 'b', q3: 'c', q4: 'c', q5: 'a',
            q6: 'a', q7: 'b', q8: 'b', q9: 'b', q10: 'd'
        },
        correctTextAnswers: {
            q1: "Les émissions de voitures",
            q2: "Le réchauffement climatique",
            q3: "L’énergie nucléaire",
            q4: "Le plastique",
            q5: "Elles absorbent le CO₂",
            q6: "Une énergie qui ne pollue pas l’environnement",
            q7: "Des déchets alimentaires",
            q8: "Le métal",
            q9: "La Chine",
            q10: "450 ans"
        },
        scorePrefix: '🌱 Score'
    });

    // Niveau Difficile
    setupQuiz({
        formId: 'formDifficile',
        resultContainerId: 'resultContainerDifficile',
        correctAnswers: {
            q1: 'c', q2: 'c', q3: 'b', q4: 'a', q5: 'c',
            q6: 'a', q7: 'b', q8: 'b', q9: 'b', q10: 'd'
        },
        correctTextAnswers: {
            q1: "La menace pour les coraux et coquillages",
            q2: "Les CFC (chlorofluorocarbures)",
            q3: "Le Brésil",
            q4: "Le réchauffement climatique",
            q5: "25%",
            q6: "Ils sont biodégradables",
            q7: "La Chine",
            q8: "L’agriculture",
            q9: "Une entreprise climatiquement neutre",
            q10: "Tous les plastiques ne sont pas recyclables"
        },
        scorePrefix: '🌍 Score'
    });
})();


// Fonction pour revenir en haut
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Affiche le bouton lorsque l'utilisateur descend
window.onscroll = function() {
    var button = document.getElementById("topButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block"; // Affiche le bouton
    } else {
        button.style.display = "none"; // Cache le bouton
    }
};
