use("CollegeDB")
// db.createCollection("student")
// db.student.insertOne({
//     "name": "John Doe",
//     "age": 20,
//     "email": "john.doe@example.com",
//     "Roll No": 12345
// })

// db.student.insertMany([
//     {
//         "name": "Alice Smith",
//         "age": 22,
//         "email": "alice.smith@example.com",
//         "Roll No": 12346
//     },
//     {
//         "name": "Bob Johnson",
//         "age": 21,
//         "email": "bob.johnson@example.com",
//         "Roll No": 12347
//     }
// ])
 db.student.insert([
     {
         "name": "John Doe",
         "age": 20,
         "email": "john.doe@example.com",
         "Roll No": 12345
    },
     {
         "name": "Alex",
         "age":23,
         "email": "alex@example.com",
         "Roll No": 12348
     }
])

// b.student.findOne([   //returns the first document that matches the query criteria 
//     { "Roll No": 12345 }
// ])d
//db.student.find([//returns all dcouments from the collection])

db.student.find({ "name": "Alex" }) //returns all documents that match the query criteria
db.student.updateOne({"name":"Alex"},{$set:{"Roll No":12224}}) //updates the first document that matches the query criteria
db.student.updateMany({"age":{$gt:20}},{$set:{"status":"active"}}) //updates all documents that match the query criteria
db.student.deleteOne({"name":"John Doe"}) //deletes the first document that matches the query criteria  
db.student.deleteMany({"age":{$lt:20}}) //deletes all documents that match the query criteria                   