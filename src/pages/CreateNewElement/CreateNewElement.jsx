import css from './CreateNewElement.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateNewElement() {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('pizza')
  const [isSending, setSending] = useState(false)
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault();
    const newArr = {
      title: title,
      price: price,
      img: image,
      description: description
    }
    console.log(newArr);
      fetch('https://62d01fd0d9bf9f170583e94b.mockapi.io/' + status,{
        method: 'POST',
        body: JSON.stringify(newArr),
        headers: {
          'Content-Type':'application/json'
        }
      })
      .finally(() => {
        setSending(false)
      })
      .then(() => {
        navigate('/admin/')
      })
    }
  
  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleChangePrice = (e) => {
    setPrice(e.target.value)
  }
  const handleChangeImg = (e) => {
    setImage(e.target.value)
  }
  const handleChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  return (
    <div className="container page">
      <h2 className="text_center">Create new element</h2>
      <form className={css.form_item} onSubmit={submit}>
        <input  value={title} onChange={handleChangeTitle} type="text" placeholder="Title" required/>
        <input  value={price} onChange={handleChangePrice} type="number" placeholder="Price" required/>
        <input  value={image} onChange={handleChangeImg} placeholder='Image url' type="url" required/>
        <textarea value={description} onChange={handleChangeDescription} name="" id="" cols="30" rows="5" required placeholder='Description'>
        </textarea>
        <div>
          <label>Pizza
          <input name="status" type="radio" value='pizza' checked={status === 'pizza'} onChange={(e) => setStatus(e.target.value)}/>
          </label>
          <label> Drinks
          <input name="status" type="radio" value='drinks'  checked={status === 'drinks'} onChange={(e) => setStatus(e.target.value)}/>
          </label>
        </div>
        <button disabled={isSending} type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateNewElement