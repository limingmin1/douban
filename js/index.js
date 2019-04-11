//头部引入
$('#header').load('header.html')
//请求json数据
$('#arthet-ul').html('');
		   $.ajax({
			   type: "get",
			   url: "json/json.json",
			   data: {},
			   async:"false",
			   dataType: "json",
		   }).done(function(str){
			   var arr=eval(str)
			   $.each(arr,function(i){
				  var lists=arr[1].data.list;
				  $.each(lists,function(j){
					$(`
					   <li>
						  <a href="/" >${lists[j].ziti}</a>
					   </li>
					`).appendTo('#arthet-ul')
				     
				  })
			   })
		   });
		   
		   
//		   下方的加载
		   $('#feed-itenaa').html('');
		   $.ajax({
			   type: "get",
			   url: "json/json.json",
			   data: {},
			   async:"false",
			   dataType: "json",
		   }).done(function(str){
			   var arr=eval(str)
			   $.each(arr,function(i){
				  var lists=arr[1].ersre.list;
				  $.each(lists,function(j){
					$(`
					  <a class="feed-item">
				    	<div class="feed-content">
				    		<div class="photos">
				    			<div class="main">
				    				
				    			</div>
				    			<div class="main-lili">
				    				<div class="main-you"></div>
				    			    <div class="main-you main-you-1">
				    			    </div>
				    			</div>
				    		</div>
				    		<h3 class="ziti-h3">
				    			我在耶村捡破烂 奇遇
				    		</h3>
				    		<p class="ziti-p">
				    			耶路撒冷的物价奇高，通货膨胀一直很厉害，买家具这种事情简直就是奢侈。我也不想浪费钱在这些东西上面，因为最后离开的时候都带不走，但是还得找办法解决储物问题。这几天去装饰商场看看行情，于是就有了我来到这个国家后最神奇的一次经历。 虽然耶村这个宿舍只是我的临时居住点，好奇这里装修市场的我也乐得去考察一番。为什么搞装修再累，还是会劲头十足地去跑呢？甚至连我这样只是为不是家的“家”添置东西也是一头劲儿。大概我是个内心很宅的人，呆在自己的小世界时间那么多，...
				    		</p>
				    	</div>
				    	<div class="athor">
				    		by
				    		<span class="name">
				    			上官飞
				    		</span>
				    	</div>
				    </a>
					`).appendTo('feed-itenaa')
				     
				  })
			   })
		   });