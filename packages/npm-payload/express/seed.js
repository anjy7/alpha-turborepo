import mongoose from 'mongoose';

import {connectDB} from './db.js';


import {pages} from './model/page.js';
import {navbars} from './model/navbar.js'

const seedDb = async () => {

  // console.log("seedDb");
  await connectDB() 
// const page = new pages({
//     title: "db2",
//     content: "db2",
//   });

//   await page.save();
const nav = new navbars({
  first: "link1",
  second: "link2",
});

await nav.save();

};

seedDb()
  .then(() => {
    console.log(`items added`);

    mongoose.connection.close();
  })

  .catch((error) => {
    console.log(error);
  });
