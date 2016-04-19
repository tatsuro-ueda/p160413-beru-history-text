var jQuery: any

(function($) {

    function imgSmall(filename, orientation, caption?) {
        var oHtml: string
        if (orientation === false){
            oHtml = '" height="200px"';
        } else {
            oHtml = '" width="200px"';
        };
        var capHtml: string
        if (caption == null){
            capHtml = '';
        } else {
            capHtml = '<p><em>' + caption + '</em></p>';
        };
        var html = '<p><img src="http://cdn-ak.f.st-hatena.com/images/fotolife/w/weed_7777/'
            + filename + oHtml + ' align="left" hspace="10px"></p>' + capHtml;
        return html;
    };

    let IMPORTANT: number = 0;
    let NORMAL:    number = 1;
    let EXTRA:     number = 2;
    let shouldCount: boolean = false;

    var dic = {
        'ここを押してみて下さい':
        {
            level: EXTRA,
            type: '解説',
            content: '<div align="center"><button>スマホ・タブレット</button></div>'
            + 'ですか？'
            + '<h5>続き：</h5>'
            + '<button>吹き出しの消し方</button>',
            placement: 'bottom'
        },
        'スマホ・タブレット':
        {
            level: NORMAL,
            type: '解説',
            content: '吹き出しが画面の外に出るときは<strong>吹き出しを引っ張って</strong>下さい。'
            + '<h5>続き：</h5>'
            + '<button>吹き出しの消し方</button>',
            placement: 'bottom'
        },
        '吹き出しの消し方':
        {
            level: EXTRA,
            type: '解説',
            content: '吹き出しのないところを押して下さい。'
            + '<h5>続き：</h5>'
            + '<button>語句の重要度</button>'
        },
        '語句の重要度':
        {
            level: IMPORTANT,
            type: '解説',
            content:
                '3レベルあります'
                + '<p><button>重要語句</button></p>'
                + '<p><button>深掘り語句</button></p>'
                + '<p><button>余談</button></p>'
                + '<h5>続き：</h5>'
                + '<button>地図の見方</button>',
        },
        '地図の見方':
        {
            level: EXTRA,
            type: '解説',
            content: '<img src="http://cdn-ak.f.st-hatena.com/images/fotolife/w/weed_7777/20160411/20160411165851.gif" />これは「アントワネット」が「緑」の地点から「赤」の地点に移動した、ということです。緑・赤の地点を押すと地名と解説が出ます。'
            + '<h5>続き：</h5>'
            + '<button>地図を押してみよう</button>'
        },
        '地図を押してみよう': {
            level: EXTRA,
            type: '解説',
            content:
            '<p>下の地図（少し時間がかかります）の「赤」の地点を押してみて下さい。</p>'
            + '<p><iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kQkyzRxYdq3Y" width="320" height="240"></iframe></p>'
            + '<p>パリ市内の場所は<strong>ノートルダム寺院からの経路</strong>を表示しています。</p>'
            + '<h5>続き：</h5>'
            + '<p><button>ビューの見方</button></p>'
        },
        'ビューの見方': {
            level: EXTRA,
            type: '解説',
            content:
            '<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sja!2sjp!4v1459148169706!6m8!1m7!1sVfs3uZuxLHWwCPjmt-pXsw!2m2!1d48.87111407616459!2d2.33216326243794!3f343.62178183560997!4f16.939412639927582!5f0.7820865974627469" frameborder="0" style="border:0" allowfullscreen></iframe></p>'
            + '<p>PCでは、上の360°画像をつかみ（ドラッグ、押しっぱなし）動かすと好きな方向に動かすことができます。やってみて下さい。</p>'
            + '<p>スマホ・タブレットでは、動かすことはできません。</p>'
            + '<h5>続き：</h5>'
            + '<p><button>ビュー（インドア）の見方</button></p>'
        },
        'ビュー（インドア）の見方': {
            level: EXTRA,
            type: '解説',
            content:
            '<p><a href="https://www.google.co.jp/maps/place/Le+Palais+Royal/@48.8642472,2.337425,3a,75y,4.33h,75t/data=!3m8!1e1!3m6!1s-hqCwgntaMJY%2FVt6kXepn-MI%2FAAAAAAAAAW8%2Fo08pf9VIACoKTtkaxKkW2olpO3vufn3Sw!2e4!3e11!6s%2F%2Flh6.googleusercontent.com%2F-hqCwgntaMJY%2FVt6kXepn-MI%2FAAAAAAAAAW8%2Fo08pf9VIACoKTtkaxKkW2olpO3vufn3Sw%2Fw203-h101-n-k-no%2F!7i8000!8i4000!4m2!3m1!1s0x47e66e1fd8767d47:0xcdcb526c397f16f5!6m1!1e1">'
            + imgSmall("20160401/20160401141640.png", true, "左の画像をクリックすると別ページの360°ビューになります。PCでは好きな方向に動かすことができます。やってみて下さい。）")
            + '</a></p><br clear="left" />'
            + '<p>スマホ・タブレットでは、動かすことはできません。</p>'
            + '<p>これで説明は終わりです。</p>'
            + '<h5>お疲れさまでした！</h5>'
        },
        '重要語句':
        {
            level: IMPORTANT,
            type: '解説',
            content: '<strong>必ず</strong>理解して下さい。'
        },
        '深掘り語句':
        {
            level: NORMAL,
            type: '解説',
            content: '知っていると世界史の流れが理解しやすいです。'
        },
        '余談':
        {
            level: EXTRA,
            type: '解説',
            content: 'どちらかと言うと世界史よりも『ベルサイユのばら』を理解するための説明です。'
        },
        'オルレアン公':
        {
            level: NORMAL,
            type: '人物',
            img: {
                filename: '20160328/20160328114737.jpg',
                isLandscape: false
            },
            content: 'フランスの王族で国王のいとこにあたり、王国有数の富豪であった。公爵は、その財力をもって王位を狙う野心家で、革命前に最初に国王に逆らい<button>自由主義</button>貴族の代表となった。<button>オルレアン公：詳細</button>',
            wikipedia: 'https://ja.wikipedia.org/wiki/%E3%83%AB%E3%82%A4%E3%83%BB%E3%83%95%E3%82%A3%E3%83%AA%E3%83%83%E3%83%972%E4%B8%96_(%E3%82%AA%E3%83%AB%E3%83%AC%E3%82%A2%E3%83%B3%E5%85%AC)'
        },
        'オルレアン公：詳細':
        {
            level: EXTRA,
            type: '人物',
            img: {
                filename: '20160419/20160419092856.jpg',
                isLandscape: false
            },
            content: 'バスティーユ襲撃事件を誘発し、フランス革命が勃発すると歓迎して「平等公フィリップ」を自称した。なお、私生活は放蕩かつ無節操だった。'
        },
        'ハプスブルク家':
        {
            level: IMPORTANT,
            type: '歴史',
            img: {
                filename: '20160328/20080401153911.jpg',
                isLandscape: true,
                caption: '1547年時点でのハプスブルク家の領土'
            },
            content: 'ヨーロッパ随一の名門王家。政略結婚により大貴族に成長した。20世紀初頭まで中部ヨーロッパで強大な勢力を誇り、様々な国の国王・皇帝の家系となった。'
        },
        '第三身分':
        {
            level: IMPORTANT,
            type: '歴史',
            img: {
                filename: '20160328/20130210221541.jpg',
                isLandscape: false,
                caption: '<button>アンシャン・レジーム</button>を風刺した画'
            },
            content: '3つの身分のうちもっとも低い平民を意味する。'
            + '<ol>'
            + '<li>第一身分：聖職者</li>'
            + '<li>第二身分：貴族</li>'
            + '<li>第三身分：平民</li>'
            + '</ol>'
        },
        'アンシャン・レジーム':
        {
            level: IMPORTANT,
            type: '歴史',
            img: {
                filename: '20160328/20130210221541.jpg',
                isLandscape: false,
                caption: '聖職者と貴族を、平民が背負って歩いている'
            },
            content: '直訳すると「旧（アンシャン）体制（レジーム）」。2％の聖職者＋貴族（免税権も持っていた）を、98％の平民が背負っていた。'
        },
        '自由主義':
        {
            level: NORMAL,
            type:'歴史',
            content: '個人の'
            + '<ul>'
            + '<li>生命</li>'
            + '<li>自由</li>'
            + '<li>財産</li>'
            + '</ul>'
            + 'の3権利は国王であろうとも犯すことはできないもので、以前の神学から社会は決別するべきであるという思想。なお、自由主義・国民主権の前は<button>絶対王政</button>だった。'
        },
        '絶対王政':
        {
            level: IMPORTANT,
            type:'歴史',
            img:{
                filename: '20160328/20120816105356.jpg',
                isLandscape: true,
                caption: '<button>自由主義</button>・国民主権の前は絶対王政だった（エリザベス1世）'
            },
            content: '諸侯や貴族・教会の権力が地方に乱立していた状態から、強大な権力を持って中央集権化を図り、中央官僚と常備軍（<button>近衛隊</button>）によって国家統一を成し遂げた体制のこと'
        },
        'ブルボン家':
        {
            level: NORMAL,
            type: '歴史',
            img: {
                filename: '20160328/20160401134146.jpg',
                isLandscape: false,
                caption: '「太陽王」ルイ14世の肖像画'
            },
            content: '近世フランス王家。<button>メディチ家</button>の家系で、その財力を受け継いだ。「太陽王」ルイ14世は、<button>絶対王政</button>を敷いた。さらに<button>ハプスブルク家</button>と政略結婚し、領土を拡大して最盛期を迎え、フランス文化を発展させた。'
        },
        'メディチ家':
        {
            level: NORMAL,
            type: '歴史',
            content: '銀行家・政治家として台頭しルネサンス文化を育てた。'
        },
        'ルソー':
        {
            level: IMPORTANT,
            type: '人物',
            img: {
                filename: '20160328/20160328125712.jpg',
                isLandscape: false
            },
            content:'ジャン・ジャック・ルソー。'
            + '18世紀フランスで活躍した哲学者、政治哲学者、作曲家。'
            + '「<button>社会契約論（ルソー）</button>」を説いた'
            + '（ホッブも同名の本を書いているので注意）。'
            + 'なお、「ベルサイユのばら」の時点ではすでに亡くなっている。'
        },
        '社会契約論（ルソー）':
        {
            level: IMPORTANT,
            type: '歴史',
            content: '国民主権という契約を国と国民が結ぶのが、不平等をなくす今後の理想社会であるという論'
        },
        '人間不平等起源論':
        {
            level: EXTRA,
            type: '歴史',
            content: imgSmall('20160328/20100709121120.jpg', true)
            + 'ルソーの論文。我流で解釈すると「人が集まる→（貴族と奴隷のような）不平等が生まれる」。'
        },
        'ロベスピエール':
        {
            level: IMPORTANT,
            type: '人物',
            img: {
                filename: '20160328/20160330180206.jpg',
                isLandscape: false
            },
            content: '地方で弁護士をしていたが、1789年三部会の議員に選出されてから革命に身を投じる。'
        },
        'オペラ座':
        {
            level: EXTRA,
            type: '場所',
            img: {
                filename: '20160328/20120926141919.jpg',
                isLandscape: true
            },
            content: '<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sja!2sjp!4v1459148169706!6m8!1m7!1sVfs3uZuxLHWwCPjmt-pXsw!2m2!1d48.87111407616459!2d2.33216326243794!3f343.62178183560997!4f16.939412639927582!5f0.7820865974627469" frameborder="0" style="border:0" allowfullscreen></iframe></p>'
            + '<p><iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kQkyzRxYdq3Y"></iframe></p>'
            + 'パリにある歌劇場。17世紀から多くの作品を公演した。しかし後継の親族らの経営は低迷し、赤字は積もった。革命期には、迎合的な作品も上演された。経営者が次々と代わり、ナポレオン政府の経済的措置でようやく救われた。実はガルニエ宮が完成したのは19世紀末。革命の1世紀後のことです。現在のオペラ座はさらに新しく、20世紀末に完成したオペラ・バスティーユです。観光に行くときはご注意を。'
        },
        '仮面舞踏会':
        {
            level: EXTRA,
            type:'時代',
            img: {
                filename: '20160328/20160328125651.jpg',
                isLandscape: true
            },
            content: 'ルネサンス期のイタリアの、参加者が仮装して出席する公的な祭典が発祥。ゲームとして開催されることもあった。仮面をした客たちは正体が誰か分からないような服装をし、互いの正体を当てあうゲームを行った。「風紀が乱れる」と、禁止されることもあったそうです。どんなことをしていたんだろう・・・少年の僕にはわからないなあ。'
        },
        'パレ・ロワイヤル':
        {
            level: EXTRA,
            type:'場所',
            img: {
                filename: '20160328/20160328115556.jpg',
                portrait: true
            },
            content:
            '<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sja!2sjp!4v1459487609649!6m8!1m7!1sa37NF5mxyuTWHIA3VTUgow!2m2!1d48.86278015564088!2d2.337007608338476!3f20.846674658759838!4f11.022677808318875!5f0.7820865974627469" frameborder="0" style="border:0" allowfullscreen></iframe></p>'
            + '<p><iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kZM0bOW34Q-w"></iframe></p>'
            + 'ルイ14世がルーヴル宮殿から移り住んだことで、パレ・ロワイヤル（王宮）と呼ばれるようになった。庶民は庭園で散歩を楽しむことができた。<button>パレ・ロワイヤル：庭園</button><button>パレ・ロワイヤル：内部</button>'
            + '</p>'
        },
        'パレ・ロワイヤル：庭園':
        {
            level: EXTRA,
            type:'場所',
            content:
            '<a href="https://www.google.co.jp/maps/place/Le+Palais+Royal/@48.8642472,2.337425,3a,75y,4.33h,75t/data=!3m8!1e1!3m6!1s-hqCwgntaMJY%2FVt6kXepn-MI%2FAAAAAAAAAW8%2Fo08pf9VIACoKTtkaxKkW2olpO3vufn3Sw!2e4!3e11!6s%2F%2Flh6.googleusercontent.com%2F-hqCwgntaMJY%2FVt6kXepn-MI%2FAAAAAAAAAW8%2Fo08pf9VIACoKTtkaxKkW2olpO3vufn3Sw%2Fw203-h101-n-k-no%2F!7i8000!8i4000!4m2!3m1!1s0x47e66e1fd8767d47:0xcdcb526c397f16f5!6m1!1e1">'
            + imgSmall('20160401/20160401141640.png', true,
                '庭園（クリックするとストリートビューになります）')
            + '</a></p><br clear="left" />'
        },
        'パレ・ロワイヤル：内部':
        {
            level: EXTRA,
            type:'場所',
            content:
            + '<a href="https://www.google.co.jp/maps/@48.8660167,2.3383833,3a,75y,46.85h,82.48t/data=!3m8!1e1!3m6!1s-hgQgQY_p7tA%2FVfA-g6DIWBI%2FAAAAAAAAoiQ%2F8meU1TS6Tak!2e4!3e11!6s%2F%2Flh6.googleusercontent.com%2F-hgQgQY_p7tA%2FVfA-g6DIWBI%2FAAAAAAAAoiQ%2F8meU1TS6Tak%2Fw203-h101-n-k-no%2F!7i6000!8i3000!6m1!1e1>'
            + imgSmall('20160401/20160401140223.png', true,
                '内部（クリックするとストリートビューになります）')
            + '</a><br clear="left" />'
        },
        '近衛隊':
        {
            level: EXTRA,
            type:'時代',
            img: {
                filename: '20160330/20160330174323.jpg',
                isLandscape: true,
                caption: 'イギリスの近衛兵'
            },
            content:
            '<br clear="left" />'
            + imgSmall('20070616/20070616111017.jpg', true)
            + '国王の身辺警護をする軍隊の一部のエリート部隊。特に体制寄りで保守的な隊員で固められているでしょうから、その隊長であるオスカルが来たことが意外だったのでしょう。'
        },
        '連隊':
        {
            level: EXTRA,
            type:'時代',
            img: {
                filename: '20160330/20160330174858.jpg',
                isLandscape: false,
                caption: '連隊はそれぞれ独自の旗を持って戦った'
            },
            content: '二千人程度で編成され、地域や貴族指揮官の名称が付けられた。採用や給与、兵站等あらゆる手続きが連隊内で完結していた。連隊の指導者である大佐の上は国王だけだった。このためマリー・アントワネットは王権を使って各地の連隊を革命直前のパリ警戒に召集することができた。'
        },
        'ラテン語':
        {
            level: EXTRA,
            type:'時代',
            img: {
                filename: '20160330/20160330175018.jpg',
                isLandscape: true,
                caption: '「誤るのが人間である」（古代ローマ）'
            },
            content:'近代においても広く欧州知識人の公用語として用いられた。古い著作の中にはラテン語で記されたものもあり、たとえば自然科学ではニュートンのプリンキピアがある。欧州諸国では第二次大戦まではラテン語が必修だったが、現在では日本での「古典」「古文」ないし「漢文」に相当する科目として存在する程度である。理系の私は「漢文」がとても苦手でした。しかし中国文化圏では漢字で筆談ができるのと同じように、西欧文化圏ではラテン語が（お互いに教育水準が高ければ）通じるんでしょうね。'
        },
        '早馬車':
        {
            level: EXTRA,
            type:'時代',
            content: '早馬車という言葉は事例がありません。当時は「<button>駅馬車</button>」という交通システムが発達していましたので、それに似たものと思われます。'
        },
        '駅馬車':
        {
            level: EXTRA,
            type:'時代',
            img: {
                filename: '20160330/20160330175142.jpg',
                isLandscape: true,
                caption: 'スイスの駅馬車'
            },
            content:'駅馬車は通常、4頭立ての馬に牽引された、旅客や貨物を輸送する屋根つき馬車である。駅馬車の車体は革ひもで支えられており、衝撃を吸収した。街道には一定の間隔で駅が設置された。次の駅では休養の十分な馬の組が待機しており、馬をつなぎかえるだけの短い停車時間で旅行を続けられるようになっていた。'
        },
        '王家の馬車だった':
        {
            level: EXTRA,
            type:'台詞',
            img: {
                filename: '20160330/20160330175357.png',
                isLandscape: true,
                caption: 'フランス王家などが紋章として用いたアヤメの意匠'
            },
            content:'オスカルは、すれ違った馬車にアヤメの紋章が意匠されていることに気づき、フランス王家の馬車だと判断したのでしょう。'
        },
        'ベルナール':
        {
            level: EXTRA,
            type:'人物',
            img: {
                filename: '20160330/20160330175853.jpg',
                isLandscape: false,
                caption: 'カミーユ・デムーランの肖像'
            },
            content:'ベルナール・シャトレ。架空の人物だが、弁護士でジャーナリストのカミーユ・デムーランという人がモデル。ルイ・ル・グラン学校では<button>ロベスピエール</button>と机を並べて学んだ。'
        },
        '地図：マリー・アントワネットの婚姻':
        {
            level: EXTRA,
            type: '地図',
            content: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kTvDi1PoG2I0"  height="300px"></iframe>'
        },
        'オスカルの移動':
        {
            level: EXTRA,
            type: '地図',
            content: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zxuorCdgTka8.kLeT4-TkoEo4" height="300"></iframe>'
        }
    };

    var keyword: string;

    function imgSmall2(img) {
        if (img == null) {
            return ''
        } else {
            var oHtml: string;
            if (img.isLandscape){
                oHtml = '" width="200px"'
            } else {
                oHtml = '" height="200px"'
            }
            var capHtml: string;
            if (img.caption == null){
                capHtml = '';
            } else {
                capHtml = '<p><em>' + img.caption + '</em></p>';
            };
            var imgHtml = '<p><img style="margin-right: 10px; margin-bottom: 10px" src="http://cdn-ak.f.st-hatena.com/images/fotolife/w/weed_7777/'
                + img.filename + oHtml + ' align="left"></p>' + capHtml;
            return imgHtml;
        }
    }

    function lenExplain(keyword) {
        var htmlExplain: string = dic[keyword].content;
        var textExplain: string = htmlExplain.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
        return textExplain.length
    }

    function contentHtml(keyword) {
        var imgHtml: string = imgSmall2(keyword.img);
        var cntHtml = imgHtml + keyword.content;
        var btnedHtml: string = cntHtml.replace(
            /<button>(\W+)<\/button>/g, (
                matchText,
                backReferences1
                // backReferences2,
                // backReferences3,
                // position,
                // self
            ) => {
                return '<button class="' + btnClass(backReferences1) + '">' + backReferences1 + '</button>';
            });
        return btnedHtml;
    }

    function btnClass(keyword): string {
        switch (dic[keyword].level) {
            case IMPORTANT:
                return 'button button-rounded button-caution';
            case NORMAL:
                return 'button button-rounded button-primary';
            case EXTRA:
                return 'button button-rounded button-highlight';
            default:
                throw new Error("重要度が指定されていません");
        }
    }

    function poOption(keyword) {
        var placement: string;
        if (dic[keyword].placement === 'bottom') {
            placement = 'bottom'
        }
        else
        {
            placement = 'auto'
        }
        var title: string = '【' + dic[keyword].type + '】' + keyword;
        if (shouldCount) {
            title += '（' + lenExplain(keyword) +'文字）'
        }
        var width: number = 400;
        var winWidth: number = window.innerWidth;
        if ( winWidth <= 500) {
            width = winWidth * 0.8
        }
        return {
            title: title,
            content: contentHtml(dic[keyword]),
            width: width,
            multi: true,
            animation: 'pop',
            placement: placement
        }
    }

    // ドキュメントロード直後、以下の処理を行う
    // ボタンに内容を付与する
    $(function() {
        for (keyword in dic) {
            $('button:contains('+ keyword + ')')
                .attr({'class':btnClass(keyword)})
                .webuiPopover(poOption(keyword))
                .webuiPopover()
        }
    });

    // ドキュメントロード後、クリックイベントに対して以下の処理を行う
    // ボタンに内容を付与する
    $(document).on('click', 'button', (function(evt) {
        keyword = $(this).text();
        $(this)
            .webuiPopover(poOption(keyword))
            .webuiPopover({
                trigger: 'manual',
            })
            .webuiPopover('show')
            .parent().html('hoge');  // 子popを描くためのおまじない
    }))
})(jQuery);