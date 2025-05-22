export interface TestimonialFormInput {
    name: string;
    role?: string;
    comment: string;
    userIp: string;
}

export interface TestimonialData extends TestimonialFormInput {
    createddate: string;
    user: string;
}

export interface TestimonialState {
    data: TestimonialData[];
    list:TestimonialData[]
    loading: boolean;
    error: string | null;
    success: boolean;
}
