import { useDispatch, useSelector } from "react-redux";
import { fetchIncrementDetails, fetchDecrementDetails } from './Example.thunk';

function Example() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.example.count);

    const incrementCount = () => dispatch(fetchIncrementDetails());
    const decrementCount = () => dispatch(fetchDecrementDetails());

    return (
        <>
        <div>Example</div>
        {count}
        <div>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>     
        </>
    )
}

export default Example;