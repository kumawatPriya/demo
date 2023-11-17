import React, { useEffect } from "react";
import { useGlobalContext } from "./ConText";
function Stories(){
    
   const {hits,isLoading} = useGlobalContext();
    if(isLoading){
        return(
            <>
            <h1>Loading....</h1>
            </>
        )
    }
    return(
        <>
        <h2>My Tech News Post</h2>
        {hits.map((curPost)=>{
            return(
                <>
                <h2>{curPost.title}</h2>
                </>
            )

        })}
        </>
    )
}

export { Stories }