import React from 'react'

function InputCombo() {
    return (
        <div class='flex flex-row'>
            <input
                className='bg-[#eee] py-1 px-3 flex-1 font-normal'
                id='userInput'
                name='userInput'
                type='text'
                placeholder='Email Address'
            />
            <button className='flex px-6 py-1 text-white bg-secondary'>Sign Up</button>
        </div>
    )
}

export default InputCombo