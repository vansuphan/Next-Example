
import style from './style.module.css'
import cn from 'classnames'
import styles from './alert.module.css'
import {useState} from "react"
export default function Button (props) {
    const [value, setValue] = useState(""||props.type);

    return (
        <div className = {style}>
            <button className ="testCSS">
                button
            </button>
            <div
                className= {value}
                >
               <button className={styles}>hi</button>
            </div>
        </div>
    )
}