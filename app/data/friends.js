// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var friends = [{
  name: "Brute",
  photo: "www.legacy.org",
  scores: [1, 2, 3, 2, 1, 8, 3, 2, 3, 4]
}
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
//
