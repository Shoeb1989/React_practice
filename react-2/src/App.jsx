import User from '../user'
import './App.css'
import Counter from './count'
import Team from './Team'
import Posts from '../posts'





function App() {

  function haldleClick(){
    alert('button Clicked')
  }
 
  const handleCLick2 = () => {
    alert('button Click again' + 5)
  }


  return (
    <>

    <h3>React Core Two</h3>

     <User></User>

      

      <Team></Team>

      <Counter></Counter>


      <button onClick={haldleClick} >Click Me</button>
      <button onClick={handleCLick2} >click Again</button>

      <button onClick={() => {alert('you good')}}>Again</button>

      <button>ole</button>

    
      <ol>
        <li>Component</li>
        <li>JSX</li>
        <li>Props</li>
        <li>State</li>
        <li>Even Handler</li>
        <li>Load data</li>
      </ol>
      <hr/>

     <Posts></Posts>



    

    

    
    

      
    </>
  )
}

export default App

