const products = [
	{
		name: "Bleak Horroscopes // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559625/milkrecords/bleakhorroscopes_ipqzgl.svg",
		description:
			"The first release from Sheffeild-based self described spooky lads Bleak Horroscopes, dark driven bass over twinkly guitar.  ",
		brand: "Schraubstock",
		category: "Cold Wave",
		price: 19.99,
		countInStock: 3,
		rating: 4.5,
		numReviews: 12,
	},
	{
		name: "Bleak Horroscopes // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559648/milkrecords/bleakhorroscopes2_bkzm5s.svg",
		description:
			"A strong follow up to the seminal `Schraubstock`, the band's techno influences can be heard throughout",
		brand: "Scattered Over Venice",
		category: "Cold Wave",
		price: 15.99,
		countInStock: 7,
		rating: 4.0,
		numReviews: 9,
	},
	{
		name: "улыбаться // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559574/milkrecords/smile_wjthfc.svg",
		description:
			"Everything you could need from an industrial record.  Smile delves deep into a well of dischordant machine made noise; obvious influences from predecessors Einsturzende Neubauten and Throbbing Gristle",
		brand: "Smile",
		category: "Industrial",
		price: 19.99,
		countInStock: 5,
		rating: 3,
		numReviews: 7,
	},
	{
		name: "KRMXX // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559607/milkrecords/tinfoil_racogs.svg",
		description:
			"KRMXX toes the line between minimal and complex beautifuly - the record feels like one cohesive journey from start to finish - think the Four Seasons but with a 909 and a distortion pedal",
		brand: "Despotism in the Workplace",
		category: "Techno",
		price: 10.99,
		countInStock: 11,
		rating: 5,
		numReviews: 15,
	},
	{
		name: "Das Egg // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559771/milkrecords/dasegg_ebrf2z.svg",
		description:
			"Das Egg shifts towards a more sombre note and away from the established 'death-by-disco' sound with their recent release, part I",
		brand: "Volume I",
		category: "Ambient",
		price: 24.99,
		countInStock: 7,
		rating: 3.5,
		numReviews: 7,
	},
	{
		name: "Das Egg // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559770/milkrecords/daseggtwo_tp4wzi.svg",
		description:
			"Das Egg shifts towards a more sombre note and away from the established 'death-by-disco' sound with their recent release, part I",
		brand: "Volume II",
		category: "Ambient",
		price: 24.99,
		countInStock: 7,
		rating: 3.5,
		numReviews: 7,
	},
	{
		name: "Transmetropolitan // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559568/milkrecords/redone_tvsln4.svg",
		description:
			"The groundbreaking debut from Transmetropolitan sounds like if Talking Heads suddenly had a dramatic goth phase.",
		brand: "Transmetropolitan",
		category: "New Wave",
		price: 17.99,
		countInStock: 2,
		rating: 4,
		numReviews: 2,
	},
	{
		name: "The Lung // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559578/milkrecords/thelung_vhsvxg.svg",
		description:
			"The album consists mostly of cat noises and nondescript ethereal wooshing for the first twelve minutes or so, but they really pull it together by the third song.",
		brand: "Here Comes Troubled",
		category: "New Wave",
		price: 19.99,
		countInStock: 0,
		rating: 4,
		numReviews: 6,
	},
	{
		name: "Swamphead // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559584/milkrecords/swamphead_fzd4dt.svg",
		description:
			"This album marks a real departure for Swamphead.  It is a statement of spiritual yearning that might leave fans of the band's earlier confrontational sound confused.",
		brand: "Songs About Cold Weather",
		category: "Punk",
		price: 22.99,
		countInStock: 5,
		rating: 4,
		numReviews: 0,
	},
	{
		name: "Swamphead // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559856/milkrecords/swamphead2_rss9e7.svg",
		description:
			"Swamphead II feels like a natural follow-on from their previous release `Songs about Cold Weather.  They revisit some of their earlier antagonistic attitude but retain much of the beauty of the previous record. ",
		brand: "Swamphead II",
		category: "Punk",
		price: 7.99,
		countInStock: 0,
		rating: 4,
		numReviews: 18,
	},
	{
		name: "Linus Falladah // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559613/milkrecords/linus_stget6.svg",
		description:
			"To say this is an album not to pay attention to is not to discredit it.  It is slow and drawn out and sparse in a way that gradually overwhelms a listener.  Reportedly inspired by Linus' work with a Tibetan choir",
		brand: "Linus in Furs",
		category: "Ambient",
		price: 19.99,
		countInStock: 2,
		rating: 4,
		numReviews: 4,
	},
	{
		name: "Linus Falladah// ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559588/milkrecords/janine_qp2s4e.svg",
		description:
			"Borrowing it's name (sort of) from a story by Scottish Writer Alasdair Gray, this album feels very bit as postmodern and fractured as the novel does.  Falladah adopts a more experimental approach, seemingly allowing the music to lead him in many places, making it feel more like an exploration than a composition",
		brand: "Janine 1982",
		category: "Ambient",
		price: 19.99,
		countInStock: 7,
		rating: 4,
		numReviews: 5,
	},
	{
		name: "Ella D. Hanover // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559699/milkrecords/ella_leg49i.svg",
		description:
			"Ella D. Hanover holds no punches with an entirely modular setup.  It is at once raw and ugly and beautiful, and has the characteristics of a single live performance (for which she is of corse famed)",
		brand: "Maps",
		category: "Techno",
		price: 15.99,
		countInStock: 12,
		rating: 4,
		numReviews: 10,
	},
	{
		name: "Ella D. Hanover // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559719/milkrecords/ella2_nopvoa.svg",
		description:
			"Every bit as raw as the first record, an exhausting head battering musical experience. ",
		brand: "Electronics",
		category: "Techno",
		price: 15.99,
		countInStock: 2,
		rating: 4,
		numReviews: 0,
	},
	{
		name: "Web Audio Context // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559625/milkrecords/webaudio2_bbzgdr.svg",
		description:
			"Web Audio Context are a band with an axe to grind.  They seem exclusively `anti` and take aim lyrically at just about everything in earshot.",
		brand: "Burst",
		category: "Punk",
		price: 19.99,
		countInStock: 6,
		rating: 3,
		numReviews: 4,
	},
	{
		name: "Web Audio Context // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559629/milkrecords/webaudio_weqr4b.svg",
		description:
			"Exhausting, Lovesick and incredibly angry, Tiger/No feels like a breakup album written for a dethroned despot",
		brand: "Tiger/No",
		category: "Punk",
		price: 12.99,
		countInStock: 4,
		rating: 3.5,
		numReviews: 1,
	},
	{
		name: "Bengifan // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559626/milkrecords/bendifan_gfkmg3.svg",
		description:
			"More than just a thumping raver groove, intricate melodies woven into and around the beats keep the music anything but dull. Some of it's most noted cuts are `Helium`, `Sniff`, and `Big Barry's Chant`.",
		brand: "How Late it Was, How Late",
		category: "Ambient",
		price: 15.99,
		countInStock: 5,
		rating: 3.5,
		numReviews: 2,
	},
	{
		name: "Kellman // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559781/milkrecords/grand_o0te7g.svg",
		description:
			"Kellman's stellar debut feels like an action movie somehow.",
		brand: "The Grand National",
		category: "Punk",
		price: 15.99,
		countInStock: 10,
		rating: 3.5,
		numReviews: 4,
	},

	{
		name: "Figure Fatale // ",
		image:
			"https://res.cloudinary.com/danielmurphy/image/upload/v1615559774/milkrecords/fatale_g0aasy.svg",
		description:
			"This unique act blends dark-wave with an 80's influence, post-punk era guitars with minimalist poetry in sung Portugese. Figure Fatale is a driving, mesmerizing outburst of sentimental anxiety through the nihilistic mind-frame, it is both personal & broad, like a wondering mind brave enough to question taboo & existence.",
		brand: "Cri Perdu",
		category: "Cold Wave",
		price: 15.99,
		countInStock: 10,
		rating: 3.5,
		numReviews: 4,
	},
];

module.exports = products;
