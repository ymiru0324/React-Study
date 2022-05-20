/* eslint-disable */ // 터미널에 뜨는 warning eslint 제거
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../css/Detail.scss';
import { Nav } from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';

let 박스 = styled.div`
  padding: 20px;
`;
let 제목 = styled.h4`
  font-size : 25px;
  color: ${ props => props.색상 }
`;

function Detail(props) {

  let [alert, alertChange] = useState(true);
  let [inputData, inputDataChange] = useState('');
  let [pushTap, pushTapChange] = useState(0);
  let [animaSwitch, animaSwitchChange] = useState(false);

  useEffect(() => {
    // 2초 후에 alert 창 사라지게
    let timer = setTimeout(() => { alertChange(false) }, 2000);
    return () => { clearTimeout(timer) }
  },[]);

  let { id } = useParams();
  let history = useHistory();
  let shoesData = props.shoes.find(findShoes => findShoes.id == id);

  return (
    <div className="container">
      <박스>
        <제목 className="red">Detail</제목>
      </박스>

      { inputData }
      <input onChange={(e) => { inputDataChange(e.target.value) }} />

      {
        alert === true 
        ? (<div className="my-alert2">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>)
        : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoesData.title}</h4>
          <p>{shoesData.content}</p>
          <p>{shoesData.price}원</p>

          <Info stock={props.stock}></Info>

          <button className="btn btn-danger" onClick={ () => { props.stockChange([9, 11, 12]) } }>주문하기</button> &nbsp;
          <button onClick={()=>{ history.push('/') }} className="btn btn-danger">뒤로가기</button> 
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{ animaSwitchChange(false), pushTapChange(0) }}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{ animaSwitchChange(false), pushTapChange(1) }}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={animaSwitch} classNames="wow" timeout={500}>
        <TabContent pushTap={pushTap} animaSwitchChange={animaSwitchChange}/>
      </CSSTransition>

    </div> 
  )
}
function TabContent(props) {

  useEffect(() => {
    props.animaSwitchChange(true);
  });

  if (props.pushTap === 0) {
    return  <div>0번째 내용 입니다.</div>
  } else if (props.pushTap === 1) {
    return <div>1번째 내용 입니다.</div>
  } else if (props.pushTap === 2) {
    return <div>2번째 내용 입니다.</div>
  }

}

function Info(props) {
  return (
    <p>재고 : {props.stock[0]}</p>
  )
}

export default Detail;