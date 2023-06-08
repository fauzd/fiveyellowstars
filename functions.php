<?php

add_action( 'wp_enqueue_scripts', function () {
	  
  wp_enqueue_style( 'normalize', 'https://unpkg.com/normalize.css/normalize.css' );
  wp_enqueue_style( 'preconnect', 'https://fonts.googleapis.com' );
  wp_enqueue_style( 'fonts.gstatic', 'https://fonts.gstatic.com' );
  wp_enqueue_style( 'poppins-font', 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap' );
  wp_enqueue_style( 'space-grotesk-font', 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap' );

  wp_enqueue_style('header-styles', get_template_directory_uri() . '/assets/css/header.css', array(), '1.0.4');//<------------------------------------Версия стилей
  wp_enqueue_style('footer-styles', get_template_directory_uri() . '/assets/css/footer.css', array(), '1.0.4');//<------------------------------------Версия стилей
  wp_enqueue_style('modal-form-styles', get_template_directory_uri() . '/assets/css/modal-form.css', array(), '1.0.5');//<----------------------------Версия стилей
 
  wp_enqueue_script( 'marquee-lib', get_template_directory_uri() . '/assets/js/marquee3k.js', array(), '1.0.0', true );
  wp_enqueue_script( 'mainJS', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.3', true );//<--------------------------------------Версия скрипта
  wp_enqueue_script( 'modal-form-script', get_template_directory_uri() . '/assets/js/modal.js', array(), '1.0.3', true );//<----------------------------------------Версия скрипта

  if (is_page('Mergers & Acquisitions')) {
      wp_enqueue_style('mergersacquisitions', get_template_directory_uri() . '/assets/css/mergersacquisitions.css', array(), '1.0.6');//<-------------Версия стилей
      // wp_enqueue_script('mergersacquisitions', get_template_directory_uri() . '/assets/js/mergersacquisitions.js', array('marquee-lib'), '1.0.0', true);//<------Версия скрипта
  }

  if (is_page('Branding')) {
    wp_enqueue_style('branding', get_template_directory_uri() . '/assets/css/branding.css', array(), '1.0.6');//<-------------------------------------Версия стилей
    wp_enqueue_script('branding', get_template_directory_uri() . '/assets/js/branding.js', array('marquee-lib'), '1.0.1', true);//<---------------------------------Версия скрипта
  }

  if (is_page('Crosspromotion')) {
    wp_enqueue_style('crosspromotion', get_template_directory_uri() . '/assets/css/crosspromotion.css', array(), '1.0.6');//<-------------------------Версия стилей
    wp_enqueue_script('crosspromotion', get_template_directory_uri() . '/assets/js/crosspromotion.js', array('marquee-lib'), '1.0.1', true);//<---------------------Версия скрипта
  }

});

add_theme_support( 'post-thumbnails');
add_theme_support( 'title-tag' );
add_theme_support( 'custom-logo',  );

?>