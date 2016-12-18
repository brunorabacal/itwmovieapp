define(['knockout'], function (ko) {
    var ctor = function () {
        console.log('ViewModel initiated...')
        //---Variáveis locais
        var self = this;
        var url = location.hash;
        var id = url.split("/").pop();
        var movieDetailsUri = 'http://192.168.160.39/api/Movies/';
        self.movieDetails = ko.observableArray([]);
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
        //---- Chamada inicial
        ajaxHelper(movieDetailsUri + id, 'GET').done(function (data) {
            self.movieDetails(data);
        });
    };
    return ctor;
});