import Card from "./components/Card";
import D from './components/data.json'
import CardClass from './components/CardClass'
import  STATE from './STATE'
function App(){
// Addred from pc

  return (
    <div>
    {D.map((item,key)=> <Card title={item.title} key={key} description={item.description} />)}
    <CardClass title="New title"/>
    <STATE/>
    </div>
  );
}
export default App;
