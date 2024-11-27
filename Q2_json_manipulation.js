const sourceArray = [
    {
      "batch_id": "123",
      "name": "Tony",
      "contact": "9872276210"
    },
    {
      "batch_id": "231",
      "name": "Steve",
      "contact": "7876543210"
    },
    {
      "batch_id": "123",
      "name": "Bruce",
      "contact": "6776543210"
    },
    {
      "batch_id": "321",
      "name": "Clint",
      "contact": "8954643210"
    },
    {
      "batch_id": "123",
      "name": "Peter",
      "contact": "7666543210"
    },
    {
      "batch_id": "231",
      "name": "Phil",
      "contact": "8896543210"
    },
    {
      "batch_id": "321",
      "name": "Nick",
      "contact": "9876521210"
    }
  ];

// sourceArray.forEach((item)=>{

// // const ultimateObj = {};
//  if(item.iot === -1) {
//     return; 
//  }

//    const id =  item["batch_id"];

//    const newArr = sourceArray.filter((obj)=>{
    
//          if( obj.batch_id === id && obj.iot!==-1) {
//             obj.iot=-1;
//             return true;
//          }
//    });

//    console.log("new Array is ",newArr);
  
//      newArr.forEach((obj2)=>{
//          delete obj2.batch_id;
//           delete obj2.iot;
    
//    });

//    console.log("after deleetion",newArr);
   
// //    const finalObj = {
// //     [id]:newArr
// //    }
// //    console.log("final object is ",finalObj);


// });



function transformArray(sourceArray) {
    const result = [];
  
   
    const grouped = sourceArray.reduce((acc, item) => {
      const { batch_id, ...rest } = item; // Remove batch_id
      if (!acc[batch_id]) {
        acc[batch_id] = []; // Initialize array for this batch_id
      }
      acc[batch_id].push(rest); // Add object without batch_id
      return acc;
    }, {});
  
    console.log(grouped);
    // Convert the grouped data into the desired format
    // for (const [batch_id, objects] of Object.entries(grouped)) {
    //   result.push({ [batch_id]: objects });
    // }
  
    
  }

transformArray(sourceArray);