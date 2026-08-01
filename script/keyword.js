function setKeywordURL(px){
  const dt = document.getElementById(px+'_rsv_date')
  const tg = document.getElementById(px+'_target')
  const [ht, tp, rcd] = tg.value.split(':')
  const an = document.getElementById(px+'_rsv_adult')
  const c1 = document.getElementById(px+'_child1')
  const c2 = document.getElementById(px+'_child2')
  const cn = +!!c1.selectedIndex+!!c2.selectedIndex
  const rs = document.getElementById(px+'_filter')
  var ud = dt.valueAsDate
  var ud = ud.getFullYear()+(ud.getMonth()+1).toString().padStart(2,'0')+ud.getDate().toString().padStart(2,'0')
  const sp = document.getElementById(px+'_url_type').value == 'sp' ? 'sp/' : ''
  const url = `https://reserve.tokyodisneyresort.jp/${sp}hotel/list/?useDate=${ud}&stayingDays=1&adultNum=${an.value}&childNum=${cn}&childAgeBedInform=${encodeURIComponent(c1.value+c2.value)}&roomsNum=1&checkPointStr=&searchHotelName=&searchLayer=&keyword=${encodeURIComponent(tp)}&hotelChangeFlg=false&hotelShowFlg=0&receiptNO=&searchHotelDiv=&searchHotelCD=${ht}&removeSessionFlg=true&errorBeforeUrl=&displayType=data-hotel&reservationStatus=${rs.value}&hotelRoomCd=${rcd}#tabCont1`
  const disp = `${dt.value} ${tg.options[tg.selectedIndex].text}(大人 ${an.options[an.selectedIndex].text}、子供 ${cn}名)`
  document.getElementById(px+'_result').innerHTML=`<a href="${url}" target="_blank">${disp}</a>`
}

