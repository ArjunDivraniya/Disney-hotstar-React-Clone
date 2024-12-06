import { useState } from 'react'

import Sidebar from './Components/Sidebar.jsx'
import Mainmenu from './Components/Mainmenu.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Sidebar/>
      <Mainmenu/>
    </>
  )
}

export default App
