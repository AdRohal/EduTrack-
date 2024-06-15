// Function to toggle the visibility of the language bar
function toggleLanguageBar() {
    const languageBar = document.getElementById('language-bar');
    languageBar.classList.toggle('hidden');
}

// Define the language options
const languages = {
    'fr': {
        'Home': 'Accueil',
        'About': 'À propos',
        'Contact': 'Contact',
        'HomeHeading': 'Bienvenue sur notre site EduTrack',
        'Project-info': 'EduTrack est une application complète de gestion scolaire conçue pour rationaliser et améliorer la gestion des enseignants, des élèves et des classes au sein des établissements d\'enseignement. Soutenu par le GitHub Student Pack et Expertus.ma, EduTrack vise à améliorer l\'efficacité et la qualité de la gestion des ressources éducatives, facilitant ainsi la supervision et l\'optimisation de leurs environnements éducatifs par les administrateurs.',
        'Download': 'Télécharger EduTrack',
        'Follow these steps': 'Suivez ces étapes pour commencer:',
        'step_1': '1. Regardez la première image. Cela montre le processus de configuration initial.',
        'step_2': '2. Passez à la deuxième image. Cela montre comment configurer les paramètres. "Appuyez sur \'Garder\'"',
        'step_3': '3. Enfin, la troisième image montre comment utiliser les principales fonctionnalités de l\'application. "Appuyez sur \'Garder de toute façon\'"',
        'About': 'À propos',
        'AboutText1': 'EduTrack est une révolution dans la gestion éducative, unifiant les enseignants, les étudiants et les administrateurs dans une plateforme transparente. Rechercher l’excellence, c’est comme naviguer vers la connaissance ultime. Vous serez surpris de voir à quel point la simplicité peut rendre la complexité accessible. EduTrack : où la technologie et l\'éducation s\'unissent pour réussir.',        'AboutText2': 'Notre projet, EduTrack, est fièrement soutenu par le GitHub Student Pack et Expertus.ma...',
        'AboutText2': 'Notre projet, EduTrack, est fièrement soutenu par le GitHub Student Pack et Expertus.ma. Cette collaboration garantit que nous disposons des meilleures ressources et expertises pour fournir une plateforme de gestion éducative de premier ordre.',
        'Contact': 'Contact',
        'Developer': 'Développeur',
        'DeveloperInfo': 'Je m\'appelle Adam Rohal, un développeur full stack de 22 ans. Je travaille actuellement en tant qu\'ingénieur développeur logiciel pour Expertus.ma. Je suis passionné par la création de solutions innovantes et EduTrack est l\'un de mes projets soutenus par le GitHub Student Pack et Expertus.ma.',
        'EduTrack': 'EduTrack',
        'EduTrackInfo': 'Tél: +212 (0)671645861<br>E-mail: <a>Kradamrohal@hotmail.com</a>',
    },
    'en': {
        'Home': 'Home',
        'About': 'About',
        'Contact': 'Contact',
        'HomeHeading': 'Welcome to our site EduTrack',
        'Project-info': 'EduTrack is a comprehensive school management application designed to streamline and enhance the management of teachers, students, and classes within educational institutions. Supported by the GitHub Student Pack and Expertus.ma, EduTrack aims to improve the efficiency and quality of educational resource management, making it easier for administrators to oversee and optimize their educational environments.',
        'Download': 'Download EduTrack',
        'Follow these steps': 'Follow these steps to get started:',
        'step_1': '1. Look at the first image. This shows the initial setup process.',
        'step_2': '2. Move to the second image. This shows how to configure the settings. "Press \'Keep\'"',
        'step_3': '3. Finally, the third image shows how to use the main features of the application. "Press \'Keep anyway\'"',
        'About': 'About',
        'AboutText1': 'EduTrack is a revolution in educational management, unifying teachers, students, and administrators in a seamless platform. Seeking excellence is like navigating towards ultimate knowledge. You\'ll be surprised how simplicity can make complexity accessible. EduTrack: where technology and education unite for success.',
        'AboutText2': 'Our project, EduTrack, is proudly supported by the GitHub Student Pack and Expertus.ma. This collaboration ensures that we have the best resources and expertise to deliver a top-notch educational management platform.',
        'Contact': 'Contact',
        'Developer': 'Developer',
        'DeveloperInfo': 'My name is Adam Rohal, a 22-year-old full stack developer. I am currently working as a Software Engineer developer for Expertus.ma. I am passionate about creating innovative solutions and EduTrack is one of my projects supported by the GitHub Student Pack and Expertus.ma.',
        'EduTrack': 'EduTrack',
        'EduTrackInfo': 'Phone: +212 (0)671645861<br>Email: <a>Kradamrohal@hotmail.com</a>',
    },
    'ar': {
        'Home': 'الرئيسية',
        'About': 'حول',
        'Contact': 'اتصل',
        'HomeHeading': 'EduTrack أهلا في موقعنا',
        'Project-info': 'EduTrack هو تطبيق شامل لإدارة المدارس مصمم لتبسيط وتحسين إدارة المعلمين والطلاب والفصول الدراسية داخل المؤسسات التعليمية. بدعم من GitHub Student Pack و Expertus.ma ، يهدف EduTrack إلى تحسين كفاءة وجودة إدارة الموارد التعليمية ، مما يسهل على المسؤولين الإشراف وتحسين بيئاتهم التعليمية.',
        'Download': 'تحميل EduTrack',
        'Follow these steps': 'اتبع هذه الخطوات للبدء:',
        'step_1': '1. انظر إلى الصورة الأولى. هذا يظهر عملية الإعداد الأولية.',
        'step_2': '2. انتقل إلى الصورة الثانية. هذا يظهر كيفية تكوين الإعدادات. "اضغط على \'احتفظ\'"',
        'step_3': '3. أخيرًا، تظهر الصورة الثالثة كيفية استخدام الميزات الرئيسية للتطبيق. "اضغط على \'احتفظ على أي حال\'"',
        'About': 'حول',
        'AboutText1': 'EduTrack هو ثورة في إدارة التعليم، توحد المعلمين والطلاب والمدراء في منصة سلسة. البحث عن التميز مثل التوجه نحو المعرفة النهائية. ستتفاجأ كيف يمكن للبساطة أن تجعل التعقيد متاحًا. EduTrack: حيث تتحد التكنولوجيا والتعليم للنجاح.',
        'AboutText2': 'يدعم مشروعنا، EduTrack، بفخر من قبل GitHub Student Pack و Expertus.ma. تضمن هذه التعاون أن لدينا أفضل الموارد والخبرات لتقديم منصة إدارة تعليمية من الدرجة الأولى.',
        'Contact': 'اتصل',
        'Developer': 'مطور',
        'DeveloperInfo': 'اسمي آدم روحال، مطور مكدس كامل يبلغ من العمر 22 عامًا.أعمل حاليًا كمطور مهندس برمجيات في Expertus.ma. أنا متحمس لإنشاء حلول مبتكرة وEduTrack هو أحد مشاريعي التي تدعمها GitHub Student Pack وExpertus.ma.',
        'EduTrack': 'EduTrack',
        'EduTrackInfo': 'الهاتف: +212 (0)671645861<br>البريد الإلكتروني: <a>Kradamrohal@hotmail.com</a>',
    }
};

// Function to update navigation links based on selected language
function updateNavigation(language) {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        const originalText = link.dataset.originalText;
        if (originalText) {
            link.textContent = languages[language][originalText];
        }
    });
}

// Function to change the language
function changeLanguage(language) {
    // Update navigation
    updateNavigation(language);

    // Update other elements
    const elements = document.querySelectorAll('[data-original-text]');
    elements.forEach(element => {
        const originalText = element.dataset.originalText;
        if (originalText) {
            element.textContent = languages[language][originalText];
        }
    });
}
// Set default language to French
updateNavigation('en');

// Slider Script
let currentImageIndex = 0;
const images = document.querySelectorAll('.slider-img');
function updateSliderImage() {
    // Hide all images
    images.forEach((img, index) => {
        img.style.opacity = '0';
    });
    // Show the current image
    images[currentImageIndex].style.opacity = '1';
    // Update the current image index for the next cycle
    currentImageIndex = (currentImageIndex + 1) % images.length;
}
// Initialize the slider
updateSliderImage();
// Change the image every 5 seconds
setInterval(updateSliderImage, 5000);

