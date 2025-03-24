import { UserDetailsSchema } from "../types/userDetails.types";

export const userDetailsApi = {
    submitUserDetails: async (data: unknown) => {

        const parsedData = UserDetailsSchema.safeParse(data);
        if (!parsedData.success) {
            console.error("Validation errors:", parsedData.error.format());
            throw new Error("Invalid user details");
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));

        return {
            success: true,
            message: "User details submitted successfully",
            data: parsedData.data,
        };
    },
};
