import express from 'express';
import CreateCourseService from './CreateCourseService';

const app = express();

app.get('/', (req, res) => {

    CreateCourseService.execute({
        name: 'Kaua',
        educator: 'Kauas'
    })
    CreateCourseService.execute({
        name: 'Kaua',
        educator: 'sua mae',
        duration: 10
    })

    return res.send();
});

app.listen(3000, () => console.log('Server running'))
