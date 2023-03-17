const openDropdownButton = document.getElementById('openDropdown');

const dropDown = document.querySelector('.drop_Down');

openDropdownButton.onclick = function() {
    dropDown.classList.toggle('hidden')
}

const tagPP = document.getElementById('tagP');

const onTagPP = document.querySelector('.onTagP');

tagPP.onclick = function() {
    const element = document.querySelector('h6');
    element.innerText = '<p>'
    onTagPP.classList.toggle('hidden')
}