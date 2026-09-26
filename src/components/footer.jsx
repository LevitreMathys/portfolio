
import { Link } from 'react-router-dom'

function Footer() {

    const footerList = {
        "Home": "/",
        "Projects": "/projects",
        "Contact": "/contact"
    }


    return (
        <>
            <footer>
                <ul>
                    {Object.entries(footerList).map(([item, way]) => (
                        <li key={item}>
                            <Link to={way}>{item}</Link>
                        </li>
                    ))}
                </ul>

            </footer>
        </>
    )
}

export default Footer