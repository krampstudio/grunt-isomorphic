var hypster = function(what){
    return {
        do : function(who){
            return who + ' do ' + what + ' like an hypster';
        }
    };
};


module.exports = hypster;
