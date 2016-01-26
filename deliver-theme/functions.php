<?php
/**
 * deliver functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package deliver
 */

if ( ! function_exists( 'deliver_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function deliver_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on deliver, use a find and replace
	 * to change 'deliver' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'deliver', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'deliver' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See https://developer.wordpress.org/themes/functionality/post-formats/
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'deliver_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif;
add_action( 'after_setup_theme', 'deliver_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function deliver_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'deliver_content_width', 640 );
}
add_action( 'after_setup_theme', 'deliver_content_width', 0 );

/**
 * Filter Read More link text for excerpt
 */
function new_excerpt_more( $more ) {
	return ' <a class="read-more" href="' . get_permalink() . '">' . __('...', 'deliver') . '</a>';
}
add_filter( 'excerpt_more', 'new_excerpt_more' );

/**
 * Register custom post types
 */
function create_post_type() {
    register_post_type( 'slide',
        array(
            'labels' => array(
                'name' => __( 'Slideshow', 'deliver' ),
                'singular_name' => __( 'Slide', 'deliver' )
            ),
            'description' => __( 'Front page header slideshow', 'deliver' ),
            'public' => true,
            'menu_icon' => 'dashicons-images-alt',
            'supports' => array( 'title', 'thumbnail', 'excerpt', 'custom-fields' )
        )
    );
    register_post_type( 'service',
        array(
            'labels' => array(
                'name' => __( 'Services', 'deliver' ),
                'singular_name' => __( 'Service', 'deliver' )
            ),
            'description' => __( 'Front page services section', 'deliver' ),
            'public' => true,
            'menu_icon' => 'dashicons-thumbs-up',
            'supports' => array( 'title', 'thumbnail', 'excerpt' )
        )
    );    
    register_post_type( 'latest-work',
        array(
            'labels' => array(
                'name' => __( 'Latest Works', 'deliver' ),
                'singular_name' => __( 'Latest Work', 'deliver' )
            ),
            'description' => __( 'Front page latest works examples', 'deliver' ),
            'public' => true,
            'menu_icon' => 'dashicons-hammer',
            'supports' => array( 'title', 'excerpt', 'thumbnail' )
        )
    );
    register_post_type( 'staff',
        array(
            'labels' => array(
                'name' => __( 'Staff', 'deliver' ),
                'singular_name' => __( 'Staff', 'deliver' )
            ),
            'description' => __( 'Staff members for About Us page', 'deliver' ),
            'public' => true,
            'menu_icon' => 'dashicons-businessman',
            'supports' => array( 'title', 'editor', 'excerpt', 'thumbnail', 'custom-fields' )
        )
    );        
}
add_action( 'init', 'create_post_type' );

/**
 * Register custom taxonomies
 */

function create_taxonomy() {
    register_taxonomy(
        'work-type',
        'latest-work',
        array (
            'label' => __('Type of Work', 'deliver'),
            'hierarchical' => false
        )
    );
}
add_action( 'init', 'create_taxonomy' );


/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function deliver_widgets_init() {
    register_sidebar( array(
		'name'          => esc_html__( 'Contacts', 'deliver' ),
		'id'            => 'contacts',
		'description'   => __( 'Contacts page sidebar', 'deliver' ),
		'before_widget' => '<div class="widget">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3>',
		'after_title'   => '</h3>',
	) );
    register_sidebar( array(
		'name'          => esc_html__( 'Blog', 'deliver' ),
		'id'            => 'blog',
		'description'   => __( 'Blog page sidebar', 'deliver' ),
		'before_widget' => '<div class="widget">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3>',
		'after_title'   => '</h3>',
	) );        
    register_sidebar( array(
		'name'          => esc_html__( 'Archive', 'deliver' ),
		'id'            => 'archive',
		'description'   => __( 'Archive page sidebar', 'deliver' ),
		'before_widget' => '<div class="widget">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3>',
		'after_title'   => '</h3>',
	) );        
    register_sidebar( array(
		'name'          => esc_html__( 'Footer', 'deliver' ),
		'id'            => 'footer',
		'description'   => __( 'Footer widget area', 'deliver' ),
		'before_widget' => '<div class="widget col-md-4">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3>',
		'after_title'   => '</h3>',
	) );    
}
add_action( 'widgets_init', 'deliver_widgets_init' );

/**
 * Callback function for displaying comments
 */
function deliver_comments_callback( $comment, $args, $depth ) {
    $GLOBALS['comment'] = $comment;
 
    ?>
    <div class="clearfix"></div>
    <div <?php comment_class('clearfix'); ?> id="comment-<?php comment_ID(); ?>">
        
        <div class="author-avatar">
            <?php if ( $args['avatar_size'] != 0 ) echo get_avatar( $comment, $args['avatar_size'] ); ?>
        </div>
        
        <div class="comment-content">
            <div class="comment-header clearfix">
                <?php printf( __( '<h4>%s</h4>' ), get_comment_author_link() ); ?>
                <div class="comment-meta">
                    <?php echo get_comment_date('F j, Y'); ?>
                    <?php comment_reply_link( array_merge( $args, array( 'reply_text' => __( 'Reply', 'deliver' ), 'before' => ' / ', 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
                </div>                
            </div>
            <div class="comment-text"><?php comment_text(); ?></div>
        </div>
                  
    <?php
}

/**
 * Enqueue scripts and styles.
 */
function deliver_scripts() {
    wp_enqueue_style( 'bootstrap-css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' );
    
    wp_enqueue_style( 'font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' );
    
    wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css?family=Pacifico' );
    
    wp_enqueue_style( 'extra-fonts', get_template_directory_uri() . '/fonts/novecentosanswide_demibold/stylesheet.css' );
    
    wp_enqueue_style( 'animate', get_template_directory_uri() . '/css/animate.css' );
    
	wp_enqueue_style( 'deliver-style', get_stylesheet_uri() );
    
    wp_enqueue_script( 'bootstap-js', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', array('jquery'), '3.3.6', true );

	wp_enqueue_script( 'deliver-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20130115', true );
    wp_enqueue_script( 'script', get_template_directory_uri() . '/js/script.js', array('jquery'), '1.0.0', true );
    
    wp_enqueue_script( 'ajax-portfolio', get_template_directory_uri() . '/js/ajax-portfolio.js', array('script'), '1.0.0', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
    
    wp_localize_script( 'ajax-portfolio', 'ajaxportfolio', array(
        'ajaxurl' => admin_url( 'admin-ajax.php' ),
        'portfolioNonce' => wp_create_nonce( 'ajax-portfolio-nonce' )
    ));
}
add_action( 'wp_enqueue_scripts', 'deliver_scripts' );

/*** Ajax portfolio call **/

add_action( 'wp_ajax_nopriv_ajax_portfolio', 'ajax_portfolio' );
add_action( 'wp_ajax_ajax_portfolio', 'ajax_portfolio' );

function ajax_portfolio() {
    $nonce = $_POST['portfolioNonce'];
    if ( !wp_verify_nonce( $nonce, 'ajax-portfolio-nonce' )) : die ('Busted!');  endif;
    
    $target = $_POST['target'];
    if ($target === 'all') {
        $works = new WP_query( array( 'post_type' => 'latest-work' ) );
    } else {
        $works = new WP_query( array(
            'post_type' => 'latest-work',
            'tax_query' => array(
                 array(
                    'taxonomy' => 'work-type',
                    'field'    => 'slug',
                    'terms'    => $target
                    )
                )
        ));
    }
    if ( $works->have_posts() ) : while ( $works->have_posts() ) : $works->the_post(); ?>
        <div class="item col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-0">
            <div class="text">
                <h3><?php the_title(); ?></h3>
                <p class="note"><?php echo get_the_excerpt(); ?></p>
            </div>
            <div class="laptop">
                <div class="screen">
                    <div class="camera-dot"></div>
                    <?php if (has_post_thumbnail()) : the_post_thumbnail(); ?>
                    <?php else : ?>
                        <img src="<?php echo get_template_directory_uri(); ?>/images/portfolio-no-image.png" alt="<?php the_title(); ?>">
                    <?php endif; ?>
                    <div class="overlay">
                        <a href="<?php the_permalink(); ?>">
                            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                            <span class="sr-only">More</span>                                            
                        </a>
                    </div>     
                </div>
                <div class="keyboard">
                    <div class="handle"></div>
                </div>
            </div><!-- laptop -->
        </div><!-- item -->
    <?php endwhile; endif;
    wp_reset_postdata();
                     
    die();
}

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';
