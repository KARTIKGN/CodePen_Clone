import Home from "./components/Home"
import DataProvider from "./contexts/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <Home/>
    </DataProvider>
  )
}

export default App