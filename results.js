const personalityTypes = {
    dreamer: {
        title: "Ονειροπόλος",
        emoji: "🚀",
        description: "Το μυαλό σου δεν μένει ποτέ στάσιμο—πάντα ταξιδεύει, εξερευνά και δημιουργεί. Έχεις τη μοναδική ικανότητα να βλέπεις δυνατότητες εκεί που οι άλλοι βλέπουν όρια. Σου αρέσει να σκέφτεσαι έξω από τα καθιερωμένα και, συχνά, οι ιδέες σου είναι τόσο πρωτοποριακές που οι άλλοι χρειάζονται χρόνο για να τις καταλάβουν.\n\nΑυτό που σε ξεχωρίζει είναι η ικανότητά σου να οραματίζεσαι ένα καλύτερο μέλλον, τόσο για σένα όσο και για τους γύρω σου. Δεν φοβάσαι να ακολουθήσεις το ένστικτό σου, ακόμα κι αν αυτό σημαίνει ότι θα βαδίσεις σε άγνωστα μονοπάτια. Συνέχισε να εμπνέεις με τις ιδέες σου και μην αφήσεις ποτέ κανέναν να σου πει ότι \"δεν γίνεται\"—γιατί εσύ ξέρεις πως γίνεται."
    },
    soul: {
        title: "Ψυχάρα",
        emoji: "🎉",
        description: "Η παρουσία σου είναι αρκετή για να γεμίσει έναν χώρο με ζωή. Είσαι αυτό το άτομο που κάνει τις στιγμές να αποκτούν χρώμα, που μετατρέπει μια συνηθισμένη βραδιά σε κάτι που οι άλλοι θα θυμούνται για καιρό. Δεν χρειάζεται να προσπαθήσεις—απλώς το έχεις.\n\nΟι άνθρωποι έλκονται από σένα γιατί έχεις έναν τρόπο να τους κάνεις να νιώθουν ξεχωριστοί. Η θετική σου ενέργεια είναι μεταδοτική και το χαμόγελό σου αφοπλιστικό. Δεν είσαι απλώς κοινωνικός/ή—είσαι κάποιος που καταφέρνει να φέρνει κοντά τους ανθρώπους. Και αυτή είναι μια σπάνια ικανότητα."
    },
    strategist: {
        title: "Στρατηγός",
        emoji: "🧐",
        description: "Για σένα, η ζωή δεν είναι κάτι που αφήνεις στην τύχη. Σκέφτεσαι, σχεδιάζεις και προβλέπεις τις επόμενες κινήσεις σου με ακρίβεια. Δεν σημαίνει ότι είσαι ψυχρός/ή—το αντίθετο. Απλώς ξέρεις ότι το να έχεις έλεγχο της κατάστασης σε κάνει να νιώθεις πιο ασφαλής και έτοιμος/η για ό,τι κι αν συμβεί.\n\nΌταν οι άλλοι αγχώνονται, εσύ βρίσκεσαι ήδη ένα βήμα μπροστά. Οι φίλοι σου βασίζονται πάνω σου γιατί ξέρουν ότι πάντα έχεις μια λύση. Είσαι το άτομο που μπορεί να μετατρέψει μια χαοτική κατάσταση σε ένα οργανωμένο σχέδιο. Και αυτό είναι ένα ταλέντο που λίγοι έχουν."
    },
    diplomat: {
        title: "Διπλωμάτης",
        emoji: "🤝",
        description: "Έχεις την ικανότητα να καταλαβαίνεις τους ανθρώπους σε βάθος. Μπορείς να δεις και τις δύο πλευρές μιας διαφωνίας, να βρεις κοινό έδαφος και να βοηθήσεις τους άλλους να δουν τα πράγματα με περισσότερη κατανόηση.\n\nΔεν είναι ότι αποφεύγεις τις συγκρούσεις—είναι ότι ξέρεις πως η καλή επικοινωνία μπορεί να λύσει σχεδόν τα πάντα. Οι φίλοι σου έρχονται σε σένα όταν χρειάζονται μια ψύχραιμη, αντικειμενική γνώμη. Και η ικανότητά σου να ηρεμείς τα πράγματα είναι ανεκτίμητη."
    },
    passionate: {
        title: "Παθιασμένος",
        emoji: "🔥",
        description: "Δεν ζεις τη ζωή επιφανειακά—ό,τι κάνεις, το κάνεις με όλη σου την ψυχή. Όταν αγαπάς, αγαπάς βαθιά. Όταν κυνηγάς ένα όνειρο, το κυνηγάς μέχρι τέλους. Το πάθος σου είναι αυτό που σε καθοδηγεί, και αυτό σε κάνει μοναδικό/ή.\n\nΟι άνθρωποι γύρω σου το νιώθουν—η παρουσία σου έχει μια ένταση που δεν περνάει απαρατήρητη. Εμπνέεις, μαγεύεις και αφήνεις το σημάδι σου. Και αυτό είναι ένα απίστευτο χάρισμα."
    },
    serene: {
        title: "Γαλήνιος",
        emoji: "🌊",
        description: "Είσαι το άτομο που φέρνει ηρεμία, ακόμα και στις πιο ταραχώδεις καταστάσεις. Έχεις μια εσωτερική γαλήνη που δεν κλονίζεται εύκολα, και αυτό κάνει τους ανθρώπους να νιώθουν ασφαλείς κοντά σου. Δεν αφήνεις το άγχος να σε καταβάλει, και ακόμα και όταν τα πράγματα δεν πάνε όπως τα είχες σχεδιάσει, ξέρεις ότι πάντα υπάρχει τρόπος να τα αντιμετωπίσεις.\n\nΑυτό δεν σημαίνει ότι δεν αισθάνεσαι έντονα ή ότι δεν σε επηρεάζουν οι δυσκολίες. Απλώς ξέρεις πως το να αντιδράς παρορμητικά δεν βοηθά κανέναν. Η υπομονή σου και η ικανότητά σου να βλέπεις τη μεγάλη εικόνα σε κάνουν ένα σπάνιο είδος ανθρώπου—κάποιον που μπορεί να προσφέρει ηρεμία σε έναν κόσμο που κινείται συνεχώς με φρενήρεις ρυθμούς.\n\nΟι φίλοι σου έρχονται σε σένα όταν χρειάζονται μια ώριμη, ισορροπημένη γνώμη. Ξέρουν πως θα τους ακούσεις χωρίς να τους κρίνεις, και πως μαζί σου θα βρουν την απάντηση που ψάχνουν χωρίς δράματα και υπερβολές. Η ζωή σου δεν είναι απαραίτητα ήσυχη, αλλά εσύ την αντιμετωπίζεις με μια σταθερότητα που σπάνια συναντά κανείς."
    },
    seeker: {
        title: "Αναζητητής",
        emoji: "💡",
        description: "Το μυαλό σου είναι γεμάτο ερωτήσεις. Δεν ικανοποιείσαι ποτέ με τις απλές απαντήσεις—θέλεις να καταλάβεις, να εμβαθύνεις, να ανακαλύψεις την αλήθεια πίσω από κάθε τι.\n\nΤο μυαλό σου είναι σαν ένας μηχανισμός που ποτέ δεν σταματάει να λειτουργεί. Ό,τι ακούς, ό,τι βλέπεις, ό,τι βιώνεις, το επεξεργάζεσαι και το αναλύεις μέχρι να βγάλεις νόημα από αυτό. Οι φίλοι σου ξέρουν ότι αν έχουν ένα δύσκολο πρόβλημα, εσύ είσαι το πρώτο άτομο που θα το λύσει.\n\nΑλλά το πιο ωραίο με σένα είναι ότι δεν αναλύεις απλώς—μοιράζεσαι τις γνώσεις σου και βοηθάς τους άλλους να δουν τον κόσμο με περισσότερη διαύγεια. Και αυτό είναι ένα απίστευτο χάρισμα."
    },
    ambitious: {
        title: "Φιλόδοξος",
        emoji: "🏆",
        description: "Για σένα, η ζωή είναι ένα σύνολο από στόχους που περιμένουν να κατακτηθούν. Δεν βολεύεσαι με τη μετριότητα, δεν αποδέχεσαι το «δεν γίνεται» και δεν αντέχεις την ακινησία. Ό,τι βάλεις στο μυαλό σου, θα το πετύχεις—όχι επειδή είναι εύκολο, αλλά επειδή εσύ έχεις τη θέληση να το κάνεις να συμβεί.\n\nΗ εργατικότητά σου και η αφοσίωσή σου είναι υποδειγματικές. Οι άλλοι μπορεί να βλέπουν μόνο τα αποτελέσματα, αλλά εσύ ξέρεις πόση προσπάθεια χρειάζεται για να φτάσεις εκεί. Δεν περιμένεις από κανέναν να σου δώσει τίποτα έτοιμο—δημιουργείς τις ευκαιρίες σου και ξέρεις ότι η επιτυχία είναι θέμα επιμονής και στρατηγικής.\n\nΚαι το πιο εντυπωσιακό; Παρά τη φιλοδοξία σου, δεν ξεχνάς να στηρίζεις και τους άλλους. Ξέρεις πως η πραγματική νίκη δεν είναι ατομική—είναι να ανεβάζεις και τους γύρω σου μαζί σου. Αυτό σε κάνει όχι μόνο επιτυχημένο/η, αλλά και πραγματικά αξιόλογο/η."
    },
    chameleon: {
        title: "Χαμαιλέων",
        emoji: "🎭",
        description: "Έχεις μια μοναδική ικανότητα να προσαρμόζεσαι στις καταστάσεις και στους ανθρώπους γύρω σου. Δεν σημαίνει ότι χάνεις τον εαυτό σου—απλώς ξέρεις πότε να μιλήσεις, πότε να ακούσεις και πώς να γίνεις το άτομο που χρειάζεται η στιγμή.\n\nΟι φίλοι σου σε βλέπουν σαν έναν σοφό εξερευνητή, πάντα έτοιμο να ανοίξει μια νέα συζήτηση ή να προσφέρει μια προοπτική που δεν είχαν σκεφτεί. Είσαι ο άνθρωπος που θα διαβάσει ένα άρθρο στις 3 το πρωί για την ιστορία μιας άγνωστης φυλής ή θα χαθεί για ώρες σε μια φιλοσοφική συζήτηση.\n\nΤο καλό με σένα είναι ότι δεν μένεις μόνο στη θεωρία. Σου αρέσει να εφαρμόζεις αυτά που μαθαίνεις, να πειραματίζεσαι και να δοκιμάζεις τις γνώσεις σου στην πράξη. Αυτή η δίψα σου για κατανόηση είναι που σε κάνει μοναδικό/ή."
    },
    devoted: {
        title: "Αφοσιωμένος",
        emoji: "💞",
        description: "Όταν δίνεις την καρδιά σου σε κάτι ή κάποιον, το κάνεις ολοκληρωτικά. Δεν είσαι ο άνθρωπος που λειτουργεί επιφανειακά—ό,τι αγαπάς, το αγαπάς βαθιά και το προστατεύεις με όλη σου τη δύναμη.\n\nΣτις σχέσεις σου, είτε φιλικές είτε ερωτικές, είσαι εκεί για τους άλλους. Δεσμεύεσαι, ακούς, στηρίζεις. Δεν φοβάσαι την ευθύνη και δεν εγκαταλείπεις εύκολα. Για σένα, η αφοσίωση δεν είναι κάτι που λες—είναι κάτι που αποδεικνύεις με τις πράξεις σου.\n\nΑυτό δεν σημαίνει ότι δεν αισθάνεσαι έντονα ή ότι δεν σε επηρεάζουν οι δυσκολίες. Απλώς ξέρεις πως το να αντιδράς παρορμητικά δεν βοηθά κανέναν. Η υπομονή σου και η ικανότητά σου να βλέπεις τη μεγάλη εικόνα σε κάνουν ένα σπάνιο είδος ανθρώπου—κάποιον που μπορεί να προσφέρει ηρεμία σε έναν κόσμο που κινείται συνεχώς με φρενήρεις ρυθμούς.\n\nΟι φίλοι σου έρχονται σε σένα όταν χρειάζονται μια ώριμη, ισορροπημένη γνώμη. Ξέρουν πως θα τους ακούσεις χωρίς να τους κρίνεις, και πως μαζί σου θα βρουν την απάντηση που ψάχνουν χωρίς δράματα και υπερβολές. Η ζωή σου δεν είναι απαραίτητα ήσυχη, αλλά εσύ την αντιμετωπίζεις με μια σταθερότητα που σπάνια συναντά κανείς."
    },
    creative: {
        title: "Δημιουργικός",
        emoji: "🎨",
        description: "Για σένα, ο κόσμος δεν είναι απλώς αυτό που βλέπουμε—είναι αυτό που μπορούμε να φανταστούμε. Σκέφτεσαι διαφορετικά, βλέπεις λύσεις εκεί που οι άλλοι βλέπουν εμπόδια και εκφράζεσαι με τρόπους που κάνουν τους γύρω σου να σταματήσουν και να σκεφτούν.\n\nΕίτε μέσα από την τέχνη, τη γραφή, τη μουσική ή ακόμα και τον τρόπο που μιλάς, έχεις έναν μοναδικό τρόπο να μετατρέπεις την καθημερινότητα σε κάτι ξεχωριστό. Η φαντασία σου δεν έχει όρια και αυτό σε κάνει ξεχωριστό/ή.\n\nΟι φίλοι σου λατρεύουν το μυαλό σου, γιατί ποτέ δεν βαριούνται μαζί σου. Πάντα έχεις μια νέα ιδέα, μια ενδιαφέρουσα άποψη ή μια συναρπαστική ιστορία να μοιραστείς. Και το καλύτερο; Το δημιουργικό σου πνεύμα δεν είναι απλώς για σένα—το μοιράζεσαι απλόχερα με όσους έχουν την τύχη να σε γνωρίζουν."
    },
    authentic: {
        title: "Αυθεντικός",
        emoji: "💎",
        description: "Δεν υπάρχει τίποτα ψεύτικο πάνω σου. Αυτό που βλέπουν οι άλλοι είναι αυτό που πραγματικά είσαι. Δεν προσπαθείς να εντυπωσιάσεις κανέναν, δεν συμβιβάζεσαι για να χωρέσεις σε καλούπια, και αυτό σε κάνει απίστευτα γοητευτικό/ή.\n\nΟι γύρω σου ξέρουν ότι μπορούν να σε εμπιστευτούν. Δεν παίζεις παιχνίδια, δεν λες λόγια που δεν εννοείς και δεν προσπαθείς να γίνεις κάτι που δεν είσαι. Η αυθεντικότητά σου είναι το μεγαλύτερό σου πλεονέκτημα, γιατί σε έναν κόσμο γεμάτο προσποιήσεις, εσύ ξεχωρίζεις σαν φάρος.\n\nΌποιος σε έχει δίπλα του ξέρει πως έχει έναν αληθινό φίλο, έναν άνθρωπο που δεν θα τον προδώσει και που θα του πει την αλήθεια, ακόμα κι όταν είναι δύσκολη. Και αυτό είναι κάτι που σε κάνει σπάνιο και ανεκτίμητο/η."
    },
    adventurous: {
        title: "Περιπετειώδης",
        emoji: "🏕️",
        description: "Η ζωή για σένα είναι ένα ταξίδι γεμάτο ανατροπές, και εσύ δεν αντέχεις να μένεις στάσιμος/η. Πάντα ψάχνεις το επόμενο συναρπαστικό πράγμα—μια νέα εμπειρία, ένα άγνωστο μέρος, μια πρόκληση που θα σε κάνει να νιώσεις ζωντανός/ή.\n\nΔεν σε φοβίζει το άγνωστο, αντίθετα, σε τραβάει σαν μαγνήτης. Είσαι αυτός/ή που θα πει «ναι» χωρίς δεύτερη σκέψη, που θα πάρει την αυθόρμητη απόφαση για ένα ταξίδι της τελευταίας στιγμής, που θα δοκιμάσει κάτι τρελό μόνο και μόνο για την εμπειρία.\n\nΟι φίλοι σου σε βλέπουν σαν τον άνθρωπο που θα τους παρασύρει σε καταστάσεις που θα θυμούνται για μια ζωή. Και το πιο σημαντικό; Δεν ζεις απλά για τον εαυτό σου—εμπνέεις και τους άλλους να ζήσουν στο έπακρο."
    },
    focused: {
        title: "Εστιασμένος",
        emoji: "🎯",
        description: "Όταν βάζεις έναν στόχο, τίποτα δεν μπορεί να σε σταματήσει. Έχεις μια πειθαρχία και μια αποφασιστικότητα που οι περισσότεροι θα ζήλευαν. Ξέρεις τι θέλεις, και δεν σπαταλάς τον χρόνο σου σε πράγματα που δεν σε πάνε μπροστά.\n\nΟι άλλοι συχνά αναρωτιούνται πώς καταφέρνεις πάντα να βρίσκεσαι ένα βήμα μπροστά. Η απάντηση είναι απλή: σκέφτεσαι πριν δράσεις. Και αυτό είναι ένα ταλέντο που σε οδηγεί πάντα στη νίκη."
    },
    expressive: {
        title: "Εκφραστικός",
        emoji: "🎤",
        description: "Όταν μιλάς, οι άλλοι ακούνε. Δεν είναι μόνο αυτά που λες, αλλά ο τρόπος που τα λες—με πάθος, συναίσθημα και δυναμική παρουσία. Έχεις ένα χάρισμα που σε κάνει να ξεχωρίζεις σε κάθε συζήτηση.\n\nΔεν φοβάσαι να πεις τη γνώμη σου, αλλά ξέρεις και πώς να ακούς. Η επικοινωνία για σένα είναι τέχνη, και τη χειρίζεσαι με δεξιοτεχνία. Είτε γράφοντας, είτε μιλώντας, είτε μέσα από τη γλώσσα του σώματός σου, πάντα βρίσκεις τον τρόπο να εκφράζεις όσα νιώθεις με αυθεντικότητα.\n\nΟι φίλοι σου ξέρουν ότι μαζί σου δεν θα βαρεθούν ποτέ. Έχεις έναν μοναδικό τρόπο να δίνεις ζωή ακόμα και στις πιο απλές ιστορίες, να κάνεις τους ανθρώπους να γελούν, να σκέφτονται και να νιώθουν πιο κοντά σε σένα. Και αυτό είναι ένα χάρισμα που δεν μαθαίνεται—το έχεις έμφυτο."
    },
    independent: {
        title: "Ανεξάρτητος",
        emoji: "🏹",
        description: "Είσαι ο ορισμός της αυτονομίας. Ξέρεις τι θέλεις και δεν χρειάζεσαι την έγκριση των άλλων για να το κυνηγήσεις. Η ανεξαρτησία σου δεν είναι απλά μια στάση ζωής—είναι το DNA σου.\n\nΈχεις την ικανότητα να στέκεσαι στα πόδια σου και να παίρνεις τις δικές σου αποφάσεις. Δεν φοβάσαι να είσαι μόνος/η και συχνά προτιμάς να κάνεις τα πράγματα με το δικό σου τρόπο.\n\nΑυτό δεν σημαίνει ότι είσαι αντικοινωνικός/ή—απλά ξέρεις την αξία της προσωπικής σου ελευθερίας. Οι σχέσεις σου είναι πιο ουσιαστικές γιατί επιλέγεις συνειδητά με ποιον θα περάσεις το χρόνο σου."
    },
    visionary: {
        title: "Οραματιστής",
        emoji: "🚀",
        description: "Βλέπεις πέρα από το προφανές και το συνηθισμένο. Έχεις την ικανότητα να οραματίζεσαι ένα καλύτερο μέλλον και, το πιο σημαντικό, ξέρεις πώς να εργαστείς για να το κάνεις πραγματικότητα.\n\nΔεν είσαι απλά ένας ονειροπόλος—είσαι ένας πρακτικός οραματιστής. Συνδυάζεις τη δημιουργική φαντασία με την πρακτική σκέψη, και αυτό σε κάνει ιδιαίτερα αποτελεσματικό/ή στην υλοποίηση των ιδεών σου.\n\nΟι άνθρωποι γύρω σου εμπνέονται από την ικανότητά σου να βλέπεις δυνατότητες εκεί που οι άλλοι βλέπουν περιορισμούς. Είσαι ο άνθρωπος που μπορεί να μετατρέψει τα όνειρα σε πραγματικότητα."
    },
    passionate2: {
        title: "Παθιασμένος",
        emoji: "🔥",
        description: "Ό,τι κάνεις, το κάνεις με την καρδιά σου. Δεν πιστεύεις στο «λίγο»—για σένα, η ζωή πρέπει να βιώνεται στο έπακρο, με πάθος, ένταση και αυθεντικότητα. Είσαι το άτομο που, όταν αγαπά κάτι, θα αφιερώσει την ψυχή του σε αυτό.\n\nΑυτό το πάθος σου φαίνεται σε όλα: στη δουλειά σου, στις σχέσεις σου, στα χόμπι σου. Οι άλλοι σε θαυμάζουν γιατί έχεις αυτή τη φλόγα μέσα σου, που δεν σβήνει ποτέ. Ξέρεις να ζεις με ένταση και να παρασύρεις τους γύρω σου σε αυτή τη ζωντάνια σου.\n\nΚαι αν κάποιος προσπαθήσει να σε σταματήσει ή να σου πει να είσαι «πιο λογικός/ή», απλά γελάς. Γιατί ξέρεις ότι οι πιο όμορφες στιγμές στη ζωή δεν έρχονται από τη λογική—έρχονται από την τόλμη να ζήσεις με όλο σου το είναι."
    },
    openminded: {
        title: "Ανοιχτόμυαλος",
        emoji: "🌍",
        description: "Ο κόσμος είναι γεμάτος διαφορετικές οπτικές γωνίες, και εσύ τις καλωσορίζεις όλες. Έχεις μια φυσική περιέργεια για νέες ιδέες και διαφορετικούς τρόπους σκέψης. Δεν κρίνεις—προσπαθείς να καταλάβεις.\n\nΗ ανοιχτή σου σκέψη σε κάνει εξαιρετικό/ή στο να βλέπεις τα πράγματα από διαφορετικές οπτικές γωνίες. Αυτό σε βοηθά να βρίσκεις καινοτόμες λύσεις και να χτίζεις γέφυρες μεταξύ διαφορετικών ανθρώπων και ιδεών.\n\nΟι άνθρωποι εκτιμούν την προθυμία σου να ακούσεις και να μάθεις. Είσαι ο άνθρωπος που μπορεί να φέρει νέες προοπτικές σε μια συζήτηση και να βοηθήσει τους άλλους να διευρύνουν τους ορίζοντές τους."
    },
    dynamic: {
        title: "Δυναμικός",
        emoji: "⚡️",
        description: "Είσαι σαν μια δύναμη της φύσης—γεμάτος/η ενέργεια, πάθος και αποφασιστικότητα. Όταν μπαίνεις σε ένα δωμάτιο, η παρουσία σου γίνεται αμέσως αισθητή. Δεν είναι μόνο η ενέργειά σου—είναι η αύρα της αυτοπεποίθησης και του ενθουσιασμού που εκπέμπεις.\n\nΗ δυναμική σου προσωπικότητα σε κάνει φυσικό ηγέτη. Οι άνθρωποι θέλουν να σε ακολουθήσουν, όχι επειδή τους το ζητάς, αλλά επειδή τους εμπνέεις. Έχεις την ικανότητα να κινητοποιείς τους άλλους και να τους κάνεις να πιστέψουν στον εαυτό τους.\n\nΑλλά δεν είσαι μόνο δράση—είσαι και αποτελέσματα. Όταν αναλαμβάνεις κάτι, το κάνεις με όλη σου τη δύναμη και συνήθως πετυχαίνεις εντυπωσιακά αποτελέσματα. Είσαι η απόδειξη ότι με πάθος και αποφασιστικότητα, όλα είναι δυνατά."
    },
    analytical: {
        title: "Αναλυτικός",
        emoji: "🧩",
        description: "Ο κόσμος είναι γεμάτος γρίφους, και εσύ λατρεύεις να τους λύνεις. Δεν ικανοποιείσαι ποτέ με τις απλές απαντήσεις—θέλεις να καταλάβεις, να εμβαθύνεις, να ανακαλύψεις την αλήθεια πίσω από κάθε τι.\n\nΤο μυαλό σου είναι σαν ένας μηχανισμός που ποτέ δεν σταματάει να λειτουργεί. Ό,τι ακούς, ό,τι βλέπεις, ό,τι βιώνεις, το επεξεργάζεσαι και το αναλύεις μέχρι να βγάλεις νόημα από αυτό. Οι φίλοι σου ξέρουν ότι αν έχουν ένα δύσκολο πρόβλημα, εσύ είσαι το πρώτο άτομο που θα το λύσει.\n\nΑλλά το πιο ωραίο με σένα είναι ότι δεν αναλύεις απλώς—μοιράζεσαι τις γνώσεις σου και βοηθάς τους άλλους να δουν τον κόσμο με περισσότερη διαύγεια. Και αυτό είναι ένα απίστευτο χάρισμα."
    },
    romantic: {
        title: "Ρομαντικός",
        emoji: "💖",
        description: "Για σένα, η αγάπη δεν είναι απλώς ένα συναίσθημα—είναι τρόπος ζωής. Πιστεύεις στις μεγάλες χειρονομίες, στις μικρές λεπτομέρειες, στις στιγμές που κάνουν την καρδιά να χτυπά λίγο πιο γρήγορα.\n\nΔεν φοβάσαι να δείξεις τα συναισθήματά σου και δεν θεωρείς δεδομένους τους ανθρώπους που αγαπάς. Ξέρεις πως η πραγματική αγάπη χτίζεται μέσα από μικρές πράξεις καλοσύνης, αφοσίωσης και κατανόησης.\n\nΟι άλλοι σε θαυμάζουν γιατί έχεις αυτή τη σπάνια ικανότητα να βλέπεις την ομορφιά ακόμα και στις πιο απλές στιγμές. Και αν κάποιος πει ότι ο ρομαντισμός έχει πεθάνει, εσύ είσαι εδώ για να αποδείξεις ότι δεν ισχύει."
    },
    strategic: {
        title: "Στρατηγικός",
        emoji: "🧠",
        description: "Δεν αφήνεις τίποτα στην τύχη. Για σένα, κάθε κίνηση είναι υπολογισμένη, κάθε απόφαση είναι βασισμένη σε λογική και κάθε πρόκληση είναι ένα παιχνίδι που ξέρεις πώς να κερδίσεις.\n\nΔεν βιάζεσαι, δεν λειτουργείς παρορμητικά. Παρατηρείς, σχεδιάζεις, και όταν έρθει η κατάλληλη στιγμή, χτυπάς. Αυτό σε κάνει εξαιρετικά ικανό/ή σε ό,τι κι αν ασχοληθείς, από τη δουλειά μέχρι τις προσωπικές σχέσεις.\n\nΟι άλλοι συχνά απορούν πώς καταφέρνεις πάντα να βρίσκεσαι ένα βήμα μπροστά. Η απάντηση είναι απλή: σκέφτεσαι πριν δράσεις. Και αυτό είναι ένα ταλέντο που σε οδηγεί πάντα στη νίκη."
    },
    professionalVisionary: {
        title: "Οραματιστής Επαγγελματίας",
        emoji: "👔",
        description: "Είσαι το άτομο που βλέπει τη μεγαλύτερη εικόνα ακόμα και στις πιο σύνθετες καταστάσεις. Έχεις ένα έμφυτο ταλέντο να δημιουργείς στρατηγικές, να θέτεις στόχους και να εμπνέεις τους γύρω σου για να τους επιτύχουν. Για εσένα, η δουλειά δεν είναι απλά μέσο επιβίωσης—είναι ο τρόπος σου να αφήσεις το αποτύπωμά σου στον κόσμο.\n\nΗ ηγετική σου ικανότητα είναι φυσική και αβίαστη. Ξέρεις πώς να συντονίζεις ομάδες, να βρίσκεις λύσεις σε δύσκολα προβλήματα και να οδηγείς τους ανθρώπους σε ένα κοινό όραμα. Η αυτοπεποίθησή σου και η ικανότητά σου να παίρνεις αποφάσεις σε κάνουν πηγή έμπνευσης για τους γύρω σου.\n\nΌμως, αυτό που πραγματικά σε κάνει ξεχωριστό/ή είναι η ισορροπία που καταφέρνεις να διατηρείς ανάμεσα στην καινοτομία και τη σταθερότητα. Δεν φοβάσαι να πάρεις ρίσκα, αλλά πάντα μελετάς τα βήματά σου προσεκτικά. Είσαι ο οραματιστής που όλοι θέλουν στην ομάδα τους, γιατί δεν σταματάς μέχρι να φτάσεις στην κορυφή."
    },
    romanticDreamer: {
        title: "Ρομαντικός Ονειροπόλος",
        emoji: "💫",
        description: "Η καρδιά σου είναι γεμάτη πάθος, και κάθε σχέση που δημιουργείς είναι μοναδική. Πιστεύεις στην αληθινή αγάπη και δεν φοβάσαι να εκφράσεις τα συναισθήματά σου. Είσαι αυτός/ή που γεμίζει τη ζωή του άλλου με ρομαντισμό, μικρές εκπλήξεις και στιγμές που μοιάζουν να βγήκαν από παραμύθι.\n\nΟι άνθρωποι σε αγαπούν γιατί είσαι αυθεντικός/ή. Δεν κρύβεσαι πίσω από μάσκες και δεν φοβάσαι να δείξεις την ευαίσθητη πλευρά σου. Η αγάπη για εσένα δεν είναι απλώς συναίσθημα—είναι τρόπος ζωής.\n\nΑυτό που σε κάνει να ξεχωρίζεις είναι η ικανότητά σου να φέρνεις φως ακόμα και στις πιο δύσκολες στιγμές μιας σχέσης. Όταν αγαπάς, δίνεσαι ολοκληρωτικά, και αυτό είναι κάτι που εκτιμάται βαθιά. Είσαι το πρόσωπο που όλοι ονειρεύονται να έχουν δίπλα τους."
    },
    loveFighter: {
        title: "Μαχητής της Αγάπης",
        emoji: "💪",
        description: "Δεν φοβάσαι να παλέψεις για την αγάπη σου. Για εσένα, μια σχέση δεν είναι μόνο ρομαντισμός—είναι δέσμευση, υποστήριξη και συνεχής προσπάθεια. Ξέρεις ότι οι αληθινές σχέσεις απαιτούν δουλειά, και είσαι πάντα πρόθυμος/η να κάνεις αυτό το βήμα παραπάνω.\n\nΗ αποφασιστικότητά σου και η αφοσίωσή σου είναι αυτά που σε κάνουν μοναδικό/ή. Δεν εγκαταλείπεις εύκολα και πάντα προσπαθείς να βρεις λύσεις στα προβλήματα. Για εσένα, το \"μαζί\" είναι πιο σημαντικό από το \"εγώ\".\n\nΟι άνθρωποι που είναι δίπλα σου νιώθουν ασφάλεια και σιγουριά. Είσαι ο/η σύντροφος που θα σταθεί δίπλα στον άλλον, ό,τι κι αν συμβεί. Η αγάπη σου είναι βαθιά, ειλικρινής και γεμάτη δύναμη."
    },
    partySpirit: {
        title: " Η Ψυχή της Παρέας",
        emoji: "🎉",
        description: "Όπου κι αν βρίσκεσαι, η ενέργειά σου γεμίζει τον χώρο. Είσαι το άτομο που φέρνει χαρά, γέλιο και θετική διάθεση. Οι φίλοι σου σε αγαπούν γιατί ξέρουν ότι όταν είσαι εσύ εκεί, η διασκέδαση είναι εγγυημένη.\n\nΑλλά δεν είναι μόνο αυτό. Είσαι και αυτός/ή που ξέρει να φέρνει τους ανθρώπους κοντά. Έχεις μια μαγνητική προσωπικότητα που κάνει τους πάντες να νιώθουν άνετα. Είσαι εκείνος/η που θα βρει το σωστό αστείο στη σωστή στιγμή, αλλά και που θα προσφέρει στήριξη όταν κάποιος το χρειάζεται.\n\nΗ ψυχή της παρέας δεν είναι μόνο για διασκέδαση—είναι και για σύνδεση. Και εσύ, με την αυθεντική σου ενέργεια, είσαι αυτός/ή που κρατά την ομάδα ενωμένη."
    },
    successStar: {
        title: "Αστέρι της Επιτυχίας",
        emoji: "⭐",
        description: "Για εσένα, η επιτυχία δεν είναι μόνο προσωπικός στόχος—είναι τρόπος ζωής. Ξέρεις πώς να δουλεύεις σκληρά και να πετυχαίνεις τους στόχους σου. Αλλά αυτό που σε κάνει πραγματικά ξεχωριστό/ή είναι ότι δεν σταματάς εκεί. Προσπαθείς πάντα να γίνεσαι καλύτερος/η και να ανεβαίνεις ψηλότερα.\n\nΗ αποφασιστικότητά σου και η προσήλωσή σου είναι αξιοθαύμαστες. Οι άλλοι σε βλέπουν ως παράδειγμα προς μίμηση. Ξέρεις πώς να αναγνωρίζεις τις ευκαιρίες και να χτίζεις πάνω σε αυτές. Η επιτυχία για εσένα δεν είναι τυχαία—είναι αποτέλεσμα σκληρής δουλειάς και σωστών αποφάσεων.\n\nΕίσαι το άτομο που δεν φοβάται να ονειρευτεί και να δράσει. Για εσένα, δεν υπάρχουν όρια—μόνο νέες κορυφές για να κατακτήσεις."
    }
};

