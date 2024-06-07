import Header from "./components/Header"
import Result from "./components/Result";
import { useState } from "react"
function App() {
  const [inputDetails, setInputDetails] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedResult: 0,
    duration: 0,
  });
  return (
    <>
      <Header onSetDetails={setInputDetails} />
      <Result inputDetails={inputDetails} />
    </>
  )
}

export default App
