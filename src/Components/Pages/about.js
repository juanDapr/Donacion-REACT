import React from 'react'
import './style.css'
import './bootstrap.css'
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function about() {
   
    return (
      
        <>
            <section class="Jumbotron">
                <div class="title">
                    <h1>Sobre nosotros</h1>
                </div>
                <div class="wave"></div>
            </section>
            <section class="infHos">
                <div class="map">
                    <img src="img/hospital.jpg" alt="" />
                </div>
                <span class="line"></span>
                <div class="contentinf">
                    <h2 class="title_about">Quienes somos</h2>
                    <p class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quam facere itaque ex
                    unde
                    perspiciatis molestias, dolorum odio optio magni! Facilis, praesentium saepe. Ipsam deserunt id
                    incidunt, possimus velit rerum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero numquam
                    nemo, aliquid eius porro illo nesciunt harum eveniet neque ea voluptas commodi repellat, corporis enim,
                inventore illum adipisci voluptatem maiores.</p>
                </div>

            </section>
            <section class="Make">
                <h2 class="title2">¿Que Hacemos?</h2>
                <div class="content">
                    <p class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate illum officiis
                    vel laborum
                    impedit odio nesciunt, dolores quia optio, similique exercitationem vero nihil saepe ipsum praesentium
                    nostrum earum cumque!Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt dolorum
                    doloremque aliquid doloribus minima architecto soluta iste? Eligendi, natus laboriosam nisi itaque
                    repellat distinctio reprehenderit, sit dolorum nesciunt iste magnam! Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Laborum id distinctio aperiam molestiae dolorem, provident facere totam
                    molestias vitae eum! Voluptates sit suscipit nam repellendus fuga ducimus accusamus, facere veniam.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui laborum blanditiis sed, obcaecati
                    consectetur, error neque dicta totam magni exercitationem quae, impedit aspernatur molestias modi nemo
                vel quos itaque. Officiis!</p>
                </div>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id doloribus vero laboriosam, incidunt sunt numquam optio dicta maiores ut debitis voluptates consequuntur error eaque deleniti quae, itaque eius, nemo minima?</p>
                                <div class="imgBx">
                                    <img src="img/pexels-uncoveredlens-5251197.jpg" width="100px" alt=""/>
                                </div>
                                <div class="details">
                                    <h2>Donante<br/><span>Ingeniera</span></h2>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div class="card">
                            <div class="layer"></div>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id doloribus vero laboriosam, incidunt sunt numquam optio dicta maiores ut debitis voluptates consequuntur error eaque deleniti quae, itaque eius, nemo minima?</p>
                                <div class="imgBx">
                                    <img src="img/pexels-francesca-zama-5207248.jpg" width="100px" alt=""/>
                                </div>
                                <div class="details">
                                    <h2>Donante<br/> <span>Veterinaria</span></h2>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div class="card">
                            <div class="layer"></div>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id doloribus vero laboriosam, incidunt sunt numquam optio dicta maiores ut debitis voluptates consequuntur error eaque deleniti quae, itaque eius, nemo minima?</p>
                                <div class="imgBx">
                                    <img src="img/pexels-anna-shvets-4225880.jpg" width="100px" alt=""/>
                                </div>
                                <div class="details">
                                    <h2>Doctora<br/> <span>Cirujana</span></h2>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div class="card">
                            <div class="layer"></div>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id doloribus vero laboriosam, incidunt sunt numquam optio dicta maiores ut debitis voluptates consequuntur error eaque deleniti quae, itaque eius, nemo minima?</p>
                                <div class="imgBx">
                                    <img src="img/pexels-wallace-chuck-4726898.jpg" width="100px" alt=""/>
                                </div>
                                <div class="details">
                                    <h2>Donante<br/><span>Diseñador</span></h2>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div class="card">
                            <div class="layer"></div>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id doloribus vero laboriosam, incidunt sunt numquam optio dicta maiores ut debitis voluptates consequuntur error eaque deleniti quae, itaque eius, nemo minima?</p>
                                <div class="imgBx">
                                    <img src="img/pexels-linkedin-sales-navigator-2182979.jpg" width="100px" alt=""/>
                                </div>
                                <div class="details">
                                    <h2>Doctor<br/> <span>Cirujano</span></h2>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div class="card">
                            <div class="layer"></div>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id doloribus vero laboriosam, incidunt sunt numquam optio dicta maiores ut debitis voluptates consequuntur error eaque deleniti quae, itaque eius, nemo minima?</p>
                                <div class="imgBx">
                                    <img src="img/pexels-creation-hill-1681010.jpg" width="100px" alt=""/>
                                </div>
                                <div class="details">
                                    <h2>Donante<br/> <span>Biologo</span></h2>
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

export default about
