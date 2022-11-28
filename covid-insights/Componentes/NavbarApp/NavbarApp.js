import React from 'react'
import ReactDOM from 'react-dom';
import styles from './css/NavbarApp.module.css'
import { render } from 'react-dom';
import Link from 'next/link'
import $ from 'jquery'
import { useRouter  } from 'next/router'

const MyClassWithRouter = (props) => {
    const router = useRouter()
    return <NavbarApp {...props} router={router} />
  }

class NavbarApp extends React.Component {
    constructor(props) {
        super(props);
         // this.state = {router : useRouter()}
    }

    sticykNav = () => {
        /* the function is called when the component has been mount, in that way we can't get
    de error about accesing to de document */
        document.addEventListener("DOMContentLoaded", function () {
            window.addEventListener('scroll', function () {
                if (window.scrollY > 60) {
                    document.getElementById('navbar_top').classList.add('fixed-top');

                } else {
                    document.getElementById('navbar_top').classList.remove('fixed-top');

                }
            });
        });
    }

    setActiveNavItem = () => {
        $(document).ready(function () {
            /*$('.navbar-nav li.nav-item').click(function (e) {

                $('.navbar-nav li.nav-item a.nav-link.active').removeClass('active');

                var $currentElement = $(this);
                $currentElement.addClass('active');
              e.preventDefault();
            });*/


        
        });
    }
    componentDidMount() {
        
        this.sticykNav();
        this.setActiveNavItem();
    }

    render() {
      
        return (
         
            <nav id="navbar_top" className={`navbar navbar-expand-lg navbar-light  ${styles.navComponent}`}>
                <div className="container-fluid">
        <a className="navbar-brand" href="#">{}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`collapse navbar-collapse ${styles.navbarNavCollapse} `} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/" legacyBehavior>
                                    <a className={this.props.pathname == "/" ? "nav-link active" : "nav-link"}  >Home</a>
                                </Link>
                            </li>
                            {console.log(this.props.pathname )}

                            <li className="nav-item">
                                <Link href="/experiments" legacyBehavior>
                                    <a className={this.props.pathname == "/experiments" ? "nav-link active" : "nav-link"} >Experiments</a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>



        )
    }
}

export default MyClassWithRouter;