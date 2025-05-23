import { Request, Response } from "express";
import * as testimonialService from "../services/testimonial.service";

export const getAllTestimonials = async (_req: Request, res: Response) => {
    try {
        const list = await testimonialService.getAll();
        res.json(list);
    } catch (err) {
        res.status(500).json({ message: "Yorumlar alınamadı." });
    }
};

export const submitTestimonial = async (req: Request, res: Response) => {
    try {
        const result = await testimonialService.add(req.body);
        if (!result.success) {
            res.status(400).json({ message: result.message }); return
        }
        res.status(201).json({ message: "Yorum başarıyla eklendi", data: result.data });
    } catch (err) {
        res.status(500).json({ message: "Yorum gönderilirken hata oluştu." });
    }
};

export const checkIpHasCommented = async (req: Request, res: Response) => {
    try {
        const hasCommented = await testimonialService.hasCommented(req.params.ip);
        res.json({ hasCommented });
    } catch (err) {
        res.status(500).json({ message: "IP kontrolü yapılamadı." });
    }
};
