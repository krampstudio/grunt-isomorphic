define([], function(){

var hypster = function(what){
    return {
        do : function(who){
            return who + ' do ' + what + ' like an hypster';
        }
    };
};


    return hypster;
});
