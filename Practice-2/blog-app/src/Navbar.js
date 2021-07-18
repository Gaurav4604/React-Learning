const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Blog App</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" 
                // inline styles
                // style={
                    // {
                    //     color: "white",
                    //     backgroundColor: "black",
                    //     borderRadius: "8px"
                    // }
                // }
                >New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;