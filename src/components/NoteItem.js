import React , { useContext } from "react";
import AlertContext from "../context/alert/alertContext";
import noteContext from "../context/notes/noteContext";


const NoteItem = props => {
    const { handleUpdateNote , note } = props;
    const { _id, title, description , tag } = props.note;
    const { deleteNote } = useContext(noteContext);
    const { showAlert } = useContext(AlertContext);
    return (
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title mb-0"> {title} </h5>
                        <i className="far fa-trash-alt mx-2" onClick={() => {deleteNote(_id); showAlert("Deleted Successfully" , "success")}}></i>
                        <i className="far fa-edit mx-2" onClick={() => handleUpdateNote(note)}></i>
                    </div>

                    <p className="card-text">{description}</p>
                    <p className="text-primary p-0 m-0">#{tag}</p>
                </div>
            </div>
        </div> 
    );
};

export default NoteItem;
