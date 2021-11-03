import React ,{useState} from "react";

const INITIAL_STATE={
    name:'',
    location:'',
    image:''
}

const Form= (props)=>{
    const[state,setState]=useState(INITIAL_STATE);
    const submitForm=(ev)=>{
        const {name ,location,image}=state
        ev.preventDefault();
        if(!name||!location||!image){
            return;
        }
        console.log(state);
        props.addProfile(state);
        setState(INITIAL_STATE);
        
    }
    const handleInput=(ev)=>{
        ev.preventDefault();
        const {name,value}=ev.target
        setState({...state,[name]:value})
    }
    return(
        <div>
            <form onSubmit={submitForm}>
                <label>
                    <p>Name:</p>
                <input type="text" name="name"value={state.name} onChange={handleInput}/>
                </label>
                <label>
                    <p>location:</p>
                <input type="text" name="location"value={state.location} onChange={handleInput}/>
                </label>
                <label>
                    <p>Image:</p>
                <input type="text" name="image"value={state.image} onChange={handleInput}/>
                </label>
                <div>
                <button type="submit">Enviar info</button>
                </div>

            </form>
            <div>
                {/* <p>Name: {state.name !==''?state.name:''}</p>
                <p>Location:{state.location !==''?state.location:''}</p> */}
                <p>Image:</p>
                {state.image!==''?(
                <img src={state.image}/>
                ):''}
            </div>

        </div>
    );

}

export default Form