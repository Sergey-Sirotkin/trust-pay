import {ProductDetailsSchema} from "../types/productDetails.types";

export const productDetailsApi = {
    submitProductDetails: async (data: unknown) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const parsedData = ProductDetailsSchema.safeParse(data);
        if (!parsedData.success) {
            throw new Error("Invalid product details");
        }

        return {
            success: true,
            message: "Product details submitted successfully",
            data: parsedData.data,
        };
    },
};
