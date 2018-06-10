function AppView(model) {
    'use strict';
    this.model = model || new AppModel();
}

AppView.prototype = {
    show: function (array) {
        'use strict';

        array.forEach(function (el) {
            el.classList.add('show');
        });
    },
    hide: function (array) {
        'use strict';
        
        array.forEach(function (el) {
            el.classList.remove('show');
        });
    }
};

