in_f = open(ARGV[0], "r")

for line in in_f
	if    line.match(/### <a href="(.*)">.*<\/a>/)
		print "\n<a href=\"" + $1 + '>' + $1 + '</a>'
	elsif line.match(/<!--b005-p(.*)-->/)
		print $1 + ', '
	elsif line.match(/<!--読み：(.*)-->/)
		print $1 + ', '
	elsif line.match(/［(.*)］/)
		print $1 + ', '
	end
end

in_f.close