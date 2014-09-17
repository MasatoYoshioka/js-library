var Display = function(){

    this.remove = function()
    {
        this.display.children().remove();
    };
    this.change = function( data )
    {
        this.remove();
        this.disp( data );
    };
    this.master = new Object;
    this.setMaster = function( obj ){
            this.master = obj;
    };
};

