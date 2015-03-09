;(function(root){

var hypster = function(what){
    return {
        do : function(who){
            return who + ' do ' + what + ' like an hypster';
        }
    };
};


    root.hypster  = root.hypster || hypster;
}(this));
