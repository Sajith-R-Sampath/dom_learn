


import ReactPlayer from "react-player"
import funny from './assets/videoes/funny.mp4'

function Homepage(){
    const bird1 = new Audio(
        "https://docs.google.com/uc?export=open&id=1uWMgUMHf9GUpaYARCTO_sTosuyy_Sc4t"
    );
    
    const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
    );
    
    function toggle1() {
    if (bird1.paused) {
        bird1.play();
    } else {
        bird1.pause();
    }
    };

    function toggle2() {
    if (bird2.paused) {
        bird2.play()
    } else {
        bird2.pause()
    }
    }
    return(
        <>
            <div>
                <h1>This is Home page</h1>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Button
                </button>
                <ReactPlayer 
                    url={funny}
                    controls
                />

                <div>
                <button onClick={toggle1}>Caspian Tern 1</button>
                <button onClick={toggle2}>Caspian Tern 2</button>
                </div>

            </div>
        </>
    )
}

export default Homepage