import { Container } from "./style";

import trash from "../assets/trash.png";
import { useState } from "react";

interface TasksProps {
    title: string;
    onDeleteComment(comment: string): void;
}

export function Task({ title, onDeleteComment }: TasksProps){
    const [finish, setFinish] = useState<boolean>(false);

    function markTaskAsDone() {
        setFinish(!finish);
    }

    function deleteComment(){
        onDeleteComment(title);
    }

    return (
        <Container>
            <input type="checkbox" onClick={markTaskAsDone}/>
            <p className={finish ? "finished" : ""}>{title}</p>
            <img src={trash} onClick={deleteComment}/>
        </Container>
    )
}