import { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItemName) {
      toast.error('please provide a value')
      return
    }
    addItem(newItemName)
    setNewItemName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>list me</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button className='btn' type='submit'>
          add item
        </button>
      </div>
    </form>
  )
}
export default Form
