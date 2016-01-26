<?php get_header(); ?>
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
            <div class="text container">
                <h1>Some Of Our Latest Work</h1>
                <p class="note">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo inventore dicta repudiandae, natus animi doloremque? Facere inventore impedit animi modi molestiae. Nobis ipsum quisquam tempora architecto aut. Et tempora, voluptatibus.</p>
            </div><!-- container -->    
            <div class="portfolio-items">
                <div class="container">
                    <div class="row">
                        <?php $works = new WP_query( array( 'post_type' => 'latest-work', 'posts_per_page' => 3 ) ); ?>
                        <?php if ( $works->have_posts() ) : while ( $works->have_posts() ) : $works->the_post(); ?>
                        <div class="item col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-0">
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
                            <h3><?php the_title(); ?></h3>
                        </div><!-- item -->
                        <?php endwhile; ?>
                        <?php endif; ?>
                        <?php wp_reset_postdata(); ?>                          
                    </div><!-- row -->
                </div><!-- container -->
            </div><!-- portfolio-items -->
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
<?php get_footer(); ?>