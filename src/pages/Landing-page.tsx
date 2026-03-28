import { useNavigate } from "react-router-dom"

function landingPage() {
    const navigate=useNavigate()
    return <div>
        <h1 className="cursor-pointer " onClick={()=>navigate('/home')}>Home</h1>
        <h1 className="cursor-pointer " onClick={()=>navigate('/signin')}>Sign</h1>
        <h1 className="cursor-pointer " onClick={()=>navigate('/signup')}>Signup</h1>
    </div>
}   


export default landingPage

