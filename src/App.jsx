import React, { useContext } from 'react'
import Form from './components/Form'
import Card from './components/Card'
import { MyNote } from './context/MyContext'

const App = () => {
  const { formData } = useContext(MyNote) 
  console.log(formData)

  return (
    <div className='h-full w-full'>
      <Form />
      <div className='flex flex-wrap gap-4 p-4'>
        {formData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default App
