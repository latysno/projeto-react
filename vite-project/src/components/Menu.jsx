import {Swiper, SwiperSlide} from 'swiper/react'

const data =[
    {id:1 , image:'https://i.pinimg.com/736x/e3/02/4b/e3024bd9175a500bb1a88bcd1b480f59.jpg'},
    {id:2 , image:'https://i.pinimg.com/736x/2e/92/0e/2e920ec646bc047298f88c77368301f9.jpg'},
    {id:3 , image:'https://i.pinimg.com/enabled_lo_mid/736x/ad/53/73/ad5373e021426ed1e23aa68baff219fc.jpg'}
]


function Menu (){
    return(
        <body>
            <header className="cabecalho">
                <a href="">Início</a>
                <a href="">Sobre</a> 
                <a href="./login.jsx">Entrar/Cadastrar</a>
            </header>

            <div className="complemento">
                <div className='carousel'>
                    <Swiper
                    slidesPerView={1}
                        // pagination= {{clickable: true}}
                        navigation
                    >
                        {data.map((item)=> (
                            <SwiperSlide key={item.id}>
                                <img src={item.image} alt="Slider" className="slide-item"/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </body>
        
    )
}

export default Menu