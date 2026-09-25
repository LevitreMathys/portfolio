
function Footer() {

    

    const footerList = {
        "Home": "/",
        "Projects": "/",
        "Contact": "/"
    }


    return (
        <>
            <footer>
                <ul>
                    {Object.entries(footerList).map(([item, way]) => (
                        <li key={item}>
                            <a href={way}>{item}</a>
                        </li>
                    ))}
                </ul>

            </footer>
        </>
    )
}

export default Footer