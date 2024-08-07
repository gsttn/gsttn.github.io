# TDR予約共通情報：待合室詳細分析

## 概要

2022年7月に導入されたアクセス集中時の『順番にご案内します』というページ、いわゆる待合室機能に関する情報を記載します。
基本的な公式情報に関しては、[基礎情報](./basics.md)も参照ください。

## 2024年夏のさらに最新状況

トラベルバッグが待合室の対象となったようですので、簡単に待合室を素通りすることは出来なくなったようです。
詳細は調べてからですが、ひとまずトラベルバッグを経由したネタは削除しておきます。

## ビギナー向け対策

* 毎朝の開放タイミングを狙うなら5～8分前くらいに予約サイトにアクセスして、待合室を抜けておく
    * 15分以上前に待合室を抜けて予約サイトに入ると、肝心な開放タイミングで待合室に追い出される可能性があるので、早ければ良いというものでもない
* 混雑が見込まれる一括開放のときは予約対象に合わせて30分～1時間前くらい早めの時間にアクセスする
    * 画面表示される待機時間はあまり当てにならないが、もし予約サイトに入るのが開放タイミングより15分以上早くなりそうなら、ブラウザのCookieをクリアして再度アクセスする
    * ただしCookieクリアしてサイトに入れる時間が遅くなりすぎたとしても、元には戻せないので要注意
    * ページ移動の有無等や目に見えない30分期限の扱いが判っているなら、30分前より後に入るパターンで妥協する手もある
* キャンセル拾い等の場合は待合室に戻されることになったとしても、25～30分に1回くらいはページ更新する
* 待合室で『もう一度並ぶ』や『すすむ』のようなボタンが表示されたら速やかに押しておく
    * 『もう一度並ぶ』を押すまでの時間は待ち時間にはカウントされない
    * 『すすむ』で実際に予約サイトを表示する前の時間もアクセス許可期限にカウントされる
* 予約を掴むことに成功した後の画面で待合室に戻されて、予約が取れなくなるケースは基本的にはない
    * ただし、予約処理中のログイン画面は目に見えない待合室に戻されるので画面更新が必要になるケースもある
    * よって、特に一括開放のような**待合室の待機時間が長くなるケースでは事前にログインしておく方が安全**ではある
* 待合室を抜けた後にエラー画面が出た場合は、再度ページを読み込む
    * ページ更新ではなく、リンクやブックマーク等から開き直す方がベター

## 挙動

### 待合室への遷移

基本的には予約サイトの前段に待合室サーバーが配置されて、Cookieに設定したトークン等で予約サイトへのアクセス可否を管理している模様です。
つまり、前に取得した予約サイトへのアクセス許可の有効期限が切れたり、初回アクセスの場合は予約サイトから待合室に飛ばされます。
ここで必要な待機時間を経過すると、アクセス許可という扱いになって予約サイトに飛ばされます。


### 待合室の待機時間

待合室では待機時間の参考値が表示されますが、基本的に待機時間が長ければ長いほど絶対的な数字の信頼性は低くなると考えるべきです。

特に待機時間が長いケースでは前倒しされるより遅延するケースが多いようです。
つまり、特に一括開放の日に開幕タイミングに合わせて予約サイトに入ろうとする場合、表示された数字を鵜呑みにすると開放タイミングより数分～数十分ほど遅れて入ることになり得ます。

逆に待機時間が短いケースでは、前倒しされるケースがあるようです。
つまり、開放タイミングより少し前に入ろうとして思った以上に早く入ってしまい、肝心のタイミングで待合室に戻されることになり得ます。
とは言え、短い待機時間がさらに減るので、絶対的な待ち時間の減少幅としては大きくはないので、この影響を受けるケースは少ないでしょう。


### 待合室の素通り

予約サイトへのアクセスが多くない時間帯であれば、基本的には待合室の画面は表示されません。
ただし、この場合でも初回アクセスならブラウザのアドレスを見ていると予約サイト→待合室→予約サイトという順番で表示されますので、画面表示や待ち時間なしで予約サイトに戻ってくるような挙動となっています。

基本的に、これだけなら特に大きな問題はないのですが、後述する遅延に関しては素通りする際にも影響します。


### 待合室への入室と退室の順番

基本的には入室した順番に退室して予約サイトに入れると考えがちではありますが、厳密に見ていくと必ずしもこの順番は保証されません。
つまり、後から初回アクセスをして待合室に入った人の方が、先に予約サイトにアクセス可能になるケースがあります。
これは、タイミング次第で待合室に表示される待機時間が異なる（後から入った方が短い時間が表示される）というケースもあるようです。

ただし、待機時間が長いケースで後からアクセスした方が圧倒的に短い時間になるような大きな差にはならないようではあります。
（詳細は未検証）


### 予約サイトへのアクセス許可期限

