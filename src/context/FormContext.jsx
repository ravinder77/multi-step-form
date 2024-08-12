import React, { createContext, useState } from 'react';



export const FormContext = createContext();


export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        plan: '',
        addons: []
    });

    const handleFormChange = (e) => { 
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        console.log(value);
    };

    


    const togglePlan = (plan) => {
        setFormData((prev) => ({
            ...prev,
            plan
        }));
    };




    return (
        <FormContext.Provider value={{ formData, setFormData, handleFormChange }}>
            {children}
        </FormContext.Provider>
    );
}



