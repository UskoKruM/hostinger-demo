const videos = [
    { title: "Cómo empezar en Desarrollo Web: Guía Completa para ser Desarrollador Web", url: "Yb4EfAyWX04" },
    { title: "Cómo Crear Gráficos con Apache ECharts | Gráficos dinámicos para aplicaciones web", url: "Ihyz6nX3FFY" },
    { title: "Django y JavaScript: Peticiones AJAX con Django (Carga dinámica de datos)", url: "qgf0UYzL5BY" },
    { title: "Bootstrap 5 para Principiantes (Tutorial desde 0)", url: "JDs45GmZWUo" },
    { title: "REST API con Node.js, Express y MySQL", url: "dkic3MU3858" },
    { title: "React para Principiantes: Tutorial de React.js, Práctico y desde 0", url: "7xldkYNgiaM" },
    { title: "REST API con Python, Flask y PostgreSQL", url: "riijt-xcqYI" },
    { title: "Python Flask Login con MySQL  | Autenticación de Usuarios y Manejo de Sesión | Rutas Protegidas", url: "FX0lMm_Qj10" },
    { title: "¿Buena Memoria = Buen Programador? ¿Qué Tan Importante Es La Memorización en Programación?", url: "fLS5uqyQ9Gw" }
];

const loadVideos = () => {
    let content = ``;
    videos.forEach((video) => {
        content += `<div class="ui centered raised link card">
                        <div class="ui equal width grid content">
                            <div class="stretched row">
                                <div class="column">
                                    <h4>${video.title}</h4>
                                </div>
                            </div>
                            <div class="stretched row">
                                <div class="column">
                                    <a href="https://youtu.be/${video.url}" target="_blank">
                                        <div class="ui image">
                                            <img src="https://img.youtube.com/vi/${video.url}/mqdefault.jpg" alt="Thumbnail" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>`;
    });
    videoList.innerHTML = content;
};

window.addEventListener("load", () => {
    loadVideos();
});
