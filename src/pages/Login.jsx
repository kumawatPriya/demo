import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Login(){
    const [email, setEmail] = useState("")

    const navigation = useNavigate()

    const ChangeEmail = (e)=>{
        setEmail(e.target.value)
        console.log(e)
    }
    
    const handleClick = (e)=>{
        e.preventDefault()
       if(email==="priyakumawat@gmail.com"){
         toast.success("Your I'd has been successfully Login....")
         setTimeout(()=>{
            navigation("/home",{state:{name:"priya"}})
         },2000)

       
       }
       else{
          toast.error("Please Enter a valid E-mail....")
       }
    }

    return(
        <>
       <ToastContainer/>
       <form>
        <input onChange={ChangeEmail} type="email" placeholder="Enter Email" />
        <button onClick={handleClick}>Login</button>
        </form>
        </>
    )
}

export { Login }