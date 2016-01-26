<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="profile" href="http://gmpg.org/xfn/11">
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">        
        <?php wp_head(); ?>
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body <?php body_class(); ?>>
        <header>
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-header">
                        <h1 class="navbar-brand">
                            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Deliver</a>
                        </h1>
                        <div class="social">
                            <a href="#"><span class="fa fa-twitter"></span></a>
                            <a href="#"><span class="fa fa-facebook"></span></a>
                            <a href="#"><span class="fa fa-rss"></span></a>
                        </div>
                    </div><!-- navbar-header -->
                    <form id="navbar-search">
                        <input type="text" class="form-control" placeholder="Type Your Search Request and Press Enter">
                    </form>                    
                    <div class="toggle-buttons clearfix">
                        <button id="toggle-search" type="button" class="search navbar-toggle">
                            <span class="fa fa-search"></span>
                        </button>
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
                            <span class="fa fa-bars"></span>
                        </button>                            
                    </div><!-- toggle-buttons -->
                    <?php wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'fallback_cb' => false,
                        'container' => false,
                        'menu_id' => 'main-nav',
                        'menu_class' => 'nav navbar-nav collapse navbar-collapse',
                        'depth' => 1
                    )); ?>                 
                </div><!-- container -->
            </nav>