<?php
/**
 * Core Expertise cards slider.
 *
 * @package serhandemirel
 */

?>
<!-- 3. Core Expertise Section -->
<section id="expertise" class="relative py-24 md:py-32 bg-[#080808] border-t border-white/5 z-10 overflow-hidden">
    <!-- Ambient Glow -->
    <div class="absolute top-[-5%] md:top-[-10%] right-[-20%] md:right-[-10%] w-[350px] md:w-[50vw] h-[350px] md:h-[50vw] rounded-full bg-blue-900/20 md:bg-blue-900/10 blur-[100px] md:blur-[150px] pointer-events-none z-0"></div>

    <div class="relative z-10 w-full">
        <!-- Başlık ve Yönlendirme (Kapsayıcı içinde) -->
        <div class="max-w-7xl mx-auto px-6 lg:px-8 mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
                <h2 class="text-sm font-bold tracking-[0.2em] uppercase text-purple-500 mb-4">Core Expertise</h2>
                <h3 class="text-3xl md:text-5xl font-bold text-white max-w-2xl">Building scalable digital foundations for tomorrow.</h3>
            </div>

            <!-- Modern Navigation Controls -->
            <div class="flex items-center gap-4 relative z-20 self-end md:self-auto">
                <button id="scroll-prev" class="w-12 h-12 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                    <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button id="scroll-next" class="w-12 h-12 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                    <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </div>

        <!-- Horizontal Slider Container -->
        <div class="relative w-full">
            <div id="expertise-slider" style="display:flex; flex-wrap:nowrap; gap:1.5rem; overflow-x:auto; scroll-behavior:smooth; -webkit-overflow-scrolling:touch; padding-bottom:2rem; padding-left:1.5rem; cursor:grab; scrollbar-width:none;">

                <!-- Card 1: Marketing & Growth -->
                <div style="flex:0 0 auto; width:min(82vw,400px);" class="glass p-8 rounded-3xl hover:bg-white/10 transition-colors duration-500 flex flex-col select-none">
                    <div class="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
                    <h4 class="text-2xl font-bold text-white mb-3">Marketing & Growth</h4>
                    <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">Driving measurable growth and expanding reach through data-driven digital marketing strategies.</p>
                    <div class="flex flex-wrap gap-2 mt-auto">
                        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Sales Optimization</span>
                        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Lead Gen</span>
                        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Digital Marketing</span>
                    </div>
                </div>

                <!-- Card 2: Digital Products -->
                <div style="flex:0 0 auto; width:min(82vw,400px);" class="glass p-8 rounded-3xl hover:bg-white/10 transition-colors duration-500 flex flex-col select-none">
                    <div class="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                    <h4 class="text-2xl font-bold text-white mb-3">Digital Products</h4>
                    <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">Architecting and building modern web applications, platforms, and high-converting landing pages.</p>
                    <div class="flex flex-wrap gap-2 mt-auto">
                        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Web Apps</span>
                        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Digital Product</span>
                        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Landing Pages</span>
                    </div>
                </div>

                <!-- Card 3: AI & Automation -->
                <div style="flex:0 0 auto; width:min(82vw,400px);" class="glass p-8 rounded-3xl hover:bg-white/10 transition-colors duration-500 flex flex-col select-none">
                    <div class="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    </div>
                    <h4 class="text-2xl font-bold text-white mb-3">AI & Automation</h4>
                    <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">Streamlining workflows and accelerating business processes using intelligent AI solutions and smart automation.</p>
                    <div class="flex flex-wrap gap-2 mt-auto">
                        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">AI Solutions</span>
                        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Automation</span>
                    </div>
                </div>

                <!-- Card 4: Strategy & Visibility -->
                <div style="flex:0 0 auto; width:min(82vw,400px);" class="glass p-8 rounded-3xl hover:bg-white/10 transition-colors duration-500 flex flex-col select-none">
                    <div class="w-12 h-12 bg-pink-500/20 text-pink-400 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012-2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                    </div>
                    <h4 class="text-2xl font-bold text-white mb-3">Strategy & Visibility</h4>
                    <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">Elevating brand presence through deep competitor analysis and aggressive search engine optimization.</p>
                    <div class="flex flex-wrap gap-2 mt-auto">
                        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">SEO</span>
                        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Competitor Analysis</span>
                    </div>
                </div>

                <!-- Card 5: Transformation & Ed -->
                <div style="flex:0 0 auto; width:min(82vw,400px); margin-right:1.5rem;" class="glass p-8 rounded-3xl hover:bg-white/10 transition-colors duration-500 flex flex-col select-none">
                    <div class="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    </div>
                    <h4 class="text-2xl font-bold text-white mb-3">Transformation & Ed</h4>
                    <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">Guiding companies through digital transformation and providing corporate training for sustainable growth.</p>
                    <div class="flex flex-wrap gap-2 mt-auto">
                        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Digital Transformation</span>
                        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Training & Ed</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
