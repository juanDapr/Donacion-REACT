import React from 'react';
import './style.css'
import './bootstrap.css'
function Home() {
    return (
        <>

            <section className="Jumbotron">
                <div class="title">
                    <h1>Donacion</h1>
                </div>
                <div class="wave"></div>
            </section>
            <section class="about">
                <div class="contentAbout">
                    <h2 class="title_about">CAMPAÑAS</h2>
                    <p class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quam facere itaque ex
                    unde
                    perspiciatis molestias, dolorum odio optio magni! Facilis, praesentium saepe. Ipsam deserunt id
                    incidunt, possimus velit rerum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero numquam
                    nemo, aliquid eius porro illo nesciunt harum eveniet neque ea voluptas commodi repellat, corporis enim,
                inventore illum adipisci voluptatem maiores.</p>
                    <a href="/campanas" class="btn">Mas</a>
                </div>
                <span class="line"></span>
                <div class="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127245.70462648068!2d-74.15978994920103!3d4.6954121175790515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bc7437d9dcd%3A0x75388ebeac6274f6!2sCruz%20Roja%20Colombiana%20Seccional%20Cundinamarca%20y%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1599414535454!5m2!1ses!2sco"
                        allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>

            </section>
            <section class="infHos">
                <div class="map">
                    <img src="img/hospital.jpg" alt="" />
                </div>
                <span class="line"></span>
                <div class="contentinf">
            <h2 class="title_about">Hospitales</h2>
            <p class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quam facere itaque ex
                unde
                perspiciatis molestias, dolorum odio optio magni! Facilis, praesentium saepe. Ipsam deserunt id
                incidunt, possimus velit rerum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero numquam
                nemo, aliquid eius porro illo nesciunt harum eveniet neque ea voluptas commodi repellat, corporis enim,
                inventore illum adipisci voluptatem maiores.</p>
            <a href="/hospital" class="btn">Mas</a>
        </div>

    </section>
    
            

        </>
    );
}

export default Home;