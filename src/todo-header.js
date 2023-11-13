const createTodoHeader = () => {
    const header = document.querySelector('#header')
    const headerContent = document.createElement('div');
    headerContent.classList.add('header-content');

    //Add dodo image
    const imgElement = document.createElement('img');
    imgElement.classList.add('brand-image');
    imgElement.src = "/src/images/dodo-logo.png";
    imgElement.alt = "dodo";
    headerContent.appendChild(imgElement);

    //Add brand name
    const branding = document.createElement('h1');
    branding.textContent = "To-dodo";
    headerContent.appendChild(branding);

    header.appendChild(headerContent);
}

export default createTodoHeader;