待合室を抜けて、予約サイトへのアクセスが許可される時間は**概ね15分程度**です。
15分を経過して、予約サイト内でページ移動やページ更新をすると再び待合室に飛ばされることになります。
ただし、ページ移動を伴わない情報更新（例：宿泊予約のカレンダー移動）であれば、基本的に待合室に飛ばされることはありません。
とは言え、ページ移動や更新をせずに情報更新だけをしていると、ページ表示時点で設定される**内部的な予約可能期限を超過してしまうケース**があります。
よって、**30分を超えてキャンセル拾いをするようなケースでは敢えて待合室を経由してでもページ更新する必要があり**ます。
詳細は [TDRホテル予約情報：非公式な調査結果→長時間キャンセル拾いと予約可能時間](../hotel/research.md#長時間キャンセル拾いと予約可能時間) も確認してみてください。

なお、後述する待合室に飛ばされないページの範囲内であれば、待合室を気にすることなく予約サイト内を移動することが可能です。


### もう一度並ぶ画面

初回アクセスをして待合室の画面が表示されるケースで、たまに『もう一度並ぶ』という操作をしないと進めない画面が表示されることがあります。
この画面で待っていても自動で予約サイトには入れませんし、待っている時間も待機時間として扱われることもありませんので、予約サイトに入るためには速やかにもう一度並ぶ操作をする必要があります。

基本的に、この画面は以下のような状態になると飛ばされるようです。

* 初回アクセスをして待合室に飛ばされる
* そのまま入室せずに画面を閉じる（Cookieはクリアしない）
* 予約サイトや待合室にはアクセスしない状態で、待機時間＋10分ほど経過する（**こちらは15分にはなっていない模様**）
* 予約サイトにアクセスすると、もう一度並ぶの待合室に飛ばされる

最後の予約サイトにアクセスしたタイミングでは、前に待合室に入った際の入室可能な時間と予約サイトにアクセス許可された時間の合計時間を経過している状態になります。
つまり、予約サイトに入らないまま、予約サイトにアクセス許可されている時間を経過してしまった、という状態に『もう一度並ぶ』が表示されるイメージです。


### 待合室に飛ばされないページ

詳細は伏せますが、ページ移動をしても待合室に飛ばされないページがいくつか存在します。
例えば判りやすいのは、予約確保後のページ群は基本的に待合室に飛ばされることはありません。
つまり、初手で予約を確保してしまえば予約内容の確認ページ等で待合室に戻されることはないようです。

2024年夏頃の変更でログイン画面が待合室に飛ばされなくなり、元々がトラベルバッグ内のページも待合室に飛ばされなかったので、トラベルバッグを利用した予約は待合室の影響なく進められるようになってしまったようです。


## 小技／対策

### 待合室を抜けるタイミング調整

基本的に待合室の状態はCookieに保存されている情報で管理されているようです。
したがって、Cookie情報をクリアしてしまえば、初回アクセス状態に戻すことが可能です。

例えば、『一括開放の日に早めにアクセスしてみたが、このままでは開放タイミングより30分前に入ってしまう、そこで再アクセスすると開放タイミングに間に合わない』というようなケースでは、タイミングを合わせてCookieをクリアしてそのタイミングから待機時間を起算させるようなことが可能です。
Cookie情報を消すという意味では、ブラウザのシークレットモード（プライベートモード）を利用して再起動するような手順でも同等の効果が期待出来ます。

ただし、あくまでも待機時間の起算するタイミングをリセットして待合室に入り直すことしか出来ません。
一度リセットしてしまったら、『前の待機時間の方が良かった！』としても、戻すことは出来ません。

また推測に過ぎませんが、多くの方がこういった手順で待合室に入り直してしまうと、前に並んでいた人が居なくなるので待機時間が一気に短縮されるような方向に更新される可能性もあるかと思います。
表示される待機時間も信用出来ませんので、こういった操作を利用する場合には注意と覚悟が必要です。


### 待合室に入るまでの遅延

初回アクセスで待合室に飛ばされるケースにおいて、表示対象がTOPページのような短時間で表示される画面にアクセスする場合と、宿泊予約の検索結果のような表示に時間がかかる画面にアクセスする場合では、後者の方が待合室に入るまでの時間が圧倒的に長くなる傾向があります。
少しわかりにくいですが、例えば以下のような待合室をほぼ素通りするようなケースにおいて、遅延による時間差が体感できるレベルで発生するイメージです（数字は全て例です）。

* 初回アクセス→TOP画面→1秒経過→待合室→1秒経過→TOP画面→検索結果画面URLを直接指定→3秒→検索結果画面を表示 ＝ **合計5秒**
* 初回アクセス→検索結果画面→6秒経過→待合室→6秒→検索結果画面へ移動→3秒→検索結果画面を表示  ＝ **合計15秒**

待合室に入った後の待機時間への影響はほぼありませんが、待合室に入るタイミングを細かく調整したいと考えているなら留意すべきです。
よって、待機時間が長いケースではあまり影響は大きくありませんが、待合室を素通り出来るような軽い時間帯だと10秒とか15秒という差は体感できる違いになるでしょう。

これは開放タイミングに初回アクセスの状態で検索結果の画面を直接表示するようなケースでは大きな遅延となります。
つまり、開放タイミングではTOPページに初回アクセスして待合室を抜けた状態を先に作ってから、検索結果の画面に移動するような操作をすべき、ということになります。
