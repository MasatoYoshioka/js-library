//Ajax 通信
var Ajax = {
        'get' : function( url, params ){
                var def = $.Defferd;
                $.ajax({
                        dataType: 'jsonp',
                        type : 'GET',
                        url  : url,
                        data : params,
                        jsonp : params.callback
                });
                return def;
        },
        'json' : function( url, params ){
            return $.ajax({
                dataType : 'json',
                type     : 'GET',
                url      : url,
                data     : params
            });
        },
        'get_json': function( url, params){
                return $.getJSON( url, params, params.callback );
        },
};
