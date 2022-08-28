import NovedadSemana from "./novedadSemana"
import guzzlord from "./imgNovedades/799.png"
import zapdos from "./imgNovedades/145.png"
import cosmos from "./imgNovedades/789.png"

const Datos = () => {
//     let datos = [{
//         "name":"Guzzlord", 
//         "img":"guzzlord" ,
//         "description":"Para los seres de este mundo resulta extraño y peligroso, pero en el mundo del que procede es una criatura muy común."
//     }]

// let recorrer = datos.forEach(element => {
//     console.log(element);
//});

    return(
        <div className="d-flex justify-content-around">
            <NovedadSemana name="Guzzlord" img={guzzlord} description="Para los seres de este mundo resulta extraño y peligroso, pero en el mundo del que procede es una criatura muy común."/>,
            <NovedadSemana name="Cosmog" img={cosmos} description="Hasta la brisa más leve es capaz de arrastrar su cuerpo, compuesto de una materia gaseosa inestable, pero no parece que eso le moleste."/>,
            <NovedadSemana name="Zapdos" img={zapdos} description="Posee el poder de controlar la electricidad a su antojo. Según la creencia popular, anida oculto en oscuros nubarrones de tormenta."/>
        </div>
    )
}

export default Datos