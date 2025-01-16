import Task from "./components/Task.jsx";
import ThemeButton from "./components/ThemeButton.jsx";
import "./App.css";
import {useState} from "react";

const listeDeTaches = [{
    id: 1,
    titre: "Faire les courses",
    description: "Acheter du lait, des œufs et du pain",
    dateCreation: "2023-12-01",
    statut: false
}, {
    id: 2,
    titre: "Faire du sport",
    description: "Aller courir pendant 30 minutes",
    dateCreation: "2023-12-02",
    statut: false
}, {
    id: 3,
    titre: "Lire un livre",
    description: "Lire 6 chapitres de Harry Potter",
    dateCreation: "2023-12-03",
    statut: true
}];


function App() {

    const [tasks, setTasks] = useState(listeDeTaches);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleStatusChange = (id) => {
        setTasks(tasks.map(task =>
        task.id === id ? {...task, statut: !task.statut} : task
        ))
    }

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (<div className={isDarkTheme ? "dark-theme" : "light-theme"}>
            <ThemeButton
                darkMessage={"Passer au thème clair"}
                lightMessage={"Passer au thème sombre"}
                onThemeChange={toggleTheme}
                isDarkTheme={isDarkTheme}
            />

            <div className={"task-container"}>
                {tasks.map((task) => (<Task
                        key={task.id}
                        id={task.id}
                        titre={task.titre}
                        description={task.description}
                        dateCreation={task.dateCreation}
                        statut={task.statut}
                        onStatusChange={handleStatusChange}
                    />))}
            </div>


        </div>)
}

export default App
