<?php /* Template Name: About Us */ ?>
<?php get_header(); ?>
            <div class="page-title">
                <div class="container">
                    <h1>
                        <?php the_title(); ?>
                    </h1>    
                </div>   
            </div>
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
        <section class="main">
            <div class="container">
                <div class="row">
                    <div class="item col-md-4">
                        <h3>Mission Statement</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero iure est a, quas, tempora ad recusandae aperiam reprehenderit provident perferendis, mollitia cum non saepe doloremque odio nam quaerat accusantium ullam!</p>
                    </div>
                    <div class="item col-md-4">
                        <h3>Core Values</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero iure est a, quas, tempora ad recusandae aperiam reprehenderit provident perferendis, mollitia cum non saepe doloremque odio nam quaerat accusantium ullam!</p>
                    </div>
                    <div class="item col-md-4">
                        <h3>Wy Choose Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero iure est a, quas, tempora ad recusandae aperiam reprehenderit provident perferendis, mollitia cum non saepe doloremque odio nam quaerat accusantium ullam!</p>
                    </div>                    
                </div><!-- row -->
            </div><!-- container -->
        </section>
        <section id="our-team">
            <div class="container">
                <h1>Meet Our Team</h1>
                <p class="note">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ea, temporibus cupiditate iure aliquam voluptatum assumenda vel quisquam quasi pariatur laboriosam unde illo, officiis suscipit accusamus vitae eligendi magni dolores?</p>
                <div class="row">
                    <?php $staff = new WP_query( array( 'post_type' => 'staff' ) ); ?>
                    <?php if ( $staff->have_posts() ) : while ( $staff->have_posts() ) : $staff->the_post(); ?>
                        <div class="item col-sm-6 col-md-3">
                            <a href="<?php the_permalink(); ?>" class="staff-pic" alt="Find more about <?php the_title(); ?>">
                                <?php if (has_post_thumbnail()) {
                                        the_post_thumbnail();
                                    } else {
                                        echo '<img src="' . get_template_directory_uri() . '/images/no-staff-pic.gif" alt="No Photo">'; 
                                    }
                                ?>
                            </a>
                            <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                            <p class="role"><?php echo get_post_meta( $post->ID, 'role', true ); ?></p>
                            <div class="hr"></div>
                            <p class="info"><?php echo get_the_excerpt(); ?></p>
                            <a href="<?php echo get_post_meta( $post->ID, 'twitter-link', true ); ?>" class="social">
                                <span class="fa fa-twitter"></span>
                            </a>                        
                            <a href="<?php echo get_post_meta( $post->ID, 'facebook-link', true ); ?>" class="social">
                                <span class="fa fa-facebook"></span>
                            </a> 
                            <a href="<?php echo get_post_meta( $post->ID, 'rss-feed', true ); ?>" class="social">
                                <span class="fa fa-rss"></span>
                            </a>
                        </div><!-- item -->
                    <?php endwhile; ?>
                    <?php endif; ?>
                    <?php wp_reset_postdata(); ?>                    
                </div><!-- row -->
            </div><!-- container -->
        </section>
        <section>
            <div class="container">
                <h1>If You Like What You See, Join Us!</h1>
                <p class="note">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nam odio quibusdam nisi quis reprehenderit quidem. Voluptatum at explicabo, recusandae perspiciatis incidunt aliquid, autem eaque dicta mollitia necessitatibus, repellat id.</p>
                <a href="#" class="action">Purchase</a>                
            </div><!-- container -->
        </section>
<?php get_footer(); ?>