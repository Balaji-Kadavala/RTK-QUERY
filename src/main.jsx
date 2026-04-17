import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <App />
</Provider>
)
//Run this first  -   npx json-server --watch db.json --port 3000  then run npm start to start the react app. This will allow the app to fetch data from the json server.