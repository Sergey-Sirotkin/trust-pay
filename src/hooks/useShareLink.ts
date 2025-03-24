import { useAtom } from 'jotai';
import { shareLinkFormDataAtom, shareLinkErrorsAtom } from '../store/shareLink.atoms';

export const useShareLink = () => {
    const [shareLink, setFormData] = useAtom(shareLinkFormDataAtom);

    const updateFormData = (key: keyof typeof shareLink, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const validateShareLink = () => {

        // Проверка обязательных полей
        if (!shareLink.link_title) {
            return false;
        }

        if (!shareLink.link_url) {
            return false;
        }

        if (!shareLink.description) {
            return false;
        }

        return true;
    };


    return { shareLink, updateFormData, validateShareLink };
};
