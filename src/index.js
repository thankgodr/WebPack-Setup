import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['I was added', 'from component with lodash'], ' ');

   return element;
} 

document.body.appendChild(component());
