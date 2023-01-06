"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    CreateCourseService_1.default.execute({
        name: 'Kaua',
        educator: 'Kauas'
    });
    CreateCourseService_1.default.execute({
        name: 'Kaua',
        educator: 'sua mae',
        duration: 10
    });
    return res.send();
});
app.listen(3000, () => console.log('Server running'));
