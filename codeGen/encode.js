module.exports = function (sqrt, strUnc) {
    return strUnc.split('').map((curr) => {
       for(let i=0; i<=8; i++){
           if(sqrt[i].indexOf(curr) !== -1){
               return `${i+1}${sqrt[i].indexOf(curr)+1}`;
           }
       }
    }).join('');
};