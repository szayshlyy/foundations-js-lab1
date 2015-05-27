
/* ----------------- Favorite Animals ----------------------------------------
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next. http://www.w3schools.com/jsref/jsref_random.asp
 Hint: read the whole Math.random description on that page and try the examples
*/

// TODO: 10 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

exports.chooseAnimal = function() {
  var favoriteAnimals = [ "elephant", "penguin", "eagle", "camel" ];
    // TODO Implement me
    var nextAnimal = function(){
      var number = Math.random();
      if (number <= .25){
        return "elephant";
      } else if ((number <= .5)&&(number >= .25)) {
        return "penguin";
      } else if ((number <= .75)&&(number >= .51)) {
        return "eagle";
      } else if (number >= .76) {
        return "camel";
      };
    };

  nextAnimal();
  console.log(nextAnimal());
};
