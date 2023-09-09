import Card from "./components/Card";
import D from './components/data.json'
function App(){


  return (
    <div>
    {D.map((item)=> <Card title={item.title} description={item.description} />)}
    </div>
  );
}
export default App;
