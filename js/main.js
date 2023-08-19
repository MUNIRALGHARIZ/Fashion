let menu$icon = document.querySelector('header .container i');
let $menu = document.querySelector('header .container nav');

menu$icon.onclick = _ =>{
        if($menu.style.display=="none"){
            $menu.style='display:flex';
            menu$icon.classList.remove('fa-bars')
            menu$icon.classList.add('fa-xmark')
        }else{
            $menu.style='display:none';
            menu$icon.classList.remove('fa-xmark')
            menu$icon.classList.add('fa-bars')
        }
        }
