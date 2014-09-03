//Ajax 通信
var Ajax = {
        'get' : function( url, params ){
                    return $.ajax({
                        dataType: 'jsonp',
                        type : 'GET',
                        url  : url,
                        data : params,
                        jsonp : params.callback
                });
        }
};
