import PropTypes from "prop-types";

function Divider({ size = 20 }) {
    return <div style={{height: `${size}px`}}></div>
}

Divider.propTypes = {
    size: PropTypes.number,
};

export default Divider