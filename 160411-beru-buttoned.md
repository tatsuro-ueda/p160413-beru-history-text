[f:id:weed_7777:20160328115131j:plain]

人名・年号を覚えるのは退屈です。**マンガ**で世界史の勉強を楽しみましょう！

『ベルばら』の**フランス革命**は、近世から近代に変わる重要な**転換点**です。

各項目に画像・Googleマップ・ストリートビューを付けました。

<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.webui-popover/1.2.5/jquery.webui-popover.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.webui-popover/1.2.5/jquery.webui-popover.min.css">

<script>

(function($) {
    $(function() {
        function img(filename, orientation, caption) {
            var ort;
            if (orientation === 'p'){
                oHtml = '" height="200px"';
            } else {
                oHtml = '" width="200px"';
            };
            if (caption == null){
                capHtml = '';
            } else {
                capHtml = '<p><em>' + caption + '</em></p>';
            };
            var html = '<p><img src="http://cdn-ak.f.st-hatena.com/images/fotolife/w/weed_7777/'
            + filename + oHtml + ' align="left" hspace="10px"></p>' + capHtml;
            return html;
        };
        var dic = {
            '重要語句':
            {
                type: 'この記事の読み方',
                content: '世界史を学習する上で外すことはできません。<strong>必ず</strong>理解して下さい。'
            },
            '深掘り語句':
            {
                type: 'この記事の読み方',
                content: '知っていると世界史の流れが理解しやすいです。'
            },
            '余談':
            {
                type: 'この記事の読み方',
                content: 'どちらかと言うと世界史よりも『ベルサイユのばら』を理解するための説明です。'
            },
            'オルレアン公': 
            {
                type: '人物',
                content: img('20160328/20160328114737.jpg', 'p')
                + 'フランスの王族で国王のいとこにあたり、王国有数の富豪であった。公爵は、その財力をもって王位を狙う野心家で、革命前に最初に国王に逆らい自由主義貴族の代表となった。バスティーユ襲撃事件を誘発し、フランス革命勃発すると歓迎して「平等公フィリップ」を自称した。なお、私生活は放蕩かつ無節操だった。'
            },
            'ハプスブルク家': 
            {
                type: '歴史',
                content: img('20160328/20080401153911.jpg', 'l',
                    '1547年時点でのハプスブルク家の領土')
                + 'ヨーロッパ随一の名門王家。政略結婚により大貴族に成長した。20世紀初頭まで中部ヨーロッパで強大な勢力を誇り、様々な国の国王・皇帝の家系となった。また、神聖ローマ帝国の皇帝位を中世以来保持した。最後はビスマルクが排除した。'
            },
            '第三身分':
            {
                type: '歴史',
                content: img('20160328/20130210221541.jpg', 'p', '聖職者＋貴族を平民が背負う世情（アンシャン・レジーム）を風刺した画')
                + '3つの身分のうちもっとも低い平民を意味する。'
                + '<ol>'
                + '<li>第一身分：聖職者</li>'
                + '<li>第二身分：貴族</li>'
                + '<li>第三身分：平民</li>'
                + '</ol>'
            },
            '自由主義':
            {
                type:'歴史',
                content: img('20160328/20120816105356.jpg', 'l', 
                    '自由主義・国民主権の前は絶対王政だった（エリザベス1世）')
                + '個人の'
                + '<ul>'
                + '<li>生命</li>'
                + '<li>自由</li>'
                + '<li>財産</li>'
                + '</ul>'
                + 'の3権利は国王であろうとも犯すことはできないもので、以前の神学から社会は決別するべきであるという思想。'
            },
            'ブルボン家':
            {
                type: '歴史',
                content: img('20160328/20160401134146.jpg', 'p', 
                    '「太陽王」ルイ14世の肖像画')
                + '近世フランス王家。</p>'
                + '<p>銀行家・政治家として台頭しルネサンス文化を育てたメディチ家の家系で、その財力を受け継いだ。'
                + '<p>「太陽王」ルイ14世は、諸侯や貴族・教会の権力が地方に乱立していた状態から、強大な権力を持って中央集権化を図り、中央官僚と常備軍（近衛兵）によって国家統一を成し遂げた（絶対王政）。</p>'
                + '<p>さらに<strong>ハプスブルク家</strong>と政略結婚し、領土を拡大して最盛期を迎え、フランス文化を発展させた。</p>'
            },
            'ルソー':
            {
                type: '人物',
                content: img('20160328/20160328125712.jpg', 'p')
                + 'ジャン・ジャック・ルソー。'
                + '18世紀フランスで活躍した哲学者、政治哲学者、作曲家。'
                + '国民主権という契約を国と国民が結ぶのが'
                + '不平等をなくす今後の理想社会だと「<strong>社会契約論</strong>」で説いた'
                + '（ホッブも同名の本を書いているので注意）。'
                + 'なお、「ベルサイユのばら」の時点ではすでに亡くなっている。'
            },
            '人間不平等起源論':
            {
                type: '歴史',
                content: img('20160328/20100709121120.jpg', 'l')
                + 'ルソーの論文。我流で解釈すると「人が集まる→（貴族と奴隷のような）不平等が生まれる」。'
            },
            'ロベスピエール':
            {
                type: '人物',
                content: img('20160328/20160330180206.jpg', 'p')
                + '地方で弁護士をしていたが、1789年**三部会**の議員に選出されてから革命に身を投じる。'
            },
            'オペラ座':
            {
                type: '場所',
                content: '<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sja!2sjp!4v1459148169706!6m8!1m7!1sVfs3uZuxLHWwCPjmt-pXsw!2m2!1d48.87111407616459!2d2.33216326243794!3f343.62178183560997!4f16.939412639927582!5f0.7820865974627469" frameborder="0" style="border:0" allowfullscreen></iframe></p>'
                + '<p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9987.433603725869!2d2.3319411!3d48.8714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9abf21c286d0767!2z44Kq44Oa44Op44O744Ks44Or44OL44Ko!5e0!3m2!1sja!2sjp!4v1459147453384" frameborder="0" style="border:0" allowfullscreen></iframe></p>'
                + img('20160328/20120926141919.jpg', 'l')
                + 'パリにある歌劇場。17世紀から多くの作品を公演した。しかし後継の親族らの経営は低迷し、赤字は積もった。革命期には、迎合的な作品も上演された。経営者が次々と代わり、ナポレオン政府の経済的措置でようやく救われた。実はガルニエ宮が完成したのは19世紀末。革命の1世紀後のことです。現在のオペラ座はさらに新しく、20世紀末に完成したオペラ・バスティーユです。観光に行くときはご注意を。'
            },
            '仮面舞踏会':
            {
                type:'時代',
                content: img('20160328/20160328125651.jpg', 'l')
                + 'ルネサンス期のイタリアの、参加者が仮装して出席する公的な祭典が発祥。ゲームとして開催されることもあった。仮面をした客たちは正体が誰か分からないような服装をし、互いの正体を当てあうゲームを行った。'
                + '「風紀が乱れる」と、禁止されることもあったそうです。どんなことをしていたんだろう・・・少年の僕にはわからないなあ。'
            },
            'パレ・ロワイヤル':
            {
                type:'場所',
                content: 
                '<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sja!2sjp!4v1459487609649!6m8!1m7!1sa37NF5mxyuTWHIA3VTUgow!2m2!1d48.86278015564088!2d2.337007608338476!3f20.846674658759838!4f11.022677808318875!5f0.7820865974627469" frameborder="0" style="border:0" allowfullscreen></iframe></p>'
                + '<p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7091224145083!2d2.3349374156745553!3d48.86375687928805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1fd8767d47%3A0xcdcb526c397f16f5!2sLe+Palais+Royal!5e0!3m2!1sja!2sjp!4v1459486006657" frameborder="0" style="border:0" allowfullscreen></iframe></p>'
                + '<p><a href="https://www.google.co.jp/maps/place/Le+Palais+Royal/@48.8642472,2.337425,3a,75y,4.33h,75t/data=!3m8!1e1!3m6!1s-hqCwgntaMJY%2FVt6kXepn-MI%2FAAAAAAAAAW8%2Fo08pf9VIACoKTtkaxKkW2olpO3vufn3Sw!2e4!3e11!6s%2F%2Flh6.googleusercontent.com%2F-hqCwgntaMJY%2FVt6kXepn-MI%2FAAAAAAAAAW8%2Fo08pf9VIACoKTtkaxKkW2olpO3vufn3Sw%2Fw203-h101-n-k-no%2F!7i8000!8i4000!4m2!3m1!1s0x47e66e1fd8767d47:0xcdcb526c397f16f5!6m1!1e1">'
                + img('20160401/20160401141640.png', 'l', 
                '庭園（クリックするとストリートビューになります）')
                + '</a></p><br clear="left" />'
                + '<a href="https://www.google.co.jp/maps/@48.8660167,2.3383833,3a,75y,46.85h,82.48t/data=!3m8!1e1!3m6!1s-hgQgQY_p7tA%2FVfA-g6DIWBI%2FAAAAAAAAoiQ%2F8meU1TS6Tak!2e4!3e11!6s%2F%2Flh6.googleusercontent.com%2F-hgQgQY_p7tA%2FVfA-g6DIWBI%2FAAAAAAAAoiQ%2F8meU1TS6Tak%2Fw203-h101-n-k-no%2F!7i6000!8i3000!6m1!1e1>'
                + img('20160401/20160401140223.png', 'l',
                '内部（クリックするとストリートビューになります）')
                + '</a><br clear="left" />'
                + '<p>'
                + img('20160328/20160328115556.jpg', 'l')
                + 'ルイ14世がルーヴル宮殿から移り住んだことで、パレ・ロワイヤル（王宮）と呼ばれるようになった。庶民は庭園で散歩を楽しむことができた。'
                + '</p>'
            },
            '近衛隊': 
            {
                type:'時代',
                content:img('20160330/20160330174323.jpg', 'l', 'イギリスの近衛兵')
                    + '<br clear="left" />'
                    + img('20070616/20070616111017.jpg', 'l')
                    + '国王の身辺警護をする軍隊の一部のエリート部隊。特に体制寄りで保守的な隊員で固められているでしょうから、その隊長であるオスカルが来たことが意外だったのでしょう。'
            },
            '連隊':
            {
                type:'時代',
                content:img('20160330/20160330174858.jpg', 'p', 
                    '連隊はそれぞれ独自の旗を持って戦った')
                + '二千人程度で編成され、地域や貴族指揮官の名称が付けられた。採用や給与、兵站等あらゆる手続きが連隊内で完結していた。連隊の指導者である大佐の上は国王だけだった。このためマリー・アントワネットは王権を使って各地の連隊を革命直前のパリ警戒に召集することができた。'
            },
            'ラテン語':
            {
                type:'時代',
                content:img('20160330/20160330175018.jpg', 'l', 
                    '「誤るのが人間である」（古代ローマ）')
                + '近代においても広く欧州知識人の公用語として用いられた。古い著作の中にはラテン語で記されたものもあり、たとえば自然科学ではニュートンのプリンキピアがある。欧州諸国では第二次大戦まではラテン語が必修だったが、現在では日本での「古典」「古文」ないし「漢文」に相当する科目として存在する程度である。理系の私は「漢文」がとても苦手でした。しかし中国文化圏では漢字で筆談ができるのと同じように、西欧文化圏ではラテン語が（お互いに教育水準が高ければ）通じるんでしょうね。'
            },
            '早馬車':
            {
                type:'時代',
                content:img('20160330/20160330175142.jpg', 'l',
                    'スイスの駅馬車')
                + '早馬車という言葉は事例がありません。当時は「駅馬車」という交通システムが発達していましたので、それに似たものと思われます。駅馬車は通常、4頭立ての馬に牽引された、旅客や貨物を輸送する屋根つき馬車である。駅馬車の車体は革ひもで支えられており、衝撃を吸収した。街道には一定の間隔で駅が設置された。次の駅では休養の十分な馬の組が待機しており、馬をつなぎかえるだけの短い停車時間で旅行を続けられるようになっていた。'
            },
            '王家の馬車だった':
            {
                type:'台詞',
                content:img('20160330/20160330175357.png', 'l',
                    'フランス王家などが紋章として用いたアヤメの意匠')
                + 'オスカルは、すれ違った馬車にアヤメの紋章が意匠されていることに気づき、フランス王家の馬車だと判断したのでしょう。'
            },
            'ベルナール':
            {
                type:'人物',
                content:img('20160330/20160330175853.jpg', 'p',
                    'カミーユ・デムーランの肖像')
                + 'ベルナール・シャトレ。架空の人物だが、弁護士でジャーナリストのカミーユ・デムーランという人がモデル。ルイ・ル・グラン学校ではロベスピエールと机を並べて学んだ。'
            }

        };
        var keyword = '';

        for (keyword in dic) {
            console.log(keyword);
            console.log(dic[keyword].type);
            console.log(dic[keyword].content);

            $('button:contains('+ keyword + ')')
            .attr({
                'data-title': '【' + dic[keyword].type + '】' + keyword, 
                'data-content': dic[keyword].content
            })
            .webuiPopover({placement:'auto-bottom', width:'80%', multi: true});
        };
        for (keyword in dic) {
            console.log(keyword);
            console.log(dic[keyword].type);
            console.log(dic[keyword].content);

            $('button:contains('+ keyword + ')')
            .attr({
                'data-title': '【' + dic[keyword].type + '】' + keyword, 
                'data-content': dic[keyword].content
            })
            .webuiPopover({placement:'auto-bottom', width:'80%', multi: true});
        };
    });
})(jQuery);

