/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP // "Modifies" each element of array based on callbackfn
Array.prototype.myMap = function(callbackFn) {
  let newArray = []; // New array
  // Loop through array, class callbackfn on each element, add mapped element to new Array
  for (let i = 0; i < this.length; i++) {
    let mappedItem = callbackFn(this[i], i, this);
    newArray.push(mappedItem);
  }
  return newArray;
};

// FILTER // Filters array based on callback function
Array.prototype.myFilter = function(callbackFn) {
  let outArray = []; // New Array
  // Loop through array, if callbackfn return true on element, add to return Array
  for (let i = 0; i < this.length, i++) {
    if (callbackfn(this[i], i, this)) {
      outArray.push(this[i]);
    }
  }
  return outArray;
};

// SOME // Returns true if at least one element of the array returns true when tested with the callbackfn
Array.prototype.mySome = function(callbackFn) {
  // Return false if Array is null
  if (this == null) {return false;}
  // Check elements
  for (let i = 0; i < this.length; i++) {
    if (callbackfn(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// EVERY // returns true if all elements in the Array return true on callbackfn
Array.prototype.myEvery = function(callbackFn) {
  // Return false if Array is null
  if (this == null) {return false;}
  // Check all elements of Array
  for (let i = 0; i < this.length; i++) {
    if (!callbackfn(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

// REDUCE // Reduces the array into a single value by applying the callbackfn to the next element and passing the return
//  on the preceding element
Array.prototype.myReduce = function(callbackFn, initialVal) {
  let returnVal = initialVal;
  for (let i = 0; i < this.length; i++) {
    // If am initial value is not provided, set the "first" returnVal to the first element in the Array
    if (initialVal == undefined) {
      returnVal = this[i];
      continue;
    }
    // Reduce the rest of the elements in the array
    returnVal = callbackfn(returnVal, this[i], i, this);
  }
  return returnVal;
};

// INCLUDES // Returns true if array contains searchElement
Array.prototype.myIncludes = function(searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === searchElement) {
      return true;
    }
  }
  return false;
};

// INDEXOF // Returns the index of the first element that matches the searchElement
Array.prototype.myIndexOf = function(searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};