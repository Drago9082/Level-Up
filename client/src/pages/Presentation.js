import * as React from "react";
import Reveal from 'reveal.js';

import '../../styles/reveal.js/reset.css';
import '../../styles/reveal.js/reveal.css';
import '../../styles/reveal.js/theme/black.css';

export function Presentation() {

    React.useEffect(() => {
        let deck = new Reveal({
            backgroundTransition: 'slide',
            transition: 'slide'
         })
         deck.initialize();
         console.log('initialized fool')
    },[])

    return (
        <div class="reveal">
			<div class="slides">
				<section data-background="./images/ha.png"></section>
				<section>
					<h1 class="fragment fade-in">Level Up</h1>
					<p class="fragment fade-in">
						<small>Developed by <a href="https://github.com/jkstone321">Jordan Stone</a>, <a href="https://github.com/Drago9082">Rajiv Tiwari</a>, <a href="https://github.com/odisclemons">Odis Clemons</a>, and <a href="https://github.com/Droessling94">Donaldson Roessling</a></small>
					</p>
				</section>
				<section>
					<section>
						<h1>Elevator Pitch</h1>
					</section>
					<section>
						
					</section>
				</section>
				<section>
					<section>
						<h1>Concept</h1>
					</section>
					<section>
						a;lkdjf;lk
					</section>
				</section>
				<section>
					<section>
						<h1>Technologies Used</h1>
					</section>
					<section>
						ahsdf
					</section>
				</section>

			</div>
		</div>
    );
}
