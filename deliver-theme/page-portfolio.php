<?php /* Template Name: Portfolio */ ?>
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
                <h1>Nothing But The Best For Our Portfolio</h1>
                <p class="note">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, suscipit adipisci possimus nostrum eius iure cum, ullam necessitatibus voluptatibus aliquid, in! Esse sunt fugit illum, error odit dicta, iure in.</p>
            </div><!-- container -->
        </section>
        <div class="container">
            <div class="hr"></div>
        </div>
        <section class="main portfolio">
            <div class="container">
                <?php
                    $tags = get_terms( 'work-type' );
                    if ( !is_wp_error($tags) ) {
                        $count_tags = count($tags);
                        $i = 0;
                        echo '<div id="portfolio-filter"><a href="#" data-target="all">' . __('All', 'deliver') . '</a> / ';
                        foreach ($tags as $tag) {
                            $i++;
                            if ($i == $count_tags) {
                                echo '<a href="#" data-target="' . $tag->slug . '">' . $tag->name . '</a>';
                            } else {
                                echo '<a href="#" data-target="' . $tag->slug . '">' . $tag->name . '</a> / ';
                            }
                        }
                        echo '</div>';
                    }
                ?>                
            </div>
            <div id="results" class="animated bounceInUp"></div>
        </section><!-- main portfolio -->
        <div class="container">
            <div class="hr"></div>
        </div>        
        <section>
            <div class="container">
                <h1>Do You need A Website?</h1>
                <p class="note">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nam odio quibusdam nisi quis reprehenderit quidem. Voluptatum at explicabo, recusandae perspiciatis incidunt aliquid, autem eaque dicta mollitia necessitatibus, repellat id.</p>
                <a href="#" class="action">Get A Free Quote</a>                
            </div><!-- container -->
        </section>
<?php get_footer(); ?>