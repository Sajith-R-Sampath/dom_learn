import ReactPlayer from 'react-player';
import funny from './assets/videoes/funny.mp4'


function Contacts() {
    
    const day = new Date("2023-08-12").getDay();
    if(day >= 1 && day <= 5) {
        return <h2>Get it done</h2>
    }
    return <h2>Get some rest</h2>

   
}
export default Contacts