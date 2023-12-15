     // ヘッダー スクロールで別の見た目に変更
     $(function () {
        $(window).on('load scroll', function () {
            var $header = $('.header');

            // 200以上スクロールしたら処理
            if ($(window).scrollTop() > 200) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });
    });

    // スマホ版 エントリーバー フッターまで来たら削除
    $(function () {
        $(window).on('load scroll', function () {
            var $sticky_menu = $('.sp_under_menu');
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var documentHeight = $(document).height();

            // ウィンドウの下端がドキュメントの下端から710px以内にある場合、処理を実行 (FOOTER の高さ)
            if (windowHeight + scrollTop > documentHeight - 710) {
                $sticky_menu.addClass('off');
            } else {
                $sticky_menu.removeClass('off');
            }
        });
    });

    // スマホ版 インターンリンク･画像 スクロール後に非表示
    $(function () {
        $(window).on('load scroll', function () {
            var $header = $('#internship');

            // 200以上スクロールしたら処理
            if ($(window).scrollTop() > 200) {
                $header.addClass('off');
            } else {
                $header.removeClass('off');
            }
        });
    });


    // 動きのきっかけの起点となるアニメーションの名前を定義
    function BgFadeAnime() {

        // 背景色が伸びて出現（左から右）
        $('.bgLRextendTrigger').each(function () { //bgLRextendTriggerというクラス名が
            var elemPos = $(this).offset().top - 50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
            } else {
                $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
            }
        });

        // 文字列を囲う子要素
        $('.bgappearTrigger').each(function () { //bgappearTriggerというクラス名が
            var elemPos = $(this).offset().top - 50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
            } else {
                $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
            }
        });
    }

    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述

    // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function () {
        BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

    // blurTriggerにblurというクラス名を付ける定義

    function BlurTextAnimeControl() {
        $('.blurTrigger').each(function () { //blurTriggerというクラス名が
            var elemPos = $(this).offset().top - 50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
            } else {
                $(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
            }
        });
    }

    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        BlurTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述

    // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function () {
        BlurTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

    $(function () {
        // メニューのリンクをクリックしたときの処理
        $('.menu-wrapper a').on('click', function () {
            // メニューボタンの状態を取得
            var menuBtn = $('#menu-btn');

            // メニューボタンがチェックされている場合（メニューが開いている場合）
            if (menuBtn.prop('checked')) {
                // メニューボタンのチェックを外す（メニューを閉じる）
                menuBtn.prop('checked', false);
            }
        });
    });


    // jQuery バーガーメニュー開いているときに背景スクロールブロック
    $(function () {
        $(".menu-icon").click(function () {
            $(this).toggleClass("active");
            $(".menu").toggleClass("active");
            $("body").toggleClass("active");
        });
    });

    // モーダルjs
    $(function () {
        $(".md-btn").each(function () {
            $(this).on('click', function (e) {
                e.preventDefault();
                var target = $(this).data('target');
                var modal = document.getElementById(target);
                $(modal).find('.md-overlay,.md-contents').fadeIn();
            });
        });
        $('.md-close').on('click', function () {
            $('.md-overlay,.md-contents').fadeOut();
        });
    });
    
    // モーダルのコンテンツ部分をクリックしたときにモーダルとオーバーレイを閉じる
    $('.md-contents, .md-inner').on('click', function () {
        $('body').removeClass('no-scroll');
        $('.md-contents').hide();
        $('.md-overlay').hide(); // オーバーレイも非表示にする
    });

    // モーダル内のコンテンツのクリックイベントが親要素へ伝播するのを防ぐ
    $('.md-inner').on('click', function (event) {
        event.stopPropagation();
    });

    // モーダルを開くとき
    $('a.md-btn').on('click', function () {
        $('body').addClass('no-scroll');
    });

    // モーダルを閉じるとき
    $('.md-close').on('click', function () {
        $('body').removeClass('no-scroll');
    });
