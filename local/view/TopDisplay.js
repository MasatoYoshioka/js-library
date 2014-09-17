//Ajax通信ライブラリの読み込み
document.write( '<script src="/js/local/lib/Display.js"></script>' );

var TopDisplay = function( id ){
    this.display = $( '#' + id);
    Display.call( this );
    var self = this;
    
    self.disp = function( data ){
            for( row in data ){
                    this.template( data[row]);
            }
    }
    this.template = function( data ){
      var title = $( '<h2 class="blog-post-title">' + this.master.pref.get( data.pref ) +  this.master.city.get( data.city ) + '</h2>' );
      var meta  = $( '<h2 class="blog-post-meta">' + data.created_at + '</h2>' );
      var body  = $( '<p>' + data.body + '</p>' );
      this.display.append( title ).append( meta ).append( body );
    }
}

//TopDisplay.prototype = Object.create( Display.prototype );
