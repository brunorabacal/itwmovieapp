define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title: 'Welcome', moduleId: 'viewmodels/welcome', nav: true, menu: '<img class="inverted" src="https://campinfinity.com/static/djangocms_admin_style/fonts/src/home.svg" width="20" height="20" >  Home' },
                { route: 'directors', title: 'Directors', moduleId: 'viewmodels/directors', nav: true, menu: '<img class="inverted" src="https://cdn3.iconfinder.com/data/icons/objects-1/100/director_chair-512.png" width="20" height="20" > Directors' },
                { route: 'actors', title: 'Actors', moduleId: 'viewmodels/actors', nav: true, menu: '<img class="inverted" src="https://cdn4.iconfinder.com/data/icons/user-icons-5/100/user-21-512.png" width="20" height="20" > Actors' },
                { route: 'movies', title: 'Movies', moduleId: 'viewmodels/movies', nav: true, menu: '<i class="fa fa-film"></i> Movies' },
                { route: 'movieDetails/:id', moduleId: 'viewmodels/movieDetails', nav: false, hash: "#movieDetails" },
                { route: 'actorDetails/:id', moduleId: 'viewmodels/actorDetails', nav: false, hash: "#actorDetails" },
                { route: 'directorDetails/:id', moduleId: 'viewmodels/directorDetails', nav: false, hash: "#directorDetails" },
                { route: 'genre', moduleId: 'viewmodels/genre', nav: true, menu: '<img class="inverted" src="https://cdn3.iconfinder.com/data/icons/glypho-movie-and-video/64/theater-masks-512.png" width="22" height="22s"> Genre' },
                { route: 'genreDetails/:id', moduleId: 'viewmodels/genreDetails', nav: false, hash: "#genreDetails" }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});