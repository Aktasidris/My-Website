// data/cvPage.ts
import { FaInfoCircle, FaCodeBranch, FaMailBulk } from "react-icons/fa";

export const cvPageData = {
  sectionInfo: {
    tr: {
      title: "CV Görüntüleme ve İndirme",
      description:
        "Bu sayfada Sağdaki emoji ikonuyla Cv'mi açıp kapatabilir, CV açıkken CV'yi görüntüleyebilir ve .pdf formatında indirebilirsiniz.",
    },
    en: {
      title: "View and Download My CV",
      description:
        "On this page, you can toggle my CV using the emoji icon on the right. When open, you can view and download it in PDF format.",
    },
  },
  ctas: [
    {
      to: "/about",
      Icon: FaInfoCircle,
      text: {
        tr: "Hakkımda daha fazlası.",
        en: "More about me.",
      },
      buttonLabel: {
        tr: "Hakkında",
        en: "About",
      },
    },
    {
      to: "/projects",
      Icon: FaCodeBranch,
      text: {
        tr: "Projelerimi inceleyin.",
        en: "Check out my projects.",
      },
      buttonLabel: {
        tr: "Projeleri Görüntüle",
        en: "View Projects",
      },
    },
    {
      to: "/contact",
      Icon: FaMailBulk,
      text: {
        tr: "Eğer Merhaba demek isterseniz.",
        en: "If you'd like to say hello.",
      },
      buttonLabel: {
        tr: "Merhaba!",
        en: "Say Hi!",
      },
    },
  ],
  cvClosedMessage: {
    tr: "CV kapandı. Ama, ben hâlâ buradayım. 👀",
    en: "The CV is closed. But I'm still here. 👀",
  },
};
