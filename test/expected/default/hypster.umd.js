(function(root){

var hypster = function(what){
    return {
        do : function(who){
            return who + ' do ' + what + ' like an hypster';
        }
    };
};


    if (typeof define === 'function' && define.amd) {
        define([], function(){
            return hypster;
        });
    } else if (typeof exports === 'object') {
        module.exports = hypster;
    } else {
        root.hypster  = root.hypster || hypster;
    };
}(this));
