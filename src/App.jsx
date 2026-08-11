import { Suspense } from 'react'
import './App.css'
import SimpleReactForm from './Components/SimpleReactForm/SimpleReactForm'
import FormActions from './Components/FormAction/FormActions'
import ControlledField from './Components/ControlledField/ControlledField'

function App() {
  return (
    <>
      <h1>Explore React Form</h1>
      <Suspense fallback={<span>Loading..</span>}>
        <h3>Simple React From</h3>
        <SimpleReactForm></SimpleReactForm>
      </Suspense>
      <Suspense fallback={<span>Loading..</span>}>
        <h3>Form Action</h3>
        <FormActions></FormActions>
      </Suspense>
      <Suspense fallback={<span>Loading..</span>}>
        <h3>Controlled From</h3>
        <ControlledField></ControlledField>
      </Suspense>
    </>
  )
}

export default App
