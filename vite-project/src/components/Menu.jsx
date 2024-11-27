import {Swiper, SwiperSlide} from 'swiper/react'
import tailwindConfig from '../../tailwind.config'
const data =[
    {id:1 , image:'https://i.pinimg.com/736x/e3/02/4b/e3024bd9175a500bb1a88bcd1b480f59.jpg'},
    {id:2 , image:'https://i.pinimg.com/736x/2e/92/0e/2e920ec646bc047298f88c77368301f9.jpg'},
    {id:3 , image:'https://i.pinimg.com/enabled_lo_mid/736x/ad/53/73/ad5373e021426ed1e23aa68baff219fc.jpg'}
]


function Menu (){
    return(
        <body>
            <header className="cabecalho">
                <div className='teste'>
                    <a className='ancora' href="">Início</a>
                    <a className='ancora' href="">Sobre</a> 
                    <a className='ancora' href="./login.jsx">Entrar/Cadastrar</a>
                </div>
            </header>

            <div className="complemento">
                <div className='text-pai'>
                    <div className='text'>
                        <h1 className='titulo'>Lorem Ipsum</h1>
                        <p className='paragrafo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim corporis repudiandae eveniet magnam molestiae atque, ipsam impedit autem ipsum, eligendi expedita? Error obcaecati, voluptatibus et tempore delectus rerum soluta voluptates!</p>
                        <button className='style-button'>Conheça mais</button>
                    </div>
                </div>
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

            <div className='centralizar-title'>
                <h1 className='titulo-somos'>Quem Somos?</h1>
                <p className='paragrafo-somos'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptas quasi consequatur distinctio odit itaque optio accusamus voluptatibus fugit eveniet consequuntur sunt corrupti, rem, necessitatibus qui nam error beatae nostrum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptas quasi consequatur distinctio odit itaque optio accusamus voluptatibus fugit eveniet consequuntur sunt corrupti, rem, necessitatibus qui nam error beatae nostrum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptas quasi consequatur distinctio odit itaque optio accusamus voluptatibus fugit eveniet consequuntur sunt corrupti, rem, necessitatibus qui nam error beatae nostrum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptas quasi consequatur distinctio odit itaque optio accusamus voluptatibus fugit eveniet consequuntur sunt corrupti, rem, necessitatibus qui nam error beatae nostrum.</p>
            </div>
            <div className='container'>
                <div className='imagem-container'>
                    <img src="/src/assets/image/teste.jpeg" alt="" srcset="" />
                    <p className='title-1'>Lorem ipsum dolor sit amet, consectetur </p>
                </div>
                <div className='grafico-container'>
                    <img src="/src/assets/image/image16.png" alt="" srcset="" />
                    <p className='title-2'>Lorem ipsum dolor sit amet, consectetur </p>
                </div>
            </div>

            <div className='centralizar-title'>
                <h1 className=''>Painel da Primeira Infância</h1>   
            </div>
            <div className='dashboard'>
                <div className='card'>

                </div>
                <div className='card2'>

                </div>
                <div className='card3'>

                </div>
                <div className='card4'>

                </div>
                <div className='card5'>

                </div>
                <div className='card6'>

                </div>
            </div>
            
            <footer className='rodape'>
                <div className='subtitles-footer'>
                    <h2>Fale Conosco</h2>
                    <h2>Parcerias</h2>
                </div>
                <div className='parceiros'>
                    <div className='parceiro-01'></div>
                    <div className='parceiro-02'></div>
                    <div className='parceiro-03'></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </footer>
        </body>
        
    )
}

export default Menu