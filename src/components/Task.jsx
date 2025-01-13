import PropTypes from 'prop-types';

function Task({id, titre, statut, onStatusChange}) {
    return (<div id={id} className={"task"}>
            <p>{titre}</p>
            <input type="checkbox"
                   checked={statut}
                   onChange={() => onStatusChange(id)}
            />
        </div>);
}

Task.propTypes = {
    id: PropTypes.number.isRequired,
    titre: PropTypes.string.isRequired,
    statut: PropTypes.bool,
    onStatusChange: PropTypes.func.isRequired,
};

export default Task;