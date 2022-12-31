
import React from 'react';
import { Link } from 'react-router-dom';

const Presidency = () => {
    return (
        <React.Fragment>
            {/* <!-- page title --> */}
            <section
                className="section"
                style={{
                    background: "url(images/backgrounds/g20.jpg) no-repeat center",
                    backgroundSize: "cover",
                    boxShadow: "inset 0 0 0 2000px rgba(8, 8, 8, 0.618)",
                }}
            >
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white mb-3">India’s G20 Presidency</h1>
                            {/* <!-- breadcrumb --> */}
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb bg-transparent p-0">
                                    <li className="breadcrumb-item font-weight-semebold">
                                        <a className="text-white" href="index.html">
                                            Home
                                        </a>
                                    </li>
                                    <li
                                        className="breadcrumb-item font-weight-semebold active text-primary"
                                        aria-current="page"
                                    >
                                        Presidency
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /page title --> */}

            <section className="section position-relative">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className=" col-md-12 mb-md-0">
                            <div className="d-flex align-items-start justify-content-start">
                                <div>
                                    <img
                                        src={
                                            process.env.REACT_APP_MAIN_URL + "images/logo-modal.png"
                                        }
                                        alt=""
                                        className="icon-modal-logo"
                                    />
                                </div>
                                <div>
                                    <span className="section-title-border"></span>
                                    <h2 className="section-title">G20 Overview</h2>
                                </div>
                            </div>
                            <p>
                                The Group of Twenty (20) is one of the premier forums for international economic cooperation. It holds meetings to discuss the most pressing global matters and formulate reforms to strengthen global architecture.
                            </p>
                            <p>
                                The G20 group accounts for 85% of global GDP, 75% of international trade and two-thirds of the world population, making it the premier forum for international economic cooperation.
                            </p>
                            <p>
                                Typically, the G20 summit consists of two parallel tracks – The Finance track and the Sherpa track. Each track’s meeting is held separately wherein they discuss and negotiate matters of economic and political importance.
                            </p>

                            <p className="mb-5">
                                To know more about G20 summit track meetings,
                                <Link to="#"> click here</Link>
                            </p>
                            <p>
                                The group comprises 19 countries – (Argentina, Australia, Brazil, Canada, China, France, Germany, India, Indonesia, Italy, Japan, the Republic of Korea, Mexico, Russia, Saudi Arabia, South Africa, Turkey, the United Kingdom and the United States) and European Union.
                            </p>
                            <p className="mb-5">
                                According to the rotating presidency ‘troika’ system – previous, current, and succeeding presidencies – India is the current G20 president for 2023. Under the Indian presidency, the troika will comprise Indonesia, India and Brazil.
                            </p>
                        </div>
                        {/* <div className="col-md-6">
                            <img
                                src="images/modelg20/main.jpg"
                                className="w-100 rounded-4"
                                alt=""
                            />
                        </div> */}
                    </div>


                </div>
                {/* <!-- background shape --> */}
                <img
                    className="img-fluid about-bg-shape"
                    src="images/backgrounds/about-us-3-bg.png"
                    alt="shape"
                />
            </section>

            <section className="section position-relative">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col">
                            <div className='d-flex justify-content-center'>
                                <span className="section-title-border"></span>
                                <h2 className="section-title">India’s G20 Presidency</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col">
                            <div className='mb-3'>
                                <span className="section-title-border"></span>
                                <h2 className="section-title">Overview: Theme & Logo</h2>
                            </div>
                            <p className='mb-2'>
                                December 1st 2022 was a monumental day for the country and its 1.38 billion citizens as India assumed the G20 presidency and is prepared to host a grand summit for the world’s developing and developed economies.
                            </p>
                        </div>
                        <div className="col">
                            <figure class="text-start">
                                <blockquote class="blockquote">

                                    <p><i class='bx bxs-quote-left bx-flip-horizontal bx-tada bx-sm text-warning' ></i> India's G20 Presidency will work to promote this universal sense of one-ness. Hence our theme - One Earth, One Family, One Future. <i class='bx bxs-quote-right bx-tada bx-flip-horizontal bx-sm text-warning' ></i></p>

                                    <figcaption class="blockquote-footer text-end">
                                        <cite title="Source Title">PM Narendra Modi</cite>
                                    </figcaption>
                                </blockquote>
                            </figure>
                        </div>
                        <div className="col">
                            <p>
                                India’s G20 theme of ‘Vasudaiva Kutumbhakam’ is inspired by the Sanskrit text from Maha Upanishad. This immensely glorifies the message of having universal one-ness that India wishes to demonstrate to all G20 nations. The theme affirms and shows respect for all forms of life – plants, animals, humans – and their cyclical connectivity to the planet, Earth.
                            </p>
                            <p>
                                The logo for India’s G20 theme is unique as it drives colour inspiration from the country’s national flag – saffron, white, green and blue. It showcases Earth in a form of the Lotus, India’s national flower, which means growing strong amongst challenges. The planet resonates with India’s pro-planet approach to life that is in sync with nature.
                            </p>
                            <p>
                                Additionally, beneath the G20 logo is written ‘Bharat’, which means ‘India’ in the old Devanagari script.
                            </p>
                            <p className="mb-5">
                                To read more about India’s G20 presidency,
                                <Link to="/"> click here</Link>
                            </p>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col col-lg-6">
                            <div className='mb-3'>
                                <span className="section-title-border"></span>
                                <h2 className="section-title">Invited Nations & Delegations</h2>
                            </div>
                            <p>
                                Apart from the G20 member countries, India has extended the invitation to various other nations who be attending the September 2023 summit as special guests. They are - Netherlands, Nigeria, UAE, Spain, Egypt, Bangladesh, Oman, Mauritius and Singapore.
                            </p>
                            <p>
                                Moreover, various international organisations and regional organisations are major participating delegations in the G20 agenda meetings that will be attending the G20 gathering as well. They are –
                            </p>
                            <ul>
                                <li><i class="bi bi-plus-circle-dotted"> </i> World Bank</li>
                                <li><i class="bi bi-plus-circle-dotted"> </i> International Monetary Fund (IMF)</li>
                                <li><i class="bi bi-plus-circle-dotted"> </i> World Health Organisation (WHO)</li>
                                <li><i class="bi bi-plus-circle-dotted"> </i> World Trade Organisation (WTO)</li>
                                <li><i class="bi bi-plus-circle-dotted"> </i> United Nations (UN)</li>
                                <li><i class="bi bi-plus-circle-dotted"> </i> International Labour Organisation (ILO)</li>
                                <li><i class="bi bi-plus-circle-dotted"> </i> Financial Stability Board (FSB)</li>
                                <li><i class="bi bi-plus-circle-dotted"> </i> Organisation for Economic Co-operation and Development (OECD)</li>
                                <li><i class="bi bi-plus-circle-dotted"> </i> African Union (AU)</li>
                                <li><i class="bi bi-plus-circle-dotted"> </i> African Union Development Agency (AUDA-NEPAD)</li>
                                <li><i class="bi bi-plus-circle-dotted"> </i> The Association of Southeast Asian Nations (ASEAN)</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="images/g20.jpeg"
                                className="w-100 rounded-4 mb-4"
                                alt=""
                            />
                            <div className="row row-cols-1 row-cols-lg-2">
                                <div className="col-md-6">
                                    <img
                                        src="images/deligates/world-bank.jpg"
                                        className="w-100 rounded-4"
                                        alt=""
                                    />
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src="images/deligates/imf.jpg"
                                        className="w-100 rounded-4"
                                        alt=""
                                    />
                                </div>

                            </div>

                        </div>
                        <div className="col-12 mb-5">

                        </div>
                        <div className="col-12">
                            <p>Under the aegis of the G20 agenda, India will invite the International Solar Alliance (ISA), Coalition of Disaster Resilient Infrastructure (CDRI) and Asian Development Bank (ADB) as guest international organisations to the G20 summit in 2023.</p>
                        </div>
                    </div>
                    <div className="mb-5 row row-cols-1 row-cols-lg-2">
                        <div className="col">
                            <div class="card">
                                <div class="card-body">
                                    <blockquote class="blockquote mb-0">
                                        <p><i class='bx bxs-quote-left bx-flip-horizontal bx-tada bx-sm text-warning' ></i> The greatest challenges we face - climate change, terrorism, and pandemics - can be solved not by fighting each other, but only by acting together. <i class='bx bxs-quote-right bx-tada bx-flip-horizontal bx-sm text-warning' ></i></p>
                                        <footer class="blockquote-footer text-end">PM <cite title="Source title">Narendra Modi</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className='d-flex justify-content-center'>
                                <span className="section-title-border"></span>
                                <h2 className="section-title">Key G20 Agenda & Priorities</h2>
                            </div>
                            <p>
                                The passion clubbed with a sense of harmony and togetherness is what the Modi-led governance wishes to showcase to the world. A government that works not as a top ruling authority but as citizen-led democracy.
                            </p>
                        </div>
                        <div className="col-12">
                            <p>
                                Besides this, Indian Sherpa, Amitabh Kant hopes that under India’s presidency, G20 nations will strive to reach a common consensus and subsequent reforms to challenges that are slowing down the economies, a debt crisis that could impact almost 70 countries, poverty crisis post-pandemic and existential climate crisis.
                            </p>
                            <p>
                                Another key agenda from India would be suggesting reforms in financial institutions like IMF, World Bank and WTO. The objective is to make these organisations more politically and socially attuned to the needs and goals of developing nations.
                            </p>
                            <p>
                                Take a look at the following list of agendas and priorities that India will touch upon as a part of its G20 presidency:
                            </p>
                        </div>
                        <div className="col">
                            <img
                                src="images/presidency/agenda.jpg"
                                className="w-100 rounded-4"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="row">
                        {/* <!-- Digital Transformation --> */}
                        <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
                            <h3>
                                {/* <span className="text-primary">02.</span> */}
                                Digital Transformation
                            </h3>
                            <p className="fs-6">
                                One of the prime agendas for India as the G20 president is carrying forward the communication of digital technology and transformation in the 2023 summit.
                            </p>
                            <p className="fs-6">
                                Under this agenda, India hopes to share its success story of ideating and implementing Union Paid Interface (UPI), CoWin, MyGov apps and more.
                            </p>
                        </div>
                        {/* <!-- Startup India --> */}
                        <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
                            <h3>
                                {/* <span className="text-primary">02.</span> */}
                                Startup India
                            </h3>
                            <p className="fs-6">
                                As one of the engagement groups, Startup20, India hopes to highlight the nation’s startup movement and how digital transformation has played a key role in its fast-paced success. It also would recommend actions, and relative measures to foster collaboration and innovations across G20 leaders during the summit.
                            </p>

                        </div>
                        {/* <!-- Disaster Risk Reduction --> */}
                        <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
                            <h3>
                                {/* <span className="text-primary">02.</span> */}
                                Disaster Risk Reduction
                            </h3>
                            <p className="fs-6">
                                As one of the working streams in Sherpa Track, Disaster risk reduction is created under India’s G20 presidency this year to inspire group efforts, multi-disciplinary research and development along with policy recommendations for reducing the risks of disaster.
                            </p>

                        </div>
                        {/* <!-- Green Development, Climate Finance and LiFe --> */}
                        <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
                            <h3>
                                {/* <span className="text-primary">02.</span> */}
                                Green Development, Climate Finance and LiFe
                            </h3>
                            <p className="fs-6">
                                As a key priority, India will steer G20 nations to find adequate finance and use of technology for climate change issues keeping in view climate justice. In line with this, India will also incorporate LiFe (Lifestyle for Environment), a social movement in association with having eco-friendly and sustainable life choices as an individual and as a citizen.
                            </p>

                        </div>
                        {/* <!-- Women-led Development --> */}
                        <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
                            <h3>
                                {/* <span className="text-primary">02.</span> */}
                                Women-led Development
                            </h3>
                            <p className="fs-6">
                                On a global platform, India will highlight gender-inclusive growth in association with women empowerment and women representation. The five key priority areas here would be: entrepreneurship, bridging the gender digital divide, grassroots leadership, education, and skill development. The intention is to empower women to take on leading positions and boost socio-economic development.
                            </p>

                        </div>
                        {/* <!-- Multilateral Institutions --> */}
                        <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
                            <h3>
                                {/* <span className="text-primary">02.</span> */}
                                Multilateral Institutions
                            </h3>
                            <p className="fs-6">
                                India will attempt to have more reformed multilateralism amongst the G20 congregation in hopes to have more inclusivity, accountability, and equitable international syndicate. In order to promote global multilateral unity, India has invited the world’s largest economies and the entire P-5(permanent members of the UN Security Council).
                            </p>

                        </div>
                        {/* <!-- Sustainable Development Goals (SDGs) --> */}
                        <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
                            <h3>
                                {/* <span className="text-primary">02.</span> */}
                                Sustainable Development Goals (SDGs)
                            </h3>
                            <p className="fs-6">
                                In line with the 2030 agenda for sustainable development, India’s G20 agenda will be to carry the dialogue forward and recommit to pivotal SDGs like no poverty, zero hunger, food security and upliftment of standard of living.
                            </p>

                        </div>
                        {/* <!-- Inclusive, Progressive and Resilient Growth --> */}
                        <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
                            <h3>
                                {/* <span className="text-primary">02.</span> */}
                                Inclusive, Progressive and Resilient Growth
                            </h3>
                            <p className="fs-6">
                                Under Modi’s leadership, India during G20 will aim to focus on a full structural transformation of trade and manufacturing sectors. This includes initiating momentum for the integration of MSMEs in global trade, promoting labour rights and welfare, addressing the skills gap and building inclusive agriculture chains and food systems.
                            </p>

                        </div>
                        <figure class="text-start">
                            <blockquote class="blockquote">
                                <p><i class='bx bxs-quote-left bx-flip-horizontal bx-tada bx-sm text-warning' ></i> Let us join together to make India's G20 Presidency a Presidency of healing, harmony and hope. Let us work together to shape a new paradigm - of human-centric globalisation. <i class='bx bxs-quote-right bx-tada bx-flip-horizontal bx-sm text-warning' ></i></p>
                                <figcaption class="blockquote-footer text-end">
                                    PM <cite title="Source Title">Narendra Modi</cite>
                                </figcaption>
                            </blockquote>
                        </figure>
                        <div className="text-center">
                            <p>To know more about India’s G20 mission,
                                <Link to="/">click here</Link>
                                .

                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </React.Fragment>
    )
}

export default Presidency;