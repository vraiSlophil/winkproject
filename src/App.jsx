import Task from "./components/Task.jsx";

const listeDeTaches = [
    {
        id: 1,
        titre: "Acheter des courses",
        description: "Acheter du lait, des œufs et du pain",
        dateEcheance: "2023-12-01",
        statut: "En cours"
    },
    {
        id: 2,
        titre: "Faire du sport",
        description: "Aller courir pendant 30 minutes",
        dateEcheance: "2023-12-02",
        statut: "Non commencé"
    },
    {
        id: 3,
        titre: "Lire un livre",
        description: "Lire au moins 50 pages du livre actuel",
        dateEcheance: "2023-12-03",
        statut: "Terminé"
    }
];



function App() {

    return (
        <div>

            {listeDeTaches.map((task) => (
                <Task
                key={task.id}
                id={task.id}
                titre={task.titre}
                description={task.description}
                dateEcheance={task.dateEcheance}
                statut={task.statut}
                />
            ))}


        </div>
    )
}

export default App
