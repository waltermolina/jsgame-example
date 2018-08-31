var avion = {
    id: 'avion',
    visible: true,
    posiciones: [{ x: 134, y: 6, ancho: 24, alto: 16},
              { x: 70, y: 6, ancho: 24, alto: 16},
			  { x: 38, y: 6, ancho: 24, alto: 16},
			  { x: 101, y: 6, ancho: 24, alto: 16},
			  { x: 166, y: 6, ancho: 24, alto: 16}],
    indiceAnimacion: 0,
    velocidadMovimiento: 20,
    x: 300,
    y: 400,
    width: 23,
    height: 16,
    radius: 10,
    center: { x: 11, y: 8},
    objetivoX: 0,
    objetivoY: 0,
    tiempoAcumulado: 0,
    
    mouseId: -1,
    coordenadasMouse: { x: 0, y: 0},
    
    init: function () {
        var self = this;
        this.mouseId = jsGFwk.IO.mouse.registerClick(function (coord) {
            self.coordenadasMouse = coord;
        });

        this.temporizadorDisparo = new jsGFwk.Timer({
            action: function () {
                jsGFwk.getGameObjects().contenedorBalas.cloneObject({x: self.x + 3, y: self.y - 10});
                canalDisparo.play();
            },
            tickTime: 0.1
        });
    },

    actualizarConTeclas: function () {
        if (teclado.teclasPresionadas['65']) {
            this.x--;
            if (this.indiceAnimacion > 0 && this.tiempoAcumulado > 1) {
                this.tiempoAcumulado = 0;
                this.indiceAnimacion--;
            }
        }

        if (teclado.teclasPresionadas['68']) {
            this.x++;
            if (this.indiceAnimacion < 4 && this.tiempoAcumulado > 1) {
                this.tiempoAcumulado = 0;
                this.indiceAnimacion++;
            }
        }

        if (teclado.teclasPresionadas['83']) {
            this.y++;
        }

        if (teclado.teclasPresionadas['87']) {
            this.y--;
        }

        if (!teclado.teclasPresionadas['65'] && !teclado.teclasPresionadas['68']) {
            if (this.indiceAnimacion !== 2 && this.tiempoAcumulado > 1) {
                this.tiempoAcumulado = 0;
                this.indiceAnimacion -= this.indiceAnimacion > 2 ? 1 : -1;
            }
        }
    },

    update: function (delta) {
        this.tiempoAcumulado += delta;
        this.x += (this.coordenadasMouse.x - this.x) / this.velocidadMovimiento;
        this.y += (this.coordenadasMouse.y - this.y) / this.velocidadMovimiento;

        this.temporizadorDisparo.tick(delta);

        this.imagenActual = this.posiciones[this.indiceAnimacion];
    },
    
    draw: function (contexto) {
        contexto.drawImage(jsGFwk.ResourceManager.graphics.principal.image, 
                           this.imagenActual.x, this.imagenActual.y, 25, 16,
                           this.x, this.y, 25, 16);
    }
};