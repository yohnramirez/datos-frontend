const Content = () => {
  return (
    <div className="font-playfair">
      <section id="contenidos" className="h-[600px] p-10">
        <h2 className="text-3xl">Contenidos</h2>
        <div className="flex justify-center items-start text-center mt-10">
          <div className="w-1/3 flex flex-col justify-center items-center">
            <img className="h-48" src="images/location.svg" alt="Location" />
            <h3 className="text-xl text-blue font-bold mt-10">
              Encontrar más árboles
            </h3>
            <p className="mt-5">
              Explorar árboles de interés cerca de ti y a donde sea que vayas,
              todo basado en las últimas observaciones recibidas desde cualquier
              lugar en el mundo.
            </p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center">
            <img className="h-48" src="images/share.svg" alt="Share" />
            <h3 className="text-xl text-blue font-bold mt-10">
              Compartir tus listas
            </h3>
            <p className="mt-5">
              Únete a la comunidad más grande del mundo. Cada observación es
              importante. Contribuye con las tuyas.
            </p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center">
            <img className="h-48" src="images/data.svg" alt="Data" />
            <h3 className="text-xl text-blue font-bold mt-10">
              Seguir tus listados
            </h3>
            <p className="mt-5">
              eTree guarda tus fotos y sonidos, todo completamente gratis con
              tus amigos y toda la comunidad del mundo.
            </p>
          </div>
        </div>
      </section>

      <section id="ciencia" className="flex flex-row-reverse">
        <div className="flex flex-col justify-center items-start pl-10 text-left bg-blueDark w-[30%] gap-8">
          <h2 className="text-5xl font-bold font-playfair leading-tight text-white">
            Fomentando ciencia y conservación
          </h2>
        </div>
        <div className="w-[70%]">
          <img
            className="object-cover w-full h-[85vh]"
            src="./images/map.jpeg"
            alt="Tree"
          />
        </div>
      </section>

      <section id="noticias" className="p-10 h-[620px]">
        <h2 className="text-3xl">Noticias</h2>
        <div className="flex justify-center items-start text-left mt-10 gap-10">
          <div className="w-1/3 flex flex-col items-start">
            <img className="h-48" src="images/noticia1.jpeg" alt="Noticia 1" />
            <a
              href="https://www.eltiempo.com/vida/medio-ambiente/los-arboles-aprenden-a-sobrevivir-y-transmiten-esa-sabiduria-a-sus-hijos-712441"
              className="text-xl text-blue font-bold mt-10 hover:opacity-80"
              target="_blank"
            >
              Los árboles 'aprenden' a sobrevivir y transmiten esa sabiduría a
              sus hijos
            </a>
            <p className="mt-5">
              Según los científicos de la Universidad de Oviedo que encabezan el
              trabajo, esta memoria les permite responder cada vez mejor en
              sucesivos periodos desfavorables...
            </p>
          </div>
          <div className="w-1/3 flex flex-col items-start">
            <img className="h-48" src="images/noticia2.png" alt="Noticia 2" />
            <a
              href="https://www.eltiempo.com/contenido-comercial/con-arboles-y-bosques-epm-le-aporta-a-la-vida-680858"
              className="text-xl text-blue font-bold mt-10 hover:opacity-80"
              target="_blank"
            >
              Con árboles y bosques, EPM le aporta a la vida
            </a>
            <p className="mt-5">
              Con esta cifra, la entidad se ha convertido en líder de la
              iniciativa a nivel nacional; además, con las plántulas que aporta,
              contribuye a proteger las cuencas abastecedoras de agua...
            </p>
          </div>
          <div className="w-1/3 flex flex-col items-start">
            <img className="h-48" src="images/noticia3.jpeg" alt="Noticia 3" />
            <a
              href="https://www.eltiempo.com/vida/medio-ambiente/plantas-e-internet-de-las-cosas-la-apuesta-contra-el-cambio-climatico-672258"
              className="text-xl text-blue font-bold mt-10 hover:opacity-80"
              target="_blank"
            >
              Plantas e internet de las cosas, la apuesta contra el cambio
              climático
            </a>
            <p className="mt-5">
              Cuando estaba aún en el colegio y con apenas 15 años, el bogotano
              creó 'Tree Life', una aplicación que ayuda al medioambiente por
              medio de la siembra de árboles...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
