



function Task({ id, titre, description, dateEcheance, statut }) {
    return (
        <div id={id}>
            <p>{titre}</p>
            <p>{description}</p>
            <p>Date d'échéance : {dateEcheance}</p>
            <p>Statut : {statut}</p>

        </div>
    )
}

export default Task;