[f:id:weed_7777:20160328115131j:plain]

人名・年号を覚えるのは退屈です。**マンガ**で世界史の勉強を楽しみましょう！

『ベルばら』の**フランス革命**は、近世から近代に変わる重要な**転換点**です。

各項目に画像・Googleマップ・ストリートビューを付けました。

<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.webui-popover/1.2.5/jquery.webui-popover.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.webui-popover/1.2.5/jquery.webui-popover.min.css">
<script src="https://cdn.jsdelivr.net/buttons/2.0.0/js/buttons.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/buttons/2.0.0/css/buttons.min.css">

<script>


var jQuery;
(function ($) {
    function imgSmall(filename, orientation, caption) {
        var oHtml;
        if (orientation === 'p') {
            oHtml = '" height="200px"';
        }
        else {
            oHtml = '" width="200px"';
        }
        ;
        var capHtml;
        if (caption == null) {
            capHtml = '';
        }
        else {
            capHtml = '<p><em>' + caption + '</em></p>';
        }
        ;
        var html = '<p><img src="http://cdn-ak.f.st-hatena.com/images/fotolife/w/weed_7777/'
            + filename + oHtml + ' align="left" hspace="10px"></p>' + capHtml;
        return html;
    }
    ;
    var dic = {
        'ここを押してみて下さい': {
            type: 'この記事の読み方',
            content: '説明が画面の外に出るときは吹き出しを引っ張って下さい。なお、<button>重要語句</button>というように他の語句へのボタンがあります。活用して下さい。'
        },
        '重要語句': {
            type: 'この記事の読み方',
            content: '世界史を学習する上で外すことはできません。<strong>必ず</strong>理解して下さい。'
        },
        '深掘り語句': {
            type: 'この記事の読み方',
            content: '知っていると世界史の流れが理解しやすいです。'
        },
        '余談': {
            type: 'この記事の読み方',
            content: 'どちらかと言うと世界史よりも『ベルサイユのばら』を理解するための説明です。'
        },
        'オルレアン公': {
            type: '人物',
            img: {
                filename: '20160328/20160328114737.jpg',
                orientation: 'p'
            },
            content: 'フランスの王族で国王のいとこにあたり、王国有数の富豪であった。公爵は、その財力をもって王位を狙う野心家で、革命前に最初に国王に逆らい<button>自由主義</button>貴族の代表となった。バスティーユ襲撃事件を誘発し、フランス革命が勃発すると歓迎して「平等公フィリップ」を自称した。なお、私生活は放蕩かつ無節操だった。'
        },
        'ハプスブルク家': {
            type: '歴史',
            img: {
                filename: '20160328/20080401153911.jpg',
                orientation: 'l',
                caption: '1547年時点でのハプスブルク家の領土'
            },
            content: 'ヨーロッパ随一の名門王家。政略結婚により大貴族に成長した。20世紀初頭まで中部ヨーロッパで強大な勢力を誇り、様々な国の国王・皇帝の家系となった。また、神聖ローマ帝国の皇帝位を中世以来保持した。最後はビスマルクが排除した。'
        },
        '第三身分': {
            type: '歴史',
            img: {
                filename: '20160328/20130210221541.jpg',
                orientation: 'p',
                caption: '<button>アンシャン・レジーム</button>を風刺した画'
            },
            content: '3つの身分のうちもっとも低い平民を意味する。'
                + '<ol>'
                + '<li>第一身分：聖職者</li>'
                + '<li>第二身分：貴族</li>'
                + '<li>第三身分：平民</li>'
                + '</ol>'
        },
        'アンシャン・レジーム': {
            type: '歴史',
            img: {
                filename: '20160328/20130210221541.jpg',
                orientation: 'p',
                caption: '聖職者と貴族を、平民が背負って歩いている'
            },
            content: '直訳すると「旧（アンシャン）体制（レジーム）」。2％の聖職者＋貴族（免税権も持っていた）を、98％の平民が背負っていた。'
        },
        '自由主義': {
            type: '歴史',
            content: '個人の'
                + '<ul>'
                + '<li>生命</li>'
                + '<li>自由</li>'
                + '<li>財産</li>'
                + '</ul>'
                + 'の3権利は国王であろうとも犯すことはできないもので、以前の神学から社会は決別するべきであるという思想。なお、自由主義・国民主権の前は<button>絶対王政</button>だった。'
        },
        '絶対王政': {
            type: '歴史',
            img: {
                filename: '20160328/20120816105356.jpg',
                orientation: 'l',
                caption: '<button>自由主義</button>・国民主権の前は絶対王政だった（エリザベス1世）'
            },
            content: '諸侯や貴族・教会の権力が地方に乱立していた状態から、強大な権力を持って中央集権化を図り、中央官僚と常備軍（<button>近衛隊</button>）によって国家統一を成し遂げた体制のこと'
        },
        'ブルボン家': {
            type: '歴史',
            img: {
                filename: '20160328/20160401134146.jpg',
                orientation: 'p',
                caption: '「太陽王」ルイ14世の肖像画'
            },
            content: '近世フランス王家。<button>メディチ家</button>の家系で、その財力を受け継いだ。「太陽王」ルイ14世は、<button>絶対王政</button>を敷いた。さらに<button>ハプスブルク家</button>と政略結婚し、領土を拡大して最盛期を迎え、フランス文化を発展させた。'
        },
        'メディチ家': {
            type: '歴史',
            content: '銀行家・政治家として台頭しルネサンス文化を育てた。'
        },
        'ルソー': {
            type: '人物',
            img: {
                filename: '20160328/20160328125712.jpg',
                orientation: 'p'
            },
            content: 'ジャン・ジャック・ルソー。'
                + '18世紀フランスで活躍した哲学者、政治哲学者、作曲家。'
                + '「<button>社会契約論（ルソー）</button>」を説いた'
                + '（ホッブも同名の本を書いているので注意）。'
                + 'なお、「ベルサイユのばら」の時点ではすでに亡くなっている。'
        },
        '社会契約論（ルソー）': {
            type: '歴史',
            content: '国民主権という契約を国と国民が結ぶのが、不平等をなくす今後の理想社会であるという論'
        },
        '人間不平等起源論': {
            type: '歴史',
            content: imgSmall('20160328/20100709121120.jpg', 'l')
                + 'ルソーの論文。我流で解釈すると「人が集まる→（貴族と奴隷のような）不平等が生まれる」。'
        },
        'ロベスピエール': {
            type: '人物',
            img: {
                filename: '20160328/20160330180206.jpg',
                orientation: 'p'
            },
            content: '地方で弁護士をしていたが、1789年三部会の議員に選出されてから革命に身を投じる。'
        },
        'オペラ座': {
            type: '場所',
            img: {
                filename: '20160328/20120926141919.jpg',
                orientation: 'l'
            },
            content: '<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sja!2sjp!4v1459148169706!6m8!1m7!1sVfs3uZuxLHWwCPjmt-pXsw!2m2!1d48.87111407616459!2d2.33216326243794!3f343.62178183560997!4f16.939412639927582!5f0.7820865974627469" frameborder="0" style="border:0" allowfullscreen></iframe></p>'
                + '<p><iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kQkyzRxYdq3Y"></iframe></p>'
                + 'パリにある歌劇場。17世紀から多くの作品を公演した。しかし後継の親族らの経営は低迷し、赤字は積もった。革命期には、迎合的な作品も上演された。経営者が次々と代わり、ナポレオン政府の経済的措置でようやく救われた。実はガルニエ宮が完成したのは19世紀末。革命の1世紀後のことです。現在のオペラ座はさらに新しく、20世紀末に完成したオペラ・バスティーユです。観光に行くときはご注意を。'
        },
        '仮面舞踏会': {
            type: '時代',
            img: {
                filename: '20160328/20160328125651.jpg',
                orientation: 'l'
            },
            content: 'ルネサンス期のイタリアの、参加者が仮装して出席する公的な祭典が発祥。ゲームとして開催されることもあった。仮面をした客たちは正体が誰か分からないような服装をし、互いの正体を当てあうゲームを行った。「風紀が乱れる」と、禁止されることもあったそうです。どんなことをしていたんだろう・・・少年の僕にはわからないなあ。'
        },
        'パレ・ロワイヤル': {
            type: '場所',
            img: {
                filename: '20160328/20160328115556.jpg',
                portrait: 'l'
            },
            content: '<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sja!2sjp!4v1459487609649!6m8!1m7!1sa37NF5mxyuTWHIA3VTUgow!2m2!1d48.86278015564088!2d2.337007608338476!3f20.846674658759838!4f11.022677808318875!5f0.7820865974627469" frameborder="0" style="border:0" allowfullscreen></iframe></p>'
                + '<p><iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kZM0bOW34Q-w"></iframe></p>'
                + '<p><a href="https://www.google.co.jp/maps/place/Le+Palais+Royal/@48.8642472,2.337425,3a,75y,4.33h,75t/data=!3m8!1e1!3m6!1s-hqCwgntaMJY%2FVt6kXepn-MI%2FAAAAAAAAAW8%2Fo08pf9VIACoKTtkaxKkW2olpO3vufn3Sw!2e4!3e11!6s%2F%2Flh6.googleusercontent.com%2F-hqCwgntaMJY%2FVt6kXepn-MI%2FAAAAAAAAAW8%2Fo08pf9VIACoKTtkaxKkW2olpO3vufn3Sw%2Fw203-h101-n-k-no%2F!7i8000!8i4000!4m2!3m1!1s0x47e66e1fd8767d47:0xcdcb526c397f16f5!6m1!1e1">'
                + imgSmall('20160401/20160401141640.png', 'l', '庭園（クリックするとストリートビューになります）')
                + '</a></p><br clear="left" />'
                + '<a href="https://www.google.co.jp/maps/@48.8660167,2.3383833,3a,75y,46.85h,82.48t/data=!3m8!1e1!3m6!1s-hgQgQY_p7tA%2FVfA-g6DIWBI%2FAAAAAAAAoiQ%2F8meU1TS6Tak!2e4!3e11!6s%2F%2Flh6.googleusercontent.com%2F-hgQgQY_p7tA%2FVfA-g6DIWBI%2FAAAAAAAAoiQ%2F8meU1TS6Tak%2Fw203-h101-n-k-no%2F!7i6000!8i3000!6m1!1e1>'
                + imgSmall('20160401/20160401140223.png', 'l', '内部（クリックするとストリートビューになります）')
                + '</a><br clear="left" />'
                + '<p>'
                + 'ルイ14世がルーヴル宮殿から移り住んだことで、パレ・ロワイヤル（王宮）と呼ばれるようになった。庶民は庭園で散歩を楽しむことができた。'
                + '</p>'
        },
        '近衛隊': {
            type: '時代',
            img: {
                filename: '20160330/20160330174323.jpg',
                orientation: 'l',
                caption: 'イギリスの近衛兵'
            },
            content: '<br clear="left" />'
                + imgSmall('20070616/20070616111017.jpg', 'l')
                + '国王の身辺警護をする軍隊の一部のエリート部隊。特に体制寄りで保守的な隊員で固められているでしょうから、その隊長であるオスカルが来たことが意外だったのでしょう。'
        },
        '連隊': {
            type: '時代',
            img: {
                filename: '20160330/20160330174858.jpg',
                orientation: 'p',
                caption: '連隊はそれぞれ独自の旗を持って戦った'
            },
            content: '二千人程度で編成され、地域や貴族指揮官の名称が付けられた。採用や給与、兵站等あらゆる手続きが連隊内で完結していた。連隊の指導者である大佐の上は国王だけだった。このためマリー・アントワネットは王権を使って各地の連隊を革命直前のパリ警戒に召集することができた。'
        },
        'ラテン語': {
            type: '時代',
            img: {
                filename: '20160330/20160330175018.jpg',
                orientation: 'l',
                caption: '「誤るのが人間である」（古代ローマ）'
            },
            content: '近代においても広く欧州知識人の公用語として用いられた。古い著作の中にはラテン語で記されたものもあり、たとえば自然科学ではニュートンのプリンキピアがある。欧州諸国では第二次大戦まではラテン語が必修だったが、現在では日本での「古典」「古文」ないし「漢文」に相当する科目として存在する程度である。理系の私は「漢文」がとても苦手でした。しかし中国文化圏では漢字で筆談ができるのと同じように、西欧文化圏ではラテン語が（お互いに教育水準が高ければ）通じるんでしょうね。'
        },
        '早馬車': {
            type: '時代',
            content: '早馬車という言葉は事例がありません。当時は「<button>駅馬車</button>」という交通システムが発達していましたので、それに似たものと思われます。'
        },
        '駅馬車': {
            type: '時代',
            img: {
                filename: '20160330/20160330175142.jpg',
                orientation: 'l',
                caption: 'スイスの駅馬車'
            },
            content: '駅馬車は通常、4頭立ての馬に牽引された、旅客や貨物を輸送する屋根つき馬車である。駅馬車の車体は革ひもで支えられており、衝撃を吸収した。街道には一定の間隔で駅が設置された。次の駅では休養の十分な馬の組が待機しており、馬をつなぎかえるだけの短い停車時間で旅行を続けられるようになっていた。'
        },
        '王家の馬車だった': {
            type: '台詞',
            img: {
                filename: '20160330/20160330175357.png',
                orientation: 'l',
                caption: 'フランス王家などが紋章として用いたアヤメの意匠'
            },
            content: 'オスカルは、すれ違った馬車にアヤメの紋章が意匠されていることに気づき、フランス王家の馬車だと判断したのでしょう。'
        },
        'ベルナール': {
            type: '人物',
            img: {
                filename: '20160330/20160330175853.jpg',
                orientation: 'p',
                caption: 'カミーユ・デムーランの肖像'
            },
            content: 'ベルナール・シャトレ。架空の人物だが、弁護士でジャーナリストのカミーユ・デムーランという人がモデル。ルイ・ル・グラン学校では<button>ロベスピエール</button>と机を並べて学んだ。'
        }
    };
    var keyword;
    function imgSmall2(obj) {
        if (obj == null) {
            return '';
        }
        else {
            var oHtml;
            if (obj.orientation === 'p') {
                oHtml = '" height="200px"';
            }
            else {
                oHtml = '" width="200px"';
            }
            var capHtml;
            if (obj.caption == null) {
                capHtml = '';
            }
            else {
                capHtml = '<p><em>' + obj.caption + '</em></p>';
            }
            ;
            var imgHtml = '<p><img style="margin-right: 10px; margin-bottom: 10px" src="http://cdn-ak.f.st-hatena.com/images/fotolife/w/weed_7777/'
                + obj.filename + oHtml + ' align="left"></p>' + capHtml;
            return imgHtml;
        }
    }
    function contentHtml(keyword) {
        var imgHtml = imgSmall2(keyword.img);
        var cntHtml = imgHtml + keyword.content;
        var btnedHtml = cntHtml.replace(/<button>/g, '<button class="button button-rounded button-primary">');
        return btnedHtml;
    }
    $(function () {
        for (keyword in dic) {
            $('button:contains(' + keyword + ')')
                .attr({
                'data-title': '【' + dic[keyword].type + '】' + keyword,
                'data-content': contentHtml(dic[keyword]),
                // imgSmall2(dic[keyword].img) + dic[keyword].content.replace(
                //     /<button>/g,
                //     '<button class="button button-rounded button-primary">'),
                // 'data-content': dic[keyword].content.replace(
                //     /<button>/g,
                //     '<button class="button button-rounded button-primary">'),
                'data-width': 400,
                'data-multi': true,
                'class': 'button button-rounded button-primary'
            })
                .webuiPopover();
        }
        // function buttonize() {
        //     var d = new $.Deferred;
        //     setTimeout(function(){
        //         for (keyword in dic) {
        //             $('button:contains('+ keyword + ')')
        //             .attr({
        //                 'data-title': '【' + dic[keyword].type + '】' + keyword, 
        //                 'data-content': dic[keyword].content,
        //                 'data-width': 400
        //             })
        //             .webuiPopover()
        //         }
        //     }, 1000);
        //     d.resolve();
        //     return d.promise();
        // };
        // buttonize()
        // .then(function(){
        //     console.log('just buttonized');
        // })
    });
    $(document).on('click', 'button', (function (evt) {
        for (keyword in dic) {
            if ($(this).text() === keyword) {
                $(this)
                    .attr({
                    'class': 'button button-rounded button-primary'
                })
                    .webuiPopover({
                    title: '【' + dic[keyword].type + '】' + keyword,
                    content: contentHtml(dic[keyword]),
                    // imgSmall2(dic[keyword].img) + dic[keyword].content.replace(
                    //     /<button>/g),
                    trigger: 'manual',
                    width: 400,
                    multi: true
                })
                    .webuiPopover('show')
                    .parent().html('hoge');
            }
        }
    }));
})(jQuery);
//# sourceMappingURL=160411-beru-buttonized.js.map