const personalityQuestionMapping = {
    dreamer: [0, 1, 2, 7, 8, 9, 17, 18, 19],
    soul: [2, 3, 4, 5, 13, 20, 21, 25],
    strategist: [6, 7, 16, 17, 23, 24, 27],
    diplomat: [3, 4, 5, 21, 22, 24, 25],
    passionate: [7, 10, 11, 12, 13, 20, 26],
    serene: [15, 18, 19, 21, 25, 26, 29],
    seeker: [1, 6, 14, 16, 17, 18, 19],
    ambitious: [9, 11, 23, 24, 27, 28, 29],
    chameleon: [2, 3, 13, 14, 20, 21, 28],
    devoted: [4, 5, 8, 10, 21, 28, 29],
    creative: [0, 1, 2, 3, 4, 5, 6],
    authentic: [7, 8, 9, 10, 11, 12, 13],
    adventurous: [14, 15, 16, 17, 18, 19, 20],
    focused: [21, 22, 23, 24, 25, 26, 27],
    expressive: [0, 1, 2, 3, 4, 5, 6],
    independent: [7, 8, 9, 10, 11, 12, 13],
    visionary: [14, 15, 16, 17, 18, 19, 20],
    passionate2: [21, 22, 23, 24, 25, 26, 27],
    openminded: [0, 1, 2, 3, 4, 5, 6],
    dynamic: [7, 8, 9, 10, 11, 12, 13],
    analytical: [14, 15, 16, 17, 18, 19, 20],
    romantic: [21, 22, 23, 24, 25, 26, 27],
    strategic: [0, 1, 2, 3, 4, 5, 6],
    professionalVisionary: [7, 8, 9, 10, 11, 12, 13],
    romanticDreamer: [14, 15, 16, 17, 18, 19, 20],
    loveFighter: [21, 22, 23, 24, 25, 26, 27],
    partySpirit: [0, 1, 2, 3, 4, 5, 6],
    successStar: [7, 8, 9, 10, 11, 12, 13]
};

