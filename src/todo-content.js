const createTodoContentContainer = () => {
    const contentContainer = document.querySelector('#content')
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('left-container');
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('right-container');

    contentContainer.appendChild(leftContainer);
    contentContainer.appendChild(rightContainer)
}

export default createTodoContentContainer;