</script>
### この記事の見方

キーワードを視覚的に区別しています。
また、それぞれのキーワードを押すと以下のように説明が表示されます。

- <button>ここを押してみて下さい</button> ←押してみて下さい
- **<button>重要語句</button>**
- <button>深掘り語句</button>
- _<button>余談</button>_

また、以下のような地図は「アントワネット」が「緑」の地点から「赤」の地点に移動した、ということです。そして、地図の中の緑・赤の地点をクリックすると以下のように地名と解説が表示されます。

[f:id:weed_7777:20160411165851g:plain]

またパリ市内の場所は、位置関係がわかりやすいように、ノートルダム寺院からの経路を表示しています。

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kQkyzRxYdq3Y" width="320" height="240"></iframe>

地図と画像で解説するわけです。準備はいいですか？では始めますよ。

### 5巻

#### 登場人物紹介

>マリー・アントワネット  
>「オーストリア・**<button>ハプスブルク家</button>**の皇女。14歳でフランスの<button>ブルボン家</button>に嫁ぐ。」

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kTvDi1PoG2I0" width="320" height="240"></iframe>

>フェルゼン  
>「_<button>オペラ座</button>_（ガルニエ宮）の_<button>仮面舞踏会</button>_でマリー・アントワネットと出会う」

#### 本編

