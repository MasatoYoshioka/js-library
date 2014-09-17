//Ajax通信ライブラリの読み込み
document.write( '<script src="/js/local/lib/Ajax.js"></script>' );
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
    this.setData = function( obj, key, value ){
            //一時変数
            var temp = new Object;
            for( n  in obj ){
                    temp[ eval( 'obj[n].' + key ) ] = eval( 'obj[n].' + value );
            }
            this.data = temp;
    };
    /*
    * selecter 表示
    * dom 表示したいselect.id
    * obj データ
    */
    this.selecterOptions = function( dom, obj ){
        var select = $( dom );
        var selected = this.default;
        for( key in obj ){
            if( key == selected ){
            var option = $('<option>').val( key ).html( obj[ key ] ).attr('selected','selected') ;
            }else{
            var option = $('<option>').val( key ).html( obj[ key ] );
            }
            select.append( option );
        }
    };
    // selecter の削除
    this.removeSelecter = function( dom ){
        var select = $( dom ).children().remove();
    }

    this.setDefault = function( id ){
            this.default = $( '#' + id ).data( 'default' );
    }
    this.get = function( key )
    {
            return this.data[ key ];
    }
    
};
// 都道府県全検索 Yahoo関連子クラス
var PrefCodeSearch = function( name ){
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
        self.setData(  data.Feature[0].Property.AddressDirectory, 'AreaCode', 'Name' );
    }
    self.callback = function( data ) {
            self.setPref( data );
            self.selecterOptions( '#pref', self.data );
            if( self.city !== undefined && self.default) self.city.onChange();
    }
    self.setDefault( 'pref' );
    self.setCityObj = function( obj )
    {
        self.city = obj;
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
                var pref = $( "#pref" ).val();
                self.addParams({ 'ac' : pref });
                self.ajax();
        }
        self.setCity   = function( data ){
            self.setData( data.Feature[0].Property.AddressDirectory, 'AreaCode', 'Name' );
        }
        self.callback = function( data ) {
            self.setCity( data );
            self.removeSelecter( '#city' );
            self.selecterOptions( '#city', self.data );
        }
        self.setCityDefault = function(){
            this.setDefault( 'city' );
            this.onChange();
        };
};
PrefCodeSearch.prototype    = Object.create( Yahoo.prototype );
CityCodeSearch.prototype    = Object.create( Yahoo.prototype );


