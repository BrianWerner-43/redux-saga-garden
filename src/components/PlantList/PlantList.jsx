import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function PlantList() {
    const dispatch = useDispatch();

    const plantList = useSelector(store => store.plantList);

    

    useEffect(() => {
        // dispatch an action to request the plantList from the API
        getPlants();
    }, []); 

   const getPlants = () => {
        dispatch({
            type: 'SAGA/GET_PLANTS'
        })
    }

   

    return (
        <div>
            <h3>This is the plant list</h3>
            {/* <pre>{JSON.stringify(reduxState)}</pre> */}
            <ul>
                {plantList.map((plantItem) => {
                  return  <li key={plantItem.id}>{plantItem.name}</li>
                })}
            </ul>
        </div>
    );
}

export default PlantList;
