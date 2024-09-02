import './App.css'
import HookFrom from './Component/HookFrom/HookFrom'
import RefFrom from './Component/RefFrom/RefFrom'
import ReuseableFrom from './Component/ReuseableFrom/ReuseableFrom'
// import SimpleForm from './Component/SimpleForm/SimpleForm'
// import StatefulForm from './Component/Statefulform/StatefulForm'

function App() {

  const handlesignupsubmit = data => {
    console.log('sign Up', data );
}

const handleUpdateProfile = data => {
  console.log('update Data', data )
}
  return (
    <>
      
      <h1>Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookFrom></HookFrom> */}
      <ReuseableFrom fromtitle={'Sign Up'} 
      handlesubmit={handlesignupsubmit} ></ReuseableFrom>
      <ReuseableFrom fromtitle={'Profile Update'} handlesubmit={handleUpdateProfile} submitupdate='Update' ></ReuseableFrom>
    </>
  )
}

export default App
