// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
return {
    id,
    nameFirst,
    nameLast
};
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    let contacts = [] ;
    
    return {
        // we implemented the length api for you //
        length: () => contacts.length,
        addContact: contact =>  contacts.push(contact),
        findContact: fullName => {
            // for(let i = 0; i <= contacts.length - 1; i++){ // search the indexed list
            //   for(let key in contacts[i]){ // searches the object 
            //             // if object.nameFirst + object.nameLast === fullName return contact otherwise undefined.
            //       return `${contacts[i].nameFirst} ${contacts[i].nameLast}` === fullName ? contacts[i] : undefined;
            //   } 
                
            // }
            return contacts.filter(obj => fullName === `${obj.nameFirst} ${obj.nameLast}`)[0];
            
        },
        removeContact: contact => {
            // for(let i = 0; i < contacts.length; i++){
            //     for(let key in contacts[i]){
            //         if(contact === contacts[i]){
            //             return contacts.splice(i, 1);
            //         }
            //     }
            // }
            return contacts.map(obj => contact === obj ? contacts.splice(obj, 1) : contacts);
            
        },
         printAllContactNames: () =>{ 
            // var newArray = []; // created new array to push contacts in // 
             
            // for(var i = 0; i < contacts.length; i++){ // loop over array to print contacts // 
            // newArray.push(`${contacts[i].nameFirst} ${contacts[i].nameLast}`); // adding fullNames to an array // 
            // }
            // return newArray.join('\n'); // joined array so last fullName does not have a new-line character added after it// 
            
            return contacts.map(obj => `${obj.nameFirst} ${obj.nameLast}`).join('\n');
   
}
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
