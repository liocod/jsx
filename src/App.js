import './App.css';
import imageInSrc from "./img/imageInSrc.png" ;
import "./component/style.css";
// import Video from "/maVideo.mp4";


function App() {
  return (
    <div className="App"> 
  

<h1 className="title_red">Eric lionel</h1>

  <img  src="/imageInPublic.png" alt='imgpublic' className='img1' />


  <img src={imageInSrc} alt='imgsrc' className='img1'/>


  <vidéo className='vid'>

 <source src="maVideo" type="video.mp4" />

  </vidéo>








  
</div>
  );
}

export default App;
