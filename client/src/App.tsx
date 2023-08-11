import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { routes } from './apps/utils/routes'
import { Iroute } from './apps/utils/routes/type'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route:Iroute)=>(
            <Route path={route.path} element = {route.element}/>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