</script>

### この記事の見方

キーワードを視覚的に区別しています。
また、それぞれのキーワードを押すと以下のように説明が表示されます。

[f:id:weed_7777:20160411103532p:plain]

- **<button>重要語句</button>**
- <button>深掘り語句</button>
- _<button>余談</button>_

また、以下のような地図は「アントワネット」が「緑」の地点から「赤」の地点に移動した、ということです。

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kTvDi1PoG2I0" width="320" height="240"></iframe>

そして、地図の中の緑・赤の地点をクリックすると以下のように地名と解説が表示されます。

[f:id:weed_7777:20160406101543p:plain]

またパリ市内の場所は、位置関係がわかりやすいように、ノートルダム寺院からの経路を表示しています。

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kQkyzRxYdq3Y" width="320" height="240"></iframe>

地図と画像で解説するわけです。準備はいいですか？では始めますよ。

### 5巻のストーリー

#### 登場人物紹介

>マリー・アントワネット  
>「オーストリア・**<button>ハプスブルク家</button>**の皇女。14歳でフランスの<button>ブルボン家</button>に嫁ぐ。」

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kTvDi1PoG2I0" width="320" height="240"></iframe>

>フェルゼン  
>「_<button>オペラ座</button>_（ガルニエ宮）の_<button>仮面舞踏会</button>_でマリー・アントワネットと出会う」

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kQkyzRxYdq3Y" width="320" height="240"></iframe>

