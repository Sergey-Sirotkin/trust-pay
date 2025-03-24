import { atom } from 'jotai';
import { UserDetails } from '../types/userDetails.types';

export const userDetailsAtom = atom<UserDetails>({
    full_name: '',
    email: '',
    phone_number: '',
    address: '',
    gender: undefined,
    date_of_birth: undefined,
});
