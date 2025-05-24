import Testimonial, { ITestimonial } from "../models/testimonial.model";
import { TestimonialFormInput } from "../types/testimonial.types";

// Hepsini getir
export const getAll = async (): Promise<ITestimonial[]> => {
    return await Testimonial.find().sort({ createddate: -1 });
};

// Yeni ekle
export const add = async (
    data: TestimonialFormInput
): Promise<{ success: boolean; data?: ITestimonial; message?: string }> => {
    const exists = await Testimonial.findOne({ userIp: data.userIp });

    if (exists) {
        return { success: false, message: "Bu IP zaten yorum yaptı." };
    }

    const newTestimonial = new Testimonial({
        ...data,
        createddate: new Date().toISOString(),
        user: "/avatar3.png"
    });

    const saved = await newTestimonial.save();
    return { success: true, data: saved };
};

// IP yorum yaptı mı?
export const hasCommented = async (ip: string): Promise<boolean> => {
    const exists = await Testimonial.exists({ userIp: ip });
    return !!exists;
};
