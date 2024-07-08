
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  // conditional rendering....
  //like if else in js...
  // let buttons=['Primary','Secondary','Success','Danger','Warning','Info','Light'];
  let buttons=[];

  // if(buttons.length==0){
  //   return <p>No button found!! where should I click?</p>
  // }

  let exp=buttons.length==0?<p>No button found!! where should I click?</p>:null;

  



  

  return (
    <>
    <br />
    <br />
    <h1>Buttons type:</h1>
    {exp}
    {buttons.map(item=> <p>{item}</p>)}
      

      
    </>
  )
}

export default App
