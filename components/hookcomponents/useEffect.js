
import style from './style.module.css'
import React, {useState, useEffect} from 'react'
function EffectComponent (props) {

    const [state, setState] = useState(0)
    const [ref, setRef] = useState();
    const refComponent = React.useRef(0)


    function increasement () {
        setState( state >= 10 ? 10 : state + 1);
        refComponent.current++
        console.log(refComponent.current);
    }

    function decreasement () {
        refComponent.current--
        setState( state <= 0 ? 0 : state-1)
    }

    useEffect(()=>{
        if(refComponent.current === 10){
            
        }
    })
    function onMouseButton (e) {
        increasement();
    }
    function onMouseButton2 (e) {
        decreasement();
    }
    return(
        <div>
            <h2 className={"class"+refComponent.current +" test"}>use Effect {state}</h2>
            <button onMouseOver={onMouseButton} type="button" onClick={increasement}>increasement</button>
            <br></br>
            <button onMouseOver={onMouseButton2} type="button" onClick={decreasement}>decreasement</button>
            <br></br>
            <span className="test">test</span>
            <div>{refComponent.current}</div>
            
            <style jsx>{`
                button{
                    border : 1px solid ;
                    padding: 1px 15px;
                    border-radius: 3px;
                    margin: 5px 0;
                    outline: none;
                    transition: .2s ease-in-out;
                }
                button:hover{
                    background: gray;
                    color:white;
                }
                .test{
                    color: red;
                    font-size: ${refComponent.current + 10}px;
                }
                .class10{
                    color: red;
                    font-size: ${state+ 18}px;
                }
            `}
            </style>
        </div>
        
    )
}
export default EffectComponent;