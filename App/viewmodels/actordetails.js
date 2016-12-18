define(['knockout'], function (ko) {
    var ctor = function () {
        console.log('ViewModel initiated...')
        //---Variáveis locais
        var self = this;
        var url = location.hash;
        var id = url.split("/").pop();
        var actorDetailsUri = 'http://192.168.160.39/api/Actors/';
        var movieUrl = "http://192.168.160.39/api/Movies/";
        self.actorDetails = ko.observableArray([]);

        self.error = ko.observable();
                //--- Funções internas
        function ajaxHelper(uri, method, data) {
            self.error(''); // Clear error message
            return $.ajax({
                type: method,
                url: uri,
                dataType: 'json',
                contentType: 'application/json',
                data: data ? JSON.stringify(data) : null,
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("AJAX Call[" + uri + "] Fail...");
                    self.error(errorThrown);
                }
            })
        }

        getPosts = function () {
            var moviesArrray = actorDetails()["actor_movies"];
            for (i = 0; i < moviesArray.lenght; i++) {
                var movieID = moviesArrya[i]["movieID"];
                ajaxHelper(movieUrl + movieID.toString(), 'GET').done(function (data) {
                    actorDetails()[i]["poster"] = data["poster"];
                });
            }
        }

        //---- Chamada inicial
        ajaxHelper(actorDetailsUri + id, 'GET').done(function (data) {
            self.actorDetails(data);
        });
    };
    return ctor;
});




