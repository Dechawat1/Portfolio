import Link from "next/link"
import Navlink from "./Navlink"
import Menuhumberger from "./Menuhumberger"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-4">
            <h1 className="text-3xl font-semibold">Portfolio</h1>
            <Navlink />
            <Menuhumberger />
        </div>
    )
}
export default Navbar