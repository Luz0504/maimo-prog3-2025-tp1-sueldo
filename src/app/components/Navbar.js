import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    return (
        <div className="nav-container">
            <div className="logo">
                <Image 
                    src= "/assets/Stardrop.png"
                    width={100}
                    height={100}
                    alt="StardropSaloon"
                />
                <h2>El salón de la estrella</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={''}>About</Link>
                    </li>
                    <li>
                        <Link href={''}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar