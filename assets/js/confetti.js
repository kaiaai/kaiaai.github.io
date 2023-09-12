async function wps_run_confetti( passed_defaults = {} ) {

	var defaults = {
		style: 'cannon',
		duration: 3,
		speed: 75,
		particleCount: 50,
		angle: 90,
		spread: 45,
		startVelocity: 45,
		decay: .9,
		gravity: 1,
		drift: 0,
		ticks: 200,
		origin: { x: .5, y: .5 },
		scalar: 1,
		zIndex: 9999,
		disableForReducedMotion: 0,
		delay: 0
	};

	// Passed defaults get biggest priority
	if ( passed_defaults ) {
		for ( var key in passed_defaults ) {
			if ( key != 'origin' && passed_defaults[key] ) {
				defaults[key] = passed_defaults[key];
			}
		}
		if ( typeof wps_confetti_defaults.origin !== 'undefined' ) {
			// if ( typeof wps_confetti_defaults.origin.x !== 'undefined' && typeof wps_confetti_defaults.origin.y !== 'undefined' ) {
				defaults["origin"] = { x: wps_confetti_defaults.origin[0], y: wps_confetti_defaults.origin[1] }
			// }
		}
	} else {
		// Merge defaults with any defaults set by PHP functions within page
		if ( typeof wps_confetti_defaults !== 'undefined' ) {
			for ( var key in wps_confetti_defaults ) {
				if ( key != 'origin' && wps_confetti_defaults[key] ) {
					defaults[key] = wps_confetti_defaults[key];
				}
			}
			if ( typeof wps_confetti_defaults.origin !== 'undefined' ) {
				// if ( typeof wps_confetti_defaults.origin.x !== 'undefined' && typeof wps_confetti_defaults.origin.y !== 'undefined' ) {
					defaults["origin"] = { x: wps_confetti_defaults.origin[0], y: wps_confetti_defaults.origin[1] }
				// }
			}
		}
	}

	if ( defaults.delay > 0 ) {
		await wps_confetti_sleep( defaults.delay * 1000 );
	}

	if ( defaults.style == 'cannon' ) {

		confetti( defaults );

	} else if ( defaults.style == 'cannon_real' ) {

		var count = defaults.particleCount;

		function fire(particleRatio, opts) {
			confetti(
				Object.assign(
					{},
					defaults,
					opts,
					{
						particleCount: Math.floor( count * particleRatio )
					}
				)
			);
		}

		fire(
			0.25,
			{
				spread: defaults.spread * .6,
				startVelocity: defaults.startVelocity * 1.2,
			}
		);
		fire(
			0.2,
			{
				spread: defaults.spread * 1.1,
			}
		);
		fire(
			0.35,
			{
				spread: defaults.spread * 2,
				decay: 0.91,
				scalar: defaults.scalar * .8
			}
		);
		fire(
			0.1,
			{
				spread: defaults.spread * 2.9,
				startVelocity: defaults.startVelocity * .6,
				decay: 0.92,
				scalar: defaults.scalar * 1.2
			}
		);
		fire(
			0.1,
			{
				spread: defaults.spread * 2.9,
				startVelocity: defaults.startVelocity,
			}
		);

	} else if ( defaults.style == 'cannon_repeat' ) {

		var duration     = defaults.duration * 1000;
		var animationEnd = Date.now() + duration;
		var speed        = 100 + ( 10 * ( 100 - defaults.speed ) );

		function randomInRange(min, max) {
			return Math.random() * (max - min) + min;
		}

		var interval = setInterval(
			function() {
				var timeLeft = animationEnd - Date.now();

				if (timeLeft <= 0) {
					return clearInterval( interval );
				}

				confetti(
					Object.assign(
						{},
						defaults,
						{
							angle: randomInRange( defaults.angle * .6, defaults.angle * 1.4 ),
							spread: randomInRange( defaults.spread * 1.1, defaults.spread * 1.2 ),
							particleCount: randomInRange( defaults.particleCount * .75, defaults.particleCount * 1.25 ),
						}
					)
				);

			},
			speed
		);

	} else if ( defaults.style == 'fireworks' ) {

		var duration     = defaults.duration * 1000;
		var animationEnd = Date.now() + duration;
		var speed        = 100 + ( 10 * ( 100 - defaults.speed ) );

		function randomInRange(min, max) {
			return Math.random() * (max - min) + min;
		}

		var interval = setInterval(
			function() {
				var timeLeft = animationEnd - Date.now();

				if (timeLeft <= 0) {
					return clearInterval( interval );
				}

				var particleCount = 50 * (timeLeft / duration);
				// since particles fall down, start a bit higher than random
				confetti( Object.assign( {}, defaults, { particleCount, spread: 360, origin: { x: randomInRange( 0.1, 0.3 ), y: Math.random() - 0.2 } } ) );
				confetti( Object.assign( {}, defaults, { particleCount, spread: 360, origin: { x: randomInRange( 0.7, 0.9 ), y: Math.random() - 0.2 } } ) );
			},
			speed
		);

	} else if ( defaults.style == 'falling' ) {

		var duration     = defaults.duration * 1000;
		var animationEnd = Date.now() + duration;
		var skew         = 1;

		function randomInRange(min, max) {
			return Math.random() * (max - min) + min;
		}

		(function frame() {
			var timeLeft = animationEnd - Date.now();
			var ticks    = Math.max( 200, 500 * (timeLeft / duration) );
			skew         = Math.max( 0.8, skew - 0.001 );

			if ( defaults.colors && defaults.colors.length > 0 ) {
				var colors = defaults.colors;
			} else {
				var colors = ["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"];
			}

			confetti(
				Object.assign(
					{},
					defaults,
					{
						particleCount: 1,
						zIndex: 99999,
						startVelocity: 0,
						ticks: ticks,
						origin: {
							x: Math.random(),
							// since particles fall down, skew start toward the top
							y: (Math.random() * skew) - 0.2
						},
						colors: [ wps_confetti_get_random_color( colors ) ],
						gravity: randomInRange( 0.8, 1.4 ),
						scalar: randomInRange( 0.4, 1 ),
						drift: randomInRange( -0.4, 0.4 )
					}
				)
			);

			if (timeLeft > 0) {
				requestAnimationFrame( frame );
			}
		}());

	} else if ( defaults.style == 'school' ) {

		var end = Date.now() + (defaults.duration * 1000);

		if ( defaults.colors && defaults.colors.length > 0 ) {
			var colors = defaults.colors;
		} else {
			var colors = ["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"];
		}

		(function frame() {
			confetti(
				Object.assign(
					{},
					defaults,
					{
						particleCount: 2,
						angle: 60,
						//spread: 55,
						origin: { x: 0 },
						colors: [ wps_confetti_get_random_color( colors ) ],
						zIndex: 99999
					}
				)
			);
			confetti(
				Object.assign(
					{},
					defaults,
					{
						particleCount: 2,
						angle: 120,
						//spread: 55,
						origin: { x: 1 },
						colors: [ wps_confetti_get_random_color( colors ) ],
						zIndex: 99999
					}
				)
			);

			if (Date.now() < end) {
				requestAnimationFrame( frame );
			}
		}());

	}

}

function wps_confetti_get_random_color( colors ) {
	return colors[ Math.floor( Math.random() * colors.length ) ];
}

function wps_confetti_sleep( ms ) {
	return new Promise( resolve => setTimeout( resolve, ms ) );
}
