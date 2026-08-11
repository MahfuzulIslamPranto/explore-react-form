import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SimpleReactForm from './Components/SimpleReactForm/SimpleReactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Explore React Form</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <SimpleReactForm></SimpleReactForm>
      </Suspense>
    </>
  )
}

export default App
