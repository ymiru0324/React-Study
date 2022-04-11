/* eslint-disable */ // 터미널에 뜨는 warning eslint 제거
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  let [modal, modal변경] = useState(false);


  function 반복된UI() {
    var 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>)
    }
    return 어레이
  }
  
  // function 제목바꾸기() {
  //   var newArray = [...글제목];
  //   newArray[0] = '여자코트 추천';
  //   글제목변경( newArray );
  // }

  return (
    <div className="App">
    <div className="black-nav">
      <div>개발 blog</div>
    </div>
    {/* <button onClick={ 제목바꾸기 }>버튼</button>
    <div className="list">
      <h3>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h3>
      <p>4월 6일 발행</p>
      <hr/>
    </div>
    <div className="list">
      <h3>{ 글제목[1] }</h3>
      <p>4월 6일 발행</p>
      <hr/>
    </div>
    <div className="list">
      <h3 onClick={ () => { modal변경(true) } }>{ 글제목[2] }</h3>
      <p>4월 6일 발행</p>
      <hr/>
    </div> */}

    { 반복된UI() }

    {
      글제목.map(function(글){
        return (
        <div className="list">
          <h3>{ 글 } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h3>
          <p>4월 11일 발행</p>
          <hr/>
        </div>
        )
      })
    }

    {/* <button onClick={ () => { modal변경(!modal) } }>버튼</button> */}
    {
      modal === true
      ? <Modal />
      : null
    }

  </div>
  );
}

function Modal(){
  return (
    <div>
      <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>

    </div>
  )
}

export default App;
