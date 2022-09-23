import Login from "./Login";
import Register from "./Register";

function Modal(props){

    var form = "";

    if ( props.typeForm === "login" ) {
        form = (
            <div className="modal-content blue lighten-1">
                <div className="card">
                    <Login /> <div className="card-action"></div>
                </div>
            </div>

        )
    } else if ( props.typeForm === "register" ) {
        form = (
            <div className="modal-content teal accent-2">
                <div className="card">
                    <Register /> <div className="card-action"></div>
                </div>
            </div>
        )
    }

    return (
        <div id="modal1" className="modal">
            { form } 
        </div>
    );
}

export default Modal;