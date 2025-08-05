import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { MyNote } from '../context/MyContext'

const Form = () => {
  const { formData, setFormData } = useContext(MyNote)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm()

  function submitHandler(data) {
    setFormData([...formData, data])
    reset()
  }

  return (
    <>
      <form
        className='flex flex-col gap-3 p-3 w-56'
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          {...register('title', { required: true })}
          className='border px-8 py-2 rounded-lg'
          type='text'
          placeholder='title'
        />
        <input
          {...register('description', { required: true })}
          className='border px-8 py-2 rounded-lg'
          type='text'
          placeholder='description'
        />
        <input
          className='border px-8 py-2 rounded-lg bg-blue-500 text-white cursor-pointer'
          type='submit'
          value='Submit'
        />
      </form>
    </>
  )
}

export default Form
