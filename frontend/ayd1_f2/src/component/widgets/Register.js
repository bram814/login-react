import M from '@materializecss/materialize/dist/js/materialize.min';
import React, {useState } from "react";

function Register(props){

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    function handleInputChange1(e){
        setUser(e.target.value);
    }
    function handleInputChange2(e){
        setPass(e.target.value);
    }

    async function register(e){
        e.preventDefault();
        try{

            if (user !== '' && pass !== ''){


                M.toast({
                    html: `Usuario ${user}, Registrado!`,
                    classes: 'green darken-1 rounded',

                });
            }else {
                 M.toast({
                    html: 'Error en los campos, están vaciós!',
                    classes: 'red darken-1 rounded',

                });
            }
            

        } catch(e){
            M.toast({
                html: 'Usuario/Contraseña Incorrectos',
                classes: 'red darken-1 rounded',

            });
        }

        setUser('');
        setPass('');
    }

    function close(e){
        e.preventDefault();
        M.toast({
            html: 'Close!',
            classes: 'yellow darken-1 black-text rounded',

        });
    }

	return (
        <form className="col s12 container" action="">
            <span className="card-title black-text">Registro</span>
            <div className="row">
                <div className="input-field col s12">
                    <input id="username"
                           type="text"
                           className="validate"
                            autoComplete="off"
                            onChange={handleInputChange1}
                            value={user}
                            />
                    <label htmlFor="username">Username</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <input id="password"
                            type="password"
                            className="validate"
                            onChange={handleInputChange2}
                            value={pass}
                            />
                    <label htmlFor="password">Password</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <button className="modal-close teal accent-2 black-text btn btn-large waves-effect waves-light"
                            type="submit"
                            name="action"
                            onClick={(e) => register(e)}>
                        Registrar
                        <i className="material-icons right">send</i>
                    </button>
                </div>
                <div className="input-field col s6">
                    <button className="modal-close red accent-1 black-text btn btn-large waves-effect waves-light"
                            type="submit"
                            name="action"
                            onClick={(e) => close(e)}>
                        Close
                        <i className="material-icons right">close</i>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Register;