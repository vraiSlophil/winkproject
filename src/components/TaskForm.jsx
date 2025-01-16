import {Component} from "react";
import PropTypes from "prop-types";


/*
    * TaskForm component
    * @param tasks: liste de tâches
    * @param onAddTask: fonction pour ajouter une tâche
    * @return form
 */
class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titre: "",
        }
    }

    /*
        * handleChange
        * @description: fonction qui change l'etat de l'input en temps réel : l'attribut value est modifié à chaque
        *               nouveau caractère tapé par l'utilisateur
        * @param event: event
     */
    handleChange(event) {
        this.setState({titre: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.titre.trim()) {
            this._addTask(this.state.titre);
            this.setState({titre: ""});
        }
    }

    _addTask(titre) {
        const newTask = {
            id: this.props.tasks.length ? Math.max(...this.props.tasks.map(task => task.id)) + 1 : 1,
            titre: titre,
            statut: false
        };
        this.props.onAddTask(newTask);
    }

    render() {
        return (<form
                onSubmit={this.handleSubmit.bind(this)}
                className={"task-form"}
            >
                <input type="text"
                       value={this.state.titre}
                       onChange={this.handleChange.bind(this)}
                       placeholder={"Ajouter une tâche"}
                />
                <button type={"submit"}>Ajouter</button>
            </form>)
    }
}

TaskForm.propTypes = {
    tasks: PropTypes.array.isRequired, onAddTask: PropTypes.func.isRequired,
}

export default TaskForm;