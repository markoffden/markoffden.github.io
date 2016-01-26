<?php /* Template Name: Archive */ ?>
<?php get_header(); ?>
            <div class="page-title">
                <div class="container">
                    <h1>
                        <?php the_title(); ?>
                    </h1>    
                </div>   
            </div>
        </header>
        <section class="main">
            <div class="container">
                <div class="row">
                    <div class="content col-md-8">
                        <article>
                            <?php $query = new WP_query(array('posts_per_page' => 20)); ?>
                            <?php if ( $query->have_posts() ) : ?>
                                <?php if ( $query->post_count < 20) : ?>
                            <h3><?php printf( __( 'Recent <span class="digits-font-fix">%d</span> posts', 'deliver' ), $query->post_count ); ?></h3><ul>
                                <?php else : ?>
                            <h3><?php printf( __( 'Recent <span class="digits-font-fix">20</span> posts', 'deliver' ), $query->post_count ); ?></h3><ul>
                                <?php endif; ?>
                                <?php while ( $query->have_posts() ) : $query->the_post(); ?>
                                    <li><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></li>
                                <?php endwhile; ?>
                                </ul>
                                <h3><?php _e('Archives By Month', 'deliver'); ?></h3>
                                <ul>
                                    <?php wp_get_archives( array('show_post_count' => true) ); ?>
                                </ul>
                                <h3><?php _e('Archives By Category', 'deliver'); ?></h3>
                                <ul>
                                    <?php wp_list_categories( array(
                                        'show_count' => true,
                                        'hierarchical' => false,
                                        'title_li' => '' 
                                    )); ?>
                                </ul>                                        
                            <?php endif; ?>
                            <?php wp_reset_postdata(); ?>
                        </article>                        
                    </div>
                    <aside class="col-md-4">
                        <?php dynamic_sidebar('archive'); ?>
                    </aside>
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- main -->
<?php get_footer(); ?>