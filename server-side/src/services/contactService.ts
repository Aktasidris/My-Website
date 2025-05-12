import nodemailer from "nodemailer";
import ContactFormData from "../types/contactform";

export const sendEmailService = async ({ name, email, message, telno,subject }: ContactFormData) => {
  const port = Number(process.env.SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465, // 465 ise secure true olur
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    replyTo: email,
    subject: `${name}'den Yeni İletişim Formu Mesajı,Konu: ${subject}`,
    text: `
      İsim: ${name}
      Email: ${email}
      Tel No: ${telno}
      Subject:${subject}
      Mesaj: ${message}
      `,
    html: `
      <h3>Yeni Mesaj</h3>
      <p><strong>İsim:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong>${subject}</p>
      <p><strong>Tel No:</strong> ${telno}</p>
      <p><strong>Mesaj:</strong> ${message}</p>
    `,
  };


  await transporter.sendMail(mailOptions);


};
