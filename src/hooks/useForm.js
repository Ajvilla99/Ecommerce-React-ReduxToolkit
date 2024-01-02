import { useEffect, useMemo, useState } from "react";


export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});
    
    useEffect(() => {
        createValidators();
    }, [ formState ])

    const isFormValid = useMemo( () => {
        for (const formValues of Object.keys( formValidation )) {
            if ( formValidation[formValues] !== null ) return false; 
        }
    }, [ formValidation ])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }
    
    const createValidators = () => {
        
        const formCheckedValues = {};

        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage = 'Este campo es requerido*' ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        
        ...formValidation,
        isFormValid,
    }
}