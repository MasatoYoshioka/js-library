document.write( '<script src="/js/local/model/Yahoo.js"></script>' );
document.write( '<script src="http://www.enjoyxstudy.com/javascript/dateformat/dateformat.js"></script>');
var Master = function(){
        var self = this;

        this.setMaster = function( name, Obj )
        {
                eval( 'self.' + name + ' = new ' + Obj );
        };
};
