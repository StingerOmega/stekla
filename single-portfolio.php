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
        <a href="/main/portfolio/" title="Раздел" itemprop="item">
            <span itemprop="name">Портфолио</span>
            <meta itemprop="position" content="1">
        </a></li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a href="<?php the_permalink();?>" title="Подраздел" itemprop="item">
            <span itemprop="name"><?php the_title();?></span>
            <meta itemprop="position" content="2">
        </a>
    </li>
</ul>
</section>
		<section class="portfolio-post container">
			<h1><?php the_title();?></h1>
			<div class="portfolio-post__content"><?php the_content();?></div>
			<?php $img_gallery = get_field('Gallary');
					if ($img_gallery):?>
			<portfolio-post__gallary>
				<?php foreach($img_gallery as $key => $val): ?>
				<a href="<?php echo $val; ?>" data-lightbox="roadtrip" class="gallarybox">
					<img src="<?php echo $val; ?>" alt="<?php the_title();?> <?php echo $key+1; ?>">
				</a>
			<?php endforeach;?>
			</portfolio-post__gallary>    
			<?php endif; ?>
			<div class="portfolio-post__options"><?php the_field('options');?></div>			
		</section>				
</main>
<?php get_footer(); ?>