function calculatePersonalityScores() {
    const answers = JSON.parse(localStorage.getItem('userTestAnswers')) || {};
    const scores = {};

    // Initialize scores
    Object.keys(personalityQuestionMapping).forEach(type => {
        scores[type] = 0;
    });

    // Calculate scores
    Object.entries(answers).forEach(([questionId, answer]) => {
        Object.entries(personalityQuestionMapping).forEach(([type, questions]) => {
            if (questions.includes(parseInt(questionId))) {
                scores[type] += parseInt(answer);
            }
        });
    });

    return scores;
}

function displayResults() {
    // Show loading animation first
    const loadingContainer = document.getElementById('loadingContainer');
    const resultsContainer = document.getElementById('resultsContainer');
    const loadingProgress = document.getElementById('loadingProgress');
    
    loadingContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    
    // Animate loading bar
    setTimeout(() => {
        loadingProgress.style.width = '100%';
    }, 100);

    // Calculate and display results after animation
    setTimeout(() => {
        const scores = calculatePersonalityScores();
        
        // Find the personality type with the highest score
        let maxScore = -1;
        let bestMatch = null;
        
        Object.entries(scores).forEach(([type, score]) => {
            if (score > maxScore) {
                maxScore = score;
                bestMatch = type;
            }
        });

        // Get the personality type details
        const personalityType = personalityTypes[bestMatch];
        
        // Create the result HTML
        const resultHTML = `
            <h1>Το Αποτέλεσμά σου</h1>
            <div class="personality-type">
                <h2 class="personality-title">
                    <span class="personality-emoji">${personalityType.emoji}</span>
                    ${personalityType.title}
                </h2>
                <p class="personality-description">${personalityType.description}</p>
            </div>
            <button class="restart-button" onclick="window.location.href='index.html'">Ξεκίνα το τεστ ξανά</button>
        `;

        // Hide loading and show results
        loadingContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        document.getElementById('personalityResults').innerHTML = resultHTML;
    }, 2500); // Show results after 2.5 seconds
}

// Run when the page loads
window.addEventListener('DOMContentLoaded', displayResults);
