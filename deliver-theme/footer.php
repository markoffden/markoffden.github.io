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