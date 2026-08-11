import { Suspense } from 'react'
import './App.css'
import SimpleReactForm from './Components/SimpleReactForm/SimpleReactForm'
import FormActions from './Components/FormAction/FormActions'
import ControlledField from './Components/ControlledField/ControlledField'
import UncontrolledField from './Components/UncontrolledField/UncontrolledField'
import HooksForm from './Components/HooksForm/HooksForm'
import ProductManagement from './Components/ProductManagement/ProductManagement'
import FamilyTree from './Components/FamilyTree/FamilyTree'

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
      <Suspense fallback={<span>Loading..</span>}>
        <h3>Uncontrolled From</h3>
        <UncontrolledField></UncontrolledField>
      </Suspense>
      <Suspense fallback={<span>Loading..</span>}>
        <h3>Hooks From</h3>
        <HooksForm></HooksForm>
      </Suspense>
      <Suspense fallback={<span>Loading..</span>}>
        <h3>Product Management</h3>
        <ProductManagement></ProductManagement>
      </Suspense>
      <Suspense fallback={<span>Loading..</span>}>
        <h3>Family Tree</h3>
        <FamilyTree></FamilyTree>
      </Suspense>
    </>
  )
}

export default App
