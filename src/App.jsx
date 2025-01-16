import Task from "./components/Task.jsx";
import ThemeButton from "./components/ThemeButton.jsx";
import NavBar from "./components/NavBar.jsx";

import "./App.css";
import {useState} from "react";

const listeDeTaches = [{
    id: 1,
    titre: "Faire les courses",
    statut: false
}, {
    id: 2,
    titre: "Faire du sport",
    statut: false
}, {
    id: 3,
    titre: "Lire un livre",
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
        <NavBar
            title={"WinkProject"}
            components={[
                <ThemeButton
                    darkMessage={"Passer au thème clair"}
                    lightMessage={"Passer au thème sombre"}
                    onThemeChange={toggleTheme}
                    isDarkTheme={isDarkTheme}
                />
            ]}
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
