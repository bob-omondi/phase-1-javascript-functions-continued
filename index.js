// code your solution here
function saturdayFun(defaul="roller-skate"){
    console.log("This Saturday, I want to ${saturdayFun}!")
}
saturdayFun();

function mondayWork(activity="go to the office"){
    console.log("This Monday, I will ${mondayWork} .");
}
mondayWork();

// Implement a function called saturdayFun:

// It should define a function
// It uses a default argument, 'roller-skate' when no arguments are passed
// allows the default argument to be overridden

function saturdayFun() {
    return function (activity='roller-skate') {
      return `This Saturday, I want to ${activity} !`;
    };
  }
  
  saturdayFun()();

function saturdayFun() {
    return function (activity='roller-skate') {
      return `This Saturday, I want to ${activity} !`;
    };
  }
  
  saturdayFun()("bathe my dog");

  function mondayWork() {
    return function (action ='go to the office') {
        return `This Saturday, I want to ${action}.`;
    };
  }
  
  mondayWork(work)(" work from home");
  
  function wrapAdjective(remainder) {
    const innerFunction = function (name= "special" ) {
      return `You are ${remainder} a ${name} ${remainder} ! `;
    };
    return innerFunction;
  }
  wrapAdjective("%")("a dedicated programmer");