function MController(pModel, pView) {
    'use strict';
    this.model = pModel || new Model();
    this.view = pView || new View();
    var self = this;
    
    self.model.btn.addEventListener('click', function (e) {
        e.stopPropagation();
        self.view.toggleMenu();
    }, false);
    
    self.model.nav.addEventListener('click', function (e) { e.stopPropagation(); }, false);
    document.addEventListener('click', function () {
        self.view.closeMenu();
    }, false);
    document.addEventListener('scroll', function () {
        self.view.closeMenu();
    }, false);
}