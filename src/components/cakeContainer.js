import React from 'react';
import { connect } from "react-redux"
import { buyCake } from '../redux/cake/cakeActions';

const cakeContainer = (props) => {
    return (
        <>
            <div className='container'>
                <div className='text-center mt-5'>
                    <h2 className='text-secondary mb-4'>Number of Cakes - 
                    <span className='text-primary'>{props.numOfCakes}</span></h2>
                    <button className="bg-primary py-1 px-3 text-white border-0"
                    onClick={props.buyCake}
                    >Buy Cake</button>
                </div>
            </div>
        </>
    );
}


const mapStateToProps = state => {
    return (
        {
            numOfCakes : state.numOfCakes
        }
    )
}

const mapDispatchToProps = dispatch => {
    return (
        {
            buyCake : () => dispatch(buyCake())
        }
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (cakeContainer);