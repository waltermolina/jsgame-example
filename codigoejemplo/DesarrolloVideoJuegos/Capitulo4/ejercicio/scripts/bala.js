var bala = {
    x: 0,
    y: 0,
    ancho: 17,
    alto: 12,
    nombre: 'bala',
    visible: false,
    valocidad: 2,
    
    choca: function (enemigo) {
        if (this.x + this.ancho < enemigo.x) {
            return false;
        }

        if (this.y + this.alto < enemigo.y) {
            return false;
        }

        if (this.x > enemigo.x + enemigo.ancho) {
            return false;
        }

        if (this.y > enemigo.y + enemigo.alto) {
            return false;
        }

        return true;
    },

    actualizar: function (delta) {
        this.y -= this.valocidad;

        if (this.y + this.alto < 0) {
            this.visible = false;
        }

        for (var i = 0; i < framework.objetosDeJuego.length; i++) {
            if (framework.objetosDeJuego[i].nombre === 'enemigo') {
                if (this.choca(framework.objetosDeJuego[i])) {
                    this.visible = false;
                    framework.objetosDeJuego[i].impacto();
                    break;
                }
            }
        }
    },
    
    dibujar: function (contexto) {
        if (this.visible) {
            contexto.drawImage(spriteSheet, 140, 82, 17, 12, this.x, this.y, this.ancho, this.alto);
        }
    }
};