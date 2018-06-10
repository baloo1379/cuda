function MView(pModel) {
    'use strict';
    this.model = pModel || new Model();
    this.model.newHeight = this.model.getHeight();
}
    
MView.prototype = {
    openMenu: function () {
        'use strict';
        this.model.nav.style.height = this.model.newHeight;
        this.model.navbar.classList.add("navbar--open");
        this.model.btn.textContent = "✖";
    },
        
    closeMenu: function () {
        'use strict';
        this.model.nav.style.height = "";
        this.model.navbar.classList.remove("navbar--open");
        this.model.btn.textContent = "☰";
    },
        
    toggleMenu: function () {
        'use strict';
        if (this.model.nav.style.height || this.model.navbar.classList.contains("navbar--open")) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
};