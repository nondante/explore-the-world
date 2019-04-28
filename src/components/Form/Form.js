import React, {useState} from 'react';
import './Form.scss'

const Form = (props) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
  }

  
  let clazz1 = props.searchType === 'country' ? 'w-50 active button button--secondary' : 'w-50 button'
  let clazz2 = props.searchType === 'capital' ? 'w-50 active button button--secondary' : 'w-50 button'
  let id1 = props.searchType === 'country' ? 'active' : ''
  let id2 = props.searchType === 'capital' ? 'active' : ''
  return (
    <form className="form my-3" onSubmit={handleFormSubmit}>
      <div className="button-group">
        <button className={clazz1} id={id1} onClick={()=>props.handleCountryClick()}> <span className="button__inner">Country</span> </button>
        <button className={clazz2} id={id2}  onClick={()=>props.handleCapitalClick()}> <span className="button__inner">Capital City</span> </button>
      </div>
      <div className="input__container text-center">
        <input className="form__field" onChange={handleInputChange} type="text" placeholder={props.placeholder} id="search-input"/>
        <button className="btn btn--primary btn--inside uppercase" onClick={()=>props.onButtonClick(inputValue)}>Search</button>
      </div>
    </form>
  )
}

export default Form