import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartIndicator = (props) => {
  console.log(props)
  return (
    <div  style={{width:'100%',fontSize:'25px'}}>    
    <div style={{margin:'3px',alignItems:'center',borderRadius:'8px',float:'right',padding:'2px',display:'flex',width:'70px'}}>
    <ShoppingCartIcon color='primary'style={{fontSize:'30px'}}/>{":"}<div>{props.length}</div>
    </div>
    </div>
  )
}

export default CartIndicator