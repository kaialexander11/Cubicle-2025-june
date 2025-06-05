const uniqid = require('uniqid');
const cubes = [
    {
        id: '1442im2tkmbj100w5',
        name: 'Test Matrix Cube',
        description: 'Very rare Cube',
        imageUrl: 'https://thumbs.dreamstime.com/b/computer-screen-image-showing-purple-digital-binary-data-code-matrix-cube-dark-blue-background-illustrating-cyberspace-383166745.jpg',
        difficultyLevel: 4
    },
    {
        id: '2442im2tkmb3100w5',
        name: 'Second Matrix Cube',
        description: 'Extremly rare Cube',
        imageUrl: 'https://media.printables.com/media/prints/337027/images/2887008_2a259cac-6f5a-432b-9a3e-991dbeaa09c3/thumbs/inside/1280x960/jpg/img_3343.webp',
        difficultyLevel: 3
    },
   
];

exports.getAll = () => cubes.slice();

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {

    const newCube = {
        //id: cubes.length + 1,
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;

};  