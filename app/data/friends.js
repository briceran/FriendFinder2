// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var friends = [{
  name: "Brute",
  photo: "https://images2.onionstatic.com/clickhole/3564/7/original/600.jpg",
  scores: [1, 2, 3, 2, 1, 8, 3, 2, 3, 4]
},
{
  name: "Brat",
  photo: "https://i.pinimg.com/736x/a7/61/d3/a761d340d87d888075314872a9b0c56e--blonde-beauty-pretty-horses.jpg",
  scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{
  name: "XXX",
  photo: "https://i.ytimg.com/vi/y1U1Eqfdg7w/maxresdefault.jpg",
  scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
}
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
//
