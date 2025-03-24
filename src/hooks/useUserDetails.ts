import { useAtom } from 'jotai';
import { userDetailsAtom } from '../store/userDetails.atoms';

export const useUserDetails = () => {
    const [userDetails, setUserDetails] = useAtom(userDetailsAtom);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedGender = e.target.value as "MALE" | "FEMALE" | "OTHER";
        if (["MALE", "FEMALE", "OTHER"].includes(selectedGender)) {
            setUserDetails((prevState) => ({
                ...prevState,
                gender: selectedGender,
            }));
        }
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails((prevState) => ({
            ...prevState,
            date_of_birth: e.target.value,
        }));
    };

    const validateUserDetails = () => {
        // Проверка обязательных полей
        if (!userDetails.full_name || !userDetails.email || !userDetails.phone_number || !userDetails.address) {
            return false;
        }

        if (userDetails.gender && !["MALE", "FEMALE", "OTHER"].includes(userDetails.gender)) {
            return false;
        }

        if (userDetails.date_of_birth && isNaN(Date.parse(userDetails.date_of_birth))) {
            return false;
        }

        return true;
    };


    return {
        userDetails,
        handleChange,
        handleGenderChange,
        handleDateChange,
        validateUserDetails,
    };
};
