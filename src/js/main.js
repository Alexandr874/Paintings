import modals from "./modules/modals";
import slider from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInput from "./modules/checkTextInput"; 
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import changeFormState from "./modules/changeFormState";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scroling from "./modules/scroling";







window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let calcState = {};
    console.log(calcState);
    
   
    modals();
    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    forms(calcState);
    mask('[name="phone"]');
    checkTextInput('[name="name"]');
    checkTextInput('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    changeFormState(calcState);
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading'/* , '.accordion-block' */);
    burger('.burger-menu', '.burger');
    scroling('.pageup');
    

});