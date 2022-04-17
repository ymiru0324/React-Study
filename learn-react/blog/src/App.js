/* eslint-disable */ // 터미널에 뜨는 warning eslint 제거
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

    {
      글제목.map(function(글, i){
        return (
        <div className="list">
          <h3 onClick={ () => { 누른제목변경(i) } }>
            { 글 } 
            <span onClick={ () => { 따봉변경(따봉 + 1) } }> 👍</span> 
            { 따봉 } 
          </h3>
          <p>4월 11일 발행</p>
          <hr/>
        </div>
        )
      })
    }

    <button onClick={ () => { modal변경(!modal) } }>열고닫기</button>
    {
      modal === true
      ? <Modal 글제목 = {글제목} 누른제목 = {누른제목}></Modal>
      : null
    }

    </div>
  );
}

function Modal(props){
  return (
    <div>
      <div className="modal">
      <h2>{ props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>

    </div>
  )
}

export default App;
