import UserContextProvider from "./context/UserContextProvider"
import './App.css'
import Login from "./components/Login"
import Profile from "./components/Profile"
function App() {

  return (
    <UserContextProvider>
      <h1 className="bg-gray-600 text-white text-center p-5 text-2xl">Understanding concept of context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
