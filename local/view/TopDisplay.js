//Ajax通信ライブラリの読み込み
document.write( '<script src="/js/local/lib/Display.js"></script>' );

var TopDisplay = function( id ){
    this.length = 30;
    this.display = $( '#' + id);
    Display.call( this );
    var self = this;
    
    self.disp = function( data ){
            if( Object.keys( data ).length === 0 ){
                    this.emptyTemplate();
                    return;
            }
            for( row in data ){
                    this.template( data[row]);
            }
    }
    this.template = function( data ){
      var subject = $( '<h2 class="blog-post-title ellipsis">' + data.subject + '</h2>' );
      var address = $( '<p class="blog-post-meta">' + master.pref.get( data.pref ) +  master.city.get( data.city ) + '&nbsp;</p>' );
      var maker   = $( '<span> by <a data-toggle="modal" data-target="#remoteModal" href="/api/user/profile/' + data.maker +'" >' + data.username + '</a></span>' );
      var meta    = $( '<span>' + data.created_at  + '</span>' );
      var meta    = address.append( meta ).append( maker );
      var body    = $( '<p>' + strCut(data.body, 10) + '</p>' );
      var more    = $( '<a class="text-right center-block" href="/board/' + data.id +'">続きを見る</a>');
      var body    = body.append( more );
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
