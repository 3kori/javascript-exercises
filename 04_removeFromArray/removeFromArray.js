const removeFromArray = function(args, num1, num2, num3, num4) {
    let result = args.filter(function(remArgs) {
      return remArgs !== num1  && remArgs !== num2 && remArgs !== num3 && remArgs !== num4;
    });
    return result;
  };

// Do not edit below this line
module.exports = removeFromArray;
