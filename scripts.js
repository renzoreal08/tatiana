window.onload = function () {
    let musica = document.getElementById("musica-fondo");
    let mensajeInicial = document.getElementById("mensaje-inicial");
    let mensajeFotos = document.getElementById("mensaje-fotos");
    let contenedorFotos = document.getElementById("contenedor-fotos");
    let mensajeVideos = document.getElementById("mensaje-videos");
    let contenedorVideos = document.getElementById("contenedor-videos");

    let fotos = [
        document.getElementById("foto1"),
        document.getElementById("foto2"),
        document.getElementById("foto3"),
        document.getElementById("foto4"),
    ];

    let videos = [
        document.getElementById("video1"),
        document.getElementById("video2"),
        document.getElementById("video3"),
    ];

    let fotoIndex = 0;

    // Iniciar cuando la música comience a reproducirse
    musica.onplay = function () {
        mensajeInicial.classList.remove("hidden");

        setTimeout(() => {
            mensajeInicial.classList.add("hidden");
            mensajeFotos.classList.remove("hidden");

            // Mostrar las fotos una por una durante 5 segundos cada una
            contenedorFotos.classList.remove("hidden");
            let mostrarFotos = setInterval(() => {
                if (fotoIndex < fotos.length) {
                    if (fotoIndex > 0) fotos[fotoIndex - 1].classList.add("hidden");
                    fotos[fotoIndex].classList.remove("hidden");
                    fotoIndex++;
                } else {
                    clearInterval(mostrarFotos);
                    mensajeFotos.classList.add("hidden");
                    contenedorFotos.classList.add("hidden");

                    // Mostrar mensaje antes de los videos
                    mensajeVideos.classList.remove("hidden");
                    setTimeout(() => {
                        mensajeVideos.classList.add("hidden");
                        contenedorVideos.classList.remove("hidden");

                        // Reproducir videos uno por uno
                        reproducirVideosUnoPorUno(videos);
                    }, 3000);
                }
            }, 5000); // Cambiar cada foto cada 5 segundos
        }, 5000); // Esperar 5 segundos antes de mostrar fotos
    };

    function reproducirVideosUnoPorUno(videos) {
        let videoIndex = 0;

        const reproducirSiguienteVideo = () => {
            if (videoIndex < videos.length) {
                let videoActual = videos[videoIndex];
                videoActual.classList.remove("hidden");
                videoActual.play();

                videoActual.onended = () => {
                    videoActual.classList.add("hidden");
                    videoIndex++;
                    reproducirSiguienteVideo();
                };
            }
        };

        reproducirSiguienteVideo();
    }
};




