const Button = props => {
  //  Write your code here.
  const {text, className} = props
  console.log(props)
  return (
    <button type='button' className={`button ${className}`}>
      {text}
    </button>
  )
}

const element = (
  //  Write your code here.
  <div className='social-buttons-container'>
    <div className='content-container'>
      <h1 className='heading'>Social Buttons</h1>
      <div className='buttons-container'>
        <Button text='Like' className='like-button' />
        <Button text='Share' className='share-button' />
        <Button text='Comment' className='comment-button' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
