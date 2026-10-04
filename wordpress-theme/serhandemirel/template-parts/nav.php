<?php
/**
 * Fullscreen mobile menu and floating glass navbar.
 *
 * @package serhandemirel
 */

?>
<!-- Fullscreen Premium Mobile Menu -->
<div id="mobile-fullscreen-menu" class="fixed inset-0 z-[100] bg-[#0a0a0a]/95 backdrop-blur-3xl opacity-0 pointer-events-none transition-all duration-500 flex flex-col justify-center items-center">
    <div id="mobile-menu-content" class="flex flex-col gap-10 text-center scale-90 translate-y-8 opacity-0 transition-all duration-500 delay-100 w-full px-6">
        <?php if ( sd_opt( 'show_expertise' ) ) : ?>
        <a href="<?php echo esc_url( sd_anchor( '#expertise' ) ); ?>" class="mobile-link text-5xl font-black text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-4">
            <span class="text-4xl">⚡️</span> Expertise
        </a>
        <?php endif; ?>
        <?php if ( sd_opt( 'show_brands' ) ) : ?>
        <a href="<?php echo esc_url( sd_anchor( '#brands' ) ); ?>" class="mobile-link text-5xl font-black text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-4">
            <span class="text-4xl">🏆</span> Brands
        </a>
        <?php endif; ?>
        <!-- <a href="#portfolio" class="mobile-link text-5xl font-black text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-4"><span class="text-4xl">💼</span> Work</a> -->
        <!-- <a href="#insights" class="mobile-link text-5xl font-black text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-4"><span class="text-4xl">📝</span> Insights</a> -->
        <a href="<?php echo esc_url( sd_anchor( '#contact' ) ); ?>" class="mobile-link mt-8 py-5 w-full rounded-full bg-white text-black text-2xl font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-3">
            <span class="text-3xl">👋</span> Let's Talk
        </a>
    </div>
</div>

<!-- Floating Glass Navbar -->
<nav id="main-nav" class="fixed top-6 left-1/2 -translate-x-1/2 z-[110] w-[90%] max-w-4xl rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 flex justify-between items-center transition-all duration-300">
    <a href="<?php echo esc_url( sd_anchor( '#' ) ); ?>" class="text-xl font-extrabold tracking-tighter cursor-pointer text-white relative z-20">SD.</a>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <?php if ( sd_opt( 'show_expertise' ) ) : ?>
        <a href="<?php echo esc_url( sd_anchor( '#expertise' ) ); ?>" class="hover:text-white transition-colors">Expertise</a>
        <?php endif; ?>
        <?php if ( sd_opt( 'show_brands' ) ) : ?>
        <a href="<?php echo esc_url( sd_anchor( '#brands' ) ); ?>" class="hover:text-white transition-colors">Brands</a>
        <?php endif; ?>
        <!-- <a href="#portfolio" class="hover:text-white transition-colors">Work</a> -->
        <!-- <a href="#insights" class="hover:text-white transition-colors">Insights</a> -->
        <a href="<?php echo esc_url( sd_anchor( '#contact' ) ); ?>" class="px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Contact</a>
    </div>

    <!-- Mobile Menu Trigger -->
    <button id="mobile-menu-btn" class="md:hidden text-white focus:outline-none relative w-8 h-8 z-[120] flex items-center justify-center bg-transparent">
        <!-- Hamburger Icon -->
        <svg id="icon-menu" class="w-6 h-6 absolute transition-all duration-300 transform rotate-0 opacity-100 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        <!-- Close Icon -->
        <svg id="icon-close" class="w-6 h-6 absolute transition-all duration-300 transform -rotate-90 opacity-0 scale-50 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
</nav>
