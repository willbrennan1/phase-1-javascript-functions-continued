// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

    // function wrapAdjective(flair="*") {
    //     return function innerFunc(str="special") {
    //         `You are *${str}*`
    //     }
    // }


    // function wrapAdjective(flair="*") {
    //     return `You are ${flair}${flair}`;
    //     wrapAdjective()(str ='special');
    //         return `You are ${flair}${str}${flair}`;
    //     }

        function wrapAdjective(flair="*") {
            return function 
            innerFunction(str ='special') {
                return `You are ${flair}${str}${flair}!`;
            }
        }

            // return `You are ${flair}${flair}`;
            // wrapAdjective()(str ='special');
            //     return `You are ${flair}${str}${flair}`;
            // }
    

    // function wrapAdjective(string = "*") {

    //     return `You are ${string}${string}!`;
    //     wrapAdjective()(parameter = 'special');
    //         return `You are ${string}${parameter}${string}!`
    //   };