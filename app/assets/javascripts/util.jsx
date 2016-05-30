// When I add export, it said exports are not defined. I guess it's because I never import from anywhere.
// So this is not a module, and it is just a free floating function?
// refactor

function amountFormat(amount){
	return '$ ' + Number(amount).toLocaleString()
}