let languageContent = {
    "ru": {
        "s": "Шоурил",
        "g": "Галерея",
        "se": "Услуги",
        "c": "Контакты",
        "intro-1": "Я - Марина Ни (aniraM eeN)",
        "intro-2": "Режиссёр кино и монтажа",
        "intro-3": "фотограф и моушн-дизайнер.",
        "video-1": "ВИДЕОСЪЁМКА",
        "video-2": "время работы оговаривается",
        "video-3": "подготовка к работе, раскадровка, помощь с поиском локации и реквизита",
        "video-4": "цветокоррекция",
        "video-5": "монтаж",
        "video-6": "добавление графики, при необходимости",
        "video-7": "саунд - дизайн",
        "photo-1": "ФОТОСЪЕМКА",
        "photo-2": "время съемки оговаривается",
        "photo-3": "подготовка мудборда",
        "photo-4": "помощь с поиском локации, реквизита, позированием",
        "photo-5": "количество готового материала от 15 до 40 фотографий, в зависимости от типа съёмки",
        "photo-6": "исходные материалы не высылаются",
        "montage-1": "МОНТАЖ",
        "montage-2": "монтаж вашего материала",
        "montage-3": "цветокоррекция",
        "montage-4": "саунд - дизайн",
        "montage-5": "графика, при необходимости",
        "mail": "Почта: anirameen@gmail.com",
        "soc": "Соц. сети:"
    },
    "en": {
        "s": "Showreel",
        "g": "Gallery",
        "se": "Services",
        "c": "Contacts",
        "intro-1": "I'm Marina Ni (aniraM eeN)",
        "intro-2": "Film director and editor",
        "intro-3": "photographer and motion designer",
        "video-1": "VIDEO",
        "video-2": "working hours are subject to",
        "video-3": "preparation for work, storyboarding, assistance with finding locations and props",
        "video-4": "color correction",
        "video-5": "editing",
        "video-6": "adding graphics if needed",
        "video-7": "sound design",
        "photo-1": "PHOTOSHOOT",
        "photo-2": "working hours are subject to",
        "photo-3": "moodboard preparation",
        "photo-4": "help with finding a location, props, posing",
        "photo-5": "the amount of finished material from 15 to 40 photos, depending on the type of shooting",
        "photo-6": "source materials are not sent",
        "montage-1": "EDITING",
        "montage-2": "edit of your video material",
        "montage-3": "color correction",
        "montage-4": "sound design",
        "montage-5": "graphics if needed",
        "mail": "Email: anirameen@gmail.com",
        "soc": "Socials"
    }
}

function swithcLang(lang) {
    for (let key in languageContent[lang]) {
       document.getElementById(key).innerHTML = languageContent[lang][key];
    }
 }