import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import Compiler from "./Compiler";
import WebEditor from './WebEditor';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' element= {<Home/>} />
    <Route path='/compiler' element= {<Compiler/>} />
    <Route path='/web-editor' element= {<WebEditor/>} />
    </Routes>
    </Router>
  )

}

export default App;
