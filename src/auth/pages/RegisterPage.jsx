import { Link } from "react-router-dom"
import { useForm } from "../../hooks"
import { TextField } from "../../components"
import { useMemo, useState } from "react"
import { startCreatingUserWithEmailPassword } from "../../store/auth"
import { useDispatch, useSelector } from "react-redux"

import './css/animation/loader.css'
import { IoAlertCircleOutline } from "react-icons/io5";

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@') , 'El correo debe tener una @' ],
  password: [ (value) => value.length >= 6 , 'La contraseña debe tener más de 6 letras' ],
  displayName: [ (value) => value.length >= 3 , 'El nombre es obligatorio' ],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const {
    formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm( formData, formValidations );

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if ( !isFormValid ) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <div className='w-full h-[90vh] box-border flex flex-col justify-center items-center relative  overflow-hidden'>
    <form onSubmit={ onSubmit }
      className='w-11/12 flex flex-col gap-5 lg:w-96'>
      <div className='w-full flex flex-col justify-center items-center gap-5 mb-4'>
            <div className='w-3/5 h-12 rounded-md flex justify-center items-center bg-gray-200 uppercase text-gray-300'>LOGO</div>
            <h2 className='text-3xl text-gray-200'>Crear Cuenta</h2>
      </div>
        <TextField 
          name="displayName"
          value={displayName}
          onChange={onInputChange}
          type="text"
          className="w-full h-12 rounded-md outline-none indent-4"
          placeholder="Nombre completo*"
          error={ !!displayNameValid && formSubmitted }
          helperText={displayNameValid}
        />
        <TextField 
          name="email"
          value={email}
          onChange={onInputChange}
          type="email"
          className="w-full h-12 rounded-md outline-none indent-4"
          placeholder="Correo* ej: abc@email.com"
          error={ !!emailValid && formSubmitted }
          helperText={emailValid}
        />
        <TextField 
          name="password"
          value={password}
          onChange={onInputChange}
          type="password"
          className="w-full h-12 rounded-md outline-none indent-4"
          placeholder="Password*"
          error={ !!passwordValid && formSubmitted }
          helperText={passwordValid}
        />
      <div className={`w-full h-12 bg-error-100 flex items-center justify-center gap-2 text-xs rounded-md text-error-200
                       lg:text-sm
                        ${ !!errorMessage ? '' : 'hidden'}`}>
         <IoAlertCircleOutline size={24}/> { errorMessage }
      </div>
      <div className="">
        <button
          disabled={ isCheckingAuthentication }
          type="submit"
          className={`w-full h-12 rounded-md text-gray-300 bg-gray-200 hover:bg-gray-600 ease-in duration-100
                     ${ isCheckingAuthentication ? 'bg-gray-400' : ''}`}>
            { isCheckingAuthentication ?  <span class="loader h-full"></span> : 'crear cuenta'}
        </button>
      </div>
      <Link
        to={'/login'}
        className='text-sm text-gray-500 text-center hover:text-gray-200'>¿Ya tienes una cuenta? iniciar sesión</Link>
    </form>
  </div>
  )
}
