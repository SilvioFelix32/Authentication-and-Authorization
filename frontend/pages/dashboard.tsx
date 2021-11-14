<<<<<<< HEAD
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Dashboard() {
    const { user } = useContext(AuthContext)

    return(
        <h1>Dashboard: {user?.email}</h1>
    )
=======
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Dashboard() {
    const { user } = useContext(AuthContext)

    return(
        <h1>Dashboard: {user?.email}</h1>
    )
>>>>>>> 649b71b59ffe6388ac66df7269601d7a44c7dd8e
}