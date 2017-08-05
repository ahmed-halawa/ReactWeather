// Promises callbacks ES6[2015]
function getDataPromise(location){
    return new Promise(function(resolve, reject){
        var locStr = location.toString().toLowerCase();
        if(locStr == 'cairo' || locStr == 'alex'){
            resolve(36);
        }else{
            reject(location + ' Not Found !');
        }
    });
}

getDataPromise('Cairo').then(function(result){
    console.log('Promise success : ', result);
},function(err){
    console.log('Promise faild : ', err);
});

//______________________________________Challenge__________________________________________________

function additionPromise(num1, num2){
    return new Promise(function(resolve, reject){
        if(typeof num1 === 'number' && typeof num2 === 'number'){
            resolve(num1 + num2);
        }else{
            reject(' 2 parameters must be numbers');
        }
    });
}

additionPromise(2, 5).then(function(result){
    console.log('Promise success : ', result);
}, function(err){
    console.log('Promise faild : ', err);
});

additionPromise(2, '5').then(function(result){
    console.log('Promise success : ', result);
}, function(err){
    console.log('Promise faild : ', err);
});