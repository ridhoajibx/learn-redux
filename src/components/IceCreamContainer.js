import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h4>Number of ice cream - { props.numOfIceCreams } </h4>
            <button onClick={ props.buyIceCream }>Buy ice cream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream : () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer)
