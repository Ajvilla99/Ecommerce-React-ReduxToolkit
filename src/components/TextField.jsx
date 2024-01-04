import React from 'react'

export const TextField = ({ type, name, value, onChange, placeholder, error = true, helperText }) => {

  return (
    <div className='w-full min-h-[48px]'>
        <div className='w-full'>
            <input
                type={type}
                name={name}
                value={value}
                onChange={ onChange }
                placeholder={placeholder}
                className={`input-textfield w-full h-12 rounded-md indent-4 outline-none border-gray-100 border-b-2
                            ${ error ? 'border-red-400 border-b-2' : ''}`}/>
            
        </div>
        { 
          error ? <p className='text-xs font-semibold indent-1 text-red-600'>{helperText}</p> : ''
        }
    </div>
  )
}
