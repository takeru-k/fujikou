$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.l-header__nav, .c-hamburger__line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })


});

// toggle
$(function(){
	$('.c-toggle__header').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});

function slideAnime(){
  //====左に動くアニメーションここから===
    $('.leftAnime').each(function(){ 
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        //左から右へ表示するクラスを付与
        //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
        $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
      }else{
        //左から右へ表示するクラスを取り除く
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
        
      }
    });
    
  }// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

  $(document).ready(function() {
  const itemsToShow = 5; // 1回に表示するアイテムの数

  // 最初の5件のアイテムを表示する
  $('.p-attendance__item:lt(' + itemsToShow + ')').addClass('visible');

  // 「もっと見る」ボタンがクリックされた際の処理
  $('#loadMoreBtn').click(function() {
    const visibleItems = $('.p-attendance__item:visible').length;
    $('.p-attendance__item:hidden:lt(' + itemsToShow + ')').addClass('visible');

    // もっと表示すべきアイテムがない場合、ボタンを非表示にする
    if ($('.p-attendance__item:hidden').length === 0) {
      $(this).hide();
    }
  });
});

// 製作事例のスライダー
const mySwiper = new Swiper('.swiper', {
  // Optional parameters

   slidesPerView: 1.2,
   breakpoints: {
    // スライドの表示枚数：500px以上の場合
    500: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  },
  spaceBetween: 16,
  

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});