gsap.registerPlugin(ScrollTrigger);

const slideIn = (elementArr, trigger, slideFrom = 'bottom') => {
	const timeline = gsap.timeline({
		defaults: {
			duration: 0.6
		},
		scrollTrigger: {
			trigger: trigger,
			toggleActions: 'restart none none none'
		}
	});

	slideFrom = slideFrom.toLowerCase();

	if (slideFrom === 'left' || slideFrom === 'right') {
		timeline.from(
			elementArr,
			{
				x: slideFrom === 'left' ? '-=100' : '+=100',
				opacity: 0
			},
			'-=.3'
		);
	} else {
		timeline.from(
			elementArr,
			{
				y: slideFrom === 'bottom' ? '+=100' : '-=100',
				opacity: 0
			},
			'-=.3'
		);
	}

	return timeline;
};

const appendToSlideTimeline = (timeline, elementArr, slideFrom = 'bottom') => {
	slideFrom = slideFrom.toLowerCase();

	if (slideFrom === 'left' || slideFrom === 'right') {
		timeline.from(
			elementArr,
			{
				x: slideFrom === 'left' ? '-=100' : '+=100',
				opacity: 0
			},
			'-=.3'
		);
	} else {
		timeline.from(
			elementArr,
			{
				y: slideFrom === 'bottom' ? '+=100' : '-=100',
				opacity: 0
			},
			'-=.3'
		);
	}

	return timeline;
};

/* Hero animations */
const titleItems = gsap.utils.toArray('.hero__title');
let heroTimeline = gsap.timeline({
	defaults: {
		duration: 0.6
	},
	scrollTrigger: {
		trigger: '.hero',
		toggleActions: 'restart none restart none'
	}
});

titleItems.forEach(title => {
	heroTimeline.from(
		title,
		{
			y: '100%'
		},
		'-=.3'
	);
});

heroTimeline
	.from(
		'.hero__description',
		{
			y: '+=50',
			opacity: 0
		},
		'-=.5'
	)
	.from(
		'.hero .btn',
		{
			y: '+=50',
			opacity: 0
		},
		'-=.2'
	);

/* Features animations */
const featuresTitleTimeline = slideIn(['.features .section-title'], '.features', 'bottom');
appendToSlideTimeline(featuresTitleTimeline, '.features .section-intro', 'bottom');

const featureCards = gsap.utils.toArray('.feature');
const featureCardsTimeline = slideIn(featureCards[0], '.features-grid', 'bottom');
featureCards.forEach((feature, index) => {
	if (index !== 0) appendToSlideTimeline(featureCardsTimeline, feature, 'bottom');
});

/* Organize animations */
const organizeTimeline = slideIn('.organize__content', '.organize', 'bottom');
appendToSlideTimeline(organizeTimeline, '.organize__image', 'right');

/* Newsletter animation */
const newsletterTimeline = slideIn('.newsletter__image', '.newsletter', 'bottom');
appendToSlideTimeline(newsletterTimeline, '.newsletter__content', 'right');

/* Partners animations */
const partnersTitleTimeline = slideIn('.partners .section-title', '.partners', 'bottom');
appendToSlideTimeline(partnersTitleTimeline, '.partners .section-intro', 'bottom');

const partnerCards = gsap.utils.toArray('.partner');
const partnerCardsTimeline = slideIn(partnerCards[0], '.partners-grid', 'bottom');
partnerCards.forEach((partner, index) => {
	if (index !== 0) appendToSlideTimeline(partnerCardsTimeline, partner, 'bottom');
});

/* Testimonials animations */
const testimonialsTimeline = slideIn('.testimonials .section-title', '.testimonials');
appendToSlideTimeline(testimonialsTimeline, '.testimonial__image');
appendToSlideTimeline(testimonialsTimeline, '.testimonial__content');
appendToSlideTimeline(testimonialsTimeline, '.testimonial__user');

/* Pricing animations */
const pricingTimeline = slideIn('.pricing .section-title', '.pricing');
appendToSlideTimeline(pricingTimeline, '.pricing .section-intro');

const pricingCards = gsap.utils.toArray('.pricing .card');
const pricingCardsTimeline = slideIn(pricingCards[0], '.pricing .card-grid', 'bottom');
pricingCards.forEach((pricing, index) => {
	if (index !== 0) appendToSlideTimeline(pricingCardsTimeline, pricing, 'bottom');
});

/* Contact animations */
const contactTimeline = slideIn('.contact-us .section-title', '.contact-us');
appendToSlideTimeline(contactTimeline, '.contact');
