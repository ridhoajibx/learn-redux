import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux';

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h4>Num of Cakes in HooksCake Container - { numOfCakes }</h4>
            <button onClick={ () => dispatch(buyCake()) }>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
