import TransformationController
    from '../../js/transformation/TransformationController.js';
import TF
    from '../../js/transformation/TransformationFunctions.js';

export default () => {
    enableMainCardToggle();
    //mousemoveTransformations();
    setMouseoverBackgroundVars();
};

function enableMainCardToggle() {
    document.querySelector('.main-card__toggle')
        .addEventListener("click", toProjects);
}

function toProjects(e) {
    const mainCard = document.querySelector('.main-card');

    if(e.target.checked) {
        location.href = '#projects';
        mainCard.classList.remove('main-card--initial');
        mainCard.classList.toggle('main-card--text-invisible');
        mainCard.classList.toggle('main-card--minimized');
    } else {
        location.href = '#';
        mainCard.classList.toggle('main-card--minimized');
        setTimeout(()=>{
            mainCard.classList.toggle('main-card--text-invisible');
        }, 500);
    }

    //remove focus from button
    document.querySelector(':focus').blur();
}

/*function mousemoveTransformations() {
    const tc = new TransformationController(
        document.querySelector('.main-container')
    );

    tc.mousemoveEventTransform(
        TF.combined3d,
        '.main-card--depth'
    );
}*/

function setMouseoverBackgroundVars() {
    document.querySelector('.main-card__inner')
        .addEventListener("mouseover", mainInnerMouseOver);
    document.querySelector('.main-card__inner')
        .addEventListener("mousemove", mainInnerMouseOver);
}

function mainInnerMouseOver(e) {
    let inner = document.querySelector('.main-card__inner'),
        rect = inner.getBoundingClientRect();



    inner.style.setProperty('--card__inner--hover-left', (e.clientX-rect.left) + 'px');
    inner.style.setProperty('--card__inner--hover-top', (e.clientY-rect.top) + 'px');
}
