import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  data = [
    { img: "https://www.caritas.org.mx/wp-content/uploads/2018/09/pobreza-extrema-1200-1024x628.jpg", title: "Slide 1" },
    { img: "https://scontent.fbjx1-1.fna.fbcdn.net/v/t31.18172-8/12322703_10207470351974666_5905238594494045069_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeE53EflAgLQqudGxbecDEgZ6B21bCRvsBvoHbVsJG-wG_-7y355sSij91Npb1NjTLsmFbDYKKGw71LGz2gWEzt_&_nc_ohc=LQTDBIC99t4AX-Oro7W&_nc_ht=scontent.fbjx1-1.fna&oh=09905c9b38d0b370d4ea32c78eeada19&oe=61D6125F", title: "Slide 2" },
    { img: "https://cdn.esglobal.org/wp-content/uploads/2019/09/pobrezaFilipinas.jpg", title: "Slide 3" },
    { img: "https://i2.wp.com/delacalle.org/wp-content/uploads/2019/03/pobreza.jpg?fit=1024%2C562&ssl=1", title: "Slide 4" },
    { img: "https://cdn.esglobal.org/wp-content/uploads/2017/06/pobres.jpg", title: "Slide 5" },
    { img: "https://cdn.esglobal.org/wp-content/uploads/2020/07/Oro_congo_portada.jpg", title: "Slide 6" },
    { img: "https://anamogas.net/wp-content/uploads/2020/10/Espiritu-Asis_BANNER.jpg", title: "Slide 7" },
    { img: "https://i2.wp.com/comentariodeldia.com/wp-content/uploads/Cover-articulos-ElCh-6.png?w=1200&ssl=1", title: "Slide 8" },
    { img: "https://pbs.twimg.com/media/EHF9lpmX0AA8epi.jpg", title: "Slide 9" },
  ];

  articulos: any = [{
    "titulo": "Pobreza: Panorama general",
    "ruta": "https://www.bancomundial.org/es/topic/poverty/overview#1",
    "autor": "World Bank Editors",
    "contenido": "El Grupo del Banco Mundial está comprometido a luchar contra la pobreza en todas sus dimensiones. Utiliza las pruebas y los análisis más recientes para respaldar a los Gobiernos en la formulación de políticas concretas que puedan ayudar a las personas más pobres de todos los países. Los objetivos del Grupo Banco Mundial son poner fin a la pobreza extrema y promover la prosperidad compartida. Esta misión orienta todos los estudios analíticos, las operaciones y las actividades de convocatoria en más de 145 países clientes. La pobreza extrema, el primero de los Objetivos de Desarrollo Sostenible mundiales, ha disminuido continuamente durante casi 25 años.",
    "imagen": "https://blogs.iadb.org/salud/wp-content/uploads/sites/15/2015/12/Cinco-razones-por-las-que-casi-la-mitad-de-las-personas-que-viven-en-situación-de-pobreza-extrema-no-reciben-transferencias-monetarias.jpg",
    "referencia":"Pobreza: Panorama general. (2021). World Bank. https://www.bancomundial.org/es/topic/poverty/overview#1"
  }, {
    "titulo": "Pobreza y desigualdad: la necesidad de un enfoque multidimensional",
    "ruta": "https://nuso.org/articulo/pobreza-y-desigualdad-la-necesidad-de-un-enfoque-multidimensional/",
    "autor": "Karl-Dieter Hoffmann",
    "contenido": "Si bien en los últimos 15 años la pobreza se ha reducido en América Latina, el cuadro que presentan numerosas publicaciones científicas sobre la realidad social en la región es exageradamente positivo. Mientras que la medida de la reducción de la pobreza es menor que la informada en las estadísticas de casi todos los institutos de investigación, la reducción de la desigualdad social observada se basa en un enfoque estrecho de la visión analítica sobre los ingresos monetarios. Si en la observación se toman en cuenta otros factores, resulta evidente que el cosmos latinoamericano de la estratificación social continúa ampliándose.",
    "imagen": "https://static.nuso.org/media/cache/2a/6c/2a6ceda3230ad728e4feb93380d992ed.jpg",
    "referencia":"Hoffmann, K. D. (2015, 11 agosto). Pobreza y desigualdad: la necesidad de un enfoque multidimensional | Nueva Sociedad. Nueva Sociedad | Democracia y política en América Latina. https://nuso.org/articulo/pobreza-y-desigualdad-la-necesidad-de-un-enfoque-multidimensional/"
  },{
    "titulo": "Acabar con la pobreza",
    "ruta": "https://www.un.org/es/global-issues/ending-poverty",
    "autor": "United Nations",
    "contenido": "Si bien las tasas de pobreza en el mundo se han reducido a más de la mitad desde el año 2000, la pandemia de COVID-19 podría aumentar la pobreza a nivel mundial hasta llegar a afectar a 500 millones de personas más, o lo que es lo mismo, a un 8% más de la población total mundial. En abril de 2020, las Naciones Unidas emitieron un Marco de la ONU para la respuesta socioeconómica inmediata ante el COVID-19 y crearon la Fondo del Secretario General de las Naciones Unidas para la Respuesta y Recuperación en relación con el COVID-19. Antes de la pandemia, se habían logrado avances significativos en muchos países de Asia oriental y sudoriental, pero casi el 42 por ciento de la población del África Subsahariana continúa viviendo por debajo del umbral de la pobreza.",
    "imagen": "https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/children-uttar_pradesh-india.jpg?itok=a-L5MjVj",
    "referencia":"United Nations. (2021). Acabar con la pobreza | Naciones Unidas. Recuperado 2021, de https://www.un.org/es/global-issues/ending-poverty"
  },{
    "titulo": "Las principales causas de la pobreza en el mundo",
    "ruta": "https://ayudaenaccion.org/ong/blog/derechos-humanos/principales-causas-pobreza-mundo/",
    "autor": "Blanca Arnaiz",
    "contenido": "Las causas de la pobreza en el mundo son muchas y muy diversas. A pesar de los avances de los últimos años por contribuir a su reducción, el número de personas que sufren pobreza extrema en el mundo continúa siendo muy alto. Más de 1.300 millones de personas viven en situación de pobreza en el mundo y la mitad de ellas son menores de 18 años. De manera genérica entendemos por pobreza la falta de medios económicos de una persona, sin embargo en el siglo XXI este término ha adquirido una dimensión mucho mayor y delimitarlo únicamente al nivel de ingresos no ofrece una visión real de la situación que sufren las personas en situación de pobreza. Para poder entenderlo mejor tenemos que hablar de una pobreza multidimensional que tiene en cuenta la falta de derechos y acceso a los servicios básicos como agua y saneamiento, la salud, la educación y una alimentación adecuada.",
    "imagen": "https://ayudaenaccion.org/ong/wp-content/uploads/2019/10/pobreza-latinoam%C3%A9rica-300x200.jpg",
    "referencia":" Arnaiz, B. (2020, 14 enero). Las principales causas de la pobreza en el mundo. Ayuda en AcciÃ3n. https://ayudaenaccion.org/ong/blog/derechos-humanos/principales-causas-pobreza-mundo/"
  },{
    "titulo": "Por primera vez en más de 20 años, la pobreza extrema creció en el mundo según la ONU",
    "ruta": " https://www.france24.com/es/américa-latina/20211018-pobreza-america-latina-mundo-aumento",
    "autor": "France 24",
    "contenido": "Para el organismo internacional, uno de los problemas principales es la falta de solidaridad entre naciones en momentos críticos y el endeudamiento excesivo, “debemos enfocarnos en garantizar la inversión para la recuperación en los países” dijo el titular de Naciones Unidas. Según Naciones Unidas, es la primera vez en dos décadas que aumenta la pobreza en el mundo. Una situación que está estrechamente relacionada con la crisis de la pandemia del Covid-19, la cual ayudó a incrementar la brecha de desigualdad entre ricos y pobres en países en vía de desarrollo.",
    "imagen": "https://blogs.worldbank.org/sites/default/files/styles/hero/public/2021-10/oct2021_povertyblog_mainimage.png?itok=kq6",
    "referencia":"24, F. (2021, 18 octubre). Por primera vez en más de 20 años, la pobreza extrema creció en el mundo según la ONU. France 24. https://www.france24.com/es/am%C3%A9rica-latina/20211018-pobreza-america-latina-mundo-aumento"
  }

  ]
  
}
