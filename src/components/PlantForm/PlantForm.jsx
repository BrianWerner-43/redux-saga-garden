import React, { useState }from 'react';
import { useDispatch } from 'react-redux';

const PlantForm = () => {
    const dispatch = useDispatch();
    
    //Initial state is an OBJECT, with keys id and name
    let [newPlant, setNewPlant] = useState('');

    const handleNameChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setNewPlant(event.target.value)
    }

    const addNewPlant = event => {
        event.preventDefault();
        dispatch({ type: 'SAGA/POST_PLANT', payload: newPlant });
        //updates the next plant to have a new id
        setNewPlant({id:newPlant.id + 1, name: ''});
    }
    return (
        <div>
            <h3>This is the form</h3>
            <pre>{JSON.stringify(newPlant)}</pre>
            <div className="form-inputs">
            <form onSubmit={addNewPlant}>
                
                <input type='text' value={newPlant.name} onChange={handleNameChange} />
                <input type='submit' value='Add New Plant' />
                <br></br>
                <input type='text' value={newPlant.kingdom} onChange={handleNameChange} />
                <input type='submit' value='Add Kingdom' />
                <br></br>
                <input type='text' value={newPlant.clade} onChange={handleNameChange} />
                <input type='submit' value='Add Clade' />
                <br></br>
                <input type='text' value={newPlant.order} onChange={handleNameChange} />
                <input type='submit' value='Add Order' />
                <br></br>
                <input type='text' value={newPlant.family} onChange={handleNameChange} />
                <input type='submit' value='Add Family' />
                <br></br>
                <input type='text' value={newPlant.subfamily} onChange={handleNameChange} />
                <input type='submit' value='Add Subfamily' />
                <br></br>
                <input type='text' value={newPlant.genus} onChange={handleNameChange} />
                <input type='submit' value='Add Genus' />
              

            </form>
            </div>
        </div>
    );
}


export default PlantForm;
