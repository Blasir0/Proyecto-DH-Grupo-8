const fs = require('fs')

const User = {
    fileName: './data/users.json',

    getData: () => {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    generateId: ()=>{
        let allUsers = this.findAll();
        let lastUser = allUsers.pop()
        if(lastUser){
            return lastUser.id+1
        }
        return 1
    },

    findAll:() => {
        return this.getData()
    },

    findByPk: (id) =>{
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound
    },

    findByField: (field, text) => {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field]===text);
        return userFound
    },

    create: (userData) => {
        let allUsers = this.findAll();
        let newUser ={
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return true
    },

    delete: () => {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true
    }
}

module.export = User