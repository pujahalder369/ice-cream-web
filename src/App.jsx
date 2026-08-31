import { BrowserRouter } from "react-router-dom"
import MainRoute from "./Route"
import ContextProvider from "./ContextProvider/Context"

function App() {

  return (
    <BrowserRouter>
        <ContextProvider>
          <MainRoute />
        </ContextProvider>
    </BrowserRouter>
  )
}

export default App
