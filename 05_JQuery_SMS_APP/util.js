// Example 6: Triangle One
let triangleOne = (str) => {
    let tempStr = '';
    for(let i =1; i<= str.length; i++){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};

// Example 7: Triangle Two
let addSpace = (number) => {
    let tempSpace = '';
    for(let i = 1; i<= number; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};


let triangleTwo = (str) => {
    let tempStr = '';
    for(let i = 0; i<= str.length-1; i++){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};

// Example 8: Triangle Three
let triangleThree = (str) => {
    let tempStr = '';
    for(let i=str.length; i>=1 ; i--){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};

// Example 9: Triangle Four
let triangleFour = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0 ; i--){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
