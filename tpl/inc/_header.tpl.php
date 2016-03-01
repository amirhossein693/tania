<header>
    <?php if ($logo): ?>
        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
            <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>"/>
        </a>
    <?php endif; ?>

    <?php if ($site_name || $site_slogan): ?>
        <?php if ($site_name): ?>
            <?php if ($title): ?>
                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"
                   rel="home"><span><?php print $site_name; ?></span></a>
            <?php else: /* Use h1 when the content title is empty */ ?>
                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"
                   rel="home"><span><?php print $site_name; ?></span></a>
            <?php endif; ?>
        <?php endif; ?>

        <?php if ($site_slogan): ?>
            <?php print $site_slogan; ?>
        <?php endif; ?>
    <?php endif; ?>

    <?php print render($page['header']); ?>

    <?php print render($page['navigation']); ?>
</header>