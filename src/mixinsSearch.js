export default {
    data() {
        //https://stackoverflow.com/questions/62920847/includes-with-filter-in-vue-js
        //https://stackoverflow.com/questions/64512912/use-of-common-methods-within-other-vue-components
        //https://codesandbox.io/s/easy-vuejs-search-icrkf
        //https://codingpotions.com/vue-mixins
        return {
            search: "",
            textos: [
                {
                    id: 1,
                    titulo: "Perceptible",
                    textoMostrado: 
                    "<h3 id='x1-1-small-screen-size'><bdi class='secno'>1.1 </bdi>Small Screen Size<a class='self-link' aria-label='§' href='#small-screen-size'></a></h3>"+
                    "<p>One of the most common characteristics of mobile devices is the small size of their screens. This limited size places practical constraints on the amount of information that can be effectively perceived by users at any one time, even when high screen resolution might enable large amounts of information to be rendered.   The amount of information that can be displayed is even further limited when magnification is used, for example by people with low vision. See <a href='#zoom'>2.2 Zoom/Magnification</a>.</p>"+
                    "<p>Some best practices for helping users to make the most of small screens include </p>"+
                    "<ul>"+
                    "<li>Consider mobile when initially designing the layout and relevancy of content. </li>"+
                    "<li>Where necessary, adapt the information provided on mobile compared   to desktop/laptop versions with a dedicated mobile version or a   responsive design    "+
                    "<ul>"+
                        "<li>a dedicated mobile version contains content tailored for mobile use. For example, the content may contain fewer content modules, fewer images, or focus on important mobile usage scenarios. </li>"+
                        "<li>a responsive design contains content that stays the same, but CSS   stylesheets are used to render it differently depending on the viewport   width. For example, on narrow screens the navigation menus may be hidden   until the user taps a menu button. </li>"+
                        "</ul>"+
                    "</li>"+
                    "<li>Minimizing the amount of information that is put on each page compared to desktop/laptop versions by providing a dedicated mobile version or a responsive design:    </li>"+
                    "<li>Providing a reasonable default size for content and touch controls. See <a href='#targetSize'>B.2 Touch Target Size and Spacing</a> to minimize the need to zoom in and out for users with low vision. </li>"+
                    "<li> Adapting the length of link text to the viewport width. </li>"+
                    "<li> Positioning form fields below, rather than beside, their labels (in portrait layout) </li>"+
                    "</ul>"
                },
                {
                    id: 2,
                    titulo: "Perceptible",
                    textoMostrado: 
"                    <h3 id='zoom'><bdi class='secno'>1.2<!---0.118139%--> </bdi>Zoom/Magnification<a class='self-link' aria-label='§' href='#zoom'></a></h3>"+
"                    <p>A variety of methods allow users to control content size on mobile devices with small screens. Some of these features are targeted at all users (e.g. browser “pinch zoom” features), while others tend to be made available as 'accessibility features' targeted at people with visual or cognitive disabilities.</p>"+

"                    <p><em>Note on reflow</em>: There are important accessibility differences between zoom/magnification features that horizontally reflow content, especially text, and those that do not. When text content is not reflowed, users must pan back and forth as they read each line.</p>"+

"                    <p>Zoom/Magnification features include the following: </p>"+
"                    <ul>"+
"                    <li>OS-level features"+
"                        <ul>"+
"                        <li> Set default text size (typically controlled from the display settings) <em>Note</em>: System text size is often not supported by mobile browsers. </li>"+
"                        <li> Magnify entire screen (typically controlled from the accessibility settings). <em>Note</em>: Using this setting requires the user to pan vertically and horizontally. </li>"+
"                        <li> Magnifying lens view under user's finger (typically controlled from the accessibility settings) </li>"+
"                        </ul>"+
"                    </li>"+
"                    <li>Browser-level features"+
"                        <ul>"+
"                        <li> Set default text size of text rendered in the browser's viewport</li>"+
"                        <li> Reader modes that render the main content without certain types of extraneous content and at a user-specified text size </li>"+
"                        <li> Magnify browser's viewport (typically 'pinch-zoom'). <em>Note</em>: Using this setting typically requires the user to pan vertically and horizontally, although some browsers have features that re-flow the content at the new magnification level, overriding author attempts to prevent pinch-zoom). </li>"+
"                            </ul>"+
"                        </li>"+
"                        </ul>"+
"                    "+

"                    <p>The WCAG 2.0 success criterion that is most related to zoom/magnification is </p>"+
"                    <div class='successcriteria'> "+
"                    <ul><li><strong>1.4.4 Resize text</strong> (Level AA) </li></ul>"+
"                    </div> "+
"                    <p>SC 1.4.4 requires text to be resizable without assistive technology up to at least 200 percent. To meet this requirement content must not prevent text magnification by the user. </p>"+
"                    <p>Some methods for supporting magnification/zoom include: </p>"+
"                    <ul>"+
"                    <li>Use techniques that support text resizing   without requiring horizontal panning. Relying on full   viewport zooming (e.g. not blocking the browser's pinch zoom feature)   requires the user to pan horizontally as well as vertically.  </li>"+
"                    <li>Ensure that the browser pinch zoom is not blocked by the page's   viewport meta element so that it can be used to zoom the page to at least 200%.   Restrictive values for user-scalable and maximum-scale attributes of   this meta element should be avoided. While this   technique meets the success criteria it is less usable than supporting   text resizing features that reflow content to the user's chosen viewport   size.  </li>"+
"                    <li>Support for OS text size settings. For web content this will depend on browser support.</li>"+
"                    <li>Provide on-page controls to change the text size. </li>"+
"                    </ul>"+
"                    <p>Accessibility features geared toward specific populations of people with   disabilities fall under the definition of assistive technology adopted   by WCAG and thus cannot be relied upon to meet success criterion 1.4.4.    For example, an OS-level zoom feature that magnifies all platform   content and has features to specifically support people with low vision   is likely considered an assistive technology. </p>"
                },
                {
                    id: 3,
                    titulo: "Perceptible",
                    textoMostrado: 
"<h3 id='x1-3-contrast'><bdi class='secno'>1.3<!---0.118139%--> </bdi>Contrast<a class='self-link' aria-label='§' href='#contrast'></a></h3>"+
"<p>Mobile devices are more likely than desktop/laptop devices to be used in   varied environments including outdoors, where glare from the sun or   other strong lighting sources is more likely.  This scenario heightens   the importance of use of good contrast for all users and may compound   the challenges that users with low vision have accessing content with   poor contrast on mobile devices. </p>"+
"<p>The WCAG 2.0 success criteria related to the issue of contrast are: </p>"+
"<div class='successcriteria'>"+
"<ul>"+
"  <li> <strong>1.4.3 Contrast (Minimum)</strong> (Level AA) which requires a contrast of at least 4.5:1 (or 3:1 for large-scale text) and </li>"+
"  <li> <strong>1.4.6 Contrast (Enhanced)</strong> (Level AAA) which requires a contrast of at least 7:1 (or 4.5:1 for large-scale text). </li>"+
"</ul>"+
"</div>"+
"<p>SC 1.4.3. allows for different contrast ratios for large text.    Allowing different contrast ratios for larger text is useful because   larger text with wider character strokes is easier to read at a lower   contrast.  This allows designers more leeway for contrast of larger   text, which is helpful for content such as titles.  The ratio of   18-point text or 14-point bold text described in the SC 1.4.3 was judged   to be large enough to enable a lower contrast ratio for web pages   displayed on a 15-inch monitor at 1024x768 resolution with a 24-inch   viewing distance.  Mobile device content is viewed on smaller screens   and in different conditions so this allowance for lessened contrast on   large text must be considered carefully for mobile apps. </p>"+
"<p>For instance, the default text size for mobile platforms might   be larger than the default text size used on non-mobile devices. When   determining which contrast ratio to follow, developers should strive to   make sure to apply the lessened contrast ratio only when text is roughly   equivalent to 1.2 times bold or 1.5 times (120% bold or 150%) that of   the default platform size.  Note, however, that the use of text that is   1.5 times the default on mobile platforms does not imply that the text   will be readable by a person with low vision. People with low vision   will likely need and use additional platform level accessibility   features and assistive technology such as increased text size and zoom   features to access mobile content. </p>"
                },
                {
                    id: 4,
                    titulo: "Perceptible",
                    textoMostrado: 
"<h3 id='x1-4-non-linear-screen-layouts'><bdi class='secno'>1.4<!---0.118139%--> </bdi>Non-Linear Screen Layouts<a class='self-link' aria-label='§' href='#non-linear-screen-layouts'></a></h3>"+
"<p>With limited screen “real estate” but a variety of gesture options available, mobile developers have experimented with a variety of screen layouts beyond the conventional web paradigm in which the user begins at the “top” and generally works down. Some mobile layouts start the user somewhere in the “middle” and provide highly dynamic visual experiences in which new content may be pulled in from any direction or the user’s point of regard may shift in various directions as previously off-screen content is brought on-screen.</p>"+
"<p>Such user interfaces can be disorienting when the only indicators of the state of the user interface and what is happening in response to user actions are visual.  </p>"+
"<p>The WCAG 2.0 success criterion related to the issue of non-linear layouts is: </p>"+
"<div class='successcriteria'>"+
"<ul>"+
"  <li> <strong>1.3.1 Info and Relationships </strong> (Level A)</li>"+
"  <li><strong>1.3.2 Meaningful Sequence</strong> (Level A)</li>"+
"</ul>"+
"</div>"
                }
            ]
        };
    },
    computed: {
        filteredSearch() {
            return this.textos.filter((text) =>
                text.textoMostrado.toLowerCase().includes(this.search.toLowerCase())

            );
        },
    }
}