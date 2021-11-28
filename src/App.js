import React,{useState} from 'react';
import { Button } from 'antd';
import ParentSection from './parent-section'
import ContentLibrary from './content-library'

function App () {
const [isVisible,setVissibility] = useState(false)

  return <div>{isVisible ? <ContentLibrary /> : <ParentSection setVissibility={ setVissibility}/>}</div>
}

export default App