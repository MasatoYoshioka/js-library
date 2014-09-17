//Ajax通信ライブラリの読み込み
document.write( '<script src="/js/local/lib/Ajax.js"></script>' );
// Api 基幹クラス
var Api = function(){
    this.params    = new Object;
    this.data      = new Object;
    this.addParams = function( params ){
            for( param in params ){
                    this.params[ param ] =  params[ param ];
            }
    }
    /* 
    *  Requestの実行
    */ 
    this.jsonp   = function(){
            Ajax.get( this.url, this.params );
    };
    this.json    = function(){
            Ajax.json( this.url, this.params );
    };
    /*
    *  可変変数の設定
    *  name   変数名
    *  obj    元データ
    *  key    元データのkey
    *  value  元データのvalue
    */
    this.setData = function( name, obj, key, value ){
            //一時変数
            var temp = new Object;
            for( n  in obj ){
                    temp[ eval( 'obj[n].' + key ) ] = eval( 'obj[n].' + value );
            }
            this.setName( name , temp);
    };
    //可変変数の定義
    this.setName = function( name, data ){
           eval( 'this.' + name + ' = data ' );
    }
    /*
    * selecter 表示
    * dom 表示したいselect.id
    * obj データ
    */

    this.setDefault = function( id ){
            this.default = $( '#' + id ).data( 'default' );
    }
    
};
