/* eslint-disable */ // 터미널에 뜨는 warning eslint 제거
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props) {

  let { id } = useParams();
  let shoesData = props.shoes.find(function(findShoes){
    return findShoes.id == id
  });
  let history = useHistory();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoesData.title}</h4>
          <p>{shoesData.content}</p>
          <p>{shoesData.price}원</p>
          <button className="btn btn-danger">주문하기</button> &nbsp;
          <button onClick={()=>{ history.push('/') }} className="btn btn-danger">뒤로가기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail;