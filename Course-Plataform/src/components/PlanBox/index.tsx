import { ChartLine, CreditCard, GraduationCap } from "phosphor-react";
import { Container } from "./style";

interface IPlanBoxProps {
    id: string;
    name: string;
    type: string;
    isFree: boolean;
    value: number | null;
    description: string | null;
    course_count_limit: number;
    dashboard_available: boolean;
}


export function PlanBox({
    course_count_limit, id, name, type, description, isFree, value, dashboard_available
}: IPlanBoxProps){

    function buyPlan() {
        
    }

    return(
        <Container className="planBox">
            <div className="planName">
                <h1>{name}</h1>
                {/* <p>{description}</p> */}
            </div>
            <ul>
                <li>
                    <GraduationCap size={25} className="icon"/> 
                    <p>Number of courses: <span>{course_count_limit}</span></p>
                </li>
                <li>
                    <CreditCard size={25} className="icon"/>
                    <p>{type}</p>
                </li>
                <li>
                    <ChartLine size={25} className="icon"/>
                    <p>Dashboard {dashboard_available ? "Available" : "Unavailable"}</p>
                </li>
            </ul>
            <div>
                {isFree ? <></> : <p className="price">R$ {value}</p>}
            </div>
            <button onClick={buyPlan}>
                {isFree ? "Free" : "Buy Plan"}
            </button>
        </Container>
    )
}