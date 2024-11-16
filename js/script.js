

// -------------------------------------1
// const productName = 'Droid';
// console.log(productName);

// const preicePerItem = 2000;
// console.log(preicePerItem);
// --------------------------------------2
// let pricePerItem = 2000;
// pricePerItem = 3500;
// console.log(pricePerItem);

// let productName = 'Droid';
// productName ='Repair droid';
// console.log(productName);
// ----------------------------------------3 typeof
// let topSpeed = 160;
// console.log(typeof topSpeed);

// let distance = 617.54;
// console.log(typeof distance);

// const login = 'mango935';
// console.log(typeof 'mango935');

// const isOnline = true;
// console.log(typeof isOnline);

// const isAdmin = false;
// console.log(typeof isAdmin);
// -------------------------------------4
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);
// ------------------------------------- 5
// const productName='Droid';
// const pricePerItem=3500;
// const message = `You picked ${productName},price per item is ${pricePerItem} credits`;
// console.log(message)
// ---------------------------------------6
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (pricePerDroid*orderedQuantity)+deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message)
// --------------------------------------7 function
// function sayHi(){
//     console.log("Hello, this is my first function!");
// }
// sayHi();
// ----------------------------8
// function add(a, b, c){
//     console.log(`Addition result equals ${a+ b+ c}`);
// }
// add(15, 27, 10);
// add(10,20,30);
// add(5,10,15);
// ---------------------------9 return
// function add(a,b,c){
//     return a + b + c;
// }
// console.log(add(15,27,10));
// console.log(add(10,20,30));
// console.log(add(5,10,15));
// ---------------------------10
// function makeMessage(name,price){
//     return `You picked ${name}, price per item is ${price} credits`
// }
// console.log(makeMessage('Radar',6150));
// console.log(makeMessage('Scanner',3500));
// console.log(makeMessage('Reactor',8000));
// console.log(makeMessage('Engine',4070));
// ---------------------------------------------11
// function calculateTotalPrice(orderedQuantity, pricePerItem){
//    const totalPrice = orderedQuantity*pricePerItem;
//     return totalPrice;
// }
// console.log(calculateTotalPrice(5,100));
// console.log(calculateTotalPrice(8,60));
// console.log(calculateTotalPrice(3,400));
// console.log(calculateTotalPrice(1,3500));
// console.log(ca lculateTotalPrice(12,70));
// -------------------------------------------12(Свойства контейнера)
// 15.11.2024
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee){
// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// return `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));
// --------------------------------------------13
// function isAdult(age){
//     const passed = age >=18;
//     return passed
// }
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));
// ---------------------------------14
// function isValidPassword(password){
//     const SAVED_PASSWORD = "jqueryismyjam";
//     const isMatch = password === SAVED_PASSWORD;
//     return isMatch;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("jqueryismyjam"));
// console.log(isValidPassword("kiwirul3z"));
// --------------------------------------------15
// function checkAge(age){
//   let message; 
// if(age >= 18){
//     message = 'You are an adult';
// } else{
//   message = 'You are a minor'
// }
// return message;
// }
// console.log(checkAge(2));
// -----------------------------------16
// function checkStorage(available, ordered){
//    let message;
//     if(ordered >= available){
//         message = 'Not enough goods in stock!';
//     } else{
//         message = 'Order is processed, our manager will contact you.';
//     }
//     return message;
// }
// console.log(checkStorage(100,50));
// --------------------------------------17
// let a = 7;
// a += 7;
// console.log(age);

// let b = 6;
// b -= 6;
// console.log(b);

// let c = 45;
// c *= 45;
// console.log(c);

// let d = 2;
// d /= 2;
// console.log(d);
// ---------------------18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits){
//     let totalPrice = pricePerDroid * orderedQuantity;
//     let message;
//     if(totalPrice > customerCredits){
//         message = "Insufficient funds!";
//     } else{
//         let numer = customerCredits - totalPrice;
//         message = `You ordered ${orderedQuantity} droids, you have ${numer} credits left`;
//     }
//     return message;
// }
// console.log(makeTransaction(500, 10, 5000))
// -------------------------------------------- 19
// function checkPassword(password){
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     if(password === null){
//         message = "Canceled by user!";
//     } else if(password === ADMIN_PASSWORD){
//         message = "Welcome!";
//     } else{
//         message = "Access denied, wrong password!";
//     }
//     return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));
// -----------------------------------------------20
// function checkStorage(available, ordered){
//     let message;
//     if(ordered === 0){
//         message = "There are no products in the order!";
//     } else if(ordered > available){
//         message = "Your order is too large, there are not enough items in stock!";
//     } else{
//         message = "The order is accepted, our manager will contact you";
//     }
//     return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
// ---------------------------------------21
// function isNumberInRange(start, end, number){
//    let isInRange = number >= start && number <= end;
//    return isInRange
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));
// ------------------------------------------22
// function checkIfCanAccessContent(subType){
//     let canAccessContent = (subType === "pro" || subType === "vip") ;
//     return canAccessContent
// }
// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));
// -----------------------------------------------23