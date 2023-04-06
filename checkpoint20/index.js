// import dotenv from "dotenv";
// import mongoose from "mongoose";
// dotenv.config();

// const db = mongoose.createConnection(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// db.on("error", (error) => console.log(error));
// db.once("open", async () => {
//   console.log("Connected to database");

//   const personSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     age: { type: Number },
//     favoriteFoods: { type: [String] },
//   });

//   const Person = db.model("Person", personSchema);

//   try {

//     const person = await Person.create({
//       name: "John",
//       age: 25,
//       favoriteFoods: ["pizza", "burgers"],
//     });
//     console.log("Person saved to database:", person);

//     const arrayOfPeople = [
//       { name: "Alice", age: 30, favoriteFoods: ["spaghetti", "salad"] },
//       { name: "Bob", age: 35, favoriteFoods: ["tacos", "pizza"] },
//       { name: "Charlie", age: 40, favoriteFoods: ["hamburger", "fries"] },
//     ];
//     const people = await Person.insertMany(arrayOfPeople);
//     console.log("People saved to database:", people);

//     const peopleWithJohnName = await Person.find({ name: "John" });
//     console.log("People with name John:", peopleWithJohnName);

//     const personWithPizzaFood = await Person.findOne({
//       favoriteFoods: "pizza",
//     });
//     console.log("Person with favorite food pizza:", personWithPizzaFood);

//     const personId = "642da2d4ed73b44196e03c54";
//     const personWithId = await Person.findById(personId);
//     console.log("Person with id", personId, ":", personWithId);

//     personWithId.favoriteFoods.push("hamburger");
//     const updatedPerson = await personWithId.save();
//     console.log("Updated person with id", personId, ":", updatedPerson);

//     const personName = "Alice";
//     const updatedPersonWithAge20 = await Person.findOneAndUpdate(
//       { name: personName },
//       { age: 20 },
//       { new: true }
//     );
//     console.log(
//       "Updated person with name",
//       personName,
//       ":",
//       updatedPersonWithAge20
//     );

//     const removedPerson = await Person.findByIdAndRemove(personId);
//     console.log("Removed person with id", personId, ":", removedPerson);

//     Person.deleteOne({ name: "Mary" }, function (err, result) {
//       if (err) return console.error(err);
//       console.log(result);
//     });

//     Person.find({ favoriteFoods: "burritos" })
//       .sort("name")
//       .limit(2)
//       .select("-age")
//       .exec(function (err, data) {
//         if (err) return console.error(err);
//         console.log(data);
//       });
//   } catch (error) {
//     console.error(error);
//   }
// });
