import D from './data.json'
const title="this is title name";
function Card(props){  
  const {Title,Desc}=props;

  return   (
  <div>

    <h1 className='headingStyle'>{D[0].title}</h1>
    <p>{D[0].description}</p>
    <p>Footer of the card</p>
    <h2>Call BKB</h2>
    
  </div>)
};
export default Card;