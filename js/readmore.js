
$('#readMore').click(function(e){
		
    e.preventDefault();

    $('.read').toggleClass('read-more');
    if($(this).text()=='Xem thêm') 

	$(this).text(''); 
    else  $(this).text('Xem thêm'); 
});