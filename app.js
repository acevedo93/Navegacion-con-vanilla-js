

/*++++++++++++++*/

(function(d){
    let tabs = Array.prototype.slice.apply( d.querySelectorAll('.tabs_item'));
    let panels = Array.prototype.slice.apply( d.querySelectorAll('.panel_item'));
    //delegacion de eventos 
    //capturando el clik en cada evento
    d.getElementById('tabs').addEventListener('click', e =>{
      //
    
      if(e.target.classList.contains('tabs_item')){
       
        let i = tabs.indexOf(e.target);
        tabs.map(tabs => tabs.classList.remove('active'));
        tabs[i].classList.add('active');
        panels.map(panel => panel.classList.remove('active'));
        panels[i].classList.add('active');
        
    }
    
    });
})(document);


function despedir(){
    console.log('Adios')
}

function contarHoras(){
    console.log('viva la vida')
}