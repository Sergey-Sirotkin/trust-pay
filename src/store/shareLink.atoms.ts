import { atom } from 'jotai';
import { ShareLink } from "../types/shareLink.types";

export const shareLinkFormDataAtom = atom<ShareLink>({
    link_title: '',
    link_url: '',
    description: '',
});

export const shareLinkErrorsAtom = atom<ShareLink>({
    link_title: '',
    link_url: '',
    description: '',
});
