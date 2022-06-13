import "./Navbar.css"
import {format} from "date-fns";
import {useEffect, useState} from "react";

const Navbar = () => {
    const [clock, setClock] = useState()

    useEffect(()=>{
        setInterval(()=>{
            const sillyDate = new Date();
            const date = format(sillyDate, "dd/MM/yyyy HH:mm:ss")
            setClock(date)
        }, 1000)
    }, [])

    return (
        <div className={"navbar"}>
            <div className={"right"}>
                <a href="https://www.instagram.com/tuberkulbek/">
                    <img className={"image"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="logo"/>
                </a>
                <input type="text" className={"input"} disabled={true}/>
            </div>
            <div className={"time"}>
                <div className={"date"}>{clock}</div>
            </div>
        </div>
    )
}

export default Navbar