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
   var tempSolution = [];
  var count = 0;
  var queens = 0;
  for(var j = 0; j < n; j++) {
   var tempArr = [];
   for(var i = 0; i< n; i++) {
      tempArr = tempArr.concat(0);
    }
    tempSolution.push(tempArr);
  }

  var board = new Board(tempSolution);

  var chessboard = board.rows();
  console.log('CHESSBOARD:', tempSolution);
  var boardArray = [];

  var recurse = function (boardParam) {
    console.log('boardParam: ', boardParam);
    queens = 0;
    for(var k = 0; k < n; k++) {
      for(var m = 0; m < n; m++) {
        if(boardParam[k][m] === 1) {
          queens++;
        }
      }
      if(queens === n) {
      return boardParam;
    }
      boardArray.push(boardParam.slice());
      boardArray[boardArray.length - 1][k] = 1;
      var test = new Board(boardArray[boardArray.length - 1]);
      if(test.hasAnyQueeConflicts()) {
        boardArray.splice(boardArray.length-1, 1);
      }
    }
    for(var l = 0; l<boardArray.length; l++) {
      recurse(boardArray[l]);
    }
  };

  return recurse(chessboard);
};


  // var solution = []; //fixme
  // var tempSolution = [];
  // var count = 0;
  // var queens = 0;
  // for(var j = 0; j < n; j++) {
  //  var tempArr = [];
  //  for(var i = 0; i< n; i++) {
  //     tempArr.push(0);
  //   }
  //   tempSolution.push(tempArr);
  // }

  // var board = new Board(tempSolution);
  // var chessboard = board.rows();

  // var recurse = function (boardParam, counter) {
   
  //   if(queens === n) {

  //     console.log('Single solution for ' + n + ' queens:', JSON.stringify(boardParam));
  //     return boardParam;
  //   }
  //   else {
  //     for(var k = 0; k < n; k++) {
  //       for(var j = counter; j < n; j++) {
  //         boardParam[k][j] = 1;
  //         if(boardParam.hasAnyMajorDiagonalConflicts) {
  //           boardParam[k][j] = 0;
  //         }
  //         else if(boardParam.hasAnyMinorDiagonalConflicts) {
  //           boardParam[k][j] = 0;
  //         }
  //         else if(boardParam.hasAnyRowConflicts) {
  //           boardParam[k][j] = 0;
  //         }
  //         else if(boardParam.hasAnyColConflicts) {
  //           boardParam[k][j] = 0;
  //         }
  //         else {
  //           queens++;
  //           recurse(boardParam, counter++);
  //         }
  //       }
  //     }
  //   }

  // };



  
  // return recurse(chessboard, 0);
// };

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
