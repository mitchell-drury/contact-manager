import './App.css';
import ContactPage from './contactPage';
import Login from './login';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' component={Login} />
        <Route path='/contacts' component={ContactPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
