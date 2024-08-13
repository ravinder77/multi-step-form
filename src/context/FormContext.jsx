import React, { createContext, useState } from 'react';



export const FormContext = createContext();


export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    
    });

    const [planData, setPlanData] = useState({
        planName: '',
        planPrice: ''
    });




    const handleFormChange = (e) => { 
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        console.log(value);
    };

    

    




    return (
        <FormContext.Provider value={{ formData, setFormData, handleFormChange, planData, setPlanData }}>
            {children}
        </FormContext.Provider>
    );
}



