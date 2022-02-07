<?php 

add_theme_support( 'post-thumbnails' );

add_action( 'wp_enqueue_scripts', 'okna_add_scripts' );
add_action('after_setup_theme', 'regMenu');
add_action('init', 'register_post_types');
function okna_add_scripts() {

	wp_enqueue_style( 'swiper-bundle-min', get_template_directory_uri() . '/css/swiper-bundle.min.css' );

	wp_enqueue_style( 'icon', get_template_directory_uri() . '/css/icon.css' );

	wp_enqueue_style( 'style', get_template_directory_uri() . '/css/style.css' );

	wp_enqueue_style( 'lightboxcss', get_template_directory_uri() . '/css/lightbox.css' );

	wp_enqueue_script( 'swiper-bundle.min', get_template_directory_uri() .'/js/swiper-bundle.min.js', array('jquery'), '1.0', true );

	wp_enqueue_script( 'script', get_template_directory_uri() .'/js/script.js', array('jquery'), '1.0', true );

	wp_enqueue_script( 'lightbox', get_template_directory_uri() .'/js/lightbox.js', array('jquery'), '1.0', true );
}

function regMenu() {
	register_nav_menu('topMenu', 'Меню в шапке');
}

function register_post_types() {
	register_post_type( 'portfolio', [
		'label'  => null,
		'labels' => [
			'name'               => 'Портфолио', // основное название для типа записи
			'singular_name'      => 'Работа', // название для одной записи этого типа
			'add_new'            => 'Добавить работу', // для добавления новой записи
			'add_new_item'       => 'Добавление работы', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование работы', // для редактирования типа записи
			'new_item'           => 'Новая работа в портфолио', // текст новой записи
			'view_item'          => 'Смотреть работу из портфолио', // для просмотра записи этого типа.
			'search_items'       => 'Искать работу в портфолио', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => 'Портфолио', // название меню
		],
		'description'         => 'Тип записей портфолио',
		'public'              => true,
		'publicly_queryable'  => true, // зависит от public
		'exclude_from_search' => true, // зависит от public
		'show_ui'             => true, // зависит от public
		'show_in_nav_menus'   => true, // зависит от public
		'show_in_menu'        => true, // показывать ли в меню адмнки
		'show_in_admin_bar'   => true, // зависит от show_in_menu
		'menu_position'       => 5,
		'menu_icon'           => 'dashicons-open-folder',
		'supports'            => [ 'title', 'editor', 'thumbnail' ] // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
	] );
}