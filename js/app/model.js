function AppModel() {
    'use strict';
    this.all = [].slice.call(document.querySelector("div.portfolio__app").children);
    this.web = [].slice.call(document.querySelectorAll("div.web"));
    this.app = [].slice.call(document.querySelectorAll("div.app"));
    this.icons = [].slice.call(document.querySelectorAll("div.icons"));
    this.btns = document.querySelectorAll('ul.portfolio__navList button');
    this.model = this;
}

AppModel.prototype = {
    getNeg: function (arrayToRemove) {
        'use strict';
        var self = this,
            all = [].slice.call(self.all);
        
        if (arrayToRemove === this.all) {
            return [];
        } else {
            arrayToRemove.forEach(function (el) {
                var indexToRemove = all.indexOf(el);
                all.splice(indexToRemove, 1);
            });
            return all;
        }
    }
};