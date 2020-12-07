$( function() {
	$.backstretch('https://ftp.bmp.ovh/imgs/2020/12/7fa7a49723a96c6e.jpg');
	var endDate = "June 7, 2021 09:00:00";
	$('.countdown.simple').countdown({ date: endDate });
	$('.countdown.styled').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>天</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>时</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>分</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>秒</span></div>");
	  }
	});
	$('.countdown.callback').countdown({
	  date: +(new Date) + 10000,
	  render: function(data) {
		$(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
	  },
	  onEnd: function() {
		$(this.el).addClass('ended');
	  }
	}).on("click", function() {
	  $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
	});

});
