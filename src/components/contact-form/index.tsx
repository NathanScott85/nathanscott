import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import { IComponentProps } from '../../lib/interfaces';

export const ContactForm: React.FunctionComponent<IComponentProps> = ({
    componentType = 'ContactForm',
    currentComponent,
}: IComponentProps): JSX.Element => {
    const [state, handleSubmit] = useForm('mrgonvbw');
    const isVisible = currentComponent == componentType;

    if (state.succeeded) {
        return <ContactForm currentComponent={currentComponent} />;
    }

    return (
        <Form onSubmit={handleSubmit} isVisible={isVisible}>
            <h2>Contact form</h2>
            <Paragraph>
                Fields marked with an asterisk (*) are required.
            </Paragraph>
            <FormContent>
                <FormContentWrapper>
                    <Label htmlFor="text">First Name</Label>
                    <Input id="text" type="text" name="first name" />
                    <Label htmlFor="email">Email*</Label>
                    <Input id="email" type="email" name="email" />
                </FormContentWrapper>
                <FormContentWrapper>
                    <Label htmlFor="text">Last Name</Label>
                    <Input id="text" type="text" name="last name" />
                    <Label htmlFor="email">Phone Number*</Label>
                    <Input id="text" type="text" name="phone Number" />
                </FormContentWrapper>
            </FormContent>
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <span>
                <TextAreaLabel htmlFor="message">Message</TextAreaLabel>
                <TextArea id="message" name="message" />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <Button type="submit" disabled={state.submitting}>
                    Submit
                </Button>
            </span>
        </Form>
    );
};

const Form = styled.form<{ isVisible?: any }>`
    margin: 20% 10% 0% 0%;
    background-color: #faf9f4;
    color: #1f2326;
    ${({ isVisible }) => (isVisible ? 'display: flex' : 'display: none')};

    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3px;

    h2 {
        font-size: 1.8rem;
        position: static;
        width: 926px;
        height: 37px;
        left: 0px;
        top: 19.75px;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 37px;
        text-align: center;
        color: #000000;
        margin: 16.5px 0px;
    }
    span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const FormContent = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'Cinzel', serif;
`;

const FormContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px 30px;
`;

const Label = styled.label`
    width: 387px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin: 8px 0px;
`;

const Paragraph = styled.p`
    width: 926px;
    height: 19px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #000000;
`;

const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 9px 15px;
    background: #58a6ff;
    border-radius: 3px;
    font-weight: 400;
    margin: 1rem 1rem 1rem 1rem;
    color: #ffffff;
    border-style: none;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.25);
    &:hover {
        background-color: #faf9f4;
        color: #1f2326;
    }
`;

const Input = styled.input`
    background: #ffffff;
    box-sizing: border-box;
    color: #9e9e9e;
    border: 1px solid #666666;
    font-family: 'Open Sans', sans-serif;
    border-radius: 2px;
    padding: 0.5rem;
    &:focus {
        outline: 0;
        border-radius: 3px;
        border: 1px solid black;
        background-color: #faf9f4;
        color: #1f2326;
    }
`;

const TextArea = styled.textarea`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    width: 559px;
    height: 70px;
    border-radius: 3px;
    margin: 16.5px 0px;
    background: #ffffff;
    border: 1px solid #cccccc;
    margin: 10px 0px;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #9e9e9e;
    border: 1px solid #666666;

    &:focus {
        outline: 0;
        border-radius: 3px;
        border: 1px solid black;
        background-color: #faf9f4;
        color: #1f2326;
    }
`;

const TextAreaLabel = styled.label`
    width: 458px;
    height: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #1f2326;
    margin: 16px 0px;
`;
