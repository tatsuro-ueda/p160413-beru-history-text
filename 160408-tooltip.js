(function($) {
    $(function() {
        var dic = {
            重要語句:
                {
                    type: 'この記事の読み方',
                    content: '世界史を学習する上で外すことはできません。<strong>必ず</strong>理解して下さい。'
                },
            深掘り語句:
                {
                    type: 'この記事の読み方',
                    content: '知っていると世界史の流れが理解しやすいです。'
                },
            余談:
                {
                    type: 'この記事の読み方',
                    content: 'どちらかと言うと世界史よりも『ベルサイユのばら』を理解するための説明です。'
                },
            オルレアン公: 
                {
                    type: '人物',
                    content: 'フランスの王族で国王のいとこにあたり、王国有数の富豪であった。'
                    + '公爵は、その財力をもって王位を狙う野心家で、革命前に最初に国王に逆らい自由主義貴族の代表となった。'
                    + 'バスティーユ襲撃事件を誘発し、フランス革命勃発すると歓迎して「平等公フィリップ」を自称した。'
                    + 'なお、私生活は放蕩かつ無節操だった。'
                },
            ハプスブルク家: 
                {
                    type: '歴史',
                    content: 'ヨーロッパ随一の名門王家。政略結婚により大貴族に成長した。'
                    + '20世紀初頭まで中部ヨーロッパで強大な勢力を誇り、様々な国の国王・皇帝の家系となった。'
                    + 'また、神聖ローマ帝国の皇帝位を中世以来保持した。最後はビスマルクが排除した。'
                }
            第三身分:
                {
                    type: '歴史',
                    content: '3つの身分のうちもっとも低い平民を意味する。'
                    + '<ol>'
                    + '<li>第一身分：聖職者</li>'
                    + '<li>第二身分：貴族</li>'
                    + '<li>第三身分：平民</li>'
                    + '</ol>'
        };
        var keyword = '';
        // dic.forEach(function(val,index,ar){
        //     keyword = Object.keys(val)[index];

        for (keyword in dic) {
            console.log(keyword);
            console.log(dic[keyword]);
            console.log(dic[keyword].type);

            $('button:contains('+ keyword + ')')
            .attr({
                'data-title': '【' + dic[keyword].type + '】' + keyword, 
                'data-content': dic[keyword].content
            })
            .webuiPopover();
        };
    });
})(jQuery);