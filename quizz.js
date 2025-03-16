(function () {
    // Fonction générique pour configurer un quiz
    function setupQuiz({ formId, resultContainerId, correctAnswers, correctTextAnswers, scorePrefix }) {
        const form = document.getElementById(formId);
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let score = 0;
            // Vérification des réponses
            Object.keys(correctAnswers).forEach(question => {
                const selected = form.querySelector(`input[name="${question}"]:checked`);
                if (selected && selected.value === correctAnswers[question]) {
                    score++;
                }
            });
            // Construction du résultat
            let output = `<h2 style="color: blue; margin: 0;">${scorePrefix} : ${score}/10</h2>`;
            output += `<h3 style="color: green; margin: 0;">Bonnes réponses :</h3>`;
            output += `<ul style="list-style: none; padding: 0; margin: 0;">`;
            // Affichage "Question X : [réponse correcte]" pour chaque question
            Object.keys(correctTextAnswers).forEach(question => {
                let num = question.substring(1); // extrait le numéro de "q1", "q2", etc.
                output += `<li style="color: green; margin: 5px 0;">Question ${num} : ${correctTextAnswers[question]}</li>`;
            });
            output += `</ul>`;

            const resultContainer = document.getElementById(resultContainerId);
            resultContainer.innerHTML = output;
            // Effet 3D pour le conteneur de résultat
            resultContainer.classList.remove('show3D');
            void resultContainer.offsetWidth; // Forcer le reflow pour relancer l'animation
            resultContainer.classList.add('show3D');
            form.reset();
        });
    }

    // Quiz Facile
    const correctAnswersFacile = {
        q1: 'b',
        q2: 'c',
        q3: 'c',
        q4: 'a',
        q5: 'b',
        q6: 'b',
        q7: 'b',
        q8: 'c',
        q9: 'a',
        q10: 'b'
    };
    const correctTextAnswersFacile = {
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
    };
    setupQuiz({
        formId: 'formFacile',
        resultContainerId: 'resultContainerFacile',
        correctAnswers: correctAnswersFacile,
        correctTextAnswers: correctTextAnswersFacile,
        scorePrefix: '🌱 Score'
    });

    // Quiz Moyen
    const correctAnswersMoyen = {
        q1: 'c',
        q2: 'b',
        q3: 'c',
        q4: 'c',
        q5: 'a',
        q6: 'a',
        q7: 'b',
        q8: 'b',
        q9: 'b',
        q10: 'd'
    };
    const correctTextAnswersMoyen = {
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
    };
    setupQuiz({
        formId: 'formMoyen',
        resultContainerId: 'resultContainerMoyen',
        correctAnswers: correctAnswersMoyen,
        correctTextAnswers: correctTextAnswersMoyen,
        scorePrefix: '🌱 Score'
    });

    // Quiz Difficile
    const correctAnswersDifficile = {
        q1: 'c',
        q2: 'c',
        q3: 'b',
        q4: 'a',
        q5: 'c',
        q6: 'a',
        q7: 'b',
        q8: 'b',
        q9: 'b',
        q10: 'd'
    };
    const correctTextAnswersDifficile = {
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
    };
    setupQuiz({
        formId: 'formDifficile',
        resultContainerId: 'resultContainerDifficile',
        correctAnswers: correctAnswersDifficile,
        correctTextAnswers: correctTextAnswersDifficile,
        scorePrefix: '🌍 Score'
    });
})();