'use client'

import Image from "next/image";
import styles from "./page.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark
} from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from 'react';

export default function Home() {
  let [width, setWidth] = useState(400);
  let [display, setDisplay] = useState('none');

  function dropdown() {
    if (display === 'none') {
      setDisplay('flex');
    } else {
      setDisplay('none');
    }
  }

  useEffect(() => {
    const Resize = () => {
      if (window.innerWidth >= 601 && window.innerWidth <= 900) {
        setWidth(355);
      } else if (window.innerWidth <= 600) {
        setWidth(355);
      } else {
        setWidth(400);
      }
    };
    Resize();

    window.addEventListener('resize', Resize);
    return () => {
      window.removeEventListener('resize', Resize);
    };
  }, []);

  function reset() {
    setDisplay('none');
  }

  return (
    <main className={styles.main}>
      <div className={styles.dropdown} style={{ display: `${display}` }}>
        <FontAwesomeIcon icon={faXmark} className={styles.xMark} onClick={reset} />
        <ul className={styles.ule}>
          <li className={styles.list_item_menu}><a className={styles.link} href="#home">HOME</a></li>
          <li className={styles.list_item_menu}><a className={styles.link} href="#service">SERVICES</a></li>
          <li className={styles.list_item_menu}><a className={styles.link} href="#works">OUR WORK</a></li>
          <li className={styles.list_item_menu}><a className={styles.link} href="#about">ABOUT US</a></li>
          <li className={styles.list_item_menu}><a className={styles.link} href="#contact">CONTACT</a></li>
          <li className={styles.list_item_menu}><a className={styles.link} href="#footer">BOOK ONLINE</a></li>
        </ul>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.ulEle}>
          <li className={styles.list_item}><a className={styles.link} href="#home">HOME</a></li>
          <li className={styles.list_item}><a className={styles.link} href="#service">SERVICES</a></li>
          <li className={styles.list_item}><a className={styles.link} href="#works">OUR WORK</a></li>
          <li className={styles.list_item}><a className={styles.link} href="#about">ABOUT US</a></li>
          <li className={styles.list_item}><a className={styles.link} href="#contact">CONTACT</a></li>
          <li className={styles.list_item}><a className={styles.link} href="#footer">BOOK ONLINE</a></li>
        </ul>
        <ul className={styles.login}>
          <li style={{ float: 'left', color: '#ffffffd0' }}>
            <Image
               src="/profile-user.svg"
               alt="not found!"
               width={25}
               height={25}
            />
          </li>
          <li style={{ float: 'left', color: '#ffffffd0', marginLeft: '14px', transform: 'translateY(2px)' }}>Log In</li>
        </ul>
        <div className={styles.hamburger}>
          <Image 
            src="/button.svg"
            alt="image not found"
            width={35}
            height={35}
            onClick={dropdown}
          />
        </div>
      </nav>

      <div class={styles.home} id="home">
        <div className={styles.overlay}>
          <h1 className={styles.heading}>JADE & ANDY</h1>
          <h2 className={styles.sub_heading}>VINTAGE CAR SPECIALIST</h2>
          <div className={`${styles.icon_wrapper} ${styles.bottom}`} style={{ display: 'flex', marginBottom: '16px' }}>
         <div className={styles.icon}>
          <Image
            src="/f-icon.webp"
            alt=""
            width={26}
            height={26}
          />
         </div>
         <div className={styles.icon}>
          <Image
            src="/p-icon.png"
            alt=""
            width={26}
            height={26}
          />
         </div>
         <div className={styles.icon}>
          <Image
            src="/insta.png"
            alt=""
            width={26}
            height={26}
          />
         </div>
          </div>
        </div>
      </div>

      <div className={styles.service} id="service">
        <h2 className={styles.sub_heading} style={{ color: '#ffff', letterSpacing: '1.2px', fontSize: '34px' }}>SERVICES</h2>
        <hr className={styles.hr}></hr>
        <div className={styles.container}>
          <div className={styles.card}>
            <Image className={styles.card_img}
              src="/repair.svg"
              alt="img not found"
              width={140}
              height={140}
            />
            <p className={styles.card_heading}>REPAIRS</p>
            <p className={styles.para}>General Repairs, Specialist Repairs & Vintage Parts</p>
          </div>
          <div className={styles.card}>
            <Image className={styles.card_img}
              src="/upholstry.svg"
              alt="img not found"
              width={140}
              height={140}
            />
            <p className={styles.card_heading}>UPHOLSTRY</p>
            <p className={styles.para}>A Range of Fabrics, Including Vintage Leathers, & Wide Variety of Colors</p>
          </div>
          <div className={styles.card}>
            <Image className={styles.card_img}
              src="/paintwork.svg"
              alt="img not found"
              width={140}
              height={140}
            />
            <p className={styles.card_heading}>PAINTWORK</p>
            <p className={styles.para}>Spray paint, Custom Stencilling & Variety of Custom Made Artwork</p>
          </div>
        </div>
      </div>

      <div className={styles.works} id="works">
        <h2 className={styles.sub_heading} style={{ color: '#000', letterSpacing: '1.2px', fontSize: '34px' }}>WORKS</h2>
        <hr className={styles.hr} style={{ backgroundColor: '#000' }}></hr>
        <p className={styles.p}>A collection of cars we renovated with passion.</p>
        <div className={styles.works_container}>
          <div className={styles.picture}>
            <Image
              src="/vintage-car(1).jpg"
              alt=""
              width={width}
              height={250}
            />
            <div className={styles.pic_overlay}>
              <p className={styles.title}>I am an Image Title</p>
              <p className={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
          <div className={styles.picture}>
            <Image
              src="/bike.jpg"
              alt=""
              width={width}
              height={250}
            />
            <div className={styles.pic_overlay}>
              <p className={styles.title}>I am an Image Title</p>
              <p className={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
          <div className={styles.picture}>
            <Image
              src="/car(2).jpg"
              alt=""
              width={width}
              height={250}
            />
            <div className={styles.pic_overlay}>
              <p className={styles.title}>I am an Image Title</p>
              <p className={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
          <div className={styles.picture}>
            <Image
              src="/parked.jpg"
              alt=""
              width={width}
              height={250}
            />
            <div className={styles.pic_overlay}>
              <p className={styles.title}>I am an Image Title</p>
              <p className={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
          <div className={styles.picture}>
            <Image
              src="/red-car.jpg"
              alt=""
              width={width}
              height={250}
            />
            <div className={styles.pic_overlay}>
              <p className={styles.title}>I am an Image Title</p>
              <p className={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
          <div className={styles.picture}>
            <Image
              src="/bmw.jpg"
              alt=""
              width={width}
              height={250}
            />
            <div className={styles.pic_overlay}>
              <p className={styles.title}>I am an Image Title</p>
              <p className={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
      </div>
      </div>

      <div className={styles.about} id="about">
        <div className={styles.section}>
          <h2 className={styles.sub_heading} style={{ color: '#000', letterSpacing: '1.2px', fontSize: '34px' }}>ABOUT</h2>
          <hr className={styles.hr} style={{ backgroundColor: '#000' }}></hr>
          <p className={styles.about_para}>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.<br /><br />This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. </p>
        </div>
      </div>

      <div className={styles.garage}></div>

      <div className={styles.contact} id="contact">
        <Image className={styles.car}
          src="/demo-car.webp"
          alt=""
          width={300}
          height={200}
        />
        <div className={styles.form}>
          <h2 className={styles.sub_heading} style={{ color: '#000', letterSpacing: '1.2px', fontSize: '34px' }}>FIND US</h2>
          <hr className={styles.hr} style={{ backgroundColor: '#000' }}></hr>
          <div className={styles.form_section}>
            <ul>
              <li className={styles.li}>500 Terry Francine Street</li>
              <li className={styles.li}>San Francisco, CA 94158</li>
              <li className={styles.li} style={{ margin: '18px 0px' }}>info@mysite.com</li>
              <li className={styles.li} style={{ margin: '18px 0px' }}>Tel: 123-456-7890</li>
              <li className={styles.li} style={{ margin: '18px 0px' }}>OPENING HOURS:</li>
              <li className={styles.li}>Sunday: 8am - 11pm</li>
              <li className={styles.li}>Sunday: 8am - 11pm</li>
              <li className={styles.li}>Sunday: 8am - 11pm</li>
            </ul>
            <form className={styles.myform} method="POST" action="/">
              <input className={styles.input} type="text" placeholder="Enter your first Name*"></input>
              <input className={styles.input} type="text" placeholder="Enter your last Name*"></input>
              <input className={styles.input} type="email" placeholder="Enter your Email*"></input>
              <input className={styles.input} type="text" placeholder="Enter your Subject"></input>
              <button className={styles.submit}>Submit</button>
            </form>
          </div>
        </div>
      </div>

      <footer className={styles.footer} id="footer">
        <div className={styles.icon_wrapper} style={{ display: 'flex', marginBottom: '16px' }}>
         <div className={styles.icon}>
          <Image
            src="/f-icon.webp"
            alt=""
            width={26}
            height={26}
          />
         </div>
         <div className={styles.icon}>
          <Image
            src="/p-icon.png"
            alt=""
            width={26}
            height={26}
          />
         </div>
         <div className={styles.icon}>
          <Image
            src="/insta.png"
            alt=""
            width={26}
            height={26}
          />
         </div>
        </div>
        © 2035 by Jade & Andy. Powered and secured by Wix
      </footer>
    </main>
  );
}
