import { useEffect } from 'react'
import { useLocation } from "react-router-dom";



function User() {
    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)
    const userName = queryParams.get("name")

    useEffect(() => {
        console.log(userName)
    })

    return ( 
        <>
            <div className="h-[90vh]">
                {userName && <p>{userName},</p>}
                <div className="mt-4 text-center">
                    <h2>Welcome to the real world!</h2>
                </div>
            </div>
            
        </>

     );
}

export default User;