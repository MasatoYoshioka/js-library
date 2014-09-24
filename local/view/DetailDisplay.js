//Ajax通信ライブラリの読み込み
document.write( '<script src="/js/local/lib/Display.js"></script>' );

var DetailDisplay = function( id ){
    this.display = $( '#' + id);
    Display.call( this );
    var self = this;
    
    self.disp = function( data ){
            if( Object.keys( data ).length === 0 ){
                    this.emptyTemplate();
                    return;
            }
            this.template( data[0] );
    }
    this.template = function( data ){
      var subject = $( '<h2 class="blog-post-title">' + data.subject + '</h2>' );
      var address = $( '<p class="blog-post-meta">' + master.pref.get( data.pref ) +  master.city.get( data.city ) + '&nbsp;</p>' );

      var maker   = $( '<span> by <a data-toggle="modal" data-target="#remoteModal" href="/api/user/profile/' + data.maker +'" >' + data.username + '</a></span>' );
      var meta    = $( '<span>' + master.dateFormat.format( new Date(data.created_at) ) + '</span>' );
      var meta    = address.append( meta ).append( maker );
      var body    = $( '<p>' + data.body + '</p>' );
      this.display.append( subject ).append( body ).append( meta );
    }
    this.emptyTemplate = function() {
        var title = $( '<h2 class="blog-post-title">掲示板はありません </h2>');
        this.display.append( title );
    }
}

function strCut( str, length )
{
        if( str.length <= length ) return str;
        return str.substr( 0, length ) + "&#x2026";
}

//TopDisplay.prototype = Object.create( Display.prototype );
