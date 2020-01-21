import {padZerosToLength} from './helpers';

const ChanceModule = require('chance');
export const chance = new ChanceModule()

 export const createManyUsers = (howMany) => {
     const users = [];
     for (let index = 0; index < howMany; index++) {
         const user = {
             id: padZerosToLength(index),
             name: chance.name(),
             address: chance.address()
         }
         users.push(user);
     }

     return users;
 }