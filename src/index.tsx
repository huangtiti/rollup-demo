import  React from 'react';
import { Modal } from 'antd';
import { pick }  from 'lodash-es';
import './index.scss';
import logo from './logo.svg';
import { funcA } from './utils';

const RollupDemo = () => {
  const [initNum, setInitNum] = React.useState(2020);
  const pickObj = { obj1: 'obj1Name' };
  React.useEffect(() => {
    console.log('pick func',pick(pickObj,['obj1']))
    console.log('run funcA',funcA())
     setInitNum(initNum + 1);
  }, [])
  const showModal = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }
  return (
    <div className="appContainer">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={()=>setInitNum(initNum+1)}>
          {initNum} 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export { RollupDemo };