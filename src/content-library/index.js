import React,{useState} from 'react';
import './content-library.css';
import Header from '../header.js';
import { Select } from 'antd';

const { Option } = Select;

function ContentLibrary () {
    const [val, setVal] = useState("w1");

    function handleChange(value) {
        setVal(value)
      }

    return <div ><Header />
        <div className="content-library-container">
        <div className="heading">
                <h1>Welcome </h1> <h2>Pankaj garg</h2>
            </div>
            <p className="desc">A unpresdental personlized learning awaits for you as we welcomed to our AR labs</p>
            <div className="instructions">
                <h3>Instructions</h3>
                <ol type="1">
                <li>View PDF, download or use your class workbook</li>
                <li>Click here to download Lead AR</li>
                <li>Click here to use Lead AR</li>
                </ol></div>
            <div className="select-AR">
                <h2>Choose AR book</h2>
                <Select defaultValue={val} style={{ width: 220,fontSize:20 }} onChange={handleChange}>
      
                    <Option value="w1">TextBook Recognition</Option>
                    <Option value="w2">Flash Card</Option>
                    <Option value="w3"> Alphabet Reader</Option>
                </Select>
                <br/>
                <a style={{marginTop:10, display:'inline-block'}} href={`/${val}.pdf`} download>Click to download</a> 
            </div>
        </div>
       
    </div>
}

export default ContentLibrary