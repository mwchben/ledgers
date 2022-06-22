
export default function Navbar() {
    return (
        <>

            <header>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
                    <div className="container">
                        <a className="navbar-brand" href="#!"><span style="color: #5e9693;">Psycho</span><span style="color: #fff;">logist</span></a>
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Offer</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Reference</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Contact</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav d-flex flex-row">
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="#!">
                                        <i className="fas fa-shopping-cart"></i>
                                    </a>
                                </li>
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="#!">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="#!">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Navbar */}

                {/*Section: Design Block*/}
                <section>
                    {/* Intro */}
                    <div id="intro" className="bg-image vh-100" style="
                background-image: url('https://mdbootstrap.com/img/Photos/new-templates/psychologist/img1.jpg');
                ">
                        <div className="mask" style="background-color: rgba(250, 182, 162, 0.15);"></div>
                    </div>
                    {/* Intro */}
                </section>
                {/*Section: Design Block*/}
            </header>

        </>
    );
}