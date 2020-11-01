import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h4>Number of cake - { props.numOfCakes } </h4>
            <button onClick={ props.buyCake }>Buy cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)
