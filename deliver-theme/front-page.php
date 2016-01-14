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
            <div id="header-carousel" class="carousel slide carousel-dynamic-dots" data-ride="carousel">             
                <div class="carousel-inner">
                    <?php $slideshow = new WP_query( array( 'post_type' => 'slide' ) ); ?>
                    <?php if ( $slideshow->have_posts() ) : while ( $slideshow->have_posts() ) : $slideshow->the_post(); ?>                  
                    <div class="item inner-img-to-bg">
                        <?php the_post_thumbnail(); ?>
                        <div class="container">
                            <div class="table">
                                <div class="table-cell">
                                    <h1><?php the_title(); ?></h1>
                                    <p class="note"><?php echo get_the_excerpt(); ?></p>
                                    <a href="<?php the_permalink(); ?>"><?php echo get_post_meta( $post->ID, 'link-text', true ); ?></a>      
                                </div>
                            </div>
                        </div><!-- container -->      
                    </div><!-- item -->
                    <?php endwhile; ?>
                    <?php endif; ?>
                    <?php wp_reset_postdata(); ?>
                </div><!-- carousel-inner -->
                <a class="left carousel-control" href="#header-carousel" role="button" data-slide="prev">
                    <span class="fa fa-chevron-circle-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>                
                <a class="right carousel-control" href="#header-carousel" role="button" data-slide="next">
                    <span class="fa fa-chevron-circle-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>                
            </div><!-- carousel -->
        </header>
        <section>
            <div class="container">
                <h1>We Are Small Team Doing Big Things!</h1>
                <p class="note">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, suscipit adipisci possimus nostrum eius iure cum, ullam necessitatibus voluptatibus aliquid, in! Esse sunt fugit illum, error odit dicta, iure in.</p>
            </div><!-- container -->
        </section>
        <div class="container">
            <div class="hr"></div>
        </div>
        <section id="services">
            <div class="container">
                <div class="row">
                    <?php $services = new WP_query( array( 'post_type' => 'service' ) ); ?>
                    <?php if ( $services->have_posts() ) : while ( $services->have_posts() ) : $services->the_post(); ?>                  
                    <div class="item col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-0">
                        <?php the_post_thumbnail(); ?>
                        <h3><?php the_title(); ?></h3>
                        <?php the_excerpt(); ?>
                        <a href="<?php the_permalink(); ?>" class="read-more">Find Out More</a>
                    </div><!-- item -->
                    <?php endwhile; ?>
                    <?php endif; ?>
                    <?php wp_reset_postdata(); ?>                   
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- services -->
        <section id="latest-work">
            <div class="container">
                <h1>Some Of Our Latest Work</h1>
                <p class="note">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo inventore dicta repudiandae, natus animi doloremque? Facere inventore impedit animi modi molestiae. Nobis ipsum quisquam tempora architecto aut. Et tempora, voluptatibus.</p>
                <div class="row">
                    <?php $works = new WP_query( array( 'post_type' => 'latest-work', 'posts_per_page' => 3 ) ); ?>
                    <?php if ( $works->have_posts() ) : while ( $works->have_posts() ) : $works->the_post(); ?>
                    <div class="item col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-0">
                        <a href="<?php the_permalink(); ?>">
                            <?php the_post_thumbnail(); ?>
                            <span class="overlay">
                                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                <span class="sr-only">More</span>
                            </span>
                        </a>
                        <h3><?php the_title(); ?></h3>
                    </div><!-- item -->                                      
                    <?php endwhile; ?>
                    <?php endif; ?>
                    <?php wp_reset_postdata(); ?>                                      
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- latest-work -->
        <div class="container">
            <div class="hr"></div>
        </div>
        <section>
            <div class="container">
                <h1>Do You Like What You See?</h1>
                <p class="note">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nam odio quibusdam nisi quis reprehenderit quidem. Voluptatum at explicabo, recusandae perspiciatis incidunt aliquid, autem eaque dicta mollitia necessitatibus, repellat id.</p>
                <a href="#" class="action">Purchase</a>                
            </div><!-- container -->
        </section>
        <footer>
            <div class="container">
                <div class="footer-top row">
                    <div class="branding col-md-5">
                        <div class="top clearfix">
                            <h1>Deliver</h1>
                            <div class="social">
                                <a href="#"><span class="fa fa-twitter"></span></a>
                                <a href="#"><span class="fa fa-facebook"></span></a>
                                <a href="#"><span class="fa fa-rss"></span></a>
                            </div>                            
                        </div><!-- top -->
                        <p class="note">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae labore pariatur sint maxime, perspiciatis nulla nostrum ad ex veniam aliquam, sequi officia cum blanditiis explicabo voluptatibus iure! Voluptatum, in quis?</p>
                    </div><!-- branding -->
                    <div class="widgets col-md-7">
                        <div class="row">
                            <?php dynamic_sidebar( 'footer' ); ?>
                        </div><!-- row -->
                    </div><!-- widgets -->
                </div><!-- footer-top -->
                <div class="hr"></div>
                <div class="footer-bottom clearfix">
                    <div class="copyright">
                        2015 &copy; Deliver. All rights reserved    
                    </div>
                    <div class="other-links">
                        <a href="#">About</a> / 
                        <a href="#">Privacy Policy</a> / 
                        <a href="#">Contact</a>
                    </div>
                </div><!-- footer-bottom -->
            </div><!-- container -->
        </footer>
        <?php wp_footer(); ?>
    </body>
</html>