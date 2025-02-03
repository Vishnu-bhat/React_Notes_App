import { FaHome, FaStar } from "react-icons/fa";
function SideBar() {
    return (
        <aside className="bg-light p-3 col-md-2 d-flex flex-column">
            <h2 className="mb-4">AI Notes</h2>
            <button className="btn btn-secondary mb-2"><FaHome className="me-2" /> Home</button>
            <button className="btn btn-secondary"> <FaStar className="me-2" /> Favourites</button>
        </aside>
    )
}

export default SideBar