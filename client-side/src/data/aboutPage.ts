// data/aboutPage.ts
import { FaEnvelope, FaCode, FaPaperPlane, FaTableTennis } from "react-icons/fa";
import { PiMaskHappyFill } from "react-icons/pi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { LuLanguages } from "react-icons/lu";
import { FaPersonSwimming } from "react-icons/fa6";
import { RiBilliardsFill } from "react-icons/ri";

export const heroSection = {
    title: {
        tr: "Merhaba, ben İdris – Full Stack Geliştirici",
        en: "Hi, I’m İdris – a Full Stack Developer",
    },
    description: {
        tr: "Fonksiyonellik, ölçeklenebilirlik ve kullanıcı deneyimine odaklanarak full stack web uygulamaları geliştiriyorum.",
        en: "I build full stack web applications with a focus on functionality, scalability, and user experience.",
    },
    cta: {
        text: {
            tr: "Neler geliştirdiğimi görmek ister misin?",
            en: "Wanna see what I've built?",
        },
        to: "/projects",
        buttonlabel: {
            tr: "Projelerime Göz At",
            en: "See My Projects",
        },
        Icon: FaCode,
    },
};
export const titles = {
    timelinetitle: {
        "tr": "Yazılımdaki Yolculuğum", "en": "My Developer Journey"
    }, techstacktitle: {
        "tr": "Teknoloji Çantam",
        "en": "My Tech Bag"
    }, hobbytitle: {
        "tr": " İlgi Alanlarım",
        "en": "Hobbies"
    }
}
export const timeline = [
    {
        year: "2021",
        title: { "en": "Dorm Entry System", "tr": "Yurt Giriş Çıkış Sistemi" },
        tech: ["C#", "SQL", ".NET Framework"],
        description: {
            tr: "Yurt giriş çıkışlarını takip eden basit bir masaüstü projesi.",
            en: "A basic desktop project for dormitory entrance tracking.",
        },
    },
    {
        year: "2023",
        title: {
            "en": "Java Calculator (Municipality Internship)",
            "tr": "Java Hesap Makinası(Belediye Stajı)"
        },
        tech: ["Java", "Swing"],
        description: {
            tr: "Belediye stajım sırasında oluşturduğum basit bir hesap makinesi uygulaması.",
            en: "A standalone calculator app built during my internship.",
        },
    },
    {
        year: "2023",
        title: {
            "en": "Bus Location Tracker (Municipality Internship)",
            "tr": "Otobüs Konum Takipçisi (Belediye Stajı)"
        },
        tech: ["Tkinter", "Python", "Selenium", "Data Scraping"],
        description: {
            tr: "Belediyeye ait verilerle entegre çalışan canlı otobüs takip ekranı prototipi.",
            en: "Created a live bus tracking screen prototype, integrated with municipal data.",
        },
    },
    {
        year: "2023",
        title: { "en": "Voice ML Project (Graduation Project)", "tr": "Ses ML Projesi (Bitirme Projesi)" },
        tech: ["Python", "Tkinter", "Google API", "ML"],
        description: {
            tr: "Ses girişlerinden yaş, cinsiyet ve duyguyu tahmin eden bir makine öğrenmesi projesi.",
            en: "Predicted age, gender, and emotion from voice inputs.",
        },
    },
    {
        year: "2024",
        title: {"en":"Best Place Search (Team)","tr":"En İyi Yer Arama (Ekip Projesi)"},
        tech: ["Node.js", "Express", "MongoDB"],
        description: {
            tr: "Google harita üzerinde en iyi yerleri API’ler aracılığıyla bulmayı amaçlayan takım projesi. Bir Upwork Projesi.",
            en: "Team project to find best places on map using APIs. A Upwork's project",
        },
    },
    {
        year: "2024",
        title: {"en":"Nergiz Academy International Consulting (Freelance)","tr":"Nergiz Academy Yurt Dışı Danışmanlık (Freelance)"},
        tech: ["Node.js", "Express", "MongoDB", "Bootstrap", "EJS"],
        description: {
            tr: "Gerçek dağıtım deneyimi sunan freelance full stack proje.",
            en: "Freelance full stack project. Real deployment experience.",
        },
    },
    {
        year: "2025",
        title: {"en":"Portfolio Website","tr":"Portfolio Websitem"},
        tech: ["React", "Redux", "Tailwind CSS","Typescript","Express","Github API","Vercel API"],
        description: {
            tr: "Şu an görüntülediğiniz portföy projem.",
            en: "Current portfolio project – you’re looking at it!",
        },
    },
];

export const techStack = {
    frontend: ["React", "Redux", "TypeScript", "Tailwind CSS", "EJS", "Bootstrap", "Fetch API"],
    backend: ["Node.js", "Express", "REST API", "Python", "Java"],
    database: ["MongoDB", "SQL"],
    tools: ["Vercel", "Git", "Google APIs", "Search Console", "Ngrok", "Docker"],
};

export const personalSection = {
    title: {
        tr: "Koddun Ötesinde",
        en: "Beyond Code",
    },
    description: {
        tr: "Ben sadece bir geliştirici değilim. İnsanları güldürmeyi, yeni şeyler denemeyi ve aktif kalmayı seven meraklı bir kaşifim.",
        en: "I’m not just a developer. I’m also a curious explorer who loves making people laugh, trying new things, and staying active.",
    },
    cta: {
        text: {
            tr: "Nasıl çalıştığımı daha yakından öğrenmek ister misin?",
            en: "Want to know more about how I work?",
        },
        to: "/contact",
        buttonlabel: {
            tr: "İletişime Geç",
            en: "Let's Talk",
        },
        Icon: FaEnvelope,
    },
    hobbies: [
        { name: { tr: "Mizah ve İletişim", en: "Humor & Communication" }, Icon: PiMaskHappyFill },
        { name: { tr: "Seyahat", en: "Travelling" }, Icon: MdOutlineTravelExplore },
        { name: { tr: "Yabancı Diller", en: "Languages" }, Icon: LuLanguages },
        { name: { tr: "Yüzme", en: "Swimming" }, Icon: FaPersonSwimming },
        { name: { tr: "Masa Tenisi", en: "Table Tennis" }, Icon: FaTableTennis },
        { name: { tr: "Bilardo", en: "Billiards" }, Icon: RiBilliardsFill },
    ],
};

export const closingCTA = {
    text: {
        tr: "Birlikte etkili bir şey üretmeye hazır mısın?",
        en: "Ready to build something impactful together?",
    },
    to: "/contact",
    buttonlabel: {
        tr: "Bana Ulaş",
        en: "Contact Me",
    },
    Icon: FaPaperPlane,
};
