/*
**Paramデータ格納
**/
var Param = function(){
    this.params = new Object;
    this.set_form = function( forms ){
        var forms = document.getElementById ( forms );
        var array = new Array();
        for( var i = 0; i < forms.length; i++) {
            var elem = forms.elements[ i ] ;
            if( elem.value == "" ) continue;
            //チェックボックスとラジオボタンはチェックされているもののみ取得
            if( elem.type == "checkbox" || elem.type == "radio" ){
                if( elem.checked ){
                    if( typeof( array[ elem.name ] )!='object' ) array[ elem.name ] = new Array();
                    array[ elem.name ].push( elem.value );
                }
            }else{
                this.params[elem.name]=elem.value;
            }
        }
        //チェックボックスの値を代入
        for( i in array){
            this.params[ i ] = array[ i ];
        }
    };
    this.set_data=function(key,data){
        this.params[ key ]=data;
    };
    this.remove_data=function(key){
        this.params[ key ]="";
    };
};
