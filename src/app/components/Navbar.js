const Navbar = ({title, year}) => {

    return (
        <div className="container">
            <div>{title} {year}</div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar