function setURL(px){
  var dt = document.getElementById(px+'_rsv_date')
  var tp = document.getElementById(px+'_target_plan')
  var an = document.getElementById(px+'_rsv_adult')
  var c1 = document.getElementById(px+'_child1')
  var c2 = document.getElementById(px+'_child2')
  var cn = +!!c1.selectedIndex+!!c2.selectedIndex
  var ud = dt.valueAsDate
  var ud = ud.getFullYear()+(ud.getMonth()+1).toString().padStart(2,'0')+ud.getDate().toString().padStart(2,'0')
  var sp = px.search('スマホ') > -1 ? 'sp/' : ''
  if( px.search('キャンセル') > -1 ){
    var url = `https://reserve.tokyodisneyresort.jp/${sp}hotel/list/?showWay=&roomsNum=1&adultNum=${an.value}&childNum=${cn}&childAgeBedInform=${encodeURIComponent(c1.value+c2.value)}&stayingDays=1&useDate=&cpListStr=&searchHotelCD=&searchHotelDiv=&hotelName=&searchHotelName=&searchLayer=&searchRoomName=&hotelSearchDetail=true&checkPointStr=&displayType=hotel-search&reservationStatus=1&hotelRoomCd=${tp.value}`
  }else{
    var url = `https://reserve.tokyodisneyresort.jp/${sp}hotel/list/?useDate=${ud}&stayingDays=1&adultNum=${an.value}&childNum=${cn}&childAgeBedInform=${encodeURIComponent(c1.value+c2.value)}&roomsNum=1&checkPointStr=&searchHotelName=&searchLayer=&searchRoomName=${encodeURIComponent(tp.options[tp.selectedIndex].text.replace(/ -- .*$/, ''))}&hotelChangeFlg=false&hotelShowFlg=0&receiptNO=&searchHotelDiv=&searchHotelCD=${tp.value.substr(2,3)}&removeSessionFlg=true&errorBeforeUrl=&displayType=data-hotel_change&reservationStatus=0&hotelRoomCd=${tp.value}#tabCont1`
  }
  var disp = `${dt.value} ${tp.options[tp.selectedIndex].text}(大人 ${an.options[an.selectedIndex].text}、子供 ${cn}名)`
  document.getElementById(px+'_result').innerHTML=`<a href="${url}" target="_blank">${disp}</a>`
}


function set_for_begginer(){
  if( location.href === 'https://gsttn.github.io/hotel/for_begginer.html'){
    var dd = new Date()
    dd.setMonth(dd.getMonth() + 3)
    var default_date = dd.getFullYear()+'-'+(dd.getMonth()+1).toString().padStart(2,"0")+'-'+dd.getDate().toString().padStart(2,"0");

    ['pc用11時予約url', 'スマホ用11時予約url', 'pc用キャンセル拾いurl', 'スマホ用キャンセル拾いurl'].forEach(tgt => {
      setHotelReserveURLForm(tgt)
      document.getElementById(tgt+'_rsv_date').value = default_date
      setURL(tgt)
    })
  }
}


function setHotelReserveURLForm(tgt){
tgtobj = document.getElementById(tgt).nextElementSibling.innerHTML = `
<p><input id="${tgt}_rsv_date" type="date" onchange="setURL('${tgt}');"/></p>

<p><select id="${tgt}_target_plan" onchange="setURL('${tgt}');">
  <option disabled style="color:red;">レア部屋</option>
  <option value="HODHMTGD0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド テラスルーム ハーバーグランドビュー</option>
  <option value="HODHMTKD0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド テラスルーム ハーバービュー</option>
  <option value="HODHMTOD0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド テラスルーム ピアッツァビュー</option>
  <option value="HODHMBKT0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド バルコニールーム ハーバービュー</option>
  <option value="HODHMBOQ0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド バルコニールーム ピアッツァビュー</option>
  <option value="HODHMBKQ0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド バルコニールーム ハーバービュー（４名対応）</option>
  <option value="HODHMTVD0005N">スペチアーレ・ルーム＆スイート　ヴェネツィア・サイド テラスルーム</option>
  <option value="HODHMHKQ0005N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド ハーバールーム ハーバービュー</option>
  <option value="HODHMHOW0005N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド ハーバールーム ピアッツァビュー</option>
  <option value="HOTDHRCU0001N">コンシェルジュ・タレットルーム（７階） -- ツインベッド+トランドルベッド</option>
</select></p>

<p>大人：<select id="${tgt}_rsv_adult" onchange="setURL('${tgt}');">
    <option value="1">1名</option>
    <option value="2" selected>2名</option>
    <option value="3">3名</option>
    <option value="4">4名</option>
</select></p>

<p>子供１：<select id="${tgt}_child1" onchange="setURL('${tgt}');">
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
<select id="${tgt}_child2" onchange="setURL('${tgt}');">
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

<p id="${tgt}_result"></p>
`
}
