import React from "react"
import { useLocation } from "react-router-dom"


const Todo = () => {
    const location = useLocation()

    /*
    React.useEffect(() => {
        if (location.pathname === "/") {
            setNavColor('#FFFFFF')
        } else {
            setNavColor('#CDF3FD')
        }
    }, [location])
    */

    return (
        <div>
            TODO: { location.pathname }
        </div>
    )
}

export default Todo