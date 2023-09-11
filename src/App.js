import Card from "./components/Card";
import D from './components/data.json'
import CardClass from './components/CardClass'
import  STATE from './STATE'
import Index from "./components/conditionalrendering/Indexfile";
import FORMfunBased from './components/formlearn/FormFunctionBased'
import FormClassBased from './components/formlearn/FormClassBased'
import Child from './components/child'
import Form3exercise from "./components/formlearn/Form3exercise";
import Formikform from "./components/formlearn/formikform";
function App(){
// Addred from pc
const handleChildData=(e)=>{
  console.log("this is App.js and"+e);
}

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
    <hr/><h1>Child to parent data passing</h1><br/>
    <Child Datawala={handleChildData}/>
    <hr/><h1>Form exercise</h1><br/>
    <Form3exercise/>
    <hr/><h1>Learn formik form</h1><br/>
    <Formikform/>


    </div>
    
    
  );
}
export default App;
