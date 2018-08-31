var puntaje = {
    actualizar: function () {
        if (puntos > ultimoPuntaje) {
            localStorage['puntos'] = puntos;
            ultimoPuntaje = puntos;
        }
    },
    dibujar: function (contexto) {
        contexto.save();
        contexto.font = '60pt retroBits';
        contexto.strokeStyle = 'black';

        var degradado = contexto.createLinearGradient(0, 0, 0, 70);
        degradado.addColorStop(0, "rgb(170,119,68)");
        degradado.addColorStop(1, "white");
        contexto.fillStyle = degradado;

        contexto.strokeText(puntos, 10, 40);
        contexto.fillText(puntos, 9, 39);

        contexto.strokeText('HI:' + ultimoPuntaje, 300, 40);
        contexto.fillText('HI:' + ultimoPuntaje, 299, 39);

        contexto.restore();
    }
};