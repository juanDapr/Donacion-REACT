import React from 'react'
import './style.css'
import './bootstrap.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';



function menu() {
    return (
        <>
            <section class="Jumbotron">
                <div class="title">
                    <h1>Menú</h1>
                </div>
                <div class="wave"></div>
            </section>
            <section class="Testimonial">
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
                                    <div class="imgBx2">
                                        <img src="img/calendar.png" width="205px" alt="" />
                                    </div>
                                    <div class="details">
                                        <h2>Agendar cita</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card">
                                <div class="layer"></div>
                                <div class="content">
                                    <div class="imgBx2">
                                        <img src="img/certificado.png" width="150px" alt="" />
                                    </div>
                                    <div class="details">
                                        <h2>Certificado de Donante</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="card">
                                <div class="layer"></div>
                                <div class="content">
                                    <div class="imgBx2">
                                        <img src="img/donacion.png" width="200px" alt="" />
                                    </div>
                                    <div class="details">
                                        <h2>Proxima donación</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div class="card">
                                    <div class="layer"></div>
                                    <div class="content">
                                        <div class="imgBx2">
                                            <img src="img/cupon.png" width="200px" alt="" />
                                        </div>
                                        <div class="details">
                                            <h2>Tus incentivos</h2>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div class="card">
                                    <div class="layer"></div>
                                    <div class="content">
                                        <a href="/requisitos">
                                            <div class="imgBx2">
                                                <img src="img/lista.png" width="200px" alt="" />
                                            </div>
                                            <div class="details">
                                                <h2>¿Cumples los requisitos?</h2>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div class="card">
                                    <div class="layer"></div>
                                    <div class="content">
                                        <div class="imgBx2">
                                            <img src="img/pregunta.png" width="200px" alt="" />
                                        </div>
                                        <div class="details">
                                            <h2>Preguntas frecuentes<span /></h2>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>


        </>
    )
}

export default menu
