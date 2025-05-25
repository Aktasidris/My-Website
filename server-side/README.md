# Backend – Personal Portfolio

Bu dizin, Express.js tabanlı API sunucusunu içerir.

## 🔧 Kullanılan Teknolojiler

- **Node.js + Express.js**
- **TypeScript**
- **MongoDB** – Sadece testimonial verileri
- **Nodemailer** – SMTP email gönderimi
- **dotenv**
- **CORS**
- **Cache (in-memory)** – Rate limit için

## 🔐 API Yapısı

### GitHub

- `GET /api/github/repos`
- `GET /api/github/repos/:repoName`
- `GET /api/github/formatted` (cache destekli)

### İletişim Formu

- `POST /api/contact` (mail gönderir)

### Testimonials

- `GET /api/testimonials`
- `POST /api/testimonials`
- `GET /api/testimonials/:check-ip/:ip`

## 🧠 Cache Sistemi

- Her kullanıcı sadece 10 dakikada bir API çağrısı yapabilir
- Rate-limit için basit zaman damgalı cache sistemi

## 🧾 MongoDB Schema

```ts
export interface ITestimonial extends Document {
  name: string;
  role?: string;
  comment: string;
  userIp: string;
  createddate: string;
  user: string;
}
```
