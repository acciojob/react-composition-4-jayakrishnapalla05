
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [values,setvalues]=useState({name:"",email:"",password:""});
 



  return (
    <div>
        {/* Do not remove the main div */}
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" onChange={(e)=>setvalues({...values,name:e.target.value})}/>
          <label htmlFor="">Email</label>
          <input type="text" onChange={(e)=>setvalues({...values,email:e.target.value})}/>
          <label htmlFor="">Password</label>
          <input type="text" onChange={(e)=>setvalues({...values,password:e.target.value})}/>


          <button onSubmit={(e)=>{console.log(values);}}>Submit</button>
        </form>
    </div>
  )
}

export default App
