import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

 function Aos() {
    useEffect(() => {
        AOS.init();
      }, [])

}

export default Aos