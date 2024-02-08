import React,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route   } from 'react-router-dom'
import Home from './components/Home'
import Review from './components/Review/Review'
import About from './components/About/About'
import Form from './components/Form/Form'
import { useDispatch } from 'react-redux'
import { getReviews } from './actions/index_actions'

const App = () => {
  const dispatch = useDispatch() 

    useEffect(()=>{
       dispatch(getReviews())
    },[])
  return (
    <BrowserRouter>
          <div style={{fontFamily:'Helvetica'}} >    
            <Routes>
            <Route path="/" exact element={ <Home/>  } />
            <Route path="/rev" exact element={ <Review/>  } />
            <Route path="/about" exact element={ <About/> } />
            <Route path="/wreview" exact element={ <Form/> } />
            </Routes>
          </div> 
        </BrowserRouter>
  )
}

export default App