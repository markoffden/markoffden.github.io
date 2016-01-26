<?php
/**
 * The template for displaying comments.
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package deliver
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<div id="comments" class="comments-area">

	<?php
	// You can start editing here -- including this comment!
	if ( have_comments() ) : ?>
		<h3 class="comments-title">
			<?php _e('Comments', 'deliver'); ?>
		</h3>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // Are there comments to navigate through? ?>
		<nav id="comment-nav-above" class="navigation comment-navigation" role="navigation">
			<h2 class="screen-reader-text"><?php esc_html_e( 'Comment navigation', 'deliver' ); ?></h2>
			<div class="nav-links">

				<div class="nav-previous"><?php previous_comments_link( esc_html__( 'Older Comments', 'deliver' ) ); ?></div>
				<div class="nav-next"><?php next_comments_link( esc_html__( 'Newer Comments', 'deliver' ) ); ?></div>

			</div><!-- .nav-links -->
		</nav><!-- #comment-nav-above -->
		<?php endif; // Check for comment navigation. ?>
       
        <div class="comment-list">
            <?php
                wp_list_comments( array(
                    'style' => 'div',
                    'avatar_size' => 50,
                    'max_depth' => 3,
                    'callback' => 'deliver_comments_callback'
                ));
            ?>
        </div>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // Are there comments to navigate through? ?>
		<nav id="comment-nav-below" class="navigation comment-navigation" role="navigation">
			<h2 class="screen-reader-text"><?php esc_html_e( 'Comment navigation', 'deliver' ); ?></h2>
			<div class="nav-links">

				<div class="nav-previous"><?php previous_comments_link( esc_html__( 'Older Comments', 'deliver' ) ); ?></div>
				<div class="nav-next"><?php next_comments_link( esc_html__( 'Newer Comments', 'deliver' ) ); ?></div>

			</div><!-- .nav-links -->
		</nav><!-- #comment-nav-below -->
		<?php
		endif; // Check for comment navigation.

	endif; // Check for have_comments().


	// If comments are closed and there are comments, let's leave a little note, shall we?
	if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) : ?>

		<p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'deliver' ); ?></p>
	<?php
	endif;

	comment_form(array(
        'title_reply' => __('Leave a Comment', 'deliver'),
        'fields' => array(

                      'author' =>
                        '<div class="row comment-form comment-form-author"><div class="text col-sm-6"><label for="author">' . __( 'Name', 'deliver' ) . '</label> ' . ( $req ? '<span class="required">*</span>' : '' ) . '<p class="note">' . __('Your full name please', 'deliver') . '</p></div><div class="input col-sm-6"><input id="author" name="author" type="text" value="' . esc_attr( $commenter['comment_author'] ) . '" ' . $aria_req . ' /></div></div>',

                      'email' =>
                        '<div class="row comment-form comment-form-email"><div class="text col-sm-6"><label for="email">' . __( 'Email Address', 'deliver' ) . '</label> ' . ( $req ? '<span class="required">*</span>' : '' ) . '<p class="note">' . __('Used for gravatar', 'deliver') . '</p></div><div class="input col-sm-6"><input id="email" name="email" type="text" value="' . esc_attr(  $commenter['comment_author_email'] ) . '" ' . $aria_req . ' /></div></div>',

                      'url' =>
                        '<div class="row comment-form comment-form-url"><div class="text col-sm-6"><label for="url">' . __( 'Website', 'deliver' ) . '</label>' . '<p class="note">' . __('Link back if you want', 'deliver') . '</p></div><div class="input col-sm-6"><input id="url" name="url" type="text" value="' . esc_attr( $commenter['comment_author_url'] ) . '" /></div></div>'
                    ),
        'comment_field' => '<p class="comment-form-comment"><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea></p>',
        'comment_notes_before' => '',
        'label_submit' => __('Send Message', 'deliver')
    ));
	?>

</div><!-- #comments -->