#### 本編

オスカルは<button>オルレアン公</button>の宮殿に訪問することを願い出ます。

>オスカル  
>「<button>オルレアン公</button>の返事は？」
>
>召使い  
>「
><button>オルレアン公</button>はオスカル様の_<button>パレ・ロワイヤル</button>_ご訪問を歓迎する、と。」

オスカルは<button>オルレアン公</button>の宮殿に行き・・・

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kLeT4-TkoEo4" width="320" height="240"></iframe>

その活気に驚きます。

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kZM0bOW34Q-w" width="320" height="240"></iframe>

><button>オルレアン公</button>の住む宮殿を訪れたオスカル  
>「なるほど・・・さすがは**<button>自由主義</button>**をもって聞こえる<button>オルレアン公</button>。**<button>第三身分</button>**の男たちがこうも出入りしているとは・・・」
>
><button>オルレアン公</button>  
>「_<button>近衛隊</button>_の_<button>連隊</button>_の隊長のきみが私の城を訪ねてくれるとは思わなかったよ」

[f:id:weed_7777:20160330174323j:plain]

[f:id:weed_7777:20070616111017j:plain]

（イギリスの_<button>近衛隊</button>_、お堅いイメージ）

>オルレアン派の貴族  
>「君の_<button>ラテン語</button>_は大変なものだ」  
>「古典もいいが、よかったらジャン・ジャック・**<button>ルソー</button>**を読んでみたまえ」  
>「<button>人間不平等起源論</button>をしらないかい？」  
>
>オスカル  
>「**<button>ルソー</button>**？」

[f:id:weed_7777:20160328125712j:plain]

**<button>ルソー</button>**の肖像

オスカルはロザリーを救出し、自分の邸に戻ります。

>すれ違った馬車を見て  
>「_<button>早馬車</button>_！」

[f:id:weed_7777:20160330175142j:plain]

>「_<button>王家の馬車だった</button>_」

[f:id:weed_7777:20160330175357p:plain]

>捕らえた黒い騎士にオスカル  
>「_<button>ベルナール</button>_・シャトレとかいったな。<button>ロベスピエール</button>もお前たち盗人の仲間だったのか？」

[f:id:weed_7777:20160330180206j:plain]

**<button>ロベスピエール</button>**の肖像







［人物］ジャン・ジャック・**<button>ルソー</button>**。18世紀フランスで活躍した哲学者、政治哲学者、作曲家。国民主権という契約を国と国民が結ぶのが不平等をなくす今後の理想社会だと「**社会契約論**」で説いた（ホッブも同名の本を書いているので注意）。なお、「ベルサイユのばら」の時点ではすでに亡くなっている。

高校生のときは自分が未熟すぎて全然わからなかった・・・高校生なのにわかる人は才能があるんだろうなあ。
<!--end-->

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>

### <a name="世界が貴族のためだけにあるんじゃない">世界が貴族のためだけにあるんじゃない</a>
<!--読み：せかいがきぞくのため-->
<!--b005-p010-->

>（オルレアン派の貴族がオスカルに言った）

[f:id:weed_7777:20160401144742j:plain]

［台詞］
このとき、オスカルの中で何かがひび割れ始める。

★Koushouブログを見て当時の貴族がなぜ革命側にまわったのか調べる★
<!--end-->

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>

### <a name="ブルボン家">ブルボン家</a>
<!--読み：ぶるぼんけ-->
<!--b005-p004-->

>登場人物紹介＞マリー・アントワネット「14歳でフランスの<button>ブルボン家</button>に嫁ぐ」

[f:id:weed_7777:20160328120044j:plain]

_<button>ブルボン家</button>の紋章_

[f:id:weed_7777:20160401134146j:plain]

_「太陽王」ルイ14世の肖像画_

［歴史］近世フランス王家。銀行家・政治家として台頭しルネサンス文化を育てたメディチ家の家系で、その財力を受け継いだ。

「太陽王」ルイ14世は、諸侯や貴族・教会の権力が地方に乱立していた状態から、強大な権力を持って中央集権化を図り、中央官僚と常備軍（近衛兵）によって国家統一を成し遂げた（絶対王政）。さらに**<button>ハプスブルク家</button>**と政略結婚し、領土を拡大して最盛期を迎え、フランス文化を発展させた。

奢れるもの久しからず、栄子必衰の理あり・・・平家のようですね。
<!--end-->

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>

### <a name="人間不平等起源論">人間不平等起源論</a>
<!--読み：にんげんふびょうどう-->
<!--b005-p010-->

>オスカル「**<button>ルソー</button>**？」
>
>オルレアン派の貴族「<button>人間不平等起源論</button>をしらないかい？」

[f:id:weed_7777:20100709121120j:plain]

［歴史］
****<button>ルソー</button>****の論文。我流で解釈すると「人が集まる→（貴族と奴隷のような）不平等が生まれる」。

そして「この問題の解決のためには、各個人同士で協力関係を約束するしかない」というのが**<button>ルソー</button>**の「**社会契約論**」（たぶん）。

言っていることはとても論理的ですよね。だけど原文を読むと分かりにくいんだよなあ。それとも私の解釈が間違っているのか？
<!--end-->

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>

### <a name="オルレアン公">オルレアン公</a>
<!--読み：おるれあんこう-->
<!--b005-p005-->

>オスカル「<button>オルレアン公</button>の返事は？」
>
>召使い「<button>オルレアン公</button>はオスカル様の_<button>パレ・ロワイヤル</button>_ご訪問を歓迎する、と」

[f:id:weed_7777:20160328114737j:plain]

［人物］**<button>フランス革命</button>**期の**<button>オルレアン公</button>**はルイ・フィリップ2世。フランスの王族で国王のいとこにあたり、王国有数の富豪であった。

公爵は、その財力をもって王位を狙う野心家で、革命前に最初に国王に逆らい****<button>フランス革命</button>**が勃発すると歓迎して「平等公フィリップ」を自称した。

なお、私生活は放蕩かつ無節操だった。

一言で言うと「野心家」ですかね。私は苦手なタイプ。だって怖いんだもん。
<!--end-->

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>

### <a name="ロベスピエール">ロベスピエール</a>
<!--読み：**<button>ロベスピエール</button>**-->
<!--b005-042-->

>捕らえた黒い騎士にオスカル「<button>ロベスピエール</button>もお前たち盗人の仲間だったのか？」

[f:id:weed_7777:20160330180206j:plain]

_<button>ロベスピエール</button>の肖像画_

［人物］
地方で弁護士をしていたが、1789年**三部会**の議員に選出されてから革命に身を投じる。

<!--end-->

## 余談編

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>

### <a name="オペラ座">オペラ座</a>
<!--読み：おぺらざ-->
<!--b005-p004-->

>登場人物紹介＞フェルゼン「_<button>オペラ座</button>_の_<button>仮面舞踏会</button>_でマリー・アントワネットと出会う」

<iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sja!2sjp!4v1459148169706!6m8!1m7!1sVfs3uZuxLHWwCPjmt-pXsw!2m2!1d48.87111407616459!2d2.33216326243794!3f343.62178183560997!4f16.939412639927582!5f0.7820865974627469" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>

[f:id:weed_7777:20120926141919j:plain]

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9987.433603725869!2d2.3319411!3d48.8714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9abf21c286d0767!2z44Kq44Oa44Op44O744Ks44Or44OL44Ko!5e0!3m2!1sja!2sjp!4v1459147453384" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>

_ガルニエ宮_

<iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sja!2sjp!4v1459148510796!6m8!1m7!1s_EtIn26yiJuCPxGYyYHwJA!2m2!1d48.852893!2d2.3692348!3f135.45746369128517!4f5.280504094469279!5f0.7820865974627469" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>

[f:id:weed_7777:20140202223143j:plain]

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.3026839014474!2d2.368014815956221!3d48.85243827928688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e30d4668339%3A0x1a271cfd2fff4385!2sOp%C3%A9ra+Bastille!5e0!3m2!1sja!2sjp!4v1459148377166" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>

_オペラ・バスティーユ_

［場所］パリにある歌劇場。17世紀から多くの作品を公演した。しかし後継の親族らの経営は低迷し、赤字は積もった。革命期には、迎合的な作品も上演された。経営者が次々と代わり、ナポレオン政府の経済的措置でようやく救われた。

実はガルニエ宮が完成したのは19世紀末。革命の1世紀後のことです。現在の_<button>オペラ座</button>_はさらに新しく、20世紀末に完成したオペラ・バスティーユです。観光に行くときはご注意を。
<!--end-->

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>

### <a name="仮面舞踏会">仮面舞踏会</a>
<!--読み：かめんぶとうかい-->
<!--b005-p004-->

>登場人物紹介＞フェルゼン「_<button>オペラ座</button>_の_<button>仮面舞踏会</button>_でマリー・アントワネットと出会う」

[f:id:weed_7777:20160328125651j:plain]

[f:id:weed_7777:20160328125701j:plain]

［時代］ルネサンス期のイタリアの、参加者が仮装して出席する公的な祭典が発祥。_<button>仮面舞踏会</button>_はゲームとして開催されることもあった。仮面をした客たちは正体が誰か分からないような服装をし、互いの正体を当てあうゲームを行った。

「風紀が乱れる」と、禁止されることもあったそうです。どんなことをしていたんだろう・・・少年の僕にはわからないなあ。
<!--end-->

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>

### <a name="パレ・ロワイヤル">パレ・ロワイヤル</a>
<!--読み：ぱれろわいやる-->
<!--b005-p005-->

>オスカル「<button>オルレアン公</button>の返事は？」
>
>召使い「<button>オルレアン公</button>はオスカル様の_<button>パレ・ロワイヤル</button>_ご訪問を歓迎する、と」

