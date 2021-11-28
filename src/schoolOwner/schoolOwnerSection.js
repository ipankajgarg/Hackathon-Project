import React,{useState} from 'react';
import { Input,Progress,Table, Card, Avatar } from 'antd';
import '../parent-section/parent-section.css';
import XpTable from '../xp-table'
import {xpTableData, classes, studentClassData} from '../data'
import Header from '../header'
import Menus from './dropdown';

const { Search } = Input;
const { Meta } = Card;

const reportCardColumn = [
    {
        title: 'Subject',
    dataIndex: 'subject',
        key: 'type',
    },
    { title: 'Unit 1',
    dataIndex: 'marks1',
        key: 'marks1',
    },
    
    { title: 'Unit 2',
    dataIndex: 'marks2',
        key: 'marks2',
    },
    { title: 'FA 1',
    dataIndex: 'marks3',
        key: 'marks3',
    },
    { title: 'Unit 3',
    dataIndex: 'marks4',
        key: 'marks4',
    },
    { title: 'Unit 4',
        dataIndex: 'marks5',
        key: 'marks5',
    },
    { title: 'FA 2',
    dataIndex: 'marks6',
        key: 'marks6',
    },
    { title: 'Unit 5',
    dataIndex: 'marks7',
        key: 'marks7',
    },
    { 
        title: 'Unit 6',
        dataIndex: 'marks8',
        key: 'marks8',
    },
    
]

function OwnerSection () {
    const [inputText, setInputText] = useState('')
    const [data,setData] = useState(null)
    const [selectedClass, setSelectedClass] = useState(null)
    const [filteredClassData, setFilterData] = useState([])
    const handleStudentFilter = (a) =>{
        setSelectedClass(a)
        const filterData = a ? studentClassData[a]: []
        // console.log(filterData)
        setFilterData(filterData)
    }
    // console.log(selectedClass)
    return (
    <>
    <Header/>
    <Menus  dropdownData ={classes} title='select class' setSelectedOption={a=> handleStudentFilter(a)}/>
    <Menus  dropdownData ={filteredClassData} title='select student'  setSelectedOption={a=> setData(xpTableData[a])}/>
    <br/>
        <div className="parent-container">
    {/* <div className="input-container">
            <Search value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Student name" enterButton="Search" size="large" onSearch={() => {
             setData(xpTableData[inputText])
            }} />
        </div> */}
        <br/>
        
    </div>
      {data&& <> <div className="table-container">
            <XpTable dataSource={data.data} />
            <div><Progress type="circle" percent={(data.attendedClasses/data.totalClasses)*100} width="180px" />
                <p>Class Completion</p>
                <div><Progress percent={50} status="active" />
                <p>Assessment Completion</p>
                </div>
            </div>
        </div>
            <div className="report-card">
          <h1>{data.ReportCardName}</h1>
          <Table pagination={false} columns={data.reportCardColumn} dataSource={data.reportData} />
            </div>
            <div className="card-container">
        <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    // actions={[
    //   <SettingOutlined key="setting" />,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    // ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Click here to view student content library"
      description="- Powered by AR"
    />
  </Card>,
        </div>
        </>}
        {/* <a href='/w1.pdf' download>Click to download</a> */}
        
    </>)
}

export default OwnerSection;