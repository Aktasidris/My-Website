# Frontend – Personal Portfolio

Bu dizin, React tabanlı frontend uygulamasını içerir.

## 🚀 Kullanılan Teknolojiler

- **React + TypeScript**
- **Redux Toolkit** – State yönetimi
- **Tailwind CSS v4** – Custom :root theme tanımı
- **React Router DOM** – Çok sayfalı yönlendirme
- **Framer Motion** – Animasyonlar
- **Lottie** – JSON animasyonları
- **React Icons**
- **i18next** – Çoklu dil desteği (EN/TR)

## 📌 Sayfa Yapısı

- `/home`
- `/projects` (liste & detay)
- `/about`
- `/contact`
- `/testimonials`
- `/cv`

## 🎨 Özellikler

- Responsive design (mobil öncelikli)
- 3 Tema Desteği: `light`, `dark`, `sunset` (varsayılan)
- Her sayfa için dil dosyaları: `data/{page}.ts`
- Redux ile error/loading/success state yönetimi
- Form inputları için Toastify uyarıları
- Animasyonlu 404 ve teşekkür sayfası (Lottie)

## 🛠️ Kurulum

```bash
cd client-side
npm install
npm run dev
```

## 📁 Yapı

components/
features/
pages/
sections/
store/
└── features/{page}/
├── thunks.ts
├── slice.ts
types/
