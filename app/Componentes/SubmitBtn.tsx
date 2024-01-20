import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { useFormStatus } from 'react-dom'

function SubmitBtn() {
  const { pending } = useFormStatus()
  return (
    <button
      type='submit'
      className='flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition disabled:bg-opacity-65 disabled::scale-100 dark:bg-gray-600'
      disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit <FaPaperPlane className='text-xs opacity-70' />
        </>
      )}
    </button>
  )
}

export default SubmitBtn
