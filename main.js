let index = 0
init()
setInterval((e)=>{

	removeActive($('.pot'))
	addActive($('.pot'))
	leftImage($('.slider-box'))
	mainImage($('.slider-box'))
	rightImage($('.slider-box'))

	index += 1

},3000)

$('.pot>span').on('click',(e)=>{
	addActive($(e.currentTarget))
})



function init(){
	$('.slider-box').children().eq(0).addClass('left-img')
	$('.slider-box').children().eq(1).addClass('main-img')
	$('.slider-box').children().eq(2).addClass('right-img')

	$('.pot').children().addClass('silder-bullet')
	$('.pot').children().eq(0).addClass('active')
}
function loopN(index){
	if(index>2){
		index = index%3
	}
	return index
}

function addActive($node){
	$node.children().eq(loopN(index+1)).addClass('active')
}
function removeActive($node){
	$node.children().eq(loopN(index)).removeClass('active')
}
function leftImage($node){
	$node.children().eq(loopN(index)).removeClass('left-img').addClass('right-img')
}
function mainImage($node){
	$node.children().eq(loopN(index+1)).removeClass('main-img').addClass('left-img')
}
function rightImage($node){
	$node.children().eq(loopN(index+2)).removeClass('right-img').addClass('main-img')
}