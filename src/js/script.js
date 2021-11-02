
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.page-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });

    //ドロワーメニュー
  jQuery('.drawer').on('click', function(e) {
    e.preventDefault();

    jQuery('.drawer').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer-content__background').toggleClass('is-active');

    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });


  //ページ内リンクとスムーススクロール
jQuery('a[href^="#"]').on('click',function() {

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if (id != '#') {
    position = jQuery(id).offset().top - header;
  }
  jQuery('html, body').animate({
    scrollBottom: position
  },
  300);
});

  const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    //最後まで行ったら一枚目に戻る
    loop: true,
    speed:1000,

    autoplay: {
      autoplaySpeed: 3000, // 自動再生のスピード（ミリ秒単位）
      disableOnInteraction: false,
      },

    // If we need pagination(一番下のスライド分のドットの部分)
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

