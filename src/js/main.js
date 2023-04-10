import modals from "./modules/modals";
import slider from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInput from "./modules/checkTextInput"; 




window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInput('[name="name"]');
    checkTextInput('[name="message"]');

});