オスカルは<button>オルレアン公</button>の宮殿に訪問することを願い出ます。

>召使い  
>「
><button>オルレアン公</button>はオスカル様の_<button>パレ・ロワイヤル</button>_ご訪問を歓迎する、と。」

オスカルは<button>オルレアン公</button>の宮殿に行き、その活気に驚きます。

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kLeT4-TkoEo4" width="320" height="240"></iframe>

>オスカル  
>「なるほど・・・さすがは**<button>自由主義</button>**をもって聞こえる<button>オルレアン公</button>。**<button>第三身分</button>**の男たちがこうも出入りしているとは・・・」
>
><button>オルレアン公</button>  
>「_<button>近衛隊</button>_の_<button>連隊</button>_の隊長のきみが私の城を訪ねてくれるとは思わなかったよ」
>
>オルレアン派の貴族  
>「君の_<button>ラテン語</button>_は大変なものだ」  
>「古典もいいが、よかったらジャン・ジャック・**<button>ルソー</button>**を読んでみたまえ」  
>「<button>人間不平等起源論</button>をしらないかい？」  
>
>オスカル  
>「**<button>ルソー</button>**？」

オスカルはロザリーを救出し、自分の邸に戻ります。

>すれ違った馬車を見て  
>「<button>早馬車</button>！<button>王家の馬車だった</button>」
>
>捕らえた黒い騎士にオスカル  
>「<button>ベルナール</button>・シャトレとかいったな。<button>ロベスピエール</button>もお前たち盗人の仲間だったのか？」

**作業ここまで**