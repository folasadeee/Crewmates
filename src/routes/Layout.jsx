import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (

        <>
       
       <div className="sidebar">

       <nav>
            <ul>
            <li>
                    <Link to="/" className="home-tab">Home</Link>
                </li>
                <li>
                    <Link to="/create">Create a Crewmate!</Link>
                </li>
                <li>
                    <Link to="/gallery">Crewmate Gallery</Link>
                </li> 
            </ul>

            </nav>
</div>
      <Outlet />
 
        
        </>

    )

}

export default Layout;