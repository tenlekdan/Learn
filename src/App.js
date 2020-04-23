import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComp from './components/ParentComp';
import NameList from './components/NameList';
import { Simulate } from 'react-dom/test-utils';
import StyleSheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyles.css';
import styles from './components/appStyles.module.css';
import Form from './components/Form';
import LifecyleA from './components/LifecyleA';
import FragmentDemo from './FragmentDemo';
import Table from './components/Table';
function App() {
  return (
    <div className="App">
      {/* <div className='error'>Hello ji !</div>
      <div className={styles.success}>Hello ji !</div> */}
      {/* <Counter /> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind /> */}
      {/* <ParentComp /> */}
      {/* <Welcome></Welcome> */}
      {/* <NameList></NameList> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <Inline /> */}
      {/* <Form/> */}
      {/* <LifecyleA /> */}
      {/* <FragmentDemo /> */}
      <Table />
    </div>
  );
}

export default App;

