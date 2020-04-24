const mongoose = require('mongoose');

// Database Name
const dbName = 'fruitsDB';

// Use connect method to connect to the Server
mongoose.connect("mongodb://localhost:27017/" + dbName, {useNewUrlParser: true, useUnifiedTopology: true});

//-------------------------------------------------

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name: "Apple",
    score: 10,
    review:"Great fruit"
});

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review:"The best fruit"
});

const orange = new Fruit({
    name: "Orange",
    score: 4,
    review:"Too sour for me"
});

const banana = new Fruit({
    name: "Banana",
    score: 3,
    review:"Weird texture"
});

const pineapple = new Fruit({
    name: "Pineapple",
    score: 10,
    review:"Great fruit"
});

//pineapple.save();

//-----------------------------

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Eduardo",
    age: 21,
});

const amy = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple
});

//person.save();
//amy.save();

//-------------------------------------------

/*Fruit.insertMany([apple, kiwi, orange, banana], function(err){
    if (err){
        console.log(err);
    } else{
        console.log("Succesfully saved all the fruits to fruitsDB");      
    }
});

Person.deleteMany({name: "Eduardo"}, function(err){
    if (err){
        console.log(err);
    } else{
        console.log("Succesfully delete.");
    }
});

Fruit.deleteOne({name: "Apple"}, function(err){
    if (err){
        console.log(err);
    } else{
        console.log("Succesfully delete.");
    }
});

/*Fruit.updateOne({_id: "5ea1ef3fae09bb44e4712410"}, {name: "Peach"}, function(err){
    if (err){
        console.log(err);
    } else{
        console.log("Succesfully update the document.");
    }
});*/

Person.updateOne({_id: "5ea1fa2d29a7b93c4c4cbc23"}, {favouriteFruit: apple}, function(err){
    if (err){
        console.log(err);
    } else{
        console.log("Succesfully update the document.");
    }
});

Fruit.find(function(err, fruits){
    if (err){
        console.log(err);
    } else{
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });

        // Use connection method to close to the Server
        mongoose.connection.close();
    }
});

