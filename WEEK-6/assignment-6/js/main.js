function get_menu() {
    var menu = new Array;
    var menu_str = localStorage.getItem('todo');
    if (menu_str !== null) {
        menu = JSON.parse(menu_str);
    }
    return menu;
}

function add() {
    var task = document.getElementById('task').value;

    var menu = get_menu();
    menu.push(task);
    localStorage.setItem('todo', JSON.stringify(menu));

    show();

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var menu = get_menu();
    menu.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(menu));

    show();

    return false;
}

function show() {
    var menu = get_menu();

    var html = '<ul>';
    for(var i=0; i<menu.length; i++) {
        html += '<li>' + menu[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('menu').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);
show();
