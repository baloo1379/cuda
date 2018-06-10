function MModel() {
    'use strict';
    this.navEl = document.querySelector(".navbar__nav ul li");
    this.elHeight = window.getComputedStyle(this.navEl, null).getPropertyValue('height');
    this.navList = document.querySelectorAll(".navbar__nav ul li");
    this.noOfEl = this.navList.length;
    this.newHeight = 0;
    this.navbar = document.querySelector(".navbar");
    this.nav = document.querySelector(".navbar__nav");
    this.btn = document.querySelector(".navbar__btn button");
}
    
MModel.prototype.getHeight = function () {
    'use strict';
    this.elHeight = this.elHeight.replace("px", "");
    this.newHeight = this.noOfEl * this.elHeight + 9;
    return this.newHeight + "px";
};