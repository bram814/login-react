import {useEffect} from "react";
import Tabs from "../../../component/dashboard/vehicle/Tabs";
import { HOME, CAR } from '../../../config/routes/Paths';

function Vehicle(props){

    useEffect(() => {
        var initBreadcrumbs = [
            { link: {HOME},     name: "Inicio" },
            { link: {CAR},      name: "Vehiculos" }
        ];
        props.setBreadcrumbs(initBreadcrumbs);
    }, []);

    return (
        <div className="container">
            <br /><br /><br />
            <Tabs />
            <br /><br /><br />
        </div>
    );
}

export default Vehicle;