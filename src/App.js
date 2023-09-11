import Card from "./components/Card";
import D from './components/data.json'
import CardClass from './components/CardClass'
import  STATE from './STATE'
import Index from "./components/conditionalrendering/Index";
import FORMfunBased from './components/formlearn/FormFunctionBased'
import FormClassBased from './components/formlearn/FormClassBased'
function App(){
// Addred from pc

  return (
    <div>
    {D.map((item,key)=> <Card title={item.title} key={key} description={item.description} />)}
    <CardClass title="New title"/>
    <STATE/>
    <hr/><br/>
    <Index/>

    <hr/><h1>form learn</h1><br/>
    <FORMfunBased/>
    <hr/><h1>FormClassBasedLearn</h1><br/>
    <FormClassBased/>
    </div>
    
    
  );
}
export default App;
