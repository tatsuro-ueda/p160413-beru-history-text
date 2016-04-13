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

for line in in_f
	for item in items
		# 見出し
		if  line.match(/<a href=.*>#{item}<\/a>/)
			# puts item
			line.gsub!(/<a href=.*>#{item}<\/a>/,"<button>#{item}</button>")
		end
	end
	puts line
end

in_f.close