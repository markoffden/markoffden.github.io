<?php get_header(); ?>
            <div class="page-title">
                <div class="container">
                    <h1>
                        <?php _e('Our Blog', 'deliver'); ?>
                    </h1>    
                </div>   
            </div>
        </header>
        <section class="main">
            <div class="container">
                <div class="row">
                    <div class="content col-md-8">
                        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="thumbnail-wrapper"><?php the_post_thumbnail(); ?></div>
                            <?php endif; ?>
                            <h2><?php the_title(); ?></h2>
                            <div class="meta">
                                <div class="item">
                                    <span class="fa fa-calendar"></span>
                                    <a href="<?php echo get_day_link(get_the_time('Y'), get_the_time('m'), get_the_time('j')); ?>">
                                        <?php the_time('F '); ?>
                                        <span class="digits-font-fix"><?php the_time('j, Y'); ?></span>
                                    </a>
                                </div>
                                <div class="item">
                                    <span class="fa fa-user"></span>
                                    <?php the_author_posts_link(); ?>
                                </div>
                                <?php if (has_tag()) : ?>
                                <div class="item">
                                    <span class="fa fa-tag"></span>
                                    <?php the_tags('', ' / ', ''); ?>
                                </div>
                                <?php endif; ?>
                                <?php if (get_comments_number() > 0) : ?>
                                <div class="item">
                                    <span class="fa fa-comment"></span>
                                    <?php if (get_comments_number() == 1) : ?>
                                    <a class="scroll-to-target" href="#comments"><span class="digits-font-fix">1</span> <?php _e('Comment', 'deliver'); ?></a>
                                    <?php else : ?>
                                        <a class="scroll-to-target" href="#comments">
                                            <span class="digits-font-fix"><?php echo get_comments_number(); ?> </span>
                                            <?php _e('Comments', 'deliver'); ?>
                                        </a>
                                    <?php endif; ?>  
                                </div>
                                <? endif; ?>                         
                            </div><!-- meta -->
                            <?php the_content(); ?>
                        </article>
                        <?php if ( comments_open() || get_comments_number() ) : comments_template(); endif; ?>
                        <?php endwhile; ?>
                        <?php else : ?>
                            <article>
                                <h2><?php _e('There is nothing to show here so far :(', 'deliver'); ?></h2>
                            </article>
                        <?php endif; ?>
                        <?php the_posts_pagination( array(
                            'mid_size' => 10,
                            'prev_text' => '',
                            'next_text' => '',
                            'screen_reader_text' => false
                        ) ); ?>
                    </div><!-- content -->
                    <aside class="col-md-4">
                        <?php dynamic_sidebar('blog'); ?>
                    </aside>
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- main -->
<?php get_footer(); ?>