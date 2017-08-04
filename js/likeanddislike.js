	$(document).ready(function(){
		var count =0 ;
		$("#btnLikePic").click(function(){
			
			count = document.getElementById("countPic").innerHTML;
			count = parseInt(count) + 1;
			document.getElementById("countPic").innerHTML = count;
			
		});
		
		$("#btnDisLikePic").click(function(){
			count = document.getElementById("countPic").innerHTML;
			count = parseInt(count) - 1;
			document.getElementById("countPic").innerHTML = count;
		});
		
		$("#btnLikeState").click(function(){
			
			count = document.getElementById("countState").innerHTML;
			count = parseInt(count) + 1;
			document.getElementById("countState").innerHTML = count;
			
		});
		
		$("#btnDisLikeState").click(function(){
			count = document.getElementById("countState").innerHTML;
			count = parseInt(count) - 1;
			document.getElementById("countState").innerHTML = count;
		});
		
		$("#btnLikeBaiViet1").click(function(){
			
			count = document.getElementById("countBaiViet1").innerHTML;
			count = parseInt(count) + 1;
			document.getElementById("countBaiViet1").innerHTML = count;
			
		});
		
		$("#btnDisLikeBaiViet1").click(function(){
			count = document.getElementById("countBaiViet1").innerHTML;
			count = parseInt(count) - 1;
			document.getElementById("countBaiViet1").innerHTML = count;
		});
		
		$("#btnLikeBaiViet2").click(function(){
			
			count = document.getElementById("countBaiViet2").innerHTML;
			count = parseInt(count) + 1;
			document.getElementById("countBaiViet2").innerHTML = count;
			
		});
		
		$("#btnDisLikeBaiViet2").click(function(){
			count = document.getElementById("countBaiViet2").innerHTML;
			count = parseInt(count) - 1;
			document.getElementById("countBaiViet2").innerHTML = count;
		});
		
		$("#btnLikeCauHoi").click(function(){
			
			count = document.getElementById("countCauHoi").innerHTML;
			count = parseInt(count) + 1;
			document.getElementById("countCauHoi").innerHTML = count;
			
		});
		
		$("#btnDisLikeCauHoi").click(function(){
			count = document.getElementById("countCauHoi").innerHTML;
			count = parseInt(count) - 1;
			document.getElementById("countCauHoi").innerHTML = count;
		});
		
		
	});