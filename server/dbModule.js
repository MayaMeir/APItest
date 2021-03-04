const jsonFile = require('jsonfile');

exports.getAll = async() => {
    const fileData = await jsonFile.readFile('./db.json');
    return fileData;
}



exports.delete = async(id) => {
try{
    const fileData = await jsonFile.readFile('./db.json');
    const result = fileData.filter(item => item.id != id);
    const updateFile = await jsonFile.writeFile('./db.json', result)
    return "File updated!";
}
    catch (err) {
        console.log(err);
    }
}



exports.addCat = async(cat) => {

    try {
        const currentFileData = await jsonFile.readFile('./db.json');
        currentFileData.push(cat);
        const updateFile = await jsonFile.writeFile('./db.json', currentFileData)
        return "File updated!";

    } catch (err) {
        console.log(err);
    }
}