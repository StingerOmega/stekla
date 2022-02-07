<?php get_header(); ?>
<main>
			<section class="breadcrumb container">
		<ul itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a href="/" title="Главная" itemprop="item">
            <span itemprop="name">Главная</span>
            <meta itemprop="position" content="0">
        </a></li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a href="<?php the_permalink();?>" title="Раздел" itemprop="item">
            <span itemprop="name">Портфолио</span>
            <meta itemprop="position" content="1">
        </a></li>
</ul>
</section>				
			<section class="page-portfolio__items container">
				<?php
				global $post;

				$myposts = get_posts([ 
					'numberposts' 	=> 16,
					'post_type'		=> 'portfolio'
				]);

				if( $myposts ){
					foreach( $myposts as $post ){
						setup_postdata( $post );
						?>
						<div class="page-portfolio__item">
							<div class="page-portfolio__thumb">
								<a href="<?php the_permalink() ?>"><?php echo get_the_post_thumbnail(); ?></a>
							</div>
							<h3 class="page-portfolio__title"><a href="<?php the_permalink() ?>"><?php the_title() ?></a></h3>
						</div>
						<?php 
					}
				} else {
					// Постов не найдено
				}

				wp_reset_postdata(); // Сбрасываем $post
				?>
			</section>				
	</main>
<?php get_footer(); ?>