import { incrementAsync } from './actions'


const mapDispatchToProps = dispatch => {
    return {
      handleIncrementClick: () => dispatch(      
        innerDispatch => innerDispatch({ type: 'INCREMENT' })      
      ),
      handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
    }
  };