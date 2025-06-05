const uniqid = require('uniqid');
const cubes = [];

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {

    const newCube = {
        //id: cubes.length + 1,
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;

};  