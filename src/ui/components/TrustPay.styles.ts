import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
`;

export const CongratulationMessage = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: #28a745;
    margin-top: 20px;
`;

export const Header = styled.div`

    font-size: 24px;
    font-weight: bold;
    text-align: left;
    padding: 20px 0;
        margin-bottom: 20px;
`;

export const ProgressBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
    width: 100%;
`;

export const StepWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex: 1;
    max-width: 170px;
`;

export const StepCircle = styled.div<{ active: boolean }>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? '#4caf50' : '#bbb')};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: relative;
    z-index: 1;
`;

export const StepLabel = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: #333;
    position: absolute;
    top: -25px;
    white-space: nowrap;
    text-align: center;
`;

export const ProgressLine = styled.div<{ progress: number }>`
    position: absolute;
    top: 10px;
    left: 50%;
    width: 75%;
    height: 2px;
    background: ${({ progress }) =>
            `linear-gradient(to right, 
        ${progress === 0 ? '#bbb' : '#4caf50'} ${progress === 0 ? '0%' : progress === 1 ? '33%' : progress === 2 ? '66%' : '100%'}, 
        #bbb ${progress === 0 ? '0%' : progress === 1 ? '33%' : progress === 2 ? '66%' : '100%'})`};
    z-index: 0;
    transition: background 0.3s ease;
    transform: translateX(-50%);
`;

export const FormWrapper = styled.div`
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    align-items: center;
`;

export const FormField = styled.div`
    margin-bottom: 10px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 97%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const PreviousButton = styled.button`
        padding: 10px 20px;
        font-size: 16px;
        color: #fff;
        background-color: #ccc; 
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 48%;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #4caf50;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 48%;
`;

export const ErrorText = styled.p`
    color: red;
    font-size: 12px;
    margin-top: 5px;
`;

export const SelectProvider = styled.select`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    font-size: 16px;
`;

export const Select = styled.select`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const ImagePreviewWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ImagePreviewItem = styled.div`
    position: relative;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 15px;
`;

export const ImagePreview = styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
    cursor: pointer;
`;

export const RemoveButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export const UploadButton = styled.div`
    width: 75px;
    height: 75px;
    background-color: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
`;

export const UploadIcon = styled.span`
    font-size: 30px;
    color: #fff;
`;

export const HiddenFileInput = styled.input`
    display: none;
`;
