import React from 'react';
import { useUserDetails } from '../../hooks/useUserDetails';
import * as S from './TrustPay.styles';

const UserDetailsForm: React.FC = () => {
    const {
        userDetails,
        handleChange,
        handleGenderChange,
        handleDateChange,
        validateUserDetails,
    } = useUserDetails();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateUserDetails()) {

            console.log('Form submitted:', userDetails);
        }
    };

    return (
        <S.FormWrapper onSubmit={handleSubmit}>
            <S.Header>User Details</S.Header>

            <S.FormField>
                <S.Label htmlFor="full_name">Full Name</S.Label>
                <S.Input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={userDetails.full_name}
                    onChange={handleChange}
                />
            </S.FormField>

            <S.FormField>
                <S.Label htmlFor="email">Email</S.Label>
                <S.Input
                    type="email"
                    id="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleChange}
                />
            </S.FormField>

            <S.FormField>
                <S.Label htmlFor="phone_number">Phone Number</S.Label>
                <S.Input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    value={userDetails.phone_number}
                    onChange={handleChange}
                />
            </S.FormField>

            <S.FormField>
                <S.Label htmlFor="address">Address</S.Label>
                <S.Input
                    type="text"
                    id="address"
                    name="address"
                    value={userDetails.address}
                    onChange={handleChange}
                />
            </S.FormField>

            <S.FormField>
                <S.Label htmlFor="gender">Gender</S.Label>
                <S.Select id="gender" name="gender" value={userDetails.gender} onChange={handleGenderChange}>
                    <option value="">Select Gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="OTHER">Other</option>
                </S.Select>
            </S.FormField>

            <S.FormField>
                <S.Label htmlFor="date_of_birth">Date of Birth</S.Label>
                <S.Input
                    type="date"
                    id="date_of_birth"
                    name="date_of_birth"
                    value={userDetails.date_of_birth || ''}
                    onChange={handleDateChange}
                />
            </S.FormField>
        </S.FormWrapper>
    );
};

export default UserDetailsForm;
