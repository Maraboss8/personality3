const questions = [
    "Απολαμβάνεις την αίσθηση του κινδύνου και της περιπέτειας.",
    "Πιστεύεις ότι η εξυπνάδα είναι πιο σημαντική από άλλους παράγοντες για την επιτυχία στη ζωή.",
    "Σε ένα κοινωνικό περιβάλλον, προσεγγίζεις εύκολα νέους ανθρώπους.",
    "Προτιμάς την επικοινωνία πρόσωπο με πρόσωπο από τα μηνύματα ή τα social media.",
    "Όταν τελειώνει μια σχέση, προτιμάς μια ξεκάθαρη συζήτηση αντί για απομάκρυνση χωρίς εξηγήσεις.",
    "Όταν κάποιος δικός σου νιώθει άσχημα, ξέρεις ακριβώς πώς να του προσφέρεις υποστήριξη.",
    "Παίρνεις αποφάσεις βασισμένος/η κυρίως στη λογική και τα δεδομένα.",
    "Αν σου προτείνουν αυθόρμητα ένα ταξίδι, αποδέχεσαι αμέσως χωρίς πολλή σκέψη.",
    "Σε μια σχέση, η εμπιστοσύνη είναι πιο σημαντική από το πάθος.",
    "Σε ενθουσιάζει περισσότερο μια δουλειά με προκλήσεις και εξέλιξη παρά η σταθερότητα και η ασφάλεια.",
    "Εκφράζεις την αγάπη σου κυρίως μέσα από πράξεις και όχι με λόγια.",
    "Θεωρείς ότι η αυτοπεποίθηση είναι το μεγαλύτερο σου πλεονέκτημα.",
    "Στο φλερτ, σε ελκύει περισσότερο το έξυπνο παιχνίδι λέξεων παρά η άμεση και ξεκάθαρη έλξη.",
    "Όταν μπαίνεις σε έναν χώρο, νιώθεις ότι οι άλλοι σε προσέχουν αμέσως.",
    "Νιώθεις την ανάγκη να είσαι αποδεκτός/η από τους γύρω σου.",
    "Εμπνέεσαι περισσότερο από τη φύση και την ηρεμία παρά από την ένταση της πόλης.",
    "Όταν αντιμετωπίζεις μια πρόκληση, εστιάζεις πρώτα στην ανάλυση και τη στρατηγική.",
    "Όταν βαριέσαι, προτιμάς να δημιουργείς κάτι αντί να καταναλώνεις περιεχόμενο (ταινίες, βίντεο κ.λπ.).",
    "Μπορείς να συγκεντρωθείς εύκολα ακόμα και αν δεν υπάρχει απόλυτη ησυχία.",
    "Πιστεύεις ότι το ένστικτο είναι πιο αξιόπιστος οδηγός από την ανάλυση και τη λογική.",
    "Είσαι άνθρωπος που εκφράζει ανοιχτά τα συναισθήματά του.",
    "Σε μια φιλία, η ειλικρινής επικοινωνία είναι πιο σημαντική από τις κοινές εμπειρίες.",
    "Προτιμάς να ζεις τη στιγμή και να αυτοσχεδιάζεις παρά να σχεδιάζεις προσεκτικά το μέλλον.",
    "Όταν εργάζεσαι σε ομάδα, τείνεις να αναλαμβάνεις ηγετικό ρόλο.",
    "Όταν διαφωνείς με κάποιον, προτιμάς να εκφράζεις ανοιχτά τη γνώμη σου παρά να αποφεύγεις τη σύγκρουση.",
    "Η μουσική ή η τέχνη είναι ο καλύτερος τρόπος για να ηρεμήσεις.",
    "Σε μια σχέση, σου αρέσει να έχεις τον έλεγχο και να παίρνεις τις περισσότερες αποφάσεις.",
    "Εμπιστεύεσαι εύκολα τους ανθρώπους.",
    "Όταν πιέζεσαι, προτιμάς να συνεχίζεις χωρίς να δείχνεις τα συναισθήματά σου.",
    "Όταν νιώθεις έντονα ερωτευμένος/η, δυσκολεύεσαι να το δείξεις ξεκάθαρα."
];

let currentQuestion = 0;
const answers = new Array(questions.length).fill(null);

// DOM elements
const questionText = document.getElementById('question-text');
const currentQuestionSpan = document.getElementById('current-question');
const progressBar = document.getElementById('progress');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const radioInputs = document.querySelectorAll('input[type="radio"]');

// Initialize the first question
function initializeQuestion() {
    questionText.textContent = questions[currentQuestion];
    currentQuestionSpan.textContent = currentQuestion + 1;
    updateProgress();
    updateButtons();
    clearSelection();
    if (answers[currentQuestion] !== null) {
        radioInputs[answers[currentQuestion] + 2].checked = true;
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Update navigation buttons
function updateButtons() {
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = answers[currentQuestion] === null;
}

// Clear radio button selection
function clearSelection() {
    radioInputs.forEach(input => input.checked = false);
}

// Event listeners
radioInputs.forEach(input => {
    input.addEventListener('change', () => {
        answers[currentQuestion] = parseInt(input.value);
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            initializeQuestion();
        } else {
            // Test completed
            calculateResults();
        }
    });
});

prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        initializeQuestion();
    }
});

function calculateResults() {
    // Save answers to localStorage
    localStorage.setItem('userTestAnswers', JSON.stringify(answers));
    // Redirect to results page
    window.location.href = 'results.html';
}

// Start the test
localStorage.removeItem('userTestAnswers');
initializeQuestion();
