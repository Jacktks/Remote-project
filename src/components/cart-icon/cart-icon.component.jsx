import React from 'react';

import {connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';



import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount } from '../../redux/cart/cart.selectors';


import './cart-icon.style.scss';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

//truoc khi su dung createStructuredSelector trong reselect
// const mapStateToProps = state => ({
//     itemCount: selectCartItemsCount(state)
// })

//sau khi su dung createStructuredSelector trong reselect
const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);