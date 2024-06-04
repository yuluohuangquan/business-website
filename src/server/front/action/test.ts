import { db } from "@/lib/db";

export const addTest = (params: any) => {
    return db.test.create({
        data: {
            ...params
        },
    });
};