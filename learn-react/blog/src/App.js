/* eslint-disable */ // 터미널에 뜨는 warning eslint 제거
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

    {
      글제목.map(function(글, i){
        return (
        <div className="list" key={i}>
          <h3 onClick={ () => { 누른제목변경(i) } }>
            { 글 } 
            <span onClick={ () => { 
              let 따봉추가 = [...따봉]; 
              따봉추가[i]++; 
              따봉변경(따봉추가);
              } }> 👍
            </span> 
            { 따봉[i] } 
          </h3>
          <hr/>
        </div>
        )
      })
    }

    {/* { 입력값 }
    <input onChange={ (e) => { 입력값변경(e.target.value) } }></input> */}

    <div className="publish">
      <input onChange={ (e) => { 입력값변경(e.target.value) } }/>
      <button onClick={ () => { 
        let arrayCopy = [...글제목];
        arrayCopy.unshift(입력값);
        글제목변경(arrayCopy);
        let goodCopy = [...따봉];
        goodCopy.unshift(0);
        따봉변경(goodCopy);
        } }>저장
      </button>
    </div>

    <button onClick={ () => { modal변경(!modal) } }>열고닫기</button>
    {
      modal === true
      ? <Modal 글제목 = {글제목} 누른제목 = {누른제목}></Modal>
      : null
    }
    
    <Profile />
    </div>
  );
}

function Modal(props){
  return (
    <div>
      <div className="modal">
      <h2>{ props.글제목[props.누른제목] }</h2>
    </div>

    </div>
  )
}

// React 옛날 문법
class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Kim', age: 30}
  }

  changeName() {
    this.setState( { name: 'Park' } )
  }
  render() {
    return(
      <div>
        <hr/>
        <h1>React 옛날 문법</h1>
        <h3>프로필입니다.</h3>
        <p>저는 { this.state.name } 입니다.</p>
        <button onClick={ this.changeName.bind(this) }>버튼</button>
      </div>
    )
  }
}
export default App;
