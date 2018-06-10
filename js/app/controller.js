Object.defineProperty(NodeList.prototype, "addEventListener", {
    value: function (event, callback, useCapture) {
        useCapture = ( !! useCapture) | false;
        for (var i = 0; i < this.length; ++i) {
            if (this[i] instanceof Node) {
                this[i].addEventListener(event, callback, useCapture);
            }
        }
        return this;
    }
});

function AppController(model, view) {
    'use strict';
    this.model = model || new AppModel();
    this.view = view || new AppView(model);
    
    this.model.btns.addEventListener('click', function (ev) {
        var attr = ev.target.getAttribute("data-btntype").toString(),
            el = model.getNeg(model[attr]);
        
        //console.log(el, "hidden", model[attr], "showed");

        view.show(model[attr]);
        view.hide(el);
    }, false);
}