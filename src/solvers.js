/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];
  var tempArr = [];
  var count = 0;
  var recurse = function () {
    if(solution.length === n) {
      console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
      return solution;
    }
    else {
      for(var i = 0; i < n; i++) {
        tempArr.push(0);
      }
      tempArr.splice(count, 0, 1);
      count++;
      solution.push(tempArr);
      tempArr = [];
      return recurse();
    }
  };
  return recurse();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var factorial = function(n) {
    if(n === 1) {
      return 1;
    }
    return n * factorial(n-1);
  };
  var solutionCount = factorial(n);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var solution;
  function deepCopy(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        var out = [], i = 0, len = obj.length;
        for ( ; i < len; i++ ) {
          out[i] = arguments.callee(obj[i]);
        }
      return out;
    }
    if (typeof obj === 'object') {
        var out = {}, i;
        for ( i in obj ) {
          out[i] = arguments.callee(obj[i]);
        }
      return out;
    }
    return obj;
}
  var recurse = function (row) {
    if(board.hasAnyQueensConflicts()) {
      return;
    }
    if(row === n) {
      console.log('Single solution for ' + n + ' queens:', JSON.stringify(board.rows()));
      solution = deepCopy(board.rows());
      return;
    }
    for(var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      recurse(row + 1);
      board.togglePiece(row, i);
    }
  };

  // var recurse = function (row) {
  //   if(row === n) {
  //     console.log('Single solution for ' + n + ' queens:', JSON.stringify(board.rows()));
  //     solution = deepCopy(board.rows());
  //     return true;
  //   }
  //   for(var i = 0; i < n; i++) {
  //     board.togglePiece(row, i);
  //     if(!(board.hasAnyQueensConflicts()) && recurse(row + 1)) {
  //       break;
  //     } else {
  //       board.togglePiece(row, i);
  //     }
  //   }
  // };

  recurse(0);
  console.log('when n is ' + n + ', count is: ' + count);
  return solution;
};



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
var board = new Board({n: n});
var solution;
var queenCount = 0;

  var recurse = function (row) {
    if(board.hasAnyQueensConflicts()) {
      return;
    }
    if(row === n) {
      queenCount++;
      console.log('Single solution for ' + n + ' queens:', JSON.stringify(board.rows()));
      return;
    }
    for(var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      recurse(row + 1);
      board.togglePiece(row, i);
    }
  };

  recurse(0);
  return queenCount;
};
