import { useAtom } from "jotai";
import { productDetailsAtom } from "../store/productDetails.atoms";
import { useState } from "react";

export const useProductDetails = () => {
    const [productDetails, setProductDetails] = useAtom(productDetailsAtom);

    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [error, setError] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProductDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value)) {
            setProductDetails((prevState) => ({
                ...prevState,
                price: value,
            }));
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const validImages = Array.from(files);

            if (validImages.length + imageFiles.length > 3) {
                setError("You can only upload a maximum of 3 images.");
                return;
            } else {
                setError("");
            }

            const previews: string[] = [];
            const newImageFiles: File[] = [];

            validImages.forEach((file) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    previews.push(reader.result as string);
                    newImageFiles.push(file);

                    if (previews.length === validImages.length) {
                        setImagePreviews((prev) => [...prev, ...previews]);
                        setImageFiles((prev) => [...prev, ...newImageFiles]);
                        setProductDetails((prevState) => ({
                            ...prevState,
                            product_images: [...(prevState.product_images || []), ...newImageFiles],
                        }));
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const handleImageRemove = (index: number) => {
        const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
        const updatedFiles = imageFiles.filter((_, i) => i !== index);

        setImagePreviews(updatedPreviews);
        setImageFiles(updatedFiles);

        setProductDetails((prevState) => ({
            ...prevState,
            product_images: updatedFiles,
        }));
    };

    const validateProductDetails = () => {
        if (!productDetails.product_title ||
            !productDetails.product_description ||
            !productDetails.price) {
            setError("Product title, description, and price are required.");
            return false;
        }

        if ((productDetails.product_images?.length ?? 0) === 0) {
            setError("");
            return true;
        }

        if ((productDetails.product_images?.length ?? 0) > 0) {
            setError("");
            return true;
        }

        setError("At least one image is required.");
        return false;
    };

    return {
        productDetails,
        setProductDetails,
        validateProductDetails,
        imagePreviews,
        setImagePreviews,
        imageFiles,
        setImageFiles,
        error,
        handleChange,
        handlePriceChange,
        handleImageUpload,
        handleImageRemove,
    };
};
