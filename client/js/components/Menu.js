function createMenu() {
    let menu = document.getElementsByTagName("nav");
    menu = menu.length > 0 ? menu[0] : null;

    if (menu !== null){
        const classMenu = 'bg-violet-500 text-white font-semibold p-4 flex justify-between border-b border-violet-700';
        classMenu.split(' ').forEach(classe => menu.classList.add(classe));
        
        menu.innerHTML = `
            <h1 class="px-2 py-1" tabindex="1">
                <a class="text-xl" href="/">MyFlix</a>
            </h1>
            <ul class="flex gap-2">
                <li class="px-2 py-1" tabindex="1">
                    <a href="/">Home</a>
                </li>
                <li class="px-2 py-1" tabindex="1">
                    <a href="/client/page/config/">Configurações</a>
                </li>
                <li class="px-2 py-1" tabindex="1">
                    <a href="/client/page/login/">Logout</a>
                </li>
            </ul>
        `
    }
}

createMenu();