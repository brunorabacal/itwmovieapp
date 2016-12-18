define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title: 'Welcome', moduleId: 'viewmodels/welcome', nav: true, menu: '<i class="fa fa-home"></i> Home' },
                { route: 'directors', title: 'Directors', moduleId: 'viewmodels/directors', nav: true, menu: '<i class="fa fa-video-camera"></i> Directors' },
                { route: 'actors', title: 'Actors', moduleId: 'viewmodels/actors', nav: true, menu: '<i class="fa fa-user"></i> Actors' },
                { route: 'movies', title: 'Movies', moduleId: 'viewmodels/movies', nav: true, menu: '<i class="fa fa-film"></i> Movies' },
                { route: 'movieDetails/:id', moduleId: 'viewmodels/movieDetails', nav: false, hash: "#movieDetails" },
                { route: 'actorDetails/:id', moduleId: 'viewmodels/actorDetails', nav: false, hash: "#actorDetails" },
                { route: 'directorDetails/:id', moduleId: 'viewmodels/directorDetails', nav: false, hash: "#directorDetails"}
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});