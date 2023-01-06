import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App(){
    return (
        <> {/* --> Fragment => Tag html sem nome e que não afeta o DOM */}
            <RepositoryList />
        </>
    )
}