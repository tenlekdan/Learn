import React from 'react';
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
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind /> */}
      {/* <ParentComp /> */}
      {/* <Welcome></Welcome> */}
      {/* <NameList></NameList> */}
      <StyleSheet primary={true}/>
    </div>
  );
}

export default App;

