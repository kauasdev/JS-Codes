import { RepositoryItem } from "./ReoisitoryItem";

import '../styles/repositories.scss';
import { useEffect, useState } from "react";

interface Repository {
    id: string;
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){

    const [repos, setRepos] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Kauas-dev/repos')
        .then(response => response.json())
        .then(data => {
            setRepos(data);
        })
    }, []);

    return (
        <section className="repoList">
            <h1>Lista de Repositórios</h1>
            <ul>
                {
                    repos.map(repo => 
                    <RepositoryItem key={repo.id} repository={repo}/>)
                }
            </ul>
        </section>
    )
}