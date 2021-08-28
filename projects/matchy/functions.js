/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string){
    let x = array.filter(obj => obj.name === string);
    console.log(x);
   return x.length ? x[0] : null;
    
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////ar////////////////////////////////////////////
function replace(array, string, object){
    array.map(function (obj){
        if(obj.name === string){
            return array.splice(obj, 1, object);
        }
        
    }
        
    );
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, string){
    array.map(function (obj){
        if(obj.name === string){
            return array.splice(obj, 1);
        }
        
    }
        
    );
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create function with 2 parameters array and object
function add(array, object){
    console.log(object.name);
    //use if statement to check animal object has a name property
    if(object["name"].length > 0 && object["species"].length > 0){
       
        return  array.map(function(obj){
              if(obj.name !== object.name){
                  array.push(object);
              }
          });
        
        
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
