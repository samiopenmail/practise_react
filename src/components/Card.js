

function Card(props){  
  const {title,description}=props;

  return   (
  <div className='BorderStyle'>

    <h1 className='headingStyle'>{title}</h1>
    <p>{description}</p>
    <p > Footer of the card</p>
    <h2>Call BKB</h2>
    
  </div>)
};
export default Card;