//Ajax通信ライブラリの読み込み
document.write( '<script src="/js/local/lib/Api.js"></script>' );

// ユーザー情報検索 
var User = function(){
    Api.call( this );
    var self = this;
    self.url = '';
    
    this.getName = function( id )
    {
        self.url = '/api/user/get_name/' + id;
        return Ajax.get_json( this.url, this.params);
    }
    self.callback = function( data ){
            console.log( data );
    };
};

