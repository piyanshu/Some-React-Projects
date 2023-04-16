import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm(){
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    });
    const handleChangeName = (event) => {
        dispatch(changeName(event.target.value))
    };
    const handleCostName = (event) => {
        const costValue = parseInt(event.target.value) || 0;
        dispatch(changeCost(costValue));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name, cost }));
    };
    return <div className="car-form panel">
        <h4 className="subtitle is-3">Add Car</h4>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input className="input is-expanded"onChange={handleChangeName} value={name}></input>
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input type="number" className="input is-expanded"onChange={handleCostName} value={cost || ''}></input>
                </div>
                <div className="field">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </form>
    </div>
};

export default CarForm;