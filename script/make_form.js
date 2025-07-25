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
    var url = `https://reserve.tokyodisneyresort.jp/${sp}hotel/list/?useDate=${ud}&stayingDays=1&adultNum=${an.value}&childNum=${cn}&childAgeBedInform=${encodeURIComponent(c1.value+c2.value)}&roomsNum=1&checkPointStr=&searchHotelName=&searchLayer=&searchRoomName=${encodeURIComponent(tp.options[tp.selectedIndex].text.replace(/ -- .*$/, ''))}&hotelChangeFlg=false&hotelShowFlg=0&receiptNO=&searchHotelDiv=&searchHotelCD=${tp.value.substr(2,3)}&removeSessionFlg=true&errorBeforeUrl=&displayType=data-hotel&reservationStatus=0&hotelRoomCd=${tp.value}#tabCont1`
  }
  var disp = `${dt.value} ${tp.options[tp.selectedIndex].text}(大人 ${an.options[an.selectedIndex].text}、子供 ${cn}名)`
  document.getElementById(px+'_result').innerHTML=`<a href="${url}" target="_blank">${disp}</a>`
}


function set_for_begginer(){
  if( location.href.startsWith('https://gsttn.github.io/hotel/for_begginer.html') ){
    var dd = new Date()
    dd.setMonth(dd.getMonth() + 4)
    var default_date = dd.getFullYear()+'-'+(dd.getMonth()+1).toString().padStart(2,"0")+'-'+dd.getDate().toString().padStart(2,"0");

    ['pc用11時予約url', 'スマホ用11時予約url', 'pc用キャンセル拾いurl', 'スマホ用キャンセル拾いurl'].forEach(tgt => {
      setHotelReserveURLForm(tgt)
      document.getElementById(tgt+'_rsv_date').value = default_date
      setURL(tgt)
    })
  }
}


