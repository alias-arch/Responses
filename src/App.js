import { useState } from "react"
import Respondant from "./component/Respondant.js"
import Response from "./component/Response.js"
function App() {
  const [showAddRespondant, setShwoAddRespondant] = useState(true);
  const [showAddResponse, setShowAddResponse] = useState(false);
  const changeShowingComponent = () => {
    setShwoAddRespondant(!showAddRespondant);
    setShowAddResponse(!showAddResponse);
  }

  // add Respondant
  const addRespondant = (respondant) => {
    console.log(respondant)
    // insert code here to save respondant to database
  }
  return (
    <div className="App">
      {showAddRespondant && <Respondant onSave={() => changeShowingComponent()} onAdd={addRespondant} />}
      {showAddResponse && <Response />}
    </div>
  );
}

export default App;
