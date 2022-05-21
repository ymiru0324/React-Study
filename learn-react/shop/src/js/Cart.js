import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
  return (
  <div>
    <Table responsive>
      <tr>
        <th>#</th>
        <th>상품명</th>
        <th>수량</th>
        <th>변경</th>
      </tr>
      { props.state.map((a,i)=>{
          return (
          <tr key={i}>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.quan}</td>
            <td><button onClick={()=>{ props.dispatch({ type: 'plus' }) }}> + </button>
            <button onClick={()=>{ props.dispatch({ type: 'minus' }) }}> - </button></td>
          </tr>
          )
        })  
      }
    </Table>
  </div>
  )
}

function 함수명(state) {
  return{
    state : state
  }
}
export default connect(함수명)(Cart)

// export default Cart;