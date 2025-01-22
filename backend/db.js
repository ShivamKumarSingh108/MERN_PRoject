

// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://Shivam5829:Shivam123234@cluster0.uqrvvrl.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log("Connected to MongoDB");

//         const foodItemsCollection = mongoose.connection.db.collection("food_items");
//         const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");

//         const foodItems = await foodItemsCollection.find({}).toArray();
//         const foodCategories = await foodCategoryCollection.find({}).toArray();

       
//         global.food_items = foodItems;
//         global.foodCategory = foodCategories;

//         console.log("Data fetched successfully");

//     } catch (err) {
//         console.error("Error connecting to MongoDB:", err);
//     }
// };

// module.exports = mongoDB;




const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://your_username:your_password@your_app_name.uqrvvrl.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=your_app_name';

const mongoDB = async () => {
    try {
        

        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        const foodItemsCollection = mongoose.connection.db.collection("food_items");
        const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");

        const foodItems = await foodItemsCollection.find({}).toArray();
        const foodCategories = await foodCategoryCollection.find({}).toArray();

       
        global.food_items = foodItems;
        global.foodCategory = foodCategories;

        console.log("Data fetched successfully");

    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = mongoDB;