function seKeywordtHotelReserveURLForm(){
  tgtobj = document.createElement('div');
  document.currentScript.after(tgtobj);
  var dd = new Date();
  dd.setMonth(dd.getMonth() + 4);
  var default_date = dd.getFullYear()+'-'+(dd.getMonth()+1).toString().padStart(2,"0")+'-'+dd.getDate().toString().padStart(2,"0");
  tgtobj.style.backgroundColor = "#ddffee";
  tgtobj.style.padding = "10px";
  tgtobj.innerHTML = `
<p><select id="keyword_url_type" onchange="setKeywordURL('keyword');">
    <option value="pc">PC</option>
    <option value="sp">スマホ</option>
</select>

<input id="keyword_rsv_date" type="date" value="${default_date}" onchange="setKeywordURL('keyword');"/>

<select id="keyword_filter" onchange="setKeywordURL('keyword');">
    <option value="0">すべて</option>
    <option value="1">空きありのみ</option>
</select></p>

<p><select id="keyword_target" onchange="setKeywordURL('keyword');" style="width:100%;">
  <option disabled style="color:red;">東京ディズニーシー・ホテルミラコスタ</option>
    <option value="DHM:ポルト・パラディーゾ・サイド テラスルーム:HODHMTOD0004N">ハーバー側のテラスルーム3種</option>
    <option value="DHM:テラスから、:HODHMTVD0005N">ヴェネツィア側を含むテラスルーム4種</option>
    <option value="DHM:ポルト・パラディーゾ・サイド バルコニールーム:HODHMBOQ0004N">ハーバー側バルコニールーム3種</option>
    <option value="DHM: バルコニールーム:HODHMBOQ0004N">ヴェネツィア側を含むバルコニールーム4種</option>
    <option value="DHM:ポルト・パラディーゾ・サイド ハーバールーム:HODHMHOW0005N">ハーバールーム2種</option>
    <option value="DHM:スペチアーレ・ルーム＆スイート:HODHMTVD0005N">スペチ全て</option>
    <option value="DHM:（４名対応）:HODHMOQT0005N">部屋名に４名対応が含まれる</option>

  <option disabled style="color:red;">東京ディズニーランドホテル</option>
    <option value="TDH:タレットルーム:HOTDHRTT0001N">タレットルーム2種</option>
    <option value="TDH:コンシェルジュ・バルコニー:HOTDHRBC0001N">バルコニー2種</option>
    <option value="TDH:コンシェルジュ:HOTDHRPC0001N">コンシェルジュ全て</option>

  <option disabled style="color:red;">ファンタジースプリングスホテル</option>
    <option value="FSH:見える客室:HOFSHRPT0001N">ファンタジーシャトーのパークが見える部屋</option>
    <option value="FSH:スプリングスサイド:HOFSHSEA0001N">スプリングスサイド4種</option>
    <option value="FSH:デラックス・バルコニー:HOFSHSBT0001N">スプリングスサイドのバルコニー2種</option>
    <option value="FSH:テラスからは:HOFSHGTA0001N">グランドシャトーのテラス4種</option>
    <option value="FSH:グランドシャトー テラス:HOFSHGTA0001N">グランドシャトーのテラス（グランド以外）3種</option>
    <option value="FSH:グランドシャトー グランド:HOFSHGMG0001N">グランドシャトーのグランド3種</option>
    <option value="FSH:グランドシャトー :HOFSHGMS0001N">グランドシャトー全て</option>

  <option disabled style="color:red;">ディズニーアンバサダーホテル</option>
    <option value="DAH:「チップとデールのプレイグラウンド」プラン:HODAH16P0001N">チップとデールのプレイグラウンド全種</option>
    <option value="DAH:「パジャマパーティー」プラン:HODAH18N0001N">パジャマパーティープラン全種</option>

</select></p>

<p>大人：<select id="keyword_rsv_adult" onchange="setKeywordURL('keyword');">
    <option value="1">1名</option>
    <option value="2" selected>2名</option>
    <option value="3">3名</option>
    <option value="4">4名</option>
</select></p>

<p>子供１：<select id="keyword_child1" onchange="setKeywordURL('keyword');">
    <option value="" selected>なし</option>
    <option value="00_3|">0才（添い寝）</option>
    <option value="01_3|">1才（添い寝）</option>
    <option value="02_3|">2才（添い寝）</option>
    <option value="03_3|">3才（添い寝）</option>
    <option value="04_3|">4才（添い寝）</option>
    <option value="05_3|">5才（添い寝）</option>
    <option value="06D_3|">6才（未就学）（添い寝）</option>
    <option value="06U_3|">6才（小学生）（添い寝）</option>
    <option value="07_3|">7才（添い寝）</option>
    <option value="08_3|">8才（添い寝）</option>
    <option value="09_3|">9才（添い寝）</option>
    <option value="10_3|">10才（添い寝）</option>
    <option value="11_3|">11才（添い寝）</option>
    <option value="12D_3|">12才（小学生）（添い寝）</option>
    <option value="00_1|">0才（ベッド利用）</option>
    <option value="01_1|">1才（ベッド利用）</option>
    <option value="02_1|">2才（ベッド利用）</option>
    <option value="03_1|">3才（ベッド利用）</option>
    <option value="04_1|">4才（ベッド利用）</option>
    <option value="05_1|">5才（ベッド利用）</option>
    <option value="06D_1|">6才（未就学）（ベッド利用）</option>
    <option value="06U_1|">6才（小学生）（ベッド利用）</option>
    <option value="07_1|">7才（ベッド利用）</option>
    <option value="08_1|">8才（ベッド利用）</option>
    <option value="09_1|">9才（ベッド利用）</option>
    <option value="10_1|">10才（ベッド利用）</option>
    <option value="11_1|">11才（ベッド利用）</option>
    <option value="12D_1|">12才（小学生）（ベッド利用）</option>
    <option value="12U_1|">12才（中学生）</option>
    <option value="13_1|">13才～18才（高校生）</option>
</select></p>
<p>子供２：
<select id="keyword_child2" onchange="setKeywordURL('keyword');">
    <option value="" selected>なし</option>
    <option value="00_3|">0才（添い寝）</option>
    <option value="01_3|">1才（添い寝）</option>
    <option value="02_3|">2才（添い寝）</option>
    <option value="03_3|">3才（添い寝）</option>
    <option value="04_3|">4才（添い寝）</option>
    <option value="05_3|">5才（添い寝）</option>
    <option value="06D_3|">6才（未就学）（添い寝）</option>
    <option value="06U_3|">6才（小学生）（添い寝）</option>
    <option value="07_3|">7才（添い寝）</option>
    <option value="08_3|">8才（添い寝）</option>
    <option value="09_3|">9才（添い寝）</option>
    <option value="10_3|">10才（添い寝）</option>
    <option value="11_3|">11才（添い寝）</option>
    <option value="12D_3|">12才（小学生）（添い寝）</option>
    <option value="00_1|">0才（ベッド利用）</option>
    <option value="01_1|">1才（ベッド利用）</option>
    <option value="02_1|">2才（ベッド利用）</option>
    <option value="03_1|">3才（ベッド利用）</option>
    <option value="04_1|">4才（ベッド利用）</option>
    <option value="05_1|">5才（ベッド利用）</option>
    <option value="06D_1|">6才（未就学）（ベッド利用）</option>
    <option value="06U_1|">6才（小学生）（ベッド利用）</option>
    <option value="07_1|">7才（ベッド利用）</option>
    <option value="08_1|">8才（ベッド利用）</option>
    <option value="09_1|">9才（ベッド利用）</option>
    <option value="10_1|">10才（ベッド利用）</option>
    <option value="11_1|">11才（ベッド利用）</option>
    <option value="12D_1|">12才（小学生）（ベッド利用）</option>
    <option value="12U_1|">12才（中学生）</option>
    <option value="13_1|">13才～18才（高校生）</option>
</select></p>

<p id="keyword_result"></p>

`;setKeywordURL('keyword')
}
seKeywordtHotelReserveURLForm()
