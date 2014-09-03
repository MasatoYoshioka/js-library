//Ajax通信ライブラリの読み込み
document.write( '<script src="/js/Ajax.js"></script>' );
// Yahoo 基幹クラス
var Yahoo = function(){
    this.params    = { 'appid' : 'dj0zaiZpPUVMUW1IanFKc1JXMiZzPWNvbnN1bWVyc2VjcmV0Jng9MGE-' };
    this.addParams = function( params ){
            for( param in params ){
                    this.params[ param ] =  params[ param ];
            }
    }
    /* 
    *  Requestの実行
    */ 
    this.ajax   = function(){
            Ajax.get( this.url, this.params );
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
                    console.log( eval( 'obj[n].' + key ) );
                    temp[ eval( 'obj[n].' + key ) ] = eval( 'obj[n].' + value );
            }
            console.log( temp );
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
    this.selecterOptions = function( dom, obj ){
        var select = $( dom );
        for( key in obj ){
            var option = $('<option>').val( key ).html( obj[ key ] ) ;
            select.append( option );
        }
    };
    // selecter の削除
    this.removeSelecter = function( dom ){
        var select = $( dom ).children().remove();
    }

};
// 都道府県全検索 Yahoo関連子クラス
var AddressDirectory = function( name ){
    Yahoo.call( this );
    var self = this;
    self.name = name;
    self.url    = 'http://search.olp.yahooapis.jp/OpenLocalPlatform/V1/addressDirectory';
    self.addParams({
            'ac'       : 'JP',
            'output'   : 'json',
            'callback' : self.name + '.callback' ,
    });
    self.setPref   = function( data ){
        self.setData( 'pref', data.Feature[0].Property.AddressDirectory, 'AreaCode', 'Name' );
    }
    self.callback = function( data ) {
            self.setPref( data );
            self.selecterOptions( '#pref', self.pref );
    }
};
// 街情報取得
var CityCodeSearch = function( name ){
        Yahoo.call( this );
        var self = this;
        self.name = name;
        self.url    = 'http://search.olp.yahooapis.jp/OpenLocalPlatform/V1/addressDirectory';
        self.addParams({
                'output' : 'json',
                'callback' : self.name + '.callback'
        });
        self.onChange = function(){
                var pref = $(this).val();
                self.addParams({ 'ac' : pref });
                self.ajax();
        }
        self.setCity   = function( data ){
            self.setData( 'city', data.Feature[0].Property.AddressDirectory, 'AreaCode', 'Name' );
        }
        self.callback = function( data ) {
            self.setCity( data );
            self.removeSelecter( '#city' );
            self.selecterOptions( '#city', this.city );
        }
};
//
AddressDirectory.prototype  = Object.create( Yahoo.prototype );
CityCodeSearch.prototype    = Object.create( Yahoo.prototype );


