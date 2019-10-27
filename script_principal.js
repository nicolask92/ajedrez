
            //Creando Titulo
            titulo = document.createElement('h1');
            document.body.insertBefore(titulo,document.getElementById('container'));
            titulo.innerHTML = "Ajedrez con JavaScript";


            //Dandole dimensiones y estilos al div container/tablero principal y textos
            titulo.style.cssText = 'text-align:center;';
            div_principal = document.getElementById("container");
            div_principal.style.cssText = 'margin:0 auto; background-color: #fafafa; max-width: 400px; width: 80%; min-height: 400px; hight: 80%;';


            //Ancho y Alto de los casilleros

            
            let ancho_largo = container.getBoundingClientRect().width;  
            let anchoen8 = (ancho_largo/8);
            console.log(anchoen8);    //adaptar en el futuro//

            //Elegir color de piezas a jugar

            function eleccion_color(){

            }

            function crear_tablero() {
            for(let i=0;i<64;i++){
                    cuadrado = document.createElement('div');
                    cuadrado.className += 'cuadrado';
                    container.appendChild(cuadrado);
                    var estilo = document.getElementsByClassName('cuadrado'); 
                    cuadrado.style.cssText = `width: ${anchoen8}; height: ${anchoen8}; float:left;`;
                    
                    if(i<8){
                        for(let j=1;j<i;j++){
                            estilo[j].style.cssText += "background-color: #545454";
                            j++;
                        }
                    }
                    if(i<16){
                        for(let j=8;j<i+1;j++){
                            estilo[j].style.cssText += "background-color: #545454";
                            j++;
                        }
                    }
                    if(i<24){
                        for(let j=17;j<i+1;j++){
                            estilo[j].style.cssText += "background-color: #545454";
                            j++;
                        }
                    }
                    if(i<32){
                        for(let j=24;j<i+1;j++){
                            estilo[j].style.cssText += "background-color: #545454";
                            j++;
                        }
                    }
                    if(i<40){
                        for(let j=33;j<i+1;j++){
                            estilo[j].style.cssText += "background-color: #545454";
                            j++;
                        }
                    }
                    if(i<48){
                        for(let j=40;j<i+1;j++){
                            estilo[j].style.cssText += "background-color: #545454";
                            j++;
                        }
                    }
                    if(i<56){
                        for(let j=49;j<i+1;j++){
                            estilo[j].style.cssText += "background-color: #545454";
                            j++;
                        }
                    }
                    if(i<64){
                        for(let j=56;j<i+1;j++){
                            estilo[j].style.cssText += "background-color: #545454";
                            j++;
                        }
                    }
            };
            div_principal.style.cssText += "border: solid;";
            };



            //matriz de Piezas
            let total_cuadrados = [
                ['','']
            ];

            // Arrastre de las piezas

             

            
            //Agregar piezas al tablero
            function agregar_piezas() {
                //Piezas Blancas
                for( let k=0;k<16;k++){
                    if(k==0||k==7){
                    let estilo = document.getElementsByClassName('cuadrado');
                    let pieza = document.createElement('img');
                    estilo[k].appendChild(pieza);
                    pieza.src= 'imagenes/torre_b.png';
                    }
                    if(k==1||k==6){
                    let estilo = document.getElementsByClassName('cuadrado');
                    let pieza = document.createElement('img');
                    estilo[k].appendChild(pieza);
                    pieza.src= 'imagenes/caballo_b.png';
                    }
                    if(k==2||k==5){
                    let estilo = document.getElementsByClassName('cuadrado');
                    let pieza = document.createElement('img');
                    estilo[k].appendChild(pieza);
                    pieza.src= 'imagenes/alfil_b.png';
                    }
                    if(k==3){
                    let estilo = document.getElementsByClassName('cuadrado');
                    let pieza = document.createElement('img');
                    estilo[k].appendChild(pieza);
                    pieza.src= 'imagenes/rey_b.png';
                    }
                    if(k==4){
                    let estilo = document.getElementsByClassName('cuadrado');
                    let pieza = document.createElement('img');
                    estilo[k].appendChild(pieza);
                    pieza.src= 'imagenes/reina_b.png';
                    }
                    if(k>7){
                    let estilo = document.getElementsByClassName('cuadrado');
                    let pieza = document.createElement('img');
                    estilo[k].appendChild(pieza);
                    pieza.src= 'imagenes/peon_b.png';
                    }
                    let imagen = document.querySelectorAll('img');
                    imagen[k].setAttribute('draggable',"true");
                }
                    //Piezas Negras
                    for( let k=48;k<64;k++){
                    if(k==56||k==63){
                    let estilo = document.getElementsByClassName('cuadrado');
                    let pieza = document.createElement('img');
                    estilo[k].appendChild(pieza);
                    pieza.src= 'imagenes/torre_n.png';

                    }
                    if(k==57||k==62){
                    let estilo = document.getElementsByClassName('cuadrado');
                    let pieza = document.createElement('img');
                    estilo[k].appendChild(pieza);
                    pieza.src= 'imagenes/caballo_n.png';
                    }
                    if(k==58||k==61){
                    let estilo = document.getElementsByClassName('cuadrado');
                    let pieza = document.createElement('img');
                    estilo[k].appendChild(pieza);
                    pieza.src= 'imagenes/alfil_n.png';
                    }
                    if(k==59){
                    let estilo = document.getElementsByClassName('cuadrado');
                    let pieza = document.createElement('img');
                    estilo[k].appendChild(pieza);
                    pieza.src= 'imagenes/rey_n.png';
                    }
                    if(k==60){
                    let estilo = document.getElementsByClassName('cuadrado');
                    let pieza = document.createElement('img');
                    estilo[k].appendChild(pieza);
                    pieza.src= 'imagenes/reina_n.png';
                    }
                    if(k<56){
                    let estilo = document.getElementsByClassName('cuadrado');
                    let pieza = document.createElement('img');
                    estilo[k].appendChild(pieza);
                    pieza.src= 'imagenes/peon_n.png';
                    }

                    let imagen = document.querySelectorAll('img');
                    imagen[k-32].setAttribute('draggable',"true");

                }
                }


                crear_tablero();
            agregar_piezas();

