<?php
/**
 * Plugin Name:       Pf Banner
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            PINKFREAK
 * Author URI:        https://pink-freak.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pf-banner
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function pf_banner_pf_banner_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'pf_banner_pf_banner_block_init' );

function enqueue_dashicons() {
	wp_enqueue_style('dashicons');
}
add_action('wp_enqueue_scripts', 'enqueue_dashicons');

function load_custom_scripts() {
	wp_enqueue_script('hide-banner', plugin_dir_url( __FILE__ ) . '/hide-banner.js', array(), false, true);
}
add_action('wp_enqueue_scripts', 'load_custom_scripts');
