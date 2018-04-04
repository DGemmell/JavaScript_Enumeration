var arrayTasks = {

 concat: function (arr1, arr2) {
	 return arr1.concat(arr2)
	 console.log(arr1.concat(arr2));
},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index,0,itemToAdd);
		return arr;
	},

	square: function (arr) {
		const map1 = arr.map(x => x * 2);
		return map1;
    },


	sum: function (arr) {
		var sum = arr.reduce(function(a, b) {
			return a + b;
		 }, 0);
	 },

	// findDuplicates: function (arr) {

	// },

	removeAndClone: function (arr, valueToRemove) {
		arr.splice(index,0,valueToRemove);
		return arr;
	},

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
