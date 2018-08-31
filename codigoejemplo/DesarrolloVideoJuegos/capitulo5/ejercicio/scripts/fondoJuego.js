var fondoJuego = {
    yFondo1: 0,
    yFondo2: 0,
    yFondo3: 0,
    velocidadFondo1: 0.5,
    velocidadFondo2: 0.6,
    velocidadFondo3: 1,
    actualizar: function (delta) {
        this.yFondo1 += this.velocidadFondo1;
        this.yFondo1 = this.yFondo1 % 800;
        
        this.yFondo2 += this.velocidadFondo2;
        this.yFondo2 = this.yFondo2 % 800;
        
        this.yFondo3 += this.velocidadFondo3;
        this.yFondo3 = this.yFondo3 % 800;
    },
    dibujar: function (contexto) {
        contexto.drawImage(fondo, 0, this.yFondo1 - 800);
        contexto.drawImage(fondo, 0, this.yFondo1);
        
        contexto.drawImage(fondo2, 0, this.yFondo2 - 800);
        contexto.drawImage(fondo2, 0, this.yFondo2);
        
        contexto.drawImage(fondo3, 0, this.yFondo3 - 800);
        contexto.drawImage(fondo3, 0, this.yFondo3);
    }
};