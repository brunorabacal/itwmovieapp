define(['knockout'], function (ko) {
    var ctor = function () {
        console.log('ViewModel initiated...')
        //---Variáveis locais
        var self = this;
        var url = location.hash;
        var id = url.split("/").pop();
        var genresDetailsUri = 'http://192.168.160.39/api/Genres/';
        self.error = ko.observable();
        self.genreDetails = ko.observableArray();
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
        //---- Chamada inicial
        ajaxHelper(genresDetailsUri + id, 'GET').done(function (data) {
            self.genreDetails(data);
        });
    };
    return ctor;
});