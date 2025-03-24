import React from 'react';
import * as S from './TrustPay.styles';
import { useShareLink } from '../../hooks/useShareLink';

const ShareLinkForm: React.FC = () => {
    const { shareLink, updateFormData, validateShareLink } = useShareLink();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateFormData(name as keyof typeof shareLink, value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationResult = validateShareLink();
        if (validationResult) {
            console.log('Form submitted:', shareLink);
        }
    };

    return (
        <S.FormWrapper onSubmit={handleSubmit}>
            <S.Header>Share a Link</S.Header>

            <S.FormField>
                <S.Label htmlFor="link_title">Link Title</S.Label>
                <S.Input
                    type="text"
                    id="link_title"
                    name="link_title"
                    value={shareLink.link_title}
                    onChange={handleChange}
                />
            </S.FormField>

            <S.FormField>
                <S.Label htmlFor="link_url">Link URL</S.Label>
                <S.Input
                    type="url"
                    id="link_url"
                    name="link_url"
                    value={shareLink.link_url}
                    onChange={handleChange}
                />
            </S.FormField>

            <S.FormField>
                <S.Label htmlFor="description">Description</S.Label>
                <S.Input
                    type="text"
                    id="description"
                    name="description"
                    value={shareLink.description}
                    onChange={handleChange}
                />
            </S.FormField>
        </S.FormWrapper>
    );
};

export default ShareLinkForm;
