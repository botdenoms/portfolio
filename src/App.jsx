import { useState } from 'react'
import './App.css'

import AppBar from './components/AppBar'
import BodyContent from './components/BodyContent'

function App() {
  const [tab, setTab] = useState(0)

  const tabHandler = (i) =>{
    setTab(i)
  }

  return (
    <>
      <AppBar tab={tab} handler={tabHandler}/>
      <BodyContent tab={tab}/>
    </>
  )
}

export default App
