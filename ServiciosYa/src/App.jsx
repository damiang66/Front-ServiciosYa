
import './App.css'
import { Provider } from 'react-redux'
import { UseRouter } from './router/useRouter'
import { store } from './store/store'

function App() {
 

  return (
    <>
    <Provider store={store}>
  
        <UseRouter />
       
       </Provider>
     </>
  )
}

export default App
