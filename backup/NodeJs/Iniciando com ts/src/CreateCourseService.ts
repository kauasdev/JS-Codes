interface Course {
    name: String,
    duration?: Number,
    educator: String
}

class CreateCourseService {
    
    execute({ name, duration = 5, educator }: Course){
        console.log(name, duration, educator)
    }
}

export default new CreateCourseService();