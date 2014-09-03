#JSライブラリ

##Ajax.js
ajax通信用

##Yahoo.js
 class Yahoo 基幹
 class PrefCodeSearch 都道府県
 class CityCodeSearch 街コード検索

###使用方法
<select id="pref" name="pref">
</select>
<select id="city" name="city">
</select>


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="/js/Yahoo.js"></script>
<script>

var pref_code_search = new PrefCodeSearch( 'pref_code_search' );
var city_code_search = new CityCodeSearch( 'city_code_search' );
pref_code_search.ajax();

//イベント登録
var element = document.getElementById( 'pref' );
element.addEventListener('change', city_code_search.onChange, false);

</script>

