//js for menu

var MenuItems = document.getElementById("MenuItems");
        var menuHamb = document.getElementById("menu-icon");
        var menuClose = document.getElementById("menu-icon-x");
        MenuItems.style.maxHeight = "0px";

        function menutoggle(){
            if(MenuItems.style.maxHeight == "0px"){
                MenuItems.style.maxHeight = "400px";
                menuClose.classList.toggle('active');
                menuHamb.classList.toggle('active');
            } else {
                MenuItems.style.maxHeight = "0px";
                menuHamb.classList.toggle('active');
                menuClose.classList.toggle('active');
            }
        }


//Searcher

document.getElementById("search-icon").addEventListener("click", show_searcher);
        document.getElementById("cover-ctn-search").addEventListener("click", hidden_searcher);

        bars_search = document.getElementById("ctn-bars-search");
        cover_ctn_search = document.getElementById("cover-ctn-search");
        inputSearch = document.getElementById("inputSearch");
        box_search = document.getElementById("box-search");

        function show_searcher(){
            bars_search.style.top = "70px";
            cover_ctn_search.style.display = "block";
            inputSearch.focus();

            if(inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }

        function hidden_searcher(){
            bars_search.style.top = "-10px";
            cover_ctn_search.style.display = "none";
            inputSearch.value = "";
            box_search.style.display = "none";
        }

        //Create searcher filter//

        document.getElementById("inputSearch").addEventListener("keyup", inter_searcher);

        function inter_searcher(){
            filter = inputSearch.value.toUpperCase();
            li = box_search.getElementsByTagName("li");

            for (i = 0; i < li.length; i++){
                a = li[i].getElementsByTagName("a")[0];
                textValue = a.textContent || a.innerText;

                if(textValue.toUpperCase().indexOf(filter) > -1){
                    li[i].style.display = "";
                    box_search.style.display = "block";

                    if(inputSearch.value === ""){
                        box_search.style.display = "none";
                    }

                }else{
                    li[i].style.display = "none";
                }
            }
        }


//Slider pagination

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});


//Icons dark and light mode

const btnSwitch = document.querySelector('#switch');

        btnSwitch.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            btnSwitch.classList.toggle('active');

            //saving mode in localStorage
            if(document.body.classList.contains('dark')){
                localStorage.setItem('dark-mode', 'true');
            }else{
                localStorage.setItem('dark-mode', 'false');
            }
        });

//get actual mode
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
}else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}


//category filter for portfolio

const grid = new Muuri('.grid', {
    layout: {
        rounding: false,
    },
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('charger-img');

    //Adding listener for filtering categories

    const links = document.querySelectorAll('#category a');
    links.forEach( (element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            links.forEach((link) => link.classList.remove('active'));
            event.target.classList.add('active');

            const category = event.target.innerHTML.toLowerCase();
            category === 'todos' ? grid.filter('[data-category]') : grid.filter(`[data-category="${category}"]`);
        });
    });

    //Adding listener for searching

    document.querySelector('#searcher-input').addEventListener('input', (event) => {
        const searched = event.target.value;
        grid.filter( (item) => item.getElement().dataset.label.includes(searched) );
    });

    //Adding listener for modal img

    const overlay = document.getElementById('modal-overlay');
    document.querySelectorAll('.grid .item img').forEach( (element) => {        
        element.addEventListener('click', () => {
            const ruta = element.getAttribute('src');
            const description = element.parentNode.parentNode.dataset.description;
            const industry = element.parentNode.parentNode.dataset.industry;
            const country = element.parentNode.parentNode.dataset.country;
            const type = element.parentNode.parentNode.dataset.type;
            const src = element.parentNode.parentNode.dataset.src;

            overlay.classList.add('active');
            document.querySelector('#modal-overlay img').src = ruta;
            document.querySelector('#modal-overlay .description').innerHTML = description;
            document.querySelector('#modal-overlay .industry').innerHTML = industry;
            document.querySelector('#modal-overlay .type').innerHTML = type;
            document.querySelector('#modal-overlay .country').innerHTML = country;
            document.querySelector('#modal-overlay .src').href = src;
        });
    });

    //Adding listener for close button img

    document.querySelector('#close-modal').addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    //Adding listener for close overlay img

    overlay.addEventListener('click', (event) => {
        event.target.id === 'modal-overlay' ? overlay.classList.remove('active') : '';
    });
});


// Contact WebForm

function SendFormGoogleSheets() {
    var btn=document.getElementById('submit');
    var name=document.getElementById('entry.1689656436').value;
    var phone=document.getElementById('entry.1080102694').value;
    var email=document.getElementById('entry.1991660401').value;
    var country=document.getElementById('entry.1735674882').value;
    var city=document.getElementById('entry.764054735').value;
    var message=document.getElementById('entry.1902784077').value;

    if(name==""){
        Swal.fire({
                text: 'El nombre es obligatorio digitarlo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                backdrop: true,
                timer: 3000,
                toast: 'true',
                position: 'center-end',
            });
    document.elementById("entry.1689656436").focus();
    }
    if(phone==""){
        Swal.fire({
                text: 'El número de teléfono o celular es obligatorio digitarlo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                backdrop: true,
                timer: 3000,
                toast: 'true',
                position: 'center-end',
            });
    document.elementById("entry.1080102694").focus();
    }
    if(email==""){
        Swal.fire({
                text: 'El correo electrónico es obligatorio digitarlo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                backdrop: true,
                timer: 3000,
                toast: 'true',
                position: 'center-end',
            });
    document.elementById("entry.1991660401").focus();
    }
    if(country==""){
        Swal.fire({
                text: 'El país es obligatorio digitarlo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                backdrop: true,
                timer: 3000,
                toast: 'true',
                position: 'center-end',
            });
    document.elementById("entry.1735674882").focus();
    }
    if(city==""){
        Swal.fire({
                text: 'La ciudad es obligatorio digitarlo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                backdrop: true,
                timer: 3000,
                toast: 'true',
                position: 'center-end',
            });
    document.elementById("entry.764054735").focus();
    }else{
        if(form=="success") {
            swal('Mensaje enviado','Sus datos han sido enviados exitosamente','success');
        } else {
            swal('Error','El mensaje no se pudo enviar. Inténtelo de nuevo','error');
        }
    }
}