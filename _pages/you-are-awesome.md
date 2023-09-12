---
layout: page
title: You are Awesome! Thank you!
permalink: /you-are-awesome
comments: false
---

<div class="row justify-content-between">
    <div class="col-md-4 pt-4">
        <div class="text-center">
            <img src="{{site.baseurl}}/assets/images/webp/economies-of-scale.webp" alt="Economies-of-scale graph" class="img-fluid" style="max-height: 200px;"/>
        </div>
    </div>

    <div class="col-md-8 pt-4">
        <p>A large community lowers product cost for you – and everyone.<br>
        Will you please help us by letting your friends know about us?</p>

        <p>Also, here is our <a href="{{site.facebook_group_url}}">"3D Printable DIY Home Robots"</a> Facebook group!</p>

        {% include share-horizontal.html %}

    </div>
</div>

<script id="confetti-trigger">document.addEventListener( 'DOMContentLoaded', function( event ) { document.dispatchEvent( new CustomEvent( 'confetti' ) ); } );
</script>

<script src='{{ site.baseurl }}/assets/js/confetti-core.js' id='confetti-core-js'></script>
<script src='{{ site.baseurl }}/assets/js/confetti.js' id='confetti-js'></script>
<script id="confetti-js-after">
    var wps_confetti_defaults = {};

    document.addEventListener( "confetti", wps_launch_confetti_cannon );

    function wps_launch_confetti_cannon() {
        wps_run_confetti( wps_confetti_defaults );
    }

    var wps_confetti_click_tracker = document.getElementsByClassName( 'wps-confetti' );
    for ( var i = 0; i < wps_confetti_click_tracker.length; i++ ) {
        wps_confetti_click_tracker[ i ].addEventListener( "click", wps_launch_confetti_cannon );
    }		
</script>