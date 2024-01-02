
import { Link } from 'react-router-dom'
import { FaUser, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useMemo, useState } from 'react';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication } from '../../store/auth';

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth );

  const [ viewPass, setViewPass ] = useState(false);

  const dispatch =  useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'prueba@gmail.com',
    password: '123456'
  })

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch(checkingAuthentication())
    console.log({ email, password })
  }

  return (
    <div className='w-full h-[90vh] box-border flex flex-col justify-center items-center relative  overflow-hidden'>
      {/* FORMULARIO */}
      <form 
            onSubmit={ onSubmit }
            className='w-11/12 flex flex-col gap-5
                       lg:w-96'>
        {/* INPUTS */}
        <div className='w-full flex flex-col justify-center items-center gap-5 mb-4'>
          <div className='w-3/5 h-12 rounded-md flex justify-center items-center bg-gray-200 uppercase text-gray-300'>LOGO</div>
          <h2 className='text-3xl text-gray-200'>Iniciar sesión</h2>
        </div>
        <div className='Inputs w-full flex flex-col gap-5'>
          <div className='w-full flex flex-row'>
            <div className='w-12 h-12 rounded-l-md bg-gray-50 flex items-center justify-center'>
              <FaUser className='text-3xl text-gray-200'/>
            </div>
            <input type="text"
                   placeholder='correo@email.com'
                   name='email'
                   value={ email }
                   onChange={onInputChange}
                   className='w-[calc(100%-40px)] h-12 rounded-r-md outline-none indent-3 text-gray-200'
            />
          </div>
          <div className='w-full flex flex-row relative items-center'>
            <div className='w-12 h-12 rounded-l-md bg-gray-50 flex items-center justify-center'>
              <FaLock className='text-3xl text-gray-200'/>
            </div>
            <input type="password"
                   placeholder='contraseña'
                   onChange={onInputChange}
                   name='password'
                   value={password}
                   className='w-[calc(100%-40px)] h-12 rounded-r-md outline-none indent-3 text-gray-200 pr-12'
            />
            <button 
              
              onClick={() => setViewPass(!viewPass)} type='button' className='absolute w-12 h-12 right-0 flex items-center justify-center'>
              {
                !viewPass ? <FaRegEyeSlash className='text-2xl text-gray-200 '/> : <FaRegEye className='text-2xl text-gray-200 '/>
              }
            </button>
          </div>
        </div>
        {/* Message de autenticacion */}
        {/* <div className='w-full h-14  rounded-md bg-red-300 flex items-center justify-center'>
              <p className='text-gray-200'>Error de autentificación</p>
        </div> */}
        {/* buttons */}
        <div className='Buttons flex flex-col'>
          <button 
            disabled={isAuthenticating}
            type='submit' className='h-12 bg-gray-200 rounded text-gray-300'>Iniciar Sesión</button>
          <div className='flex flex-col gap-4 items-center mt-4'>
            <Link to={'/'} className='text-sm text-gray-500'>¿Se te olvido la contraseña?</Link>
            <Link
              to={'/register'}
              className='text-sm text-gray-500'>¿No tienes una cuenta? registrate</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
