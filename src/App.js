import Card from "./components/Card";
import D from './components/data.json'
import CardClass from './components/CardClass'
import  STATE from './STATE'
import Index from "./components/conditionalrendering/Index";
function App(){
// Addred from pc

  return (
    <div>
    {D.map((item,key)=> <Card title={item.title} key={key} description={item.description} />)}
    <CardClass title="New title"/>
    <STATE/>
    <hr/><br/>
    <Index/>
    </div>
  );
}
export default App;
