import React from 'react';
import { useProductDetails } from '../../hooks/useProductDetails';
import * as S from './TrustPay.styles';

const ProductDetailsForm: React.FC = () => {
    const {
        productDetails,
        imagePreviews,
        error,
        handleChange,
        handlePriceChange,
        handleImageUpload,
        handleImageRemove,
    } = useProductDetails();

    return (
        <S.FormWrapper>
            <S.Header>Product Details</S.Header>

            <S.FormField>
                <S.Label htmlFor="product_title">Product Title</S.Label>
                <S.Input
                    type="text"
                    id="product_title"
                    name="product_title"
                    value={productDetails.product_title}
                    onChange={handleChange}
                />
            </S.FormField>

            <S.FormField>
                <S.Label htmlFor="product_description">Product Description</S.Label>
                <S.Input
                    type="text"
                    id="product_description"
                    name="product_description"
                    value={productDetails.product_description}
                    onChange={handleChange}
                />
            </S.FormField>

            <S.FormField>
                <S.Label htmlFor="product_images">Product Images</S.Label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <S.UploadButton onClick={() => document.getElementById('product_image_input')?.click()}>
                        <S.UploadIcon>+</S.UploadIcon>
                    </S.UploadButton>
                    <S.HiddenFileInput
                        type="file"
                        id="product_image_input"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                    />
                    <S.ImagePreviewWrapper>
                        {imagePreviews.map((preview, index) => (
                            <S.ImagePreviewItem key={index}>
                                <S.ImagePreview
                                    src={preview}
                                    alt={`Product preview ${index + 1}`}
                                    onClick={() => window.open(preview, '_blank')}
                                />
                                <S.RemoveButton onClick={() => handleImageRemove(index)}>
                                    ✖
                                </S.RemoveButton>
                            </S.ImagePreviewItem>
                        ))}
                    </S.ImagePreviewWrapper>
                </div>
                {error && <S.ErrorText>{error}</S.ErrorText>}
            </S.FormField>

            <S.FormField>
                <S.Label htmlFor="price">Price</S.Label>
                <S.Input
                    type="number"
                    id="price"
                    name="price"
                    value={productDetails.price || ''}
                    onChange={handlePriceChange}
                />
            </S.FormField>
        </S.FormWrapper>
    );
};

export default ProductDetailsForm;
