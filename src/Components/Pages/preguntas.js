import React from 'react'
import './style.css'
import './bootstrap.css'
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function preguntas() {
    return ( 
    <>
        <section class="Jumbotron">
                <div class="title">
                    <h1>Preguntas frecuentes</h1>
                </div>
                <div class="wave"></div>
            </section>
            <section class="Testimonial">
        <h2 class="title">Testimonios</h2>
        
        <div class="testimonials">
        <Swiper
                    effect="cover-flow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    loop={true}                      
                    >            
                    <SwiperSlide>
                        <div class="card">
                            <div class="layer"></div>
                            <div class="content">
                                <div class="details">
                                    <h2>¿Quién puede donar sangre?<br/></h2>
                                </div>
                                <br></br>
                                <p>Cualquier persona sana entre los 18 y los 65 años de edad, con un peso mínimo de 50 kg. Si un donante habitual cumple los 65 años puede seguir donando, con autorización del médico responsable.</p>                               
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card">
                            <div class="layer"></div>
                            <div class="content">
                                <div class="details">
                                    <h2>¿Con qué frecuencia se puede donar?<br/></h2>
                                </div>
                                <br></br>
                                <p>Los hombres, cuatro veces al año; las mujeres, tres veces al año. Entre dos donaciones debe transcurrir un mínimo de dos meses. Las donaciones de aféresis pueden realizarse con más frecuencia.</p>                               
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card">
                            <div class="layer"></div>
                            <div class="content">
                                <div class="details">
                                    <h2>¿En qué consiste una donación de sangre?<br/></h2>
                                </div>
                                <br></br>
                                <p>En una donación de sangre total se extraen mediante una punción en la vena 450 cc de sangre con todos sus componentes.</p>                               
                                <p>En las donaciones por aféresis, tras un proceso de separación, se selecciona un componente sanguíneo y se devuelven los demás al donante.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card">
                            <div class="layer"></div>
                            <div class="content">
                                <div class="details">
                                    <h2>¿Cuánto dura una donación de sangre?<br/></h2>
                                </div>
                                <br></br>
                                <p>Una donación de sangre total suele durar unos 20 minutos. Las donaciones por aféresis requieren un poco más de tiempo y depende del componente obtenido.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card">
                            <div class="layer"></div>
                            <div class="content">
                                <div class="details">
                                    <h2>¿Para donar se debe estar en ayunas?<br/></h2>
                                </div>
                                <br></br>
                                <p>No, en cambio es aconsejable tomar algún alimento ligero dos horas antes.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card">
                            <div class="layer"></div>
                            <div class="content">
                                <div class="details">
                                    <h2>¿Me puedo contagiar alguna enfermedad por donar sangre?<br/></h2>
                                </div>
                                <br></br>
                                <p>No, la donación de sangre no entraña ningún riesgo de este tipo. Todo el material utilizado en la donación es estéril y de un sólo uso.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    

            </Swiper>
        </div>
        
    </section>
   
        </>
    )
}
export default preguntas