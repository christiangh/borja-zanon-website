angular.module('webBorja').controller('NewsController', NewsController);

function NewsController(){
	var newsCtrl = this;

	// Sample news, most recent first.
	// image.focus: focal point in percentages of the photo (x from the left, y from the top),
	// used as object-position so the cropped banner keeps that point in view. Defaults to the center.
	newsCtrl.news = [
		{
			id: 'trinity-orchestra-madrid',
			date: new Date(2016, 0, 15),
			title: 'La Trinity Orchestra actúa en Madrid',
			paragraphs: [
				'La Trinity Orchestra, orquesta de la Universidad Trinity College de Dublín, cruza el mar para ofrecer su primer concierto en España bajo la dirección de Borja Zanón.',
				'El programa reúne obras del repertorio sinfónico clásico y romántico, y supone la culminación de casi dos años de trabajo desde que Borja fue nombrado director titular de la orquesta en mayo de 2014.'
			],
			image: { src: 'assets/images/gallery1.jpg', alt: 'Trinity Orchestra en concierto', focus: { x: 50, y: 30 } }
		},
		{
			id: 'nace-thegzduo',
			date: new Date(2014, 1, 3),
			title: 'Nace theGZduo, clarinete y guitarra',
			paragraphs: [
				'Borja Zanón y el guitarrista de la formación presentan theGZduo, un dúo de clarinete y guitarra dedicado al jazz y a la música latina.',
				'El proyecto nace en Dublín con la idea de acercar estos repertorios a salas pequeñas y espacios culturales, con arreglos propios para esta combinación poco habitual de instrumentos.'
			],
			image: { src: 'assets/images/gallery2.jpg', alt: 'theGZduo en directo', focus: { x: 50, y: 35 } }
		},
		{
			id: 'coro-instituto-cervantes',
			date: new Date(2013, 9, 10),
			title: 'Nace el Coro del Instituto Cervantes de Dublín',
			paragraphs: [
				'El Instituto Cervantes de Dublín pone en marcha su propio coro, fundado y dirigido por Borja Zanón poco después de su llegada a Irlanda.',
				'El coro está abierto a cualquier persona interesada en la música coral y en la cultura hispana, sin necesidad de experiencia previa. Los ensayos son semanales en la sede del Instituto.'
			],
			image: { src: 'assets/images/gallery3.jpg', alt: 'Coro del Instituto Cervantes de Dublín', focus: { x: 50, y: 20 } }
		}
	];
}