function setHotelReserveURLForm(tgt){
tgtobj = document.getElementById(tgt).nextElementSibling
tgtobj.style.backgroundColor = "#ddffee"
tgtobj.style.padding = "10px"
tgtobj.innerHTML = `
<p><input id="${tgt}_rsv_date" type="date" onchange="setURL('${tgt}');"/></p>

<p><select id="${tgt}_target_plan" onchange="setURL('${tgt}');" style="width:100%;">
  <option disabled style="color:red;">レア部屋</option>
  <option value="HODHMTGD0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド テラスルーム ハーバーグランドビュー</option>
  <option value="HODHMTKD0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド テラスルーム ハーバービュー</option>
  <option value="HODHMTOD0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド テラスルーム ピアッツァビュー</option>
  <option value="HODHMBKT0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド バルコニールーム ハーバービュー</option>
  <option value="HODHMBOQ0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド バルコニールーム ピアッツァビュー</option>
  <option value="HODHMBKQ0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド バルコニールーム ハーバービュー（４名対応）</option>
  <option value="HODHMTVD0005N">スペチアーレ・ルーム＆スイート　ヴェネツィア・サイド テラスルーム</option>
  <option value="HODHMVQB0001N">ヴェネツィア・サイド　バルコニールーム</option>
  <option value="HODHMHKQ0005N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド ハーバールーム ハーバービュー</option>
  <option value="HODHMHOW0005N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド ハーバールーム ピアッツァビュー</option>
  <option value="HOTDHRCU0001N">コンシェルジュ・タレットルーム（７階） -- ツインベッド+トランドルベッド</option>
  <option value="HOFSHSBT0001N">ファンタジーシャトー スプリングスサイド デラックス・バルコニールーム（パークグランドビュー）</option>
  <option value="HOFSHSBA0001N">ファンタジーシャトー スプリングスサイド デラックス・バルコニー&アルコーヴルーム（パークグランドビュー）</option>

<option disabled style="color:red;">調査日時＝2025-06-30 13:28</option>
  <option disabled style="color:red;">ファンタジースプリングスホテル</option>
  <option value="HOFSHBST0001N">ファンタジーシャトー ベイエリアサイド スーペリアルーム -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOFSHBSA0001N">ファンタジーシャトー ベイエリアサイド スーペリア・アルコーヴルーム -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOFSHBDT0001N">ファンタジーシャトー ベイエリアサイド デラックスルーム -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOFSHHST0001N">ファンタジーシャトー ホテルエントランスサイド スーペリアルーム -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOFSHHSA0001N">ファンタジーシャトー ホテルエントランスサイド スーペリア・アルコーヴルーム -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOFSHHDT0001N">ファンタジーシャトー ホテルエントランスサイド デラックスルーム -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOFSHRST0001N">ファンタジーシャトー ローズコートサイド スーペリアルーム -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOFSHRSA0001N">ファンタジーシャトー ローズコートサイド スーペリア・アルコーヴルーム -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOFSHRDT0001N">ファンタジーシャトー ローズコートサイド デラックスルーム -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOFSHRPT0001N">ファンタジーシャトー ローズコートサイド スーペリアルーム（パークビュー） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOFSHRPA0001N">ファンタジーシャトー ローズコートサイド スーペリア・アルコーヴルーム（パークビュー） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOFSHSEA0001N">ファンタジーシャトー スプリングスサイド デラックス・アルコーヴルーム（パーシャルビュー） -- ツインベッド+トランドルベッド+アルコーヴベッド+クルーズベッド</option>
  <option value="HOFSHSGA0001N">ファンタジーシャトー スプリングスサイド デラックス・アルコーヴルーム（パークグランドビュー） -- ツインベッド+トランドルベッド+アルコーヴベッド+クルーズベッド</option>
  <option value="HOFSHSBT0001N">ファンタジーシャトー スプリングスサイド デラックス・バルコニールーム（パークグランドビュー） -- ツインベッド+トランドルベッド+クルーズベッド+クルーズベッド</option>
  <option value="HOFSHSBA0001N">ファンタジーシャトー スプリングスサイド デラックス・バルコニー&アルコーヴルーム（パークグランドビュー） -- ツインベッド+トランドルベッド+アルコーヴベッド+クルーズベッド</option>
  <option value="HOFSHGMS0001N">グランドシャトー アルコーヴルーム（４、５、７階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOFSHGMA0001N">グランドシャトー アルコーヴルーム（４‐７階） -- ツインベッド+トランドルベッド+アルコーヴベッドツインベッド+アルコーヴベッド+クルーズベッド</option>
  <option value="HOFSHGMB0001N">グランドシャトー アルコーヴルーム（４‐７階） -- ツインベッド+トランドルベッド+アルコーヴベッドツインベッド+アルコーヴベッド+クルーズベッド</option>
  <option value="HOFSHGUA0001N">グランドシャトー アルコーヴルーム（８‐９階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOFSHGTA0001N">グランドシャトー テラス&アルコーヴルーム（３、５階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOFSHGTB0001N">グランドシャトー テラス&アルコーヴルーム（３‐４階） -- ツインベッド+アルコーヴベッド+クルーズベッド</option>
  <option value="HOFSHGTT0001N">グランドシャトー テラスルーム（５‐７階） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOFSHGMG0001N">グランドシャトー グランドルーム（５‐６階） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOFSHGUG0001N">グランドシャトー グランドルーム（９階） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOFSHGTG0001N">グランドシャトー グランド・テラスルーム（８階） -- ツインベッド+トランドルベッド+クルーズベッド</option>

  <option disabled style="color:red;">東京ディズニーシー・ホテルミラコスタ</option>
  <option value="HODHMCDP0005N">トスカーナ・サイド カピターノ・ミッキー・スーペリアルーム -- ダブルベッド+トランドルベッドツインベッド+トランドルベッド</option>
  <option value="HODHMCTP0008N">トスカーナ・サイド カピターノ・ミッキー・スーペリアルーム -- ダブルベッド+トランドルベッドツインベッド+トランドルベッド</option>
  <option value="HODHMCTG0001N">トスカーナ・サイド カピターノ・ミッキー・スーペリアルーム ディズニーシー・アクアスフィアビュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMCLP0005N">トスカーナ・サイド カピターノ・ミッキー・トリプルルーム -- トリプルベッド</option>
  <option value="HODHMCLG0001N">トスカーナ・サイド カピターノ・ミッキー・トリプルルーム ディズニーシー・アクアスフィアビュー -- トリプルベッド</option>
  <option value="HODHMCAP0002N">トスカーナ・サイド カピターノ・ミッキー・スーペリアルーム（オープンタイプ） -- ツインベッド+トランドルベッド</option>
  <option value="HODHMVDD0006N">ヴェネツィア・サイド スーペリアルーム -- ダブルベッド+トランドルベッドツインベッド+トランドルベッド</option>
  <option value="HODHMVTT0007N">ヴェネツィア・サイド スーペリアルーム -- ダブルベッド+トランドルベッドツインベッド+トランドルベッド</option>
  <option value="HODHMVTG0001N">ヴェネツィア・サイド スーペリアルーム パラッツォ・カナルビュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMVQT0005N">ヴェネツィア・サイド パラッツォパティオルーム -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HODHMVLL0005N">ヴェネツィア・サイド トリプルルーム -- トリプルベッド</option>
  <option value="HODHMVLG0001N">ヴェネツィア・サイド トリプルルーム パラッツォ・カナルビュー -- トリプルベッド</option>
  <option value="HODHMVQB0001N">ヴェネツィア・サイド バルコニールーム -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HODHMETT0005N">ポルト・パラディーゾ・サイド スーペリアルーム パーシャルビュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMODD0005N">ポルト・パラディーゾ・サイド スーペリアルーム ピアッツァビュー -- ダブルベッド+トランドルベッドツインベッド+トランドルベッド</option>
  <option value="HODHMOTT0005N">ポルト・パラディーゾ・サイド スーペリアルーム ピアッツァビュー -- ダブルベッド+トランドルベッドツインベッド+トランドルベッド</option>
  <option value="HODHMOQT0005N">ポルト・パラディーゾ・サイド スーペリアルーム ピアッツァビュー（４名対応） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HODHMOTG0005N">ポルト・パラディーゾ・サイド スーペリアルーム ピアッツァグランドビュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMOQG0005N">ポルト・パラディーゾ・サイド スーペリアルーム ピアッツァグランドビュー（４名対応） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HODHMKTT0005N">ポルト・パラディーゾ・サイド スーペリアルーム ハーバービュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMKQT0005N">ポルト・パラディーゾ・サイド スーペリアルーム ハーバービュー（４名対応） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HODHMOLL0005N">ポルト・パラディーゾ・サイド トリプルルーム ピアッツァビュー -- トリプルベッド</option>
  <option value="HODHMTVD0005N">スペチアーレ・ルーム＆スイート　ヴェネツィア・サイド テラスルーム -- ダブルベッド</option>
  <option value="HODHMIKT0006N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド スーペリアルーム ハーバービュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMHOW0005N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド ハーバールーム ピアッツァビュー -- ハリウッドツイン+トランドルベッド</option>
  <option value="HODHMHKQ0005N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド ハーバールーム ハーバービュー -- ハリウッドツイン+トランドルベッド</option>
  <option value="HODHMIKQ0006N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド スーペリアルーム ハーバービュー（４名対応） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HODHMBOQ0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド バルコニールーム ピアッツァビュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMBKT0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド バルコニールーム ハーバービュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMBKQ0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド バルコニールーム ハーバービュー（４名対応） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HODHMTOD0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド テラスルーム ピアッツァビュー -- ダブルベッド</option>
  <option value="HODHMTKD0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド テラスルーム ハーバービュー -- ダブルベッド</option>
  <option value="HODHMTGD0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド テラスルーム ハーバーグランドビュー -- ダブルベッド</option>
  <option value="HODHMUOT0005N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド ポルト･パラディーゾ･スイート -- ツインベッド</option>
  <option value="HODHMMUT0006N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド　ミラコスタ・スイート -- ハリウッドツイン+トランドルベッド</option>
  <option value="HODHMUIL0001N">スペチアーレ・ルーム＆スイート　イル･マニーフィコ･スイート -- ダブルベッド</option>

  <option disabled style="color:red;">東京ディズニーランドホテル</option>
  <option value="HOTDHSCL0005N">スタンダード スーペリアルーム（１－３階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHSWN0001N">スタンダード スーペリアルーム（３－４階） -- ダブルベッド</option>
  <option value="HOTDHSCH0008N">スタンダード スーペリアルーム（４－９階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHSCM0003N">スタンダード スーペリアルーム（パークビュー）（３－６階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHSCU0002N">スタンダード スーペリアルーム（パークビュー）（７－８階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHGCM0002N">スタンダード スーペリアルーム（パークグランドビュー）（５－６階） -- ツインベッド+トランドルベッドダブルベッド</option>
  <option value="HOTDHGWM0002N">スタンダード スーペリアルーム（パークグランドビュー）（５－６階） -- ツインベッド+トランドルベッドダブルベッド</option>
  <option value="HOTDHGCU0001N">スタンダード スーペリアルーム（パークグランドビュー）（７階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHGWU0002N">スタンダード スーペリアルーム（パークグランドビュー）（７－８階） -- ダブルベッド</option>
  <option value="HOTDHSAL0007N">スタンダード スーペリアアルコーヴルーム（１－３階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHSAH0010N">スタンダード スーペリアアルコーヴルーム（４－９階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHSAM0004N">スタンダード スーペリアアルコーヴルーム（パークビュー）（３－６階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHSAU0002N">スタンダード スーペリアアルコーヴルーム（パークビュー）（７－８階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHGAM0001N">スタンダード スーペリアアルコーヴルーム（パークグランドビュー）（５－６階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHBSH0004N">ディズニー美女と野獣ルーム（３－９階） -- トリプルベッド</option>
  <option value="HOTDHBSL0002N">ディズニー美女と野獣ルーム（１－２階） -- トリプルベッドツインベッド</option>
  <option value="HOTDHBTL0002N">ディズニー美女と野獣ルーム（１－２階） -- トリプルベッドツインベッド</option>
  <option value="HOTDHBTH0002N">ディズニー美女と野獣ルーム（３－８階） -- ツインベッドツインベッド+トランドルベッド</option>
  <option value="HOTDHDTB0002N">ディズニー美女と野獣ルーム（３－８階） -- ツインベッドツインベッド+トランドルベッド</option>
  <option value="HOTDHDAB0002N">ディズニー美女と野獣ルーム（５－９階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHSOT0002N">ディズニーティンカーベルルーム(５－９階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHSAT0006N">ディズニーティンカーベルルーム(３－９階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHSCW0002N">ディズニーふしぎの国のアリスルーム（３－９階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHSAW0005N">ディズニーふしぎの国のアリスルーム（３－８階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHCCC0002N">ディズニーシンデレラルーム（５－７階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHRCC0002N">コンシェルジュ・ディズニーシンデレラルーム（８－９階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHDOL0002N">スタンダード デラックスルーム（１－３階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHDOH0002N">スタンダード デラックスルーム（４－８階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHDWH0001N">スタンダード・デラックスルーム（４階） -- ダブルベッド</option>
  <option value="HOTDHDCN0001N">スタンダード デラックスルーム（３－４階）４名対応 -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOTDHCWL0002N">スタンダード・コーナールーム（３階） -- ダブルベッド</option>
  <option value="HOTDHCCM0002N">スタンダード・コーナールーム（パークビュー）（３－６階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHCCU0001N">スタンダード・コーナールーム（パークビュー）（７－８階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHJLL0002N">スタンダード ジュニアファミリールーム(１－３階） -- トリプルベッド+トランドルベッド</option>
  <option value="HOTDHJLM0002N">スタンダード ジュニアファミリールーム(パークビュー）（４－６階） -- トリプルベッド+トランドルベッド</option>
  <option value="HOTDHJLU0002N">スタンダード ジュニアファミリールーム(パークビュー）（７－８階） -- トリプルベッド+トランドルベッド</option>
  <option value="HOTDHFMM0002N">スタンダード・ファミリールーム（パークビュー）（５－６階） -- ツインベッド+アルコーヴベッド+アルコーヴベッド+クルーズベッド</option>
  <option value="HOTDHFMU0002N">スタンダード・ファミリールーム（パークビュー）（７－９階） -- ツインベッド+アルコーヴベッド+アルコーヴベッド+クルーズベッド</option>
  <option value="HOTDHRSM0001N">コンシェルジュ･スーペリアルーム（パークビュー）（３－６階）　４名対応 -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOTDHRSU0001N">コンシェルジュ･スーペリアルーム（パークビュー）（７－８階）　４名対応 -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOTDHRCS0003N">コンシェルジュ スーペリアルーム（パークグランドビュー）（８－９階）　４名対応 -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOTDHRAS0004N">コンシェルジュ スーペリアアルコーヴルーム（パークグランドビュー）（７－９階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHRBC0001N">コンシェルジュ・バルコニールーム（パークグランドビュー）　（８階）　４名対応 -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOTDHRBA0001N">コンシェルジュ・バルコニーアルコーヴルーム（パークグランドビュー）　（８階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHRCM0002N">コンシェルジュ・タレットルーム（３－６階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHRWM0002N">コンシェルジュ・タレットルーム（４－６階） -- ダブルベッド</option>
  <option value="HOTDHRCU0001N">コンシェルジュ・タレットルーム（７階） -- ツインベッド+トランドルベッドダブルベッド</option>
  <option value="HOTDHRWU0002N">コンシェルジュ・タレットルーム（７階） -- ツインベッド+トランドルベッドダブルベッド</option>
  <option value="HOTDHRDM0001N">コンシェルジュ･デラックスルーム（パークビュー）（３－６階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHRDU0001N">コンシェルジュ･デラックスルーム（パークビュー）（７－８階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHRMC0003N">ディズニー・マジックキングダム・スイート（８階） -- ツインベッド+アルコーヴベッド</option>
  <option value="HOTDHRMB0001N">ディズニー･マジックキングダム･スイート（９階） -- ツインベッド+アルコーヴベッド</option>
  <option value="HOTDHRWD0001N">ウォルト･ディズニー･スイート（９階） -- キングベッド</option>

  <option disabled style="color:red;">ディズニーアンバサダーホテル</option>
  <option value="HODAHZST0001N">外壁工事対象客室（スタンダードルーム（ツイン）） -- ツインベッド+トランドルベッド</option>
  <option value="HODAHZRD0001N">外壁工事対象客室（スタンダードルーム（ダブル）） -- ダブルベッド+トランドルベッド</option>
  <option value="HODAHZS30001N">外壁工事対象客室（定員３名） -- ベッド3台</option>
  <option value="HODAHZCH0001N">外壁工事対象客室（キャラクター）（定員３名） -- ツインベッド+トランドルベッド</option>
  <option value="HODAHZM30001N">外壁工事対象客室（ミッキーマウスルーム（魔法使いの弟子））（定員３名） -- ベッド3台</option>
  <option value="HODAH16P0001N">スーペリアルーム（「チップとデールのプレイグラウンド」プラン）キャラクターグリーティング16:00 -- ツインベッド+トランドルベッド</option>
  <option value="HODAH19P0001N">スーペリアルーム（「チップとデールのプレイグラウンド」プラン）キャラクターグリーティング19:00 -- ツインベッド+トランドルベッド</option>
  <option value="HODAH16C0001N">チップとデールルーム（「チップとデールのプレイグラウンド」プラン）キャラクターグリーティング16:00 -- ツインベッド+トランドルベッド</option>
  <option value="HODAH17C0001N">チップとデールルーム（「チップとデールのプレイグラウンド」プラン）キャラクターグリーティング17:00 -- ツインベッド+トランドルベッド</option>
  <option value="HODAH18C0001N">チップとデールルーム（「チップとデールのプレイグラウンド」プラン）キャラクターグリーティング18:00 -- ツインベッド+トランドルベッド</option>
  <option value="HODAH18N0001N">ミニーマウスルーム（「パジャマパーティー」プラン）キャラクターグリーティング18:15 -- ツインベッド+トランドルベッド</option>
  <option value="HODAH19N0001N">ミニーマウスルーム（「パジャマパーティー」プラン）キャラクターグリーティング19:30 -- ツインベッド+トランドルベッド</option>
  <option value="HODAH20N0001N">ミニーマウスルーム（「パジャマパーティー」プラン）キャラクターグリーティング20:45 -- ツインベッド+トランドルベッド</option>
  <option value="HODAHSTT0005N">スタンダードルーム（ツイン） -- ツインベッド+トランドルベッド</option>
  <option value="HODAHRDD0001N">スタンダードルーム（ダブル） -- ダブルベッド+トランドルベッド</option>
  <option value="HODAHPTT0005N">スーペリアルーム（ツイン） -- ツインベッド+トランドルベッド</option>
  <option value="HODAHPDD0001N">スーペリアルーム（ダブル） -- ダブルベッド+トランドルベッド</option>
  <option value="HODAHPQT0005N">スーペリアルーム（4名対応） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HODAHSCT0005N">スティッチルーム -- ツインベッド+トランドルベッド</option>
  <option value="HODAHDQT0001N">ドナルドダックルーム -- ツインベッド+トランドルベッドツインベッド+トランドルベッド</option>
  <option value="HODAHDTP0005N">ドナルドダックルーム -- ツインベッド+トランドルベッドツインベッド+トランドルベッド</option>
  <option value="HODAHMQP0005N">ミッキーマウスルーム -- ツインベッド+トランドルベッドツインベッド+トランドルベッド</option>
  <option value="HODAHMTS0005N">ミッキーマウスルーム -- ツインベッド+トランドルベッドツインベッド+トランドルベッド</option>
  <option value="HODAHMMQ0001N">ミッキーマウスルーム（魔法使いの弟子） -- ツインベッド+トランドルベッドツインベッド+トランドルベッド</option>
  <option value="HODAHMMS0001N">ミッキーマウスルーム（魔法使いの弟子） -- ツインベッド+トランドルベッドツインベッド+トランドルベッド</option>
  <option value="HODAHTLL0005N">トリプルルーム -- トリプルベッド</option>
  <option value="HODAHGCT0001N">パームガーデンビュールーム（ツイン） -- ツインベッド</option>
  <option value="HODAHGCD0001N">パームガーデンビュールーム（ダブル） -- ダブルベッド</option>
  <option value="HODAHJLQ0001N">ジュニアファミリールーム -- トリプルベッド+クルーズベッド</option>
  <option value="HODAHFCV0001N">ファミリールーム -- ツインベッド+ツインベッド+トランドルベッド</option>
  <option value="HODAHMPT0001N">ミッキーズ・プレミアルーム -- ツインベッド</option>
  <option value="HODAHFDD0001N">ディズニーファンタジアルーム -- ダブルベッド</option>
  <option value="HODAHMPU0001N">ミッキーズ・ペントハウス・スイート -- ハリウッドツイン</option>

  <option disabled style="color:red;">東京ディズニーリゾート・トイ・ストーリーホテル</option>
  <option value="HOTSHEQS0001N">スタンダードルーム パーシャルビュー -- ツインベッド＋トランドルベッド+プルダウンベッドツインベッド+トランドルベッド</option>
  <option value="HOTSHETS0001N">スタンダードルーム パーシャルビュー -- ツインベッド＋トランドルベッド+プルダウンベッドツインベッド+トランドルベッド</option>
  <option value="HOTSHSQS0001N">スタンダードルーム -- ツインベッド＋トランドルベッド+プルダウンベッドツインベッド+トランドルベッド</option>
  <option value="HOTSHSTS0001N">スタンダードルーム -- ツインベッド＋トランドルベッド+プルダウンベッドツインベッド+トランドルベッド</option>
  <option value="HOTSHSQR0001N">スーペリアルーム -- ツインベッド＋トランドルベッド+プルダウンベッド</option>
  <option value="HOTSHBQS0001N">スタンダードルーム ベイビュー -- ツインベッド＋トランドルベッド+プルダウンベッドツインベッド+トランドルベッド</option>
  <option value="HOTSHBTS0001N">スタンダードルーム ベイビュー -- ツインベッド＋トランドルベッド+プルダウンベッドツインベッド+トランドルベッド</option>
  <option value="HOTSHTQS0001N">スタンダードルーム スクエアビュー -- ツインベッド＋トランドルベッド+プルダウンベッドツインベッド+トランドルベッド</option>
  <option value="HOTSHTTS0001N">スタンダードルーム スクエアビュー -- ツインベッド＋トランドルベッド+プルダウンベッドツインベッド+トランドルベッド</option>
  <option value="HOTSHTQR0001N">スーペリアルーム スクエアビュー -- ツインベッド＋トランドルベッド+プルダウンベッド</option>

  <option disabled style="color:red;">東京ディズニーセレブレーションホテル</option>
  <option value="HODCHW1A0001N">【ウィッシュA】イマジニング・ザ・マジック“10イヤーズ・オブ・ドリームス＆マジック”ルーム -- ツインベッド+デイベッド2台</option>
  <option value="HODCHW1B0001N">【ウィッシュB】イマジニング・ザ・マジック“10イヤーズ・オブ・ドリームス＆マジック”ルーム -- ツインベッド+デイベッド2台</option>
  <option value="HODCHDSS0001N">“ディスカバー”スタンダードルーム -- ツインベッド+デイベッド2台</option>
  <option value="HODCHDSG0001N">“ディスカバー”スタンダードルーム（ガーデンサイド） -- ツインベッド+デイベッド2台</option>
  <option value="HODCHDSO0001N">“ディスカバー”スタンダードルーム（オーシャンサイド） -- ツインベッド+デイベッド2台</option>
  <option value="HODCHDSL0001N">“ディスカバー”トリプルルーム -- トリプルベッド</option>
  <option value="HODCHDRQ0001N">“ディスカバー”スーペリアルーム -- トリプルベッド+デイベッドツインベッド+デイベッド2台</option>
  <option value="HODCHDRR0001N">“ディスカバー”スーペリアルーム -- トリプルベッド+デイベッドツインベッド+デイベッド2台</option>
  <option value="HODCHDO50001N">“ディスカバー”クインテットルーム -- ツインベッド+デイベッド+二段ベッド</option>
  <option value="HODCHWSS0001N">“ウィッシュ”スタンダードルーム -- ツインベッド+デイベッド2台</option>
  <option value="HODCHWSG0001N">“ウィッシュ”スタンダードルーム（ガーデンサイド） -- ツインベッド+デイベッド2台</option>
  <option value="HODCHWSO0001N">“ウィッシュ”スタンダードルーム（オーシャンサイド） -- ツインベッド+デイベッド2台</option>
  <option value="HODCHWCO0001N">“ウィッシュ”コーナールーム -- ツインベッド+デイベッド</option>
  <option value="HODCHWSL0001N">“ウィッシュ”トリプルルーム -- トリプルベッド</option>
  <option value="HODCHWRR0001N">“ウィッシュ”スーペリアルーム -- ツインベッド+デイベッド2台</option>

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


function createTOC(){
  var tgtobj=null,outbuf=''
  document.querySelectorAll("h2,h3").forEach((dom,i,h2nodes)=>{
    if(i>1&&h2nodes[i-1].id=='概要')tgtobj=dom
    if(!tgtobj)return
    outbuf+=`<li${dom.tagName=='H3'?' style="margin-left:2em;"':''}><a href="#${dom.id}">${dom.textContent}</a></li>`
  })
  if( outbuf && tgtobj){
    a=document.createElement('h4');
    a.innerHTML=`目次 ［<a onclick="javascript:d=document.getElementById('目次');d.style.display=(d.style.display=='none'?'block':'none');return false;">開閉</a>］`
    tgtobj.before(a)
    a=document.createElement('ul');
    a.id='目次'
    a.style.display='none'
    a.innerHTML=`${outbuf}`
    tgtobj.before(a)
  }
}
