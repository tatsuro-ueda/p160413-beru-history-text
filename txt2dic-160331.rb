in_f = open(ARGV[0], "r")

items = [
	"フランス革命の流れ",  
	"フランス革命",  
	"ハプスブルク家",  
	"ブルボン家",  
	"オルレアン公",
	"第三身分",  
	"自由主義",  
	"ルソー",  
	"人間不平等起源論",  
	"ベルナール",  
	"ロベスピエール",  
	"オペラ座",  
	"仮面舞踏会",  
	"パレ・ロワイヤル",  
	"近衛隊",  
	"連隊",  
	"ラテン語",  
	"世界が貴族のためだけにあるんじゃない",  
	"早馬車",  
	"王家の馬車だった"
]

top = <<'EOS'
<a href="#top"><img src="http://f.st-hatena.com/images/fotolife/w/weed_7777/20160317/20160317120651.png?1458184146"/></a>
EOS

for line in in_f
	for item in items
		# 見出し
		if  line.match(/### #{item}/)
			# line.gsub!(/#{item}/,"<a name=\"" + item + "\">" + item + "</a>")
			line.gsub!(/#{item}/,"<a name=\"#{item}\">#{item}</a>")
		elsif line.match(/\|歴史\|<a href="#フランス革命の流れ">フランス革命の流れ<\/a>\|/)
			# 何もしない
		elsif line.match(/\|.*\|.*\|/) \
		  	|| line.match(/^>(.*)/) \
		  	|| line.match(/_(.*)_/) \
		  	|| line.match(/(余談編：.*)/)  # 余談編へのリンク
		  	# 文字の大きさは変えない
		  	line.gsub!(/(#{item})/, '<a href="#\1">\1</a>')
		else
		  	# 文字を大きくする
		  	line.gsub!(/(#{item})/, '**<a href="#\1">\1</a>**')
		end
	end

	# 各見出しの前に・・・
	if line.match(/^### <a name="(.*)">.*/)
		unless $1.match(/西洋史|フランス革命/)
			# トップへ戻るリンクを付ける
			line = top + "\n" + line
		end
	end

	puts line
end

puts top

in_f.close