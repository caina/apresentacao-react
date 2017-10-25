const NOT_ALLOWED = [
	"vue",
	"vue",
	"angular",
	"piroca",
	"react",
	"vuejs",
	"angularjs",
	"merda",
	".net",
	"c#",
	"java",
	"james",
	"gambeta",
	"gambiarra",
	"tico",
	"caina",
	"douglas",
	"aron",
	"ahron",
	"airon",
	"arom",
	"ahrom",
	"penis",
	"pirocudo",
	"gay",
	"boiola",
	"viado"
]

export default (word = ' ') => {
	return word.split(" ").map(w => NOT_ALLOWED.includes(w.toLowerCase()) ? 'React é lindo <3' : w).join(" ")
}
