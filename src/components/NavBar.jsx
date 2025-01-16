import PropTypes from 'prop-types';

function NavBar({title, components}) {
    return(
        <nav>
            <h1>{title}</h1>
            <ul>
                {components.map((component, index) => (
                    <li key={index}>{component}</li>
                ))}
            </ul>
        </nav>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    components: PropTypes.array.isRequired,
}

export default NavBar;