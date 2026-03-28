import { useAuth } from "../../hooks/auth.hooks"

function home() {
    const {logout}=useAuth()
    return <div><h1>Home</h1>
        <button onClick={logout}>logout</button>
    </div>
}

export default home