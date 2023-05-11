import MongoClient from './node_modules/mongodb'

const url = "mongodb://localhost:27017"
const client = new MongoClient(url)


async function run() {
    try {
        await client.connect()
        const db = client.db("dbmedicalinfosystem")
        const collection = db.collection("patient")
        const result = await collection.findOneAndUpdate({ name: "tom" }, { $set: {name: "Danyil"} })
        const find = await collection.find().toArray()
        console.log("Подключение установлено")
        console.log(result)
        console.log(find)
    }catch(err) {
        console.log(err)
    } finally {
        await client.close()
        console.log("Подключение закрыто")
    }
}
//run().catch(console.log)

document.querySelector('button').onclick = registration
async function registration() {
    
    let login = document.querySelector('.login').value
    let psw = document.querySelector('.password').value
    let city = document.querySelector('.city').value
    let phone = document.querySelector('.phone').value
    let email = document.querySelector('.email').value
    const userPatient = { name: login, password: psw, city: city, phone: phone, email: email }
    try {
        await client.connect()
        const db = client.db("dbmedicalinfosystem")
        const collection = db.collection("patient")
        const resultR = await collection.insertOne(userPatient)
        const find = await collection.find().toArray()
        console.log(resultR)
        console.log(find)
    } catch(e) {
        console.log(e)
    } finally {
        await client.close()
        console.log("Подключение закрыто")
    }
}
registration().catch(console.log)