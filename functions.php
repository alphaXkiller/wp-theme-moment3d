<?php

function addVendorStyles() {
  wp_enqueue_style(
    'bundle',
    get_stylesheet_directory_uri() . '/public/bundle.css',
    array('avada-stylesheet', 'fusion-dynamic-css')
  );
}

function addCustomJs() {
  wp_enqueue_script(
    'index', get_stylesheet_directory_uri() . '/public/index.js', array(), '', true
  );
}

add_action('wp_enqueue_scripts', 'addVendorStyles');
add_action('wp_enqueue_scripts', 'addCustomJs');
