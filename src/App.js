import React,{useState} from 'react';
import { Button } from 'antd';
import ParentSection from './parent-section'
import ContentLibrary from './content-library'
import './parent-section/parent-section.css';
import Login from './login';

function App () {
const [isVisible,setVissibility] = useState(false)

  return <div>{isVisible ? <ContentLibrary /> : <Login setVissibility={ setVissibility}/>}</div>
}

export default App