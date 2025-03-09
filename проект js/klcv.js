const button = document.querySelector('button')
button.addEventListener('click',updatename);

function updatename() {
    const name =prompt('Введите своё имя чтобы получить энергетический коктель');
    const paragraph = document.querySelector("p.bbb")
    paragraph.textContent = `Mеня зовут ${name} Вкусненько вкуненько!`
}