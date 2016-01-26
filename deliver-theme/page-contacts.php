<?php /* Template Name: Contacts */ ?>
<?php get_header(); ?>
        <?php while ( have_posts() ) : the_post(); ?>
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
                <h1>We Would Like To Hear From You!</h1>
                <p class="note">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, suscipit adipisci possimus nostrum eius iure cum, ullam necessitatibus voluptatibus aliquid, in! Esse sunt fugit illum, error odit dicta, iure in.</p>
            </div><!-- container -->
        </section>
        <div class="container">
            <div class="hr"></div>
        </div>
        <section class="main">
            <div class="container">
                <div class="row">
                    <div class="content col-md-8">
                        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                            <?php the_content(); ?>
                        </article>                        
                    </div>
        <?php endwhile; ?>
                    <aside class="col-md-4">
                        <?php dynamic_sidebar('contacts'); ?>
                    </aside>
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- main -->
        <div class="container">
            <div class="hr"></div>
        </div>
        <section>
            <div class="container">
                <h1>Do You Need A Theme?</h1>
                <p class="note">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nam odio quibusdam nisi quis reprehenderit quidem. Voluptatum at explicabo, recusandae perspiciatis incidunt aliquid, autem eaque dicta mollitia necessitatibus, repellat id.</p>
                <a href="#" class="action">Purchase</a>                
            </div><!-- container -->
        </section>
<?php get_footer(); ?>