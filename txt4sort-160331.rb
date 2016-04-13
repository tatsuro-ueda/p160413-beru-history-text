in_f = open(ARGV[0], "r")

for line in in_f
	if    line.match(/### <a name="(.*)\">/)
		item = $1
	elsif line.match(/［(.*)］/)
		cat  = $1
		puts cat + ' :' + item
	end
end

in_f.close