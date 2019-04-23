/*import User from './functions';

User.info();*/

/*
import {age} from './functions'

console.log(age);

*/

const myPromise = () => new Promise ((resolve, reject) =>
setTimeout( () => { resolve("Ok")}, 2000) 
);

async function ExecutePromise () {
    console.log(await myPromise());
    console.log(await myPromise());
    console.log(await myPromise());
}

ExecutePromise();