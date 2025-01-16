import PropTypes from "prop-types";

function ThemeButton ({darkMessage, lightMessage, onThemeChange, isDarkTheme}) {
    return (
        <button onClick={onThemeChange}>
            {isDarkTheme ? darkMessage : lightMessage}
        </button>
    );

}

ThemeButton.propTypes = {
    darkMessage: PropTypes.string.isRequired,
    lightMessage: PropTypes.string.isRequired,
    onThemeChange: PropTypes.func.isRequired,
    isDarkTheme: PropTypes.bool.isRequired,
};

export default ThemeButton;