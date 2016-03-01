<?php require __DIR__ . '/../inc/_header.tpl.php'; ?>

<main>

    <?php if ($breadcrumb): ?>
        <?php print $breadcrumb; ?>
    <?php endif; ?>

    <?php print $messages; ?>


    <?php if ($page['highlighted']): ?>
        <?php print render($page['highlighted']); ?>
    <?php endif; ?>

    <?php print render($title_prefix); ?>
    <?php if ($title): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif; ?>
    <?php print render($title_suffix); ?>
    <?php if ($tabs): ?>
        <?php print render($tabs); ?>
    <?php endif; ?>
    <?php print render($page['help']); ?>
    <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
    <?php print render($page['content']); ?>
    <?php print $feed_icons; ?>


    <?php if ($page['sidebar']): ?>
        <?php print render($page['sidebar']); ?>
    <?php endif; ?>


</main>

<?php require __DIR__ . '/../inc/_footer.tpl.php'; ?>
