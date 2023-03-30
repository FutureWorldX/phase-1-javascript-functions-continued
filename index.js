// code your solution here

// Defining Functions Using a Function Expression to reuse for the day and activity
const weekendActivity = function (day, activity) {
  return `This ${day}, I want to ${activity}!`;
};
const weekdayActivity = function (day, activity) {
  return `This ${day}, I will ${activity}.`;
};

// defines saturdayFun function declaration as specified
//    1) function exists
//    2) uses the default activity 'roller-skate' when no arguments are passed
//    3) permits the default activity to be overriden
// ReferenceError: saturdayFun is not defined
// The output text expected is "This Saturday, I want to bathe my dog!"

function saturdayFun(action){
  if (action === undefined){ 
    action = "roller-skate";
  }
  let day = "Saturday";
  let saturdayAction = weekendActivity(day,action);
  console.log(saturdayAction);
  return saturdayAction;
}

//  defines mondayWork function expression as specified
//    4) function exists
//    5) uses the default activity 'go to the office' when no arguments are passed
//    6) permits the default activity to be overriden
// ReferenceError: mondayWork is not defined
// The output text expected is "This Monday, I will go to the office."
// expected undefined to equal 'This Monday, I will work from home.'

function mondayWork(action){
  if (action === undefined){ 
    action = "go to the office";
  }
  let weekday = "Monday";
  let mondayAction = weekdayActivity(weekday,action);
  console.log(mondayAction);
  return mondayAction;
}

//  defines wrapAdjective function according to the specification
//    7) function exists
//    8) when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
//    9) when initialized with '||' creates a function that, when called, wraps an adjective in a highlight
//  ReferenceError: wrapAdjective is not defined
//  TypeError: result is not a function

function wrapAdjective(inputChar,inputText){

  //creating a function that picks the inputChar and inputText
  //then copies/clones the value of inputText to wrapText
  //then returns inputChar and wrapText at the end for the unit test
  const wrapInputText = function (wrapText) {
    inputText = wrapText;
    return `You are ${inputChar}${wrapText}${inputChar}!`;
  };

  //this is returning the entire function of wrapInputText as the result
  return wrapInputText;
}