//Ajax通信ライブラリの読み込み
document.write( '<script src="/js/local/lib/Api.js"></script>' );
document.write( '<script src="/js/local/lib/Params.js"></script>' );

// 掲示板検索 
var Board = function( name ){
    Api.call( this );
    var self = this;
    self.name = name;
    self.url    = '/api/board/search';
    //検索条件
    self.paramsObj = new Param;

    self.setParam = function()
    {
        self.paramsObj.set_form( 'board_form' );
        self.addParams( self.paramsObj.params );
    };
    self.addParams({
           'callback' : self.name + '.callback' 
    });
    //初期化
    self.callback = function( data ){
    };
    //表示オブジェクト設定
    self.setDispObj   = function( obj ){
       this.dispObj = obj;
    }
    self.change = function(){
        self.setParam();
        self.jsonp();
    }
};

