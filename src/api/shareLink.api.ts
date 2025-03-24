import { ShareLinkSchema } from "../types/shareLink.types";

export const shareLinkApi = {
    submitShareLink: async (data: unknown) => {

        const parsedData = ShareLinkSchema.safeParse(data);
        if (!parsedData.success) {
            throw new Error("Invalid link details");
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));

        return {
            success: true,
            message: "Link shared successfully",
            data: parsedData.data,
        };
    },
};
