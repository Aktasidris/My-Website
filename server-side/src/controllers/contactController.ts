import { Request, Response } from "express";
import { sendEmailService } from "../services/contactService";
export const sendContactMessage = async (req: Request, res: Response) => {
    const { name, email, message,telno } = req.body;
  
    if (!name || !email || !message) {
      res.status(400).json({ error: "Tüm alanlar gereklidir." });
      return;
    }
  
    try {
      await sendEmailService({ name, email, message,telno });
      res.status(200).json({ message: "Mesaj başarıyla gönderildi." });
    } catch (error) {
      console.error("Mail gönderim hatası:", error);
      res.status(500).json({ error: "Mesaj gönderilirken bir hata oluştu." });
    }
  };