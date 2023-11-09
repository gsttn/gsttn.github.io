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
  <option value="HODHMHKQ0005N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド ハーバールーム ハーバービュー</option>
  <option value="HODHMHOW0005N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド ハーバールーム ピアッツァビュー</option>
  <option value="HOTDHRCU0001N">コンシェルジュ・タレットルーム（７階） -- ツインベッド+トランドルベッド</option>

<option disabled style="color:red;">調査日時＝2023-11-09 19:03</option>
  <option disabled style="color:red;">東京ディズニーシー・ホテルミラコスタ</option>
  <option value="HODHMCAP0002N">トスカーナ・サイド カピターノ・ミッキー・スーペリアルーム（オープンタイプ） -- ツインベッド+トランドルベッド</option>
  <option value="HODHMCLG0001N">トスカーナ・サイド カピターノ・ミッキー・トリプルルーム ディズニーシー・アクアスフィアビュー -- トリプルベッド</option>
  <option value="HODHMCLP0005N">トスカーナ・サイド カピターノ・ミッキー・トリプルルーム -- トリプルベッド</option>
  <option value="HODHMCTG0001N">トスカーナ・サイド カピターノ・ミッキー・スーペリアルーム ディズニーシー・アクアスフィアビュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMCDP0005N">トスカーナ・サイド カピターノ・ミッキー・スーペリアルーム -- ダブルベッド+トランドルベッド</option>
  <option value="HODHMCTP0008N">トスカーナ・サイド カピターノ・ミッキー・スーペリアルーム -- ツインベッド+トランドルベッド</option>
  <option value="HODHMVQT0005N">ヴェネツィア・サイド パラッツォパティオルーム -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HODHMVLL0005N">ヴェネツィア・サイド トリプルルーム -- トリプルベッド</option>
  <option value="HODHMVTG0001N">ヴェネツィア・サイド スーペリアルーム パラッツォ・カナルビュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMVLG0001N">ヴェネツィア・サイド トリプルルーム パラッツォ・カナルビュー -- トリプルベッド</option>
  <option value="HODHMVTT0007N">ヴェネツィア・サイド スーペリアルーム -- ツインベッド+トランドルベッド</option>
  <option value="HODHMVDD0006N">ヴェネツィア・サイド スーペリアルーム -- ダブルベッド+トランドルベッド</option>
  <option value="HODHMETT0005N">ポルト・パラディーゾ・サイド スーペリアルーム パーシャルビュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMOLL0005N">ポルト・パラディーゾ・サイド トリプルルーム ピアッツァビュー -- トリプルベッド</option>
  <option value="HODHMKQT0005N">ポルト・パラディーゾ・サイド スーペリアルーム ハーバービュー（４名対応） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HODHMOTG0005N">ポルト・パラディーゾ・サイド スーペリアルーム ピアッツァグランドビュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMOQT0005N">ポルト・パラディーゾ・サイド スーペリアルーム ピアッツァビュー（４名対応） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HODHMOQG0005N">ポルト・パラディーゾ・サイド スーペリアルーム ピアッツァグランドビュー（４名対応） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HODHMODD0005N">ポルト・パラディーゾ・サイド スーペリアルーム ピアッツァビュー -- ダブルベッド+トランドルベッド</option>
  <option value="HODHMOTT0005N">ポルト・パラディーゾ・サイド スーペリアルーム ピアッツァビュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMKTT0005N">ポルト・パラディーゾ・サイド スーペリアルーム ハーバービュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMTVD0005N">スペチアーレ・ルーム＆スイート　ヴェネツィア・サイド テラスルーム -- ダブルベッド</option>
  <option value="HODHMTOD0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド テラスルーム ピアッツァビュー -- ダブルベッド</option>
  <option value="HODHMUIL0001N">スペチアーレ・ルーム＆スイート　イル･マニーフィコ･スイート -- ダブルベッド</option>
  <option value="HODHMBKQ0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド バルコニールーム ハーバービュー（４名対応） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HODHMHOW0005N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド ハーバールーム ピアッツァビュー -- ハリウッドツイン+トランドルベッド</option>
  <option value="HODHMIKT0006N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド スーペリアルーム ハーバービュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMBKT0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド バルコニールーム ハーバービュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMUOT0005N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド ポルト･パラディーゾ･スイート -- ツインベッド</option>
  <option value="HODHMHKQ0005N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド ハーバールーム ハーバービュー -- ハリウッドツイン+トランドルベッド</option>
  <option value="HODHMTKD0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド テラスルーム ハーバービュー -- ダブルベッド</option>
  <option value="HODHMMUT0006N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド　ミラコスタ・スイート -- ハリウッドツイン+トランドルベッド</option>
  <option value="HODHMIKQ0006N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド スーペリアルーム ハーバービュー（４名対応） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HODHMBOQ0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド バルコニールーム ピアッツァビュー -- ツインベッド+トランドルベッド</option>
  <option value="HODHMTGD0004N">スペチアーレ・ルーム＆スイート　ポルト・パラディーゾ・サイド テラスルーム ハーバーグランドビュー -- ダブルベッド</option>

  <option disabled style="color:red;">東京ディズニーランドホテル</option>
  <option value="HOTDHF400001N">「東京ディズニーリゾート40周年“ドリームゴーラウンド”」グランドフィナーレスペシャルルーム -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHGCM0002N">スタンダード スーペリアルーム（パークグランドビュー）（５－６階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHGWM0002N">スタンダード スーペリアルーム（パークグランドビュー）（５－６階） -- ダブルベッド</option>
  <option value="HOTDHSWN0001N">スタンダード スーペリアルーム（３－４階） -- ダブルベッド</option>
  <option value="HOTDHSCM0003N">スタンダード スーペリアルーム（パークビュー）（３－６階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHGCU0001N">スタンダード スーペリアルーム（パークグランドビュー）（７階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHSCU0002N">スタンダード スーペリアルーム（パークビュー）（７－８階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHGWU0002N">スタンダード スーペリアルーム（パークグランドビュー）（７－８階） -- ダブルベッド</option>
  <option value="HOTDHSCH0008N">スタンダード スーペリアルーム（４－９階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHSCL0005N">スタンダード スーペリアルーム（１－３階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHSAH0010N">スタンダード スーペリアアルコーヴルーム（４－９階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHSAL0007N">スタンダード スーペリアアルコーヴルーム（１－３階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHSAU0002N">スタンダード スーペリアアルコーヴルーム（パークビュー）（７－８階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHGAM0001N">スタンダード スーペリアアルコーヴルーム（パークグランドビュー）（５－６階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHSAM0004N">スタンダード スーペリアアルコーヴルーム（パークビュー）（３－６階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHDTB0002N">ディズニー美女と野獣ルーム（３－８階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHBTH0002N">ディズニー美女と野獣ルーム（３－８階） -- ツインベッド</option>
  <option value="HOTDHRCC0002N">コンシェルジュ・ディズニーシンデレラルーム（８－９階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHCCC0002N">ディズニーシンデレラルーム（５－７階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHSAW0005N">ディズニーふしぎの国のアリスルーム（３－８階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHBSL0002N">ディズニー美女と野獣ルーム（１－２階） -- トリプルベッド</option>
  <option value="HOTDHBTL0002N">ディズニー美女と野獣ルーム（１－２階） -- ツインベッド</option>
  <option value="HOTDHSAT0006N">ディズニーティンカーベルルーム(３－９階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHSCW0002N">ディズニーふしぎの国のアリスルーム（３－９階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHSOT0002N">ディズニーティンカーベルルーム(５－９階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHDAB0002N">ディズニー美女と野獣ルーム（５－９階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHBSH0004N">ディズニー美女と野獣ルーム（３－９階） -- トリプルベッド</option>
  <option value="HOTDHDWH0001N">スタンダード・デラックスルーム（４階） -- ダブルベッド</option>
  <option value="HOTDHDOH0002N">スタンダード デラックスルーム（４－８階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHDCN0001N">スタンダード デラックスルーム（３－４階）４名対応 -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOTDHCCU0001N">スタンダード・コーナールーム（パークビュー）（７－８階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHCWL0002N">スタンダード・コーナールーム（３階） -- ダブルベッド</option>
  <option value="HOTDHDOL0002N">スタンダード デラックスルーム（１－３階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHCCM0002N">スタンダード・コーナールーム（パークビュー）（３－６階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHFMU0002N">スタンダード・ファミリールーム（パークビュー）（７－９階） -- ツインベッド+アルコーヴベッド+アルコーヴベッド+クルーズベッド</option>
  <option value="HOTDHJLU0002N">スタンダード ジュニアファミリールーム(パークビュー）（７－８階） -- トリプルベッド+トランドルベッド</option>
  <option value="HOTDHJLM0002N">スタンダード ジュニアファミリールーム(パークビュー）（４－６階） -- トリプルベッド+トランドルベッド</option>
  <option value="HOTDHFMM0002N">スタンダード・ファミリールーム（パークビュー）（５－６階） -- ツインベッド+アルコーヴベッド+アルコーヴベッド+クルーズベッド</option>
  <option value="HOTDHJLL0002N">スタンダード ジュニアファミリールーム(１－３階） -- トリプルベッド+トランドルベッド</option>
  <option value="HOTDHRBC0001N">コンシェルジュ・バルコニールーム（パークグランドビュー）　（８階）　４名対応 -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOTDHRCM0002N">コンシェルジュ・タレットルーム（３－６階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHRDM0001N">コンシェルジュ･デラックスルーム（パークビュー）（３－６階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHRWU0002N">コンシェルジュ・タレットルーム（７階） -- ダブルベッド</option>
  <option value="HOTDHRCU0001N">コンシェルジュ・タレットルーム（７階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHRDU0001N">コンシェルジュ･デラックスルーム（パークビュー）（７－８階） -- ツインベッド+トランドルベッド</option>
  <option value="HOTDHRSM0001N">コンシェルジュ･スーペリアルーム（パークビュー）（３－６階）　４名対応 -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOTDHRSU0001N">コンシェルジュ･スーペリアルーム（パークビュー）（７－８階）　４名対応 -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOTDHRAS0004N">コンシェルジュ スーペリアアルコーヴルーム（パークグランドビュー）（７－９階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHRCS0003N">コンシェルジュ スーペリアルーム（パークグランドビュー）（８－９階）　４名対応 -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HOTDHRWM0002N">コンシェルジュ・タレットルーム（４－６階） -- ダブルベッド</option>
  <option value="HOTDHRBA0001N">コンシェルジュ・バルコニーアルコーヴルーム（パークグランドビュー）　（８階） -- ツインベッド+トランドルベッド+アルコーヴベッド</option>
  <option value="HOTDHRMB0001N">ディズニー･マジックキングダム･スイート（９階） -- ツインベッド+アルコーヴベッド</option>
  <option value="HOTDHRMC0003N">ディズニー・マジックキングダム・スイート（８階） -- ツインベッド+アルコーヴベッド</option>
  <option value="HOTDHRWD0001N">ウォルト･ディズニー･スイート（９階） -- キングベッド</option>

  <option disabled style="color:red;">ディズニーアンバサダーホテル</option>
  <option value="HODAHM2B0001N">マーベルスペシャルルーム“アイアンマン”（11/1～1/8宿泊分） -- ツインベッド+トランドルベッド</option>
  <option value="HODAHPPM0001N">ディズニーアンバサダーホテル「ディズニー・パルパルーザ“ミニーのファンダーランド”」スペシャルルーム -- ツインベッド+トランドルベッド</option>
  <option value="HODAHXMB0001N">外壁工事対象客室（マーベルスペシャルルーム“アイアンマン”）（11/1～11/26宿泊分） -- ツインベッド+トランドルベッド</option>
  <option value="HODAHXA30001N">外壁工事対象客室（アンバサダーフロア　ミッキーマウスルーム）（定員３名） -- ツインベッド+トランドルベッド</option>
  <option value="HODAHXS30001N">外壁工事対象客室（スタンダードフロア）（定員３名） -- ツインベッド+トランドルベッド</option>
  <option value="HODAHXTU0001N">外壁工事対象客室（アンバサダーフロア　パノラマ・スイート） -- ツインベッド</option>
  <option value="HODAHXD30001N">外壁工事対象客室(スタンダードフロア　スタンダードルーム　ダブル) -- ダブルベッド+トランドルベッド</option>
  <option value="HODAHXUM0001N">外壁工事対象客室（アンバサダーフロア　ミッキーズ・プレミア・スイート） -- ツインベッド</option>
  <option value="HODAHX170001N">外壁工事対象客室（スタンダードフロア チップとデールルーム（「チップとデールのプレイグラウンド」プラン）キャラクターグリーティング17:00） -- ツインベッド+トランドルベッド</option>
  <option value="HODAHX180001N">外壁工事対象客室（スタンダードフロア チップとデールルーム（「チップとデールのプレイグラウンド」プラン）キャラクターグリーティング18:00） -- ツインベッド+トランドルベッド</option>
  <option value="HODAHX160001N">外壁工事対象客室（スタンダードフロア チップとデールルーム（「チップとデールのプレイグラウンド」プラン）キャラクターグリーティング16:00） -- ツインベッド+トランドルベッド</option>
  <option value="HODAHXPM0001N">外壁工事対象客室（ディズニーアンバサダーホテル「ディズニー・パルパルーザ“ミニーのファンダーランド”」スペシャルルーム） -- ツインベッド+トランドルベッド</option>
  <option value="HODAHXFD0001N">外壁工事対象客室（アンバサダーフロア　ファンタジア・スイート） -- ダブルベッド</option>
  <option value="HODAHXDP0001N">外壁工事対象客室（スタンダードフロア　ドナルドダックルーム）（定員３名） -- ツインベッド+トランドルベッド</option>
  <option value="HODAHXDU0001N">外壁工事対象客室（アンバサダーフロア パノラマ・スイート） -- ダブルベッド</option>
  <option value="HODAHXN30001N">外壁工事対象客室（アンバサダーフロア　ミニーマウスルーム）（定員３名） -- ツインベッド+トランドルベッド</option>
  <option value="HODAHC170001N">スタンダードフロア チップとデールルーム（「チップとデールのプレイグラウンド」プラン）キャラクターグリーティング17:00 -- ツインベッド+トランドルベッド</option>
  <option value="HODAHP160001N">スタンダードフロア スーペリアルーム（「チップとデールのプレイグラウンド」プラン）キャラクターグリーティング16:00 -- ツインベッド+トランドルベッド</option>
  <option value="HODAHC180001N">スタンダードフロア チップとデールルーム（「チップとデールのプレイグラウンド」プラン）キャラクターグリーティング18:00 -- ツインベッド+トランドルベッド</option>
  <option value="HODAHC160001N">スタンダードフロア チップとデールルーム（「チップとデールのプレイグラウンド」プラン）キャラクターグリーティング16:00 -- ツインベッド+トランドルベッド</option>
  <option value="HODAHP190001N">スタンダードフロア スーペリアルーム（「チップとデールのプレイグラウンド」プラン）キャラクターグリーティング19:00 -- ツインベッド+トランドルベッド</option>
  <option value="HODAHRDN0002N">スタンダードフロア スタンダードルーム -- ダブルベッド+トランドルベッド</option>
  <option value="HODAHSTN0007N">スタンダードフロア スタンダードルーム -- ツインベッド+トランドルベッド</option>
  <option value="HODAHPTN0017N">スタンダードフロア スーペリアルーム -- ツインベッド+トランドルベッド</option>
  <option value="HODAHPDN0002N">スタンダードフロア スーペリアルーム -- ダブルベッド+トランドルベッド</option>
  <option value="HODAHPQN0003N">スタンダードフロア スーペリアルーム （4名対応） -- ツインベッド+トランドルベッド+クルーズベッド</option>
  <option value="HODAHNPQ0003N">アンバサダーフロア ミニーマウスルーム -- ツインベッド+トランドルベッド</option>
  <option value="HODAHNST0002N">アンバサダーフロア ミニーマウスルーム -- ツインベッド+トランドルベッド</option>
  <option value="HODAHMPQ0004N">アンバサダーフロア ミッキーマウスルーム -- ツインベッド+トランドルベッド</option>
  <option value="HODAHMST0002N">アンバサダーフロア ミッキーマウスルーム -- ツインベッド+トランドルベッド</option>
  <option value="HODAHDON0002N">スタンダードフロア ドナルドダックルーム -- ツインベッド+トランドルベッド</option>
  <option value="HODAHDPT0002N">スタンダードフロア ドナルドダックルーム -- ツインベッド+トランドルベッド</option>
  <option value="HODAHSDT0001N">スタンダードフロア スティッチルーム -- ツインベッド+トランドルベッド</option>
  <option value="HODAHGDC0001N">スタンダードフロア　パームガーデンビュールーム -- ダブルベッド</option>
  <option value="HODAHGTC0001N">スタンダードフロア　パームガーデンビュールーム -- ツインベッド</option>
  <option value="HODAHTTN0004N">スタンダードフロア トリプルルーム -- トリプルベッド</option>
  <option value="HODAHFVC0005N">スタンダードフロア ファミリールーム -- ツインベッド+ツインベッド+トランドルベッド</option>
  <option value="HODAHFQN0002N">スタンダードフロア ジュニアファミリールーム -- トリプルベッド+クルーズベッド</option>
  <option value="HODAHTUP0001N">アンバサダーフロア　パノラマ・スイート -- ツインベッド</option>
  <option value="HODAHDUP0001N">アンバサダーフロア　パノラマ・スイート -- ダブルベッド</option>
  <option value="HODAHUFD0001N">アンバサダーフロア ファンタジア・スイート -- ダブルベッド</option>
  <option value="HODAHMPN0001N">アンバサダーフロア ミッキーズ・ペントハウス・スイート -- ハリウッドツイン</option>
  <option value="HODAHUMT0001N">アンバサダーフロア ミッキーズ・プレミア・スイート -- ツインベッド</option>

  <option disabled style="color:red;">東京ディズニーリゾート・トイ・ストーリーホテル</option>
  <option value="HOTSHEQS0001N">スタンダードルーム パーシャルビュー -- ツインベッド＋トランドルベッド+プルダウンベッド</option>
  <option value="HOTSHETS0001N">スタンダードルーム パーシャルビュー -- ツインベッド+トランドルベッド</option>
  <option value="HOTSHSQR0001N">スーペリアルーム -- ツインベッド＋トランドルベッド+プルダウンベッド</option>
  <option value="HOTSHSTS0001N">スタンダードルーム -- ツインベッド+トランドルベッド</option>
  <option value="HOTSHSQS0001N">スタンダードルーム -- ツインベッド＋トランドルベッド+プルダウンベッド</option>
  <option value="HOTSHBQS0001N">スタンダードルーム ベイビュー -- ツインベッド＋トランドルベッド+プルダウンベッド</option>
  <option value="HOTSHBTS0001N">スタンダードルーム ベイビュー -- ツインベッド+トランドルベッド</option>
  <option value="HOTSHTQS0001N">スタンダードルーム スクエアビュー -- ツインベッド＋トランドルベッド+プルダウンベッド</option>
  <option value="HOTSHTTS0001N">スタンダードルーム スクエアビュー -- ツインベッド+トランドルベッド</option>
  <option value="HOTSHTQR0001N">スーペリアルーム スクエアビュー -- ツインベッド＋トランドルベッド+プルダウンベッド</option>

  <option disabled style="color:red;">東京ディズニーセレブレーションホテル</option>
  <option value="HODCHDG40001N">ディスカバー：東京ディズニーリゾート40周年“ドリームゴーラウンド”ルーム（ガーデンサイド） -- ツインベッド+デイベッド2台</option>
  <option value="HODCHDS40001N">ディスカバー：東京ディズニーリゾート40周年“ドリームゴーラウンド”ルーム -- ツインベッド+デイベッド2台</option>
  <option value="HODCHWG40001N">ウィッシュ：東京ディズニーリゾート40周年“ドリームゴーラウンド”ルーム（ガーデンサイド） -- ツインベッド+デイベッド2台</option>
  <option value="HODCHWS40001N">ウィッシュ：東京ディズニーリゾート40周年“ドリームゴーラウンド”ルーム -- ツインベッド+デイベッド2台</option>
  <option value="HODCHDO50001N">“ディスカバー”クインテットルーム -- ツインベッド+デイベッド+二段ベッド</option>
  <option value="HODCHDSO0001N">“ディスカバー”スタンダードルーム（オーシャンサイド） -- ツインベッド+デイベッド2台</option>
  <option value="HODCHDSS0001N">“ディスカバー”スタンダードルーム -- ツインベッド+デイベッド2台</option>
  <option value="HODCHDRR0001N">“ディスカバー”スーペリアルーム -- ツインベッド+デイベッド2台</option>
  <option value="HODCHDRQ0001N">“ディスカバー”スーペリアルーム -- トリプルベッド+デイベッド</option>
  <option value="HODCHDSL0001N">“ディスカバー”トリプルルーム -- トリプルベッド</option>
  <option value="HODCHDSG0001N">“ディスカバー”スタンダードルーム（ガーデンサイド） -- ツインベッド+デイベッド2台</option>
  <option value="HODCHWSO0001N">“ウィッシュ”スタンダードルーム（オーシャンサイド） -- ツインベッド+デイベッド2台</option>
  <option value="HODCHWSL0001N">“ウィッシュ”トリプルルーム -- トリプルベッド</option>
  <option value="HODCHWCO0001N">“ウィッシュ”コーナールーム -- ツインベッド+デイベッド</option>
  <option value="HODCHWSS0001N">“ウィッシュ”スタンダードルーム -- ツインベッド+デイベッド2台</option>
  <option value="HODCHWRR0001N">“ウィッシュ”スーペリアルーム -- ツインベッド+デイベッド2台</option>
  <option value="HODCHWSG0001N">“ウィッシュ”スタンダードルーム（ガーデンサイド） -- ツインベッド+デイベッド2台</option>

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