[f:id:weed_7777:20160328115556j:plain]

<iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sja!2sjp!4v1459487609649!6m8!1m7!1sa37NF5mxyuTWHIA3VTUgow!2m2!1d48.86278015564088!2d2.337007608338476!3f20.846674658759838!4f11.022677808318875!5f0.7820865974627469" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>

[https://www.google.co.jp/maps/place/Le+Palais+Royal/@48.8642472,2.337425,3a,75y,4.33h,75t/data=!3m8!1e1!3m6!1s-hqCwgntaMJY%2FVt6kXepn-MI%2FAAAAAAAAAW8%2Fo08pf9VIACoKTtkaxKkW2olpO3vufn3Sw!2e4!3e11!6s%2F%2Flh6.googleusercontent.com%2F-hqCwgntaMJY%2FVt6kXepn-MI%2FAAAAAAAAAW8%2Fo08pf9VIACoKTtkaxKkW2olpO3vufn3Sw%2Fw203-h101-n-k-no%2F!7i8000!8i4000!4m2!3m1!1s0x47e66e1fd8767d47:0xcdcb526c397f16f5!6m1!1e1:image=http://cdn-ak.f.st-hatena.com/images/fotolife/w/weed_7777/20160401/20160401141640.png]

_庭園（クリックするとストリートビューになります）_

[https://www.google.co.jp/maps/@48.8660167,2.3383833,3a,75y,46.85h,82.48t/data=!3m8!1e1!3m6!1s-hgQgQY_p7tA%2FVfA-g6DIWBI%2FAAAAAAAAoiQ%2F8meU1TS6Tak!2e4!3e11!6s%2F%2Flh6.googleusercontent.com%2F-hgQgQY_p7tA%2FVfA-g6DIWBI%2FAAAAAAAAoiQ%2F8meU1TS6Tak%2Fw203-h101-n-k-no%2F!7i6000!8i3000!6m1!1e1:image=http://cdn-ak.f.st-hatena.com/images/fotolife/w/weed_7777/20160401/20160401140223.png]

_内部（クリックするとストリートビューになります）_

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7091224145083!2d2.3349374156745553!3d48.86375687928805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1fd8767d47%3A0xcdcb526c397f16f5!2sLe+Palais+Royal!5e0!3m2!1sja!2sjp!4v1459486006657" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>

［場所］ルイ14世がルーヴル宮殿から移り住んだことで、_<button>パレ・ロワイヤル</button>_（王宮）と呼ばれるようになった。庶民は庭園で散歩を楽しむことができた。

**<button>フランス革命</button>**前の<button>オルレアン公</button>は、自分の宮殿_<button>パレ・ロワイヤル</button>_を歓楽街として使った。そのため、政治的な危険分子はもちろん、娼婦の溜まり場にもなった。

なんだかマンガよりだいぶ退廃的ですね。松永久秀みたいな人だったのかな。
<!--end-->

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>

### <a name="近衛隊">近衛隊</a>
<!--読み：このえたい-->
<!--b005-p009-->
<!--リンク-->

>オスカルに<button>オルレアン公</button>「近衛_<button>近衛隊</button>_の_<button>連隊</button>_）のきみが私の城を訪ねてくれるとは思わなかったよ」

[f:id:weed_7777:20160330174323j:plain]

[f:id:weed_7777:20070616111017j:plain]

_イギリスの近衛兵_

［時代］
国王の身辺警護をする軍隊の一部のエリート部隊。特に体制寄りで保守的な隊員で固められているでしょうから、その隊長であるオスカルが来たことが意外だったのでしょう。
<!--end-->

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>

### <a name="連隊">連隊</a>
<!--b005-p009-->
<!--読み：れんたい-->
<!--リンク-->

>オスカルに<button>オルレアン公</button>「近衛_<button>近衛隊</button>_の_<button>連隊</button>_）のきみが私の城を訪ねてくれるとは思わなかったよ」

[f:id:weed_7777:20160330174858j:plain]

__<button>連隊</button>_はそれぞれ独自の旗を持って戦った_

［時代］
二千人程度で編成され、地域や貴族指揮官の名称が付けられた。採用や給与、兵站等あらゆる手続きが**_<button>連隊</button>_**の指導者である大佐の上は国王だけだった。

このためマリー・アントワネットは王権を使って各地の**_<button>連隊</button>_**委を革命直前のパリ警戒に召集することができた。
<!--end-->

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>

### <a name="ラテン語">ラテン語</a>
<!--読み：らてんご-->
<!--b005-p009-->

>オスカルにオルレアン派の貴族「君の_<button>ラテン語</button>_は大変なものだ」

[f:id:weed_7777:20160330175018j:plain]
★画像を大きくしたい★

_「誤るのが人間である」（古代ローマ）_

［時代］
近代においても広く欧州知識人の公用語として用いられた。古い著作の中には_<button>ラテン語</button>_で記されたものもあり、たとえば自然科学ではニュートンのプリンキピアがある。

欧州諸国では第二次大戦までは_<button>ラテン語</button>_が必修だったが、現在では日本での「古典」「古文」ないし「漢文」に相当する科目として存在する程度である。

理系の私は「漢文」がとても苦手でした。しかし中国文化圏では漢字で筆談ができるのと同じように、西欧文化圏では_<button>ラテン語</button>_が（お互いに教育水準が高ければ）通じるんでしょうね。
<!--end-->

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>

### <a name="世界が貴族のためだけにあるんじゃない">世界が貴族のためだけにあるんじゃない</a>
<!--読み：せかいがきぞくのため-->
<!--b005-p010-->

>（オルレアン派の貴族がオスカルに言った）

[f:id:weed_7777:20160401144742j:plain]

［台詞］
このとき、オスカルの中で何かがひび割れ始める。

★Koushouブログを見て当時の貴族がなぜ革命側にまわったのか調べる★
<!--end-->

### どんな権力といえど勝手には踏み込むことができないパリ・ロワイヤル・・・
<!--読み：どんなけんりょくといえど-->
<!--b005-p015-->
>（オスカル★要再調査★）

[f:id:weed_7777:20160401144947j:plain]

[台詞］
<button>オルレアン公</button>は王国有数の富豪だったので、強い権力を持っていたのでしょう。
<!--end-->

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>

### <a name="早馬車">早馬車</a>
<!--読み：はやばしゃ-->
<!--b005-p027-->

>救出したロザリーを連れてベルサイユに向かうオスカルが、すれ違った馬車を見て「_<button>早馬車</button>_！」

[f:id:weed_7777:20160330175142j:plain]

_スイスの駅馬車_

［時代］
_<button>早馬車</button>_という言葉は事例がありません。当時は「駅馬車」という交通システムが発達していましたので、それに似たものと思われます。

駅馬車は通常、4頭立ての馬に牽引された、旅客や貨物を輸送する屋根つき馬車である。駅馬車の車体は革ひもで支えられており、衝撃を吸収した。

街道には一定の間隔で駅が設置された。次の駅では休養の十分な馬の組が待機しており、馬をつなぎかえるだけの短い停車時間で旅行を続けられるようになっていた。
<!--end-->

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>

### <a name="王家の馬車だった">王家の馬車だった</a>
<!--読み：おうけのばしゃ-->
<!--b005-p029-->

>（ベルサイユへ帰る途中に馬車とすれ違ったオスカルが思った）

[f:id:weed_7777:20160330175357p:plain]

_フランス王家などが紋章として用いたアヤメの意匠_

［台詞］
オスカルは、すれ違った馬車にアヤメの紋章が意匠されていることに気づき、フランス王家の馬車だと判断したのでしょう。
<!--end-->

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>

### <a name="ベルナール">ベルナール</a>
<!--読み：べるなーる-->
<!--b005-p042-->：人物＞

>捕らえた黒い騎士にオスカルが「_<button>ベルナール</button>_・シャトレとかいったな」

[f:id:weed_7777:20160330175853j:plain]

_カミーユ・デムーランの肖像_

［人物］
_<button>ベルナール</button>_・シャトレ。架空の人物だが、弁護士でジャーナリストのカミーユ・デムーランという人がモデル。ルイ・ル・グラン学校では<button>ロベスピエール</button>**と机を並べて学んだ。
<!--end-->

<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>
