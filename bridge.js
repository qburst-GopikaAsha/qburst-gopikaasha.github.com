(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefinded'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define(["exports"], factory)
    : factory((global.BRIDGE = global.BRIDGE || {}));
})(this, function(exports){

    var Hybride = (function(){
        var tostMessage = () => {
            scanCard.performClick("hai");
        }
        return {
            tostMessage: tostMessage
        }
    })();
    exports.Hybride = Hybride;